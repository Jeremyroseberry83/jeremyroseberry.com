# Jeremy Roseberry Leadership Platform

Professional personal brand website built with Dark Navy + Gold palette.

## Files Included

- `index.html` - Homepage with hero, story, and featured book
- `speaking.html` - Speaking overview with Netlify booking form
- `ebooks.html` - Resources with email capture form
- `about.html` - Full biography and background
- `css/style.css` - Complete styling (Dark Navy #1a3a52, Gold #c9a961)
- `README.md` - This file

## Setup Instructions

### 1. Create Folder Structure

In your `jeremyroseberry.com` repo root, create:
```
jeremyroseberry.com/
├── index.html
├── speaking.html
├── ebooks.html
├── about.html
├── README.md
├── css/
│   └── style.css
└── assets/
    └── images/
        └── jeremy-headshot.jpg
```

### 2. Add Your Headshot

1. Download or take your professional headshot
2. Save it as `jeremy-headshot.jpg` (or update image name in HTML if different)
3. Place in `assets/images/` folder

### 3. Push to GitHub

```bash
cd jeremyroseberry.com
git add .
git commit -m "Add professional site redesign with Dark Navy + Gold palette"
git push origin main
```

### 4. Netlify Auto-Deploys

Once pushed to GitHub, Netlify automatically rebuilds and deploys.

## Form Setup (Netlify Forms)

Both forms (speaking inquiry + email capture) use Netlify Forms.

**No configuration needed** — Netlify automatically detects forms with `data-netlify="true"` attribute.

Form submissions will appear in your Netlify dashboard under Forms > All submissions.

## Color Palette

- **Primary Navy**: #1a3a52 (headers, nav, buttons)
- **Accent Gold**: #c9a961 (highlights, hover states)
- **Background Cream**: #f8f7f3 (body background)
- **Text Charcoal**: #2a2a2a (body text, contrast)

## Customization

All styling is in `css/style.css`. Key sections:

- Navigation styling: lines 30-60
- Hero section: lines 64-115
- Story section: lines 119-150
- Buttons & CTAs: lines 175-200
- Forms: lines 240-280

## Next Steps

1. ✅ All 4 pages built and styled
2. ✅ Responsive design (mobile-friendly)
3. ✅ Forms ready for Netlify
4. ⬜ Add your headshot
5. ⬜ Connect to jeremyroseberry.com domain (when ready to go live)

---

Built for Jeremy Roseberry | 2026
