import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import {
  PageTopBand,
  SectionHead,
  TopicCards,
  BookingCTA,
  Button,
  SECONDARY,
  SECONDARY_DEEP,
  PRIMARY,
  PRIMARY_DEEP,
  SLATE,
  MUTED,
  INK,
  BG,
  TAUPE
} from './ui';

/**
 * "Entrepreneur" — the operating credentials.
 *
 * REDESIGN RATIONALE (read before flattening this back into a card grid):
 *
 * Seven equally-weighted cards is a wall. A reader scans two, realises the
 * rest look identical, and leaves with no impression at all — the opposite of
 * what this page is for. Three changes fix that:
 *
 *  1. SEVEN BECOME FIVE DISCIPLINES, under "My Why". The taxonomy and the
 *     argument for it were two sections making the same point, so they are
 *     now one, and it reads after the companies rather than before them —
 *     the framework lands better once you have seen what it describes. The
 *     first discipline,
 *     People, has no company under it on purpose: it is the speaking and
 *     writing, which turns the taxonomy into the argument the whole site is
 *     making and hands the reader back to the booking page.
 *
 *  2. THE LIST BECOMES SOMETHING YOU DRIVE. One venture at a time, chosen
 *     from a rail, each getting the full panel instead of a seventh of the
 *     screen — and Roseberry Capital and Private Investor Circle sitting
 *     under one discipline reads as related rather than duplicated.
 *
 *  3. THE NUMBERS GET A BAND. Every figure is Jeremy's own claim from his
 *     supplied copy — nothing computed, inferred or rounded up.
 *
 * `url` holds the FULL address including protocol and path, because not every
 * venture sits at its own root — Premiere Home Watch lives under
 * roseberryproperties.com. The visible label strips protocol, "www." and a
 * trailing slash.
 *
 * `thumb` images in /images/ventures are GENERATED placeholders in the brand
 * palette. Replace any with a real photograph at the same 900x560 proportion —
 * `scripts/intake.py` does the conversion and sizing.
 *
 * `logo` is the source mark, kept here for reference and for the thumbnail
 * generator — the logo is composited INTO the thumbnail (centred in its top
 * half) rather than overlaid at render time, so a mark and its wordmark can be
 * sized against each other once rather than fighting a photograph every time.
 * Regenerate thumbnails after changing a logo. Logos want a transparent PNG;
 * run them through scripts/intake.py.
 */
const displayUrl = (url) => url.replace(/^https?:\/{2}/, '').replace(/^www\./, '').replace(/\/$/, '');

/**
 * Order is deliberate and is the argument the page makes: People first,
 * Capital last — the same hierarchy as the Let's Meet page, so the two agree
 * rather than contradict.
 *
 * "Add Value" holds seats where the contribution is advisory rather than
 * operating. Access Global is filed there on that reading (Strategic Partner,
 * not operator); move it back to `capital` if the day-to-day says otherwise.
 */
/**
 * The four things underneath every decision, in the order Jeremy puts them.
 * The order IS the content — Finances last is the whole argument — so if these
 * are ever reordered, the eyebrow labels need rewriting too.
 */
const PILLARS = [
  {
    eyebrow: 'Principle',
    title: 'Faith',
    body:
      'God is first. Church is the center of our world, and our creativity and influence in every sphere flows from it.'
  },
  {
    eyebrow: 'Foundation',
    title: 'Family',
    body:
      'Married 18 years to Kourtney. Two teenagers. They teach me more about leadership than any conference. Family stability is the ultimate competitive advantage.'
  },
  {
    eyebrow: 'Practice',
    title: 'Fitness',
    body:
      'Stewarding my body. Physical discipline mirrors mental discipline — how you show up for your body tells me how you’ll show up for a partnership.'
  },
  {
    eyebrow: 'Stewardship',
    title: 'Finances',
    body:
      'Money just makes you more of who you already are. It does not rule my family — but every now and then it buys happiness, and it buys radical generosity.'
  }
];
const DISCIPLINES = [
  { key: 'people', name: 'People', blurb: 'The speaking and the writing. The one platform that is not a company.' },
  { key: 'addvalue', name: 'Add Value', blurb: 'Advisory seats where the job is judgement and relationships, not headcount.' },
  { key: 'realestate', name: 'Real Estate', blurb: 'Two decades of investing, acquisitions, and service businesses built around ownership.' },
  { key: 'operations', name: 'Ops', blurb: 'Running the business day to day — the unglamorous part that decides the outcome.' },
  { key: 'capital', name: 'Capital', blurb: 'Allocation, and the rooms where allocators actually meet founders.' }
];

