#!/usr/bin/env python3
"""
Image intake for jeremyroseberry.com.

Drop files into public/images/_incoming/ using any of the names in the map
below, then run:

    python3 scripts/intake.py

Each file is converted, resized and written to the path the site expects.
HEIC, PNG, JPEG and WEBP all work — the extension you drop does not matter,
only the name before it.

Why this exists: images pasted into a chat cannot be written to disk, so every
asset has to be saved manually once. This removes the second half of that
chore — no renaming into nested folders, no worrying about format, size or
compression. Files that do not match a known name are listed and left alone.
"""
import sys, pathlib
from PIL import Image, ImageOps

ROOT = pathlib.Path(__file__).resolve().parent.parent
INBOX = ROOT / 'public/images/_incoming'

# slug -> (destination, longest-edge px, mode)
#   mode 'cover'   = crop to the exact aspect implied by `size` (w, h)
#   mode 'contain' = fit inside the box, keep transparency (logos)
JOBS = {
    'jeremy-tuxedo':        ('images/jeremy-tuxedo.jpg',                    (1800, 1125), 'cover'),
    'access-global':        ('images/ventures/access-global.jpg',           (900, 560),   'cover'),
    'access-global-logo':   ('images/logos/access-global.png',              (600, 600),   'contain'),
    'private-investor-circle':      ('images/ventures/private-investor-circle.jpg', (900, 560), 'cover'),
    'private-investor-circle-logo': ('images/logos/private-investor-circle.png',    (600, 600), 'contain'),
    'avestix-logo':         ('images/logos/avestix.png',                    (600, 600),   'contain'),
    'roseberry-properties': ('images/ventures/roseberry-properties.jpg',    (900, 560),   'cover'),
    'premiere-home-watch':  ('images/ventures/premiere-home-watch.jpg',     (900, 560),   'cover'),
    'jeremy-speaking':      ('images/jeremy-speaking.jpg',                  (1800, 1200), 'cover'),
    'hero-mobile':          ('images/hero-honest-stories-mobile.jpg',       (1080, 1350), 'cover'),
}
# instagram-01 … instagram-12 -> images/instagram/NN.jpg
for n in range(1, 13):
    JOBS[f'instagram-{n:02d}'] = (f'images/instagram/{n:02d}.jpg', (900, 900), 'cover')

EXT = {'.jpg', '.jpeg', '.png', '.heic', '.heif', '.webp', '.tif', '.tiff'}


def process(src, dest_rel, size, mode):
    dest = ROOT / 'public' / dest_rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    im = Image.open(src)
    im = ImageOps.exif_transpose(im)          # honour camera rotation
    if mode == 'cover':
        im = ImageOps.fit(im.convert('RGB'), size, Image.LANCZOS, centering=(0.5, 0.4))
        im.save(dest, 'JPEG', quality=86, optimize=True, progressive=True)
    else:
        im = im.convert('RGBA')
        im.thumbnail(size, Image.LANCZOS)
        im.save(dest, 'PNG', optimize=True)
    kb = dest.stat().st_size // 1024
    print(f'  OK   {src.name:34} -> public/{dest_rel}  ({im.size[0]}x{im.size[1]}, {kb} KB)')


def main():
    if not INBOX.exists():
        print(f'No inbox at {INBOX}'); return 1
    files = [f for f in sorted(INBOX.iterdir()) if f.suffix.lower() in EXT]
    if not files:
        print(f'Nothing to do. Drop images into {INBOX} first.')
        print('\nNames this script knows:')
        for k in sorted(JOBS):
            print('   ', k)
        return 0
    unknown = []
    for f in files:
        job = JOBS.get(f.stem.lower())
        if not job:
            unknown.append(f); continue
        try:
            process(f, *job)
        except Exception as e:
            print(f'  FAIL {f.name}: {e}')
    if unknown:
        print('\nLeft alone (name not recognised):')
        for f in unknown:
            print(f'  ?    {f.name}')
        print('\nRename to one of:')
        for k in sorted(JOBS):
            print('   ', k)
    return 0


if __name__ == '__main__':
    sys.exit(main())
