# jeremyroseberry.com

Next.js + Tailwind site, rebuilt from the reusable template originally built
for Seco Bio. Everything is placeholder content right now — this is a blank
starting point, not a finished site.

## First steps

1. `npm install`
2. Edit `site.config.js` — company name, tagline, colors, nav labels
3. Go through each file in `components/` and replace `[BRACKETED]` text with
   real copy (search the project for `[` to find every spot)
4. Drop real images into `public/images/` (hero poster, team photos, etc. —
   see the `src=` paths in each component for exact filenames expected)
5. `npm run dev` to preview at localhost:3000

## Structure

- `pages/index.jsx` — the whole site shell: nav, footer, contact modal, page
  routing (it's a single-page app, not per-route URLs)
- `components/ui.jsx` — shared design-system pieces (PageHero, PageTopBand,
  CountUp, stat/comparison card patterns, etc.) — colors pull from
  `site.config.js` so the palette can't drift between files
- `components/HomePage.jsx`, `ProductPage.jsx`, `PartnersPage.jsx`,
  `AboutPage.jsx` — the four pages; each pulls from `ui.jsx`
- `components/ContactForm.jsx` — Netlify Forms integration (needs a matching
  hidden form in `public/__forms.html` if deploying to Netlify — see Netlify
  Forms docs)
- `components/Translate.jsx` — Google Translate widget, language list comes
  from `site.config.js`

## Deploy

`netlify.toml` is set up for Netlify (`@netlify/plugin-nextjs`). Connect the
repo in Netlify and it builds on push to `main`.
