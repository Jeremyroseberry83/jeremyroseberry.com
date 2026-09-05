"""Static check that stands in for a build we cannot run (no node on this box)."""
import re, pathlib, sys

def strip_code(s):
    out=[];i=0;n=len(s)
    while i<n:
        c=s[i]
        if c in '"\'`':
            q=c;i+=1
            while i<n and s[i]!=q: i+= 2 if s[i]=='\\' else 1
            i+=1;out.append('""')
        elif c=='/' and i+1<n and s[i+1]=='/':
            while i<n and s[i]!='\n': i+=1
        elif c=='/' and i+1<n and s[i+1]=='*':
            i+=2
            while i+1<n and not(s[i]=='*' and s[i+1]=='/'): i+=1
            i+=2
        else: out.append(c);i+=1
    return ''.join(out)

# Remove ENTIRE import statements, not just their first line. Filtering only
# lines that begin with "import" left the names inside a multi-line block in
# the body, so an unused import always looked used.
# Built-ins that look like module constants to a regex.
GLOBALS = {'JSON', 'Math', 'Object', 'Array', 'String', 'Number', 'Boolean',
           'Date', 'Intl', 'URL', 'NaN', 'Infinity'}

IMPORT_RE = re.compile(r"^import\s+[\s\S]*?from\s+'[^']+';\s*$", re.M)

# Names ui.jsx exports. Anything used bare in a page must be imported from
# here, or it is a ReferenceError at render — the failure this check exists to
# catch. The reverse direction (imported but unused) is only tidiness.
root = pathlib.Path('.')
ui  = set(re.findall(r'^export (?:const|function) ([A-Za-z_]+)', (root/'components/ui.jsx').read_text(), re.M))
cfg = set(re.findall(r'^  ([a-zA-Z]+):', (root/'site.config.js').read_text(), re.M))

