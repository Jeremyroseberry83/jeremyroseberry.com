# jeremyroseberry.com

Personal brand site for Jeremy Roseberry — keynote speaker, host and entrepreneur.
Next.js (Pages Router) + Tailwind, deployed on Netlify.

**The site has one job: get Jeremy booked.** Speaking, hosting, and podcast
appearances are the primary conversion; the content archive is the top of the
funnel that feeds them. Every page ends in the same booking ask, and every
primary button on the site says the same words. If a change makes the booking
ask harder to find, it is the wrong change.

## Three pages, on purpose

| Route | Job |
|---|---|
| **Home** | One full-screen hero. No sections, no footer. The only ways out are the nav and one button, so an undecided visitor has to make a choice instead of scrolling past the ask. |
| **Let's Meet** | The whole sales and booking case in one scroll. Long on purpose — an organiser who is genuinely evaluating reads all of it; splitting it into four short pages would just add three chances to leave. |
| **Helpful Stuff** | The content archive. The reason someone not ready to book still has somewhere to go — and it closes by pointing back at the booking ask. |

## Assets still needed

The build references these paths. Until the files exist, those spots render as
empty gray blocks — nothing crashes, but the pages look unfinished.

| Path | What it is | Notes |
|---|---|---|
| `public/images/jeremy-hero.jpg` | **Required.** Home hero portrait | Black-and-white, Jeremy only, **no type baked in**. Roughly 1200×1600 portrait. He should sit in the left half of the frame with headroom above. |
| `public/images/jeremy-speaking.jpg` | Speaking page, on stage | A real on-stage shot beats a studio portrait here — it is the proof the talk exists. |
| `public/images/jeremy-portrait.jpg` | About page portrait | |
| `public/images/og-card.jpg` | Social share card | 1200×630. This is what appears when anyone pastes the URL into LinkedIn or a group chat. |
| `public/favicon.ico` | Browser tab icon | 32×32 from the JR monogram. |

`public/images/jr-monogram.png` is already in place (used for the apple-touch
icon and the PNG favicon).

Images are rendered grayscale in CSS, so colour originals are fine to drop in.

## Content still needed

Search the project for `[` to find every bracketed placeholder. The ones that
matter most, in order of what they cost:

1. **`components/MeetPage.jsx` → the bio section** — the whole biography is
   bracketed. Nobody books a speaker whose background reads generic, and the
   specific setback matters more than the specific win.
2. **`components/MeetPage.jsx` → `TESTIMONIALS`** — empty, so nothing renders.
   For a speaker this is the single highest-converting block on the site.
   Three real quotes from past organisers is the most valuable hour of work
   available anywhere in this repo.
3. **`components/MeetPage.jsx` → `TALKS`** — three signature talks are drafted
   from the brand positioning. They read well, but they need Jeremy's sign-off
   before an organiser sees them.
4. **`components/MeetPage.jsx` → `STATS`** — empty. Only fill with numbers he
   would happily defend from the stage.
5. **`components/HelpfulPage.jsx` → `POSTS`** — empty, with an empty state that
   still asks for something rather than dead-ending.
6. **`site.config.js` → `social`** — blank entries are skipped rather than
   rendering dead links. Fill them in as accounts go live.

Nothing in this repo invents a number, a quote, or a logo. That is deliberate:
a booking committee that catches one inflated claim discounts everything else
on the page.

## Structure

- `site.config.js` — **start here.** Colors, name, nav labels, email, CTA
  wording. Change a hex once here and it changes everywhere.
- `pages/index.jsx` — the whole shell: nav, footer, booking modal, page routing
- `components/Logo.jsx` — the JR monogram + wordmark, built in type, not a PNG
- `components/ui.jsx` — the shared design system (Button, SectionHead,
  PageTopBand, TopicCards, BookingCTA, Testimonials…)
- `components/HomePage.jsx` — one full-viewport hero, nothing else, no footer
- `components/MeetPage.jsx` — **"Let's Meet"**: the entire booking case in one
  scroll — how to book, the talks, formats and logistics, why him, the podcast
  pitch, and the bio with copy-paste assets
- `components/HelpfulPage.jsx` — **"Helpful Stuff"**: the content archive
- `components/ContactForm.jsx` — the booking enquiry modal (Netlify Forms)
- `styles/globals.css` — brand tokens, type classes, hero geometry, motion

## Design system rules

- **Gold is an accent, never a workhorse.** `#c9a961` on white is ~2.2:1,
  far below the 4.5:1 minimum for body text. Gold is for rules, eyebrows on
  dark grounds, and filled buttons with charcoal text. Use `SECONDARY_DEEP`
  (`#a8873f`) for gold-ish text on light grounds, at large sizes only.
- **One gold fill per screen.** The booking button is the only gold fill, which
  is what makes it read as *the* button without any instruction.
- **Display type is uppercase Oswald; body is Inter.** A condensed face at body
  size is a legibility tax, not a brand asset.
- **The diagonal wedge is CSS, not an image** (`.hero-wedge` / `.hero-slash`).
  It squares off below 768px on purpose — a diagonal across a narrow phone
  screen reads as a rendering glitch.
- **Section padding is `py-16 md:py-28`**, never a single fixed value. Desktop
  padding with no mobile override stacks with the next section into visible
  dead space on a phone.

## Known gotchas

- **Netlify Forms + React.** Netlify registers forms by scanning static HTML at
  build time and never sees `ContactForm.jsx`. `public/__forms.html` carries a
  hidden copy with the same form name (`booking`) and the same field names.
  Change a field in one and you must change it in the other, or Netlify drops
  it silently — which looks like a working form that loses half of every
  enquiry.
- **Google Translate widget CSS** (`globals.css`). Hiding Google's `<span>`
  wrapper the obvious way collapses the button to 0×0 — it renders but cannot
  be clicked. The fix uses `position:absolute; inset:0` at every layer. Don't
  "simplify" it without testing an actual click.
- **Hero height** uses `100svh` with a `100vh` fallback. Plain `vh` on a phone
  is taller than the visible area and pushes the button under the fold.

## Biggest open improvement

This is a single-route app — pages swap in React state, so the whole site is
one URL. That means an organiser cannot send a colleague a direct link to the
booking page, and Google only ever indexes one page. **Converting to real
routes (`/lets-meet`, `/helpful-stuff`) is the highest-value SEO and sharing
change available here.** It is a structural change, not a config tweak — but
with only two inner pages it is now a small one.

## Local development

Requires Node 20+ (not currently installed on this machine).

```bash
npm install
npm run dev
```

## Deploy

`netlify.toml` is configured for Netlify with `@netlify/plugin-nextjs`.
Connect this repo in Netlify and it builds on every push to `main`.
