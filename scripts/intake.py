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
from PIL import Image, ImageOps, ImageDraw, ImageFilter

ROOT = pathlib.Path(__file__).resolve().parent.parent
INBOX = ROOT / 'public/images/_incoming'

# slug -> (destination, size, mode)
#   'cover'   crop to the exact aspect in `size`
#   'contain' fit inside the box, keep transparency (logos)
#   'banner'  portrait -> wide banner. A straight cover-crop of a tall
#             portrait to 2400x840 keeps a thin band across the chest and
#             cuts the head off, so this instead scales a head-and-torso
#             band to full banner height, sets it right of centre, and
#             fills the left with a blurred extension of the same frame
#             for the type to sit on. Same treatment used for the podcast
#             card, where it was built by hand.
JOBS = {
    'header-speaking':     ('images/headers/speaking.jpg',     (2400, 840), 'banner'),
    'header-faith':        ('images/headers/entrepreneur.jpg', (2400, 840), 'banner'),
    'header-fitness':      ('images/headers/fitness.jpg',      (2400, 840), 'banner'),
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
# Contact-sheet tiles for the 5-Fs page. 4:5 to match the grid; a video's
# thumbnail goes through here the same as a photo, and MEDIA in FivesPage.jsx
# marks which ones get a play badge.
for _kind in ('surf', 'lift', 'family', 'host'):
    for _n in range(1, 5):
        JOBS[f'reel-{_kind}-{_n:02d}'] = (f'images/reels/{_kind}-{_n:02d}.jpg', (900, 1125), 'cover')

EXT = {'.jpg', '.jpeg', '.png', '.heic', '.heif', '.webp', '.tif', '.tiff'}


def banner(im, size):
    W, H = size
    band = im.crop((0, int(im.height * 0.02), im.width, int(im.height * 0.02) + int(im.height * 0.62)))
    scale = H / band.height
    fig = band.resize((max(1, int(band.width * scale)), H), Image.LANCZOS)

    # Backdrop from a BACKGROUND-ONLY strip at the frame's left edge, stretched
    # across. Blurring the whole band — the obvious approach — leaves a ghost of
    # the subject floating in the empty half, a second softer face beside the
    # real one. A strip containing no subject cannot ghost.
    strip = band.crop((0, 0, max(2, int(band.width * 0.06)), band.height))
    canvas = strip.resize((W, H), Image.LANCZOS).filter(ImageFilter.GaussianBlur(28))

    # Feather the figure's left edge into that backdrop; a hard vertical join
    # reads as a compositing mistake.
    mask = Image.new('L', fig.size, 255)
    md = ImageDraw.Draw(mask)
    feather = min(320, fig.width // 2)
    for i in range(feather):
        md.line([(i, 0), (i, fig.height)], fill=int(255 * (i / feather)))
    mask = mask.filter(ImageFilter.GaussianBlur(24))

    canvas.paste(fig, (W - fig.width + int(fig.width * 0.10), 0), mask)
    return canvas


def process(src, dest_rel, size, mode):
    dest = ROOT / 'public' / dest_rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    im = Image.open(src)
    im = ImageOps.exif_transpose(im)          # honour camera rotation
    if mode == 'banner':
        im = banner(im.convert('RGB'), size)
        im.save(dest, 'JPEG', quality=87, optimize=True, progressive=True)
    elif mode == 'cover':
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