problems = []
for f in sorted(list(root.glob('components/*.jsx')) + list(root.glob('pages/*.jsx'))):
    src  = f.read_text()
    body = strip_code(src)
    # Strip imports from the RAW source, THEN blank the strings. The other
    # order silently disabled this check for the whole session: strip_code
    # turns './ui' into "", so IMPORT_RE's `from '...'` never matched, no
    # import line was ever removed, and every imported name looked used
    # because its own import statement was still in the haystack.
    rest = strip_code(IMPORT_RE.sub('', src))

    for m in re.finditer(r"import\s*\{([^}]*)\}\s*from\s*'([^']+)'", src, re.S):
        names = [n.strip().split(' as ')[-1].strip() for n in m.group(1).split(',') if n.strip()]
        raw   = [n.strip().split(' as ')[0].strip()  for n in m.group(1).split(',') if n.strip()]
        mod   = m.group(2)
        if mod.endswith('/ui'):
            miss = [n for n in raw if n not in ui]
            if miss: problems.append(f"{f.name}: ui.jsx has no export {miss}")
        elif 'site.config' in mod:
            miss = [n for n in raw if n not in cfg]
            if miss: problems.append(f"{f.name}: site.config.js has no key {miss}")
        for n in names:
            if not re.search(r'\b'+re.escape(n)+r'\b', rest):
                problems.append(f"{f.name}: unused import -> {n}")

    for m in re.finditer(r"import\s+([A-Za-z_]+)\s+from\s+'(\.\.?/[^']+)'", src):
        pth = m.group(2)
        if not any((f.parent/(pth+e)).exists() for e in ('.jsx','.js','')):
            problems.append(f"{f.name}: missing module {pth}")

    # USED BUT NOT IMPORTED. This is the direction that actually breaks a
    # page: an unused import is dead weight, a missing one is a crash. Merging
    # the books and podcast sections into SpeakingPage carried markup that
    # referenced PRIMARY and PRIMARY_DEEP without their imports, and the page
    # died on render while every other check passed.
    if f.name != 'ui.jsx':
        m = re.search(r"import\s*\{([^}]*)\}\s*from\s*'\.{1,2}/(?:components/)?ui'", src)
        imported = {n.strip() for n in m.group(1).split(',')} if m else set()
        after = body[m.end():] if m else body
        for name in sorted(ui):
            # bare identifier only — not colors.PRIMARY, not PRIMARY_DEEP when
            # looking for PRIMARY
            if name not in imported and re.search(r'(?<![.\w])' + re.escape(name) + r'(?![\w])', after):
                problems.append(f"{f.name}: uses {name} without importing it")

    # MODULE CONSTANTS USED BUT NEVER DECLARED. Deleting a data array and
    # leaving a reference behind is the same crash as a missing import, and it
    # happened twice: TALKS survived in two filter() calls after the talks
    # section was cut. SCREAMING_CASE only, which is exactly how the page data
    # in this project is named.
    declared = set(re.findall(r'^(?:export\s+)?const ([A-Z][A-Z0-9_]+)\s*=', body, re.M))
    declared |= GLOBALS
    imported_all = set()
    for m in re.finditer(r"import\s*\{([^}]*)\}\s*from", src):
        imported_all |= {n.strip().split(' as ')[-1].strip() for n in m.group(1).split(',') if n.strip()}
    for name in set(re.findall(r'(?<![.\w])([A-Z][A-Z0-9_]{2,})(?![\w])', body)):
        if name not in declared and name not in imported_all:
            problems.append(f"{f.name}: uses {name} but nothing declares or imports it")

    # JSX COMMENT AMONG AN ELEMENT'S ATTRIBUTES. Also fatal, and a different
    # shape from the one below: {/* ... */} is only legal among an element's
    # CHILDREN, so it cannot sit between two attributes either. Scans for a
    # {/* that opens while inside a tag.
    depth, i, n = 0, 0, len(src)
    in_tag = False
    while i < n:
        ch = src[i]
        if not in_tag and ch == '<' and i + 1 < n and (src[i + 1].isalpha() or src[i + 1] == '_'):
            in_tag, depth = True, 0
        elif in_tag:
            if ch == '{':
                # Only depth 0 is attribute position. Deeper than that we are
                # inside an attribute's expression — title={<>...</>} — whose
                # JSX children may legally contain a comment.
                if depth == 0 and src[i:i + 3] == '{/*':
                    problems.append(f"{f.name}: JSX comment among attributes (line {src[:i].count(chr(10)) + 1}) — will not parse")
                depth += 1
            elif ch == '}':
                depth -= 1
            elif ch == '>' and depth <= 0:
                in_tag = False
        i += 1

    # JSX COMMENT IN AN ILLEGAL POSITION. {/* ... */} is an expression
    # container and is only valid among an element's children. Put one
    # between `return (` and the root element and the file will not parse —
    # which is exactly what took the Netlify build down: every other check
    # here passed, brace counting included, because the braces balance fine.
    for m in re.finditer(r'(?:return|=>)\s*\(\s*\{/\*', src):
        problems.append(f"{f.name}: JSX comment before the root element (line {src[:m.start()].count(chr(10)) + 1}) — will not parse")

    # JSX COMPONENTS USED BUT NOT IN SCOPE. Same crash class as the two above,
    # and the one they both missed: mounting <PodcastLaunch /> in ValuePage
    # without its default import passed every other check here and would have
    # been a blank page. Local components are default-imported, so the
    # named-import scan above never sees them.
    in_scope = set(imported_all)
    in_scope |= set(re.findall(r"import\s+([A-Za-z_][A-Za-z0-9_]*)\s+from", src))
    # Anything bound in this file, at any nesting depth: components defined
    # here, and locals like `const Icon = SOCIAL_ICONS[key]` or `const Tag =`.
    in_scope |= set(re.findall(r'(?:function|const|let|var)\s+([A-Z][A-Za-z0-9_]*)', body))
    # Destructured bindings — function params and const patterns. _app.jsx
    # renders <Component /> straight out of ({ Component, pageProps }).
    for m in re.finditer(r'\{([^{}]*)\}\s*(?:\)|=[^=])', body):
        in_scope |= {n.strip().split(':')[0].strip()
                     for n in m.group(1).split(',') if re.match(r'\s*[A-Z]', n)}
    in_scope |= {'React', 'Fragment'}
    for tag in set(re.findall(r'<([A-Z][A-Za-z0-9_]*)[\s/>]', body)):
        if tag not in in_scope:
            problems.append(f"{f.name}: renders <{tag}> but nothing declares or imports it")

    c = {ch: body.count(ch) for ch in '{}()[]'}
    if not (c['{']==c['}'] and c['(']==c[')'] and c['[']==c[']']):
        problems.append(f"{f.name}: unbalanced {c}")

for p in sorted(problems):
    print('  -', p)
print('✅ clean' if not problems else f'{len(problems)} issue(s)')
sys.exit(1 if problems else 0)