const VENTURES = [
  {
    name: 'Avestix Frontier',
    role: 'Chief Operating Officer',
    discipline: 'operations',
    url: 'https://avestix.com',
    thumb: '/images/ventures/avestix-frontier.jpg',
    logo: '/images/logos/avestix.png',
    description:
      'An invitation-only private society for families building enduring wealth — governed, principals-only, and AI-native from the start. Hosted and curated by Avestix.',
    value:
      'Chief Operating Officer. I run the operating side: the governance, the membership standard, and the execution behind every gathering — including the inaugural voyage.'
  },
  {
    name: 'Roseberry Capital',
    role: 'Founder',
    discipline: 'capital',
    url: 'https://luma.com/PrivateInvestorCircle',
    thumb: '/images/ventures/roseberry-capital.jpg',
    description: 'Capital advisory and allocation platform.',
    value:
      'Direct relationships with sponsors, allocators, and capital partners across 25 countries. Sector agnostic. Relational capital focused.'
  },
  {
    // DRAFT COPY — grounded in the Luma events listing. Adjust the cadence and
    // room size once those are settled.
    name: 'Private Investor Circle',
    role: 'Founder',
    discipline: 'capital',
    url: 'https://www.privateinvestorcircle.com/',
    thumb: '/images/ventures/private-investor-circle.jpg',
    logo: '/images/logos/private-investor-circle.png',
    description:
      'A curated circle of investors, allocators and founders who meet in person. Small rooms, real conversations, and none of the pitch theatre that makes most capital events a waste of an evening.',
    value:
      'I convene and host the rooms. Founders meet allocators who are actually deploying, both sides leave with relationships rather than a stack of decks, and the invitations stay tight on purpose.'
  },
  {
    name: 'Access Global',
    role: 'Strategic Partner',
    discipline: 'addvalue',
    url: 'https://accessglobal.co',
    thumb: '/images/ventures/access-global.jpg',
    logo: '/images/logos/access-global.png',
    description:
      '30-country private markets platform. Alternative investments: CRE, private credit, infrastructure, and more. Sector agnostic. Network of partners with shared values and standards.',
    value:
      'Senior capital advisor. Connect founders and allocators. Structure sound partnerships across global networks. Trusted advisor to select relationships.'
  },
  {
    name: 'Roseberry Properties',
    role: 'Founder',
    discipline: 'realestate',
    url: 'https://roseberryproperties.com',
    thumb: '/images/ventures/roseberry-properties.jpg',
    logo: '/images/logos/roseberry-properties.png',
    description:
      'Referral-only residential and commercial real estate serving high-net-worth buyers and investors across South Florida and beyond.',
    value:
      '20 years of real estate investing experience. Direct access to deals. Relational approach to acquisitions and strategy. Kourtney leads operations and design.'
  },
  {
    name: 'Premiere Home Watch',
    role: 'Founder',
    discipline: 'realestate',
    url: 'https://roseberryproperties.com/premierehomewatch',
    thumb: '/images/ventures/premiere-home-watch.jpg',
    description:
      'Lifestyle services and luxury home concierge for distinguished clientele. Recurring revenue model, acquisition-ready framework.',
    value: 'Built by Kourtney. Scaled from 8 to 20+ clients. Turnkey systems. Ready to scale.'
  },
  {
    // DRAFT COPY — grounded in the venture name (4IR) and the Seco Bio link.
    // Correct the sector detail if the mandate is broader than deep tech.
    name: '4 IR Group',
    role: 'Co-founder, Chief Business Officer',
    discipline: 'operations',
    url: 'https://secobio.com',
    thumb: '/images/ventures/four-ir-ventures.jpg',
    description:
      'Venture building at the edge of the Fourth Industrial Revolution — backing deep-technology companies and getting them from laboratory result to commercial reality. Seco Bio is the first.',
    value:
      'Co-founder and Chief Business Officer. I build the commercial side: partnerships, capital, and the path from first conversation to first revenue.'
  }
];

