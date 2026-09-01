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
    rest = IMPORT_RE.sub('', body)

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

    c = {ch: body.count(ch) for ch in '{}()[]'}
    if not (c['{']==c['}'] and c['(']==c[')'] and c['[']==c[']']):
        problems.append(f"{f.name}: unbalanced {c}")

for p in sorted(problems):
    print('  -', p)
print('✅ clean' if not problems else f'{len(problems)} issue(s)')
sys.exit(1 if problems else 0)
