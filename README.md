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

## Assets

Every asset the site references is in place. Nothing renders as an empty gray
block. The two marked ⬜ below are improvements, not blockers.

| Path | Status |
|---|---|
| `public/images/hero-honest-stories.jpg` | ✅ In place — 2560×1440, the brand artwork |
| `public/images/jeremy-portrait.jpg` | ✅ In place — 1400×1750, used in the bio section |
| `public/images/og-card.jpg` | ✅ In place — 1200×630 social share card |
| `public/favicon.ico` + `apple-touch-icon.png` | ✅ In place — generated from the JR monogram |
| `public/images/hero-honest-stories-mobile.jpg` | ⬜ **Wanted.** 1080×1350, artwork re-laid-out for portrait (headline stacked above the photo, ~420px clear at the bottom for the button). Phones currently get the 16:9 version scaled down, so the baked-in type is small. |
| `public/images/jeremy-speaking.jpg` | ⬜ **Wanted.** A real on-stage shot. See the shoot brief below. |

Images render grayscale in CSS, so colour originals are fine to drop in.

## Photo & video shoot brief

The current portraits are studio/model shots. They work for the bio, but they
cannot do the job of proving Jeremy can hold a room — which is the single
thing an event organiser is actually buying. Until stage photography exists,
the "Why book Jeremy" section on Let's Meet is deliberately typographic rather
than illustrated with a studio portrait that quietly undercuts its own claim.

**Priority order — the first two are worth more than everything else combined.**

### 1. On stage (highest value)

Shoot at a real event, not a staged empty room; an empty auditorium reads as
empty. Ask the organiser's photographer, or bring your own for one date.

| Shot | Why it matters |
|---|---|
| **Wide, audience in frame** | The only shot that proves scale. Get the backs of heads in the foreground and Jeremy lit on stage. This is the money shot. |
| **Mid, mid-gesture** | Hands moving, mouth open, mid-sentence. Posed-with-a-mic reads as fake instantly. |
| **Tight, mid-sentence** | For the "Why book Jeremy" block — crops well to 4:5 portrait. |
| **Audience reaction** | Laughing, leaning forward, taking notes. Proof the room was with him. |
| **Off-stage candid** | Talking to attendees afterwards. Sells approachability, which is what gets the repeat booking. |

Shoot in landscape *and* portrait for each — the site needs both crops.

### 2. Sizzle reel (highest value, video)

Sixty to ninety seconds. Outperforms every word of copy on this site. Structure
that works: open on a strong line mid-delivery (no title card first), cut
between wide/tight, include two seconds of audience laughing or applauding,
end on the offer. Capture clean audio off the venue's board — phone audio from
the back of a room is the usual reason a reel is unusable.

### 3. Studio refresh

The existing set is all posed and formal. What's missing:

- **Laughing, genuinely** — the brand is "Honest Stories"; every current photo is serious. The tone of the artwork and the tone of the man should match.
- **Mid-conversation, looking off-camera** — reads as candid rather than corporate.
- **Environmental** — at a desk, in a venue, walking. Backdrop shots say "headshot"; environment says "operator".
- **One clean cut-out on plain background** — so the hero artwork can be re-laid-out later without another shoot.

Shoot everything in colour at full resolution. The site converts to grayscale
in CSS, so colour originals stay useful for press, decks, and social.

### Delivery

Full-resolution JPEGs, longest edge 2500px+, into `public/images/`. Grayscale
conversion, cropping and compression are handled here — don't pre-process.

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
