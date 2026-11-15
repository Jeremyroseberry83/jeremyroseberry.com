#!/usr/bin/env python3
"""
Build the social share card from the live hero, so the two cannot drift.

The card has now gone stale twice — it was still advertising HONEST STORIES
and "LEADER. SPEAKER. ENTREPRENEUR." months after the site dropped both. This
exists so regenerating it is a one-liner rather than an afternoon.

    python3 scripts/make_og_card.py --verbs "Think,Lead,Try" --out og-card-v3.jpg

Fonts are fetched from Google on each run and cached in /tmp. Oswald is not
installed on macOS and a lookalike is visibly wrong next to the real site.

After regenerating, bump the filename and update BOTH og:image and
twitter:image in pages/index.jsx. LinkedIn, Facebook and iMessage cache an OG
image against its URL, so reusing a path means they keep serving the old art.
"""
import argparse, os, re, subprocess, sys
from PIL import Image, ImageDraw, ImageFont

CACHE = '/tmp/jr-og-fonts'
GOLD, WHITE, INK = (201, 169, 97), (255, 255, 255), (42, 42, 42)
W, H = 1200, 630
RAMP0, RAMP1, PEAK = 380, 560, 210   # ramp from zero: starting at a value leaves a seam


def font_file(family, weight, name):
    os.makedirs(CACHE, exist_ok=True)
    path = os.path.join(CACHE, name)
    if os.path.exists(path):
        return path
    css = subprocess.run(
        ['curl', '-sS', f'https://fonts.googleapis.com/css2?family={family}:wght@{weight}'],
        capture_output=True, text=True).stdout
    m = re.search(r'https://[^)]+\.ttf', css)
    if not m:
        sys.exit(f'could not resolve a TTF for {family} {weight} — are you online?')
    subprocess.run(['curl', '-sS', m.group(0), '-o', path], check=True)
    return path


def tracked(draw, xy, text, font, fill, track):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textlength(ch, font=font) + track
    return x


def build(lede, headline, verbs, art, out):
    src = Image.open(art).convert('RGB')
    sc = max(W / src.width, H / src.height)
    im = src.resize((round(src.width * sc), round(src.height * sc)), Image.LANCZOS)
    im = im.crop(((im.width - W) // 2, (im.height - H) // 2,
                  (im.width - W) // 2 + W, (im.height - H) // 2 + H))

    ov = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    od = ImageDraw.Draw(ov)
    for x in range(RAMP0, W):
        od.line([(x, 0), (x, H)], fill=(*INK, int(PEAK * min((x - RAMP0) / (RAMP1 - RAMP0), 1.0))))
    im = Image.alpha_composite(im.convert('RGBA'), ov).convert('RGB')

    d = ImageDraw.Draw(im)
    bold = lambda s: ImageFont.truetype(font_file('Oswald', 700, 'Oswald-Bold.ttf'), s)
    body = lambda s: ImageFont.truetype(font_file('Inter', 500, 'Inter-Medium.ttf'), s)

    X, y = int(W * 0.455), 186
    f_nm = body(19)
    end = tracked(d, (X, y), 'JEREMY ', f_nm, WHITE, 5.2)
    tracked(d, (end, y), 'ROSEBERRY', f_nm, GOLD, 5.2)

    y += 46
    f_lede = bold(40)
    d.text((X, y), lede.upper(), font=f_lede, fill=WHITE)
    y += f_lede.getbbox(lede.upper())[3] + 16
    d.rectangle([X, y, X + 150, y + 5], fill=GOLD)

    y += 24
    f_big = bold(80)
    if X + f_big.getbbox(headline.upper())[2] > W - 40:
        sys.exit(f'"{headline}" overruns the card at 80px — shorten it or drop the size')
    d.text((X, y), headline.upper(), font=f_big, fill=WHITE)
    y += f_big.getbbox(headline.upper())[3] + 26

    f_v, x = body(17), X
    for i, v in enumerate(verbs):
        x = tracked(d, (x, y), v.upper(), f_v, WHITE, 4.6)
        if i < len(verbs) - 1:
            x += 10
            d.text((x, y), '•', font=f_v, fill=GOLD)
            x += d.textlength('•', font=f_v) + 14

    im.save(out, quality=90, optimize=True, progressive=True)
    print(f'{out}  {W}x{H}  {os.path.getsize(out)} bytes')


if __name__ == '__main__':
    ap = argparse.ArgumentParser()
    ap.add_argument('--lede', default='Helping')
    ap.add_argument('--headline', default='Entrepreneurs')
    ap.add_argument('--verbs', default='Think,Lead,Try')
    ap.add_argument('--art', default='public/images/hero-honest-stories.jpg')
    ap.add_argument('--out', default='public/images/og-card-v3.jpg')
    a = ap.parse_args()
    build(a.lede, a.headline, [v.strip() for v in a.verbs.split(',')], a.art, a.out)
