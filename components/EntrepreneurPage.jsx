import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import {
  PageTopBand,
  SectionHead,
  BookingCTA,
  Button,
  SECONDARY,
  SECONDARY_DEEP,
  PRIMARY,
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
 * rest look identical, and leaves with no impression at all — which is the
 * opposite of what this page is for. Three changes fix that:
 *
 *  1. SEVEN BECOMES FOUR. The page's own subtitle already names the taxonomy
 *     — Capital, Operations, Real Estate, People — so the ventures are sorted
 *     into it. Four buckets is a number a reader can hold; seven is not. The
 *     fourth discipline, People, has no company under it on purpose: it is the
 *     speaking and writing work, which turns the taxonomy into the argument
 *     the whole site is making and hands the reader back to the booking page.
 *
 *  2. THE LIST BECOMES SOMETHING YOU DRIVE. One venture is shown at a time,
 *     chosen from a rail. The reader controls the pace, each venture gets the
 *     whole panel instead of a ninth of the screen, and Roseberry Capital and
 *     Private Investor Circle sitting under one discipline reads as related
 *     rather than as the same card printed twice.
 *
 *  3. THE NUMBERS GET A BAND. Every figure in it is Jeremy's own claim from
 *     his supplied copy — nothing is computed, inferred or rounded up here.
 *
 * `url` holds the FULL address including protocol and path, because not every
 * venture sits at its own root — Premiere Home Watch lives under
 * roseberryproperties.com. The visible label strips the protocol, any "www."
 * and a trailing slash.
 */
const displayUrl = (url) => url.replace(/^https?:\/{2}/, '').replace(/^www\./, '').replace(/\/$/, '');

const DISCIPLINES = [
  { key: 'capital', name: 'Capital', blurb: 'Advisory, allocation, and the rooms where allocators actually meet founders.' },
  { key: 'operations', name: 'Operations', blurb: 'Running the business day to day — the unglamorous part that decides the outcome.' },
  { key: 'realestate', name: 'Real Estate', blurb: 'Two decades of investing, acquisitions, and service businesses built around ownership.' },
  { key: 'people', name: 'People', blurb: 'The speaking and the writing. The one platform that is not a company.' }
];

const VENTURES = [
  {
    // DRAFT COPY — written to the shape of the role, not from inside knowledge
    // of Avestix's mandate. Sharpen the first sentence with what the firm
    // actually invests in; the second sentence is the part that sells and is
    // already true of any COO seat.
    name: 'Avestix Frontier',
    role: 'Chief Operating Officer',
    discipline: 'operations',
    url: 'https://avestix.com',
    description:
      'An alternative investment platform. I run the operating side of the house — the process, the systems and the execution that sit underneath the investment strategy.',
    value:
      'Day-to-day operating leadership. Turning a thesis into repeatable process, keeping the machine running while the strategy evolves, and holding the standard when it would be easier not to.'
  },
  {
    // DRAFT COPY — grounded in the venture name (4IR) and the Seco Bio link.
    // Correct the sector detail if the mandate is broader than deep tech.
    name: 'Four IR Ventures',
    role: 'Co-founder, Chief Business Officer',
    discipline: 'operations',
    url: 'https://secobio.com',
    description:
      'Venture building at the edge of the Fourth Industrial Revolution — backing deep-technology companies and getting them from laboratory result to commercial reality. Seco Bio is the first.',
    value:
      'Co-founder and Chief Business Officer. I build the commercial side: partnerships, capital, and the path from first conversation to first revenue.'
  },
  {
    name: 'Roseberry Capital',
    role: 'Founder',
    discipline: 'capital',
    url: 'https://luma.com/PrivateInvestorCircle',
    description: 'Capital advisory and allocation platform.',
    value:
      'Direct relationships with sponsors, allocators, and capital partners across 25 countries. Sector agnostic. Relational capital focused.'
  },
  {
    // DRAFT COPY — grounded in the Luma events listing. Adjust the cadence and
    // the room size once those are settled.
    name: 'Private Investor Circle',
    role: 'Founder',
    discipline: 'capital',
    url: 'https://www.privateinvestorcircle.com/',
    description:
      'A curated circle of investors, allocators and founders who meet in person. Small rooms, real conversations, and none of the pitch theatre that makes most capital events a waste of an evening.',
    value:
      'I convene and host the rooms. Founders meet allocators who are actually deploying, both sides leave with relationships rather than a stack of decks, and the invitations stay tight on purpose.'
  },
  {
    name: 'Access Global',
    role: 'Strategic Partner',
    discipline: 'capital',
    url: 'https://accessglobal.co',
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
    description:
      'Luxury home concierge service for high-net-worth owners. Recurring revenue model. Acquisition-ready framework.',
    value: 'Built by Kourtney. Scaled from 8 to 20+ clients. Turnkey systems. Ready to scale.'
  }
];

/**
 * Every figure below is quoted from Jeremy's own copy elsewhere on this page.
 * Nothing here is estimated, extrapolated or rounded. If a claim changes in a
 * venture's description, change it here in the same edit.
 */
const SCALE = [
  { value: '20', unit: 'yrs', label: 'Investing in real estate' },
  { value: '25', unit: '', label: 'Countries with capital relationships' },
  { value: '30', unit: '', label: 'Country private-markets platform' },
  { value: '7', unit: '', label: 'Operating platforms' }
];

export default function EntrepreneurPage({ onContactClick, onNavigate }) {
  const [active, setActive] = React.useState(VENTURES[2].name); // open on Roseberry Capital
  const current = VENTURES.find((v) => v.name === active) || VENTURES[0];
  const currentDiscipline = DISCIPLINES.find((d) => d.key === current.discipline);

  return (
    <div>
      <PageTopBand
        eyebrow="Entrepreneur"
        title="Building Across Seven Platforms"
        subtitle="Capital. Operations. Real Estate. People."
        watermark="Build"
      />

      {/* ============================================================
          1 — THE FOUR DISCIPLINES
          Seven things a reader cannot hold, reduced to four they can.
          The fourth has no company under it and says so.
          ============================================================ */}
      <section className="px-6 py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <p style={{ color: MUTED, fontSize: 19, lineHeight: 1.8, maxWidth: '52ch', marginBottom: 56 }}>
            How I create value. Where I focus. What drives each business.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: '#e2e2e2' }}>
            {DISCIPLINES.map((d, i) => {
              const count = VENTURES.filter((v) => v.discipline === d.key).length;
              const isPeople = d.key === 'people';
              return (
                <div
                  key={d.key}
                  className="p-8 flex flex-col"
                  style={{ backgroundColor: isPeople ? PRIMARY : '#ffffff', minHeight: 250 }}
                >
                  <span
                    className="display"
                    style={{ color: SECONDARY, fontSize: 15, letterSpacing: '0.14em', marginBottom: 20 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="display"
                    style={{ color: isPeople ? '#ffffff' : SLATE, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', marginBottom: 14 }}
                  >
                    {d.name}
                  </h3>
                  <p
                    style={{
                      color: isPeople ? 'rgba(255,255,255,0.82)' : MUTED,
                      fontSize: 15,
                      lineHeight: 1.7,
                      marginBottom: 20
                    }}
                  >
                    {d.blurb}
                  </p>

                  <div style={{ marginTop: 'auto' }}>
                    {count > 0 ? (
                      <span className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 10 }}>
                        {count} {count === 1 ? 'company' : 'companies'}
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onNavigate && onNavigate('speaking')}
                        className="eyebrow-wide"
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          color: SECONDARY,
                          fontSize: 10,
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 8
                        }}
                      >
                        This is the speaking
                        <ArrowRight size={13} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          2 — THE PORTFOLIO, ONE AT A TIME
          A rail the reader drives, rather than a grid they skim.
          ============================================================ */}
      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="The portfolio"
            title="Love My Work"
            intro="This is where I try, fail, learn and repeat — live operating businesses, which is why my material keeps changing."
          />

          <div className="grid md:grid-cols-12 gap-px mt-14" style={{ backgroundColor: '#e2e2e2' }}>
            {/* Rail */}
            <div className="md:col-span-5" style={{ backgroundColor: '#ffffff' }}>
              {VENTURES.map((v, i) => {
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
                      borderBottom: i === VENTURES.length - 1 ? 'none' : '1px solid #ececec',
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
                    <span
                      className="display"
                      style={{ color: on ? SLATE : TAUPE, fontSize: 18, lineHeight: 1.15 }}
                    >
                      {v.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detail panel */}
            <div className="md:col-span-7 relative overflow-hidden" style={{ backgroundColor: INK }}>
              <div
                className="hero-wedge absolute inset-y-0 right-0 hidden md:block"
                style={{ width: '52%', backgroundColor: TAUPE, opacity: 0.26 }}
              />
              <div className="relative p-8 md:p-12" style={{ minHeight: 420 }}>
                <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 16 }}>
                  {currentDiscipline ? currentDiscipline.name : 'Portfolio'}
                </p>

                <h3
                  className="display"
                  style={{ color: '#ffffff', fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', marginBottom: 10 }}
                >
                  {current.name}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: 15, marginBottom: 28 }}>{current.role}</p>

                {current.description ? (
                  <p style={{ color: 'rgba(255,255,255,0.84)', fontSize: 17, lineHeight: 1.8, marginBottom: 28 }}>
                    {current.description}
                  </p>
                ) : (
                  /* Honest empty state rather than a bracketed placeholder on a
                     live page. Fill `description` in and this disappears. */
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.8, marginBottom: 28, fontStyle: 'italic' }}>
                    Overview coming shortly.
                  </p>
                )}

                {current.value && (
                  <div style={{ borderLeft: `3px solid ${SECONDARY}`, paddingLeft: 20, marginBottom: 32 }}>
                    <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 10 }}>
                      What I bring
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.84)', fontSize: 16, lineHeight: 1.75 }}>{current.value}</p>
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

          <p style={{ color: MUTED, fontSize: 13, marginTop: 16 }}>
            Select a company to read more.
          </p>
        </div>
      </section>

      {/* ============================================================
          3 — SCALE
          Oversized figures. Every one is quoted from the copy above.
          ============================================================ */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24" style={{ backgroundColor: INK }}>
        <span
          aria-hidden="true"
          className="watermark absolute hidden md:block"
          style={{
            left: '-2%',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(5rem, 15vw, 13rem)',
            color: 'rgba(255,255,255,0.04)'
          }}
        >
          Build
        </span>
        <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {SCALE.map((s) => (
            <div key={s.label}>
              <div className="display" style={{ color: SECONDARY, fontSize: 'clamp(2.8rem, 6vw, 4.6rem)', lineHeight: 1 }}>
                {s.value}
                {s.unit && (
                  <span style={{ fontSize: '0.42em', marginLeft: 6, letterSpacing: '0.06em' }}>{s.unit}</span>
                )}
              </div>
              <span
                aria-hidden="true"
                style={{ display: 'block', width: 32, height: 2, backgroundColor: SECONDARY, opacity: 0.5, margin: '16px 0' }}
              />
              <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14, lineHeight: 1.6 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          4 — THE THROUGH-LINE
          Three words, three panels. This is the line to remember, so it
          gets the whole section rather than a sentence at the end of one.
          ============================================================ */}
      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="The through-line"
            title="Why These Businesses?"
            intro="Each one flows from the same conviction: real value comes from connecting people, solving problems, and building with integrity. Whether it’s capital, operations, real estate, or people development — the principle is the same."
          />

          <div className="grid md:grid-cols-3 gap-px mt-14" style={{ backgroundColor: '#e2e2e2' }}>
            {[
              { word: 'Relationships', body: 'Trust compounds. The deal after this one comes from how you handled this one.' },
              { word: 'Economics', body: 'The numbers have to work. Conviction without arithmetic is just enthusiasm.' },
              { word: 'Execution', body: 'Everything above is theory until somebody does the unglamorous work on a Tuesday.' }
            ].map((c, i) => (
              <div key={c.word} className="p-9" style={{ backgroundColor: i === 1 ? INK : '#ffffff' }}>
                <h3
                  className="display"
                  style={{ color: i === 1 ? SECONDARY : PRIMARY, fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)', marginBottom: 16 }}
                >
                  {c.word}
                </h3>
                <p style={{ color: i === 1 ? 'rgba(255,255,255,0.78)' : MUTED, fontSize: 16, lineHeight: 1.75 }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
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