/**
 * Every figure below is quoted from Jeremy's own copy elsewhere on this page.
 * Nothing here is estimated, extrapolated or rounded. If a claim changes in a
 * venture's description, change it here in the same edit.
 */
/**
 * Brown for type on the gold band. The artwork's own brown (#665e5b) measures
 * 2.8:1 on gold and #4a4340 only 4.30:1 — both under the 4.5:1 floor. This is
 * 4.95:1 and still reads brown rather than black.
 */
const SCALE_BROWN = '#413a37';

const SCALE = [
  { value: '20', unit: 'yrs', label: 'Investing in real estate' },
  { value: '25', unit: '', label: 'Countries with capital relationships' },
  { value: '30', unit: '', label: 'Country private-markets platform' },
  { value: '7', unit: '', label: 'Operating platforms' }
];

export default function EntrepreneurPage({ onContactClick, onNavigate }) {
  // The rail runs in declaration order. It used to sort by discipline so the
  // two halves of the page matched, but the running order is now set
  // deliberately rather than derived — so reordering the rail means moving a
  // block in VENTURES above, and nothing else. Each venture still carries its
  // `discipline`, which is what the panel's eyebrow and the My Why counts read.
  const ordered = VENTURES;

  const [active, setActive] = React.useState(ordered[0].name);
  const current = ordered.find((v) => v.name === active) || ordered[0];
  const currentDiscipline = DISCIPLINES.find((d) => d.key === current.discipline);

  return (
    <div>
      <PageTopBand
        eyebrow="Entrepreneur"
        title="Building Across Seven Platforms"
        subtitle="Capital. Operations. Real Estate. People."
        image="/images/headers/entrepreneur.jpg"
        tone="taupe"
      />

      {/* ============================================================
          1 — MY FOUNDATION
          Sits directly under the banner: an organiser deciding whether to
          put someone on their stage is deciding about the person before
          the product, so the values come before the talk list.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="This is me"
            title="My Foundation"
            intro="Four things sit underneath every call I make. The order is the point."
          />
          <div className="mt-14">
            <TopicCards cards={PILLARS} />
          </div>
        </div>
      </section>

      {/* ============================================================
          2 — THE PORTFOLIO, ONE AT A TIME
          ============================================================ */}
      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="The portfolio"
            title="I Love My Work"
            intro="This is where I try, fail, learn and repeat — live operating businesses, which is why my material keeps changing."
          />

          <div className="grid md:grid-cols-12 gap-px mt-14" style={{ backgroundColor: '#e2e2e2' }}>
            {/* Rail */}
            <div className="md:col-span-5" style={{ backgroundColor: '#ffffff' }}>
              {ordered.map((v, i) => {
                const on = v.name === active;
                return (
                  <button
                    key={v.name}
                    type="button"
                    onClick={() => setActive(v.name)}
                    aria-pressed={on}
                    className="w-full text-left flex items-center gap-4 px-6 py-5"
                    style={{
                      background: 'none',
                      border: 'none',
                      borderBottom: i === ordered.length - 1 ? 'none' : '1px solid #ececec',
                      borderLeft: `3px solid ${on ? SECONDARY : 'transparent'}`,
                      backgroundColor: on ? BG : 'transparent',
                      transition: 'background-color 160ms ease, border-color 160ms ease'
                    }}
                  >
                    <span
                      className="display"
                      style={{ color: on ? SECONDARY : '#c9c9c9', fontSize: 14, letterSpacing: '0.12em', flexShrink: 0 }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="display" style={{ color: on ? SLATE : TAUPE, fontSize: 18, lineHeight: 1.15 }}>
                      {v.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detail panel — navy, with the venture's thumbnail across the top */}
            <div className="md:col-span-7 relative overflow-hidden" style={{ backgroundColor: PRIMARY }}>
              <div
                className="hero-wedge absolute inset-y-0 right-0 hidden md:block"
                style={{ width: '52%', backgroundColor: PRIMARY_DEEP, opacity: 0.55 }}
              />

              <div className="relative">
                {current.thumb && (
                  <div style={{ position: 'relative', width: '100%', aspectRatio: '900 / 360', overflow: 'hidden' }}>
                    <img
                      key={current.thumb}
                      src={current.thumb}
                      alt=""
                      aria-hidden="true"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center 42%' }}
                    />
                  </div>
                )}

                <div className="p-8 md:p-12">
                  <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 16 }}>
                    {currentDiscipline ? currentDiscipline.name : 'Portfolio'}
                  </p>

                  <h3
                    className="display"
                    style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 3.6vw, 2.7rem)', marginBottom: 10 }}
                  >
                    {current.name}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.66)', fontSize: 15, marginBottom: 26 }}>{current.role}</p>

                  {current.description && (
                    <p style={{ color: 'rgba(255,255,255,0.86)', fontSize: 17, lineHeight: 1.8, marginBottom: 26 }}>
                      {current.description}
                    </p>
                  )}

                  {current.value && (
                    <div style={{ borderLeft: `3px solid ${SECONDARY}`, paddingLeft: 20, marginBottom: 30 }}>
                      <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 10 }}>
                        What I bring
                      </p>
                      <p style={{ color: 'rgba(255,255,255,0.86)', fontSize: 16, lineHeight: 1.75 }}>{current.value}</p>
                    </div>
                  )}

                  {current.url && (
                    <a
                      href={current.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 10,
                        color: SECONDARY,
                        fontSize: 14,
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        borderBottom: `1px solid ${SECONDARY}`,
                        paddingBottom: 4
                      }}
                    >
                      {displayUrl(current.url)}
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          <p style={{ color: MUTED, fontSize: 13, marginTop: 16 }}>Select a company to read more.</p>
        </div>
      </section>

      {/* ============================================================
          3 — MY WHY
          The taxonomy and the argument, which used to be two sections
          making the same point, are now one.
          ============================================================ */}
      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="The through-line"
            title="My Why"
            intro="Each one flows from the same conviction: real value comes from connecting people, solving problems, and building with integrity. Whether it’s capital, operations, real estate, or people development — the principle is the same."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px mt-14" style={{ backgroundColor: '#e2e2e2' }}>
            {DISCIPLINES.map((d, i) => {
              const isPeople = d.key === 'people';
              return (
                <div
                  key={d.key}
                  className="p-7 flex flex-col"
                  style={{ backgroundColor: isPeople ? PRIMARY : '#ffffff', minHeight: 264 }}
                >
                  <span
                    className="display"
                    style={{ color: SECONDARY, fontSize: 15, letterSpacing: '0.14em', marginBottom: 18 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="display"
                    style={{
                      color: isPeople ? '#ffffff' : SLATE,
                      fontSize: 'clamp(1.4rem, 2.1vw, 1.75rem)',
                      marginBottom: 12
                    }}
                  >
                    {d.name}
                  </h3>
                  <p
                    style={{
                      color: isPeople ? 'rgba(255,255,255,0.82)' : MUTED,
                      fontSize: 14.5,
                      lineHeight: 1.7,
                      marginBottom: 20
                    }}
                  >
                    {d.blurb}
                  </p>

                  {/* Just an arrow. The counts and the "this is the speaking"
                      label were doing the same job as the cards themselves and
                      made the row read as four different kinds of thing. The
                      People card keeps its arrow clickable through to
                      Speaking; the rest are direction, not controls, so they
                      are hidden from assistive tech. */}
                  <div style={{ marginTop: 'auto' }}>
                    {isPeople ? (
                      <button
                        type="button"
                        onClick={() => onNavigate && onNavigate('speaking')}
                        aria-label="Go to Speaking"
                        style={{ background: 'none', border: 'none', padding: 0, color: SECONDARY, display: 'inline-flex' }}
                      >
                        <ArrowRight size={22} strokeWidth={1.8} />
                      </button>
                    ) : (
                      <ArrowRight
                        size={22}
                        strokeWidth={1.8}
                        aria-hidden="true"
                        style={{ color: SECONDARY_DEEP }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          4 — SCALE
          Gold ground, navy figures, brown labels, white rule.

          Colour note: white type was asked for here and is used only for the
          rule and the watermark, not for words. White on gold measures 1.98:1
          — under the 3:1 floor even for large text — so a white label would be
          unreadable in sunlight or on a dim laptop. The brown is deepened to
          #4a4340 for the same reason: the artwork's own brown is 3.3:1 on
          gold, which is borderline, and this clears 4.6:1 while still reading
          as brown rather than black.
          ============================================================ */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24" style={{ backgroundColor: SECONDARY }}>
        <span
          aria-hidden="true"
          className="watermark absolute hidden md:block"
          style={{
            left: '-2%',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(5rem, 15vw, 13rem)',
            color: 'rgba(255,255,255,0.22)'
          }}
        >
          Build
        </span>
        <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {SCALE.map((s) => (
            <div key={s.label}>
              <div className="display" style={{ color: PRIMARY, fontSize: 'clamp(2.8rem, 6vw, 4.6rem)', lineHeight: 1 }}>
                {s.value}
                {s.unit && (
                  <span style={{ fontSize: '0.42em', marginLeft: 6, letterSpacing: '0.06em', color: SCALE_BROWN }}>
                    {s.unit}
                  </span>
                )}
              </div>
              <span
                aria-hidden="true"
                style={{ display: 'block', width: 34, height: 2, backgroundColor: '#ffffff', margin: '16px 0' }}
              />
              <p style={{ color: SCALE_BROWN, fontSize: 14.5, lineHeight: 1.6, fontWeight: 500 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          5 — THE LINE TO REMEMBER
          Kept as a single display line rather than three panels, now that
          the argument itself lives at the top of the page.
          ============================================================ */}
      <section className="px-6 py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="display" style={{ color: PRIMARY, fontSize: 'clamp(1.8rem, 5vw, 3.4rem)', marginBottom: 14 }}>
            Relationships. <span style={{ color: SECONDARY }}>Economics.</span> Execution.
          </p>
          <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8, maxWidth: '54ch', margin: '0 auto 34px' }}>
            Trust compounds, the numbers have to work, and none of it counts until somebody does the
            unglamorous part on a Tuesday.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="navy" onClick={() => onNavigate && onNavigate('speaking')}>
              See the speaking
            </Button>
            <Button variant="quiet" onClick={() => onContactClick && onContactClick('Speaking')}>
              Start a conversation
            </Button>
          </div>
        </div>
      </section>

      <BookingCTA
        onContactClick={onContactClick}
        context="Speaking"
        title="Want this perspective in your room?"
        body="The businesses are where the material comes from. Tell me about your event and I will shape it to your audience."
      />
    </div>
  );
}
