import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  PageTopBand,
  SectionHead,
  TopicCards,
  BookingCTA,
  SECONDARY,
  SECONDARY_DEEP,
  PRIMARY,
  SLATE,
  MUTED,
  INK,
  BG
} from './ui';

/**
 * "Faith + Family + Finance" — the identity page.
 *
 * This is the page a reader lands on to find out who Jeremy actually is
 * before they care what he sells. So it opens on the values, gives the family
 * its own space, and only then lists what the family has built — deliberately
 * short, because the businesses are the evidence here, not the subject.
 *
 * Fitness stays in the stool below even though it has its own page: the four
 * legs only make sense as a set, and the card links across rather than
 * pretending the fourth leg does not exist.
 *
 * Everything marked FILL is a slot waiting for real copy. Each renders
 * something honest while empty rather than a bracketed placeholder.
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

/**
 * FILL — the three panels under "At home". Written as prompts rather than
 * placeholders so the page reads as intentional until real copy lands.
 */
const HOME_PANELS = [
  {
    label: 'Married 18 years',
    heading: 'Kourtney',
    body:
      'She runs the operations and the design side of what we have built, and she is the reason any of it holds together. The best decisions of my life were made with her in the room.'
  },
  {
    label: 'Two teenagers',
    heading: 'Raising them',
    body:
      'They teach me more about leadership than any conference has. Nothing exposes a gap between what you say and what you do faster than a teenager who lives with you.'
  },
  {
    label: 'Church',
    heading: 'Where it starts',
    body:
      'Not a compartment. It is the center of the week, and the standard everything else gets measured against — the businesses included.'
  }
];

/**
 * What the family has built, in short. Two groups on purpose: an outsider can
 * hold "real estate" and "capital markets" where they cannot hold seven
 * company names. Detail lives on each company's own site.
 */
const GROUPS = [
  {
    label: 'Real Estate',
    blurb: 'Two decades of investing, acquisitions, and the service businesses built around ownership.',
    companies: [
      { name: 'Roseberry Properties', role: 'Founder', url: 'https://roseberryproperties.com', logo: '/images/logos/roseberry-properties.png' },
      { name: 'Premiere Home Watch', role: 'Founder', url: 'https://roseberryproperties.com/premierehomewatch', logo: '' }
    ]
  },
  {
    label: 'Capital Markets',
    blurb: 'Advisory, allocation, and the rooms where allocators actually meet founders.',
    companies: [
      { name: 'Roseberry Capital', role: 'Founder', url: 'https://luma.com/PrivateInvestorCircle', logo: '' },
      { name: 'Avestix', role: 'Chief Operating Officer', url: 'https://avestix.com', logo: '/images/logos/avestix.png' },
      { name: 'Access Global', role: 'Strategic Partner', url: 'https://accessglobal.co', logo: '/images/logos/access-global.png' },
      { name: 'The 4IR Group', role: 'Co-founder, Chief Business Officer', url: 'https://secobio.com', logo: '' }
    ]
  }
];

const displayUrl = (url) => url.replace(/^https?:\/{2}/, '').replace(/^www\./, '').replace(/\/$/, '');

/** Brown for type on the gold band — 4.95:1, where the artwork's own is 2.8:1. */
const SCALE_BROWN = '#413a37';

/** Every figure is Jeremy's own claim. Nothing estimated or rounded up. */
const SCALE = [
  { value: '20', unit: 'yrs', label: 'Investing in real estate' },
  { value: '25', unit: '', label: 'Countries with capital relationships' },
  { value: '30', unit: '', label: 'Country private-markets platform' },
  { value: '18', unit: 'yrs', label: 'Married to Kourtney' }
];

export default function FaithFamilyPage({ onContactClick, onNavigate }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Faith + Family + Finance"
        title="What I Am Built On"
        subtitle="Before the businesses, before the stage — this is the core. Husband, father, and someone who thinks the order of your priorities shows up in your results."
        image="/images/headers/entrepreneur.jpg"
        tone="taupe"
      />

      {/* ============================================================
          1 — THE STOOL
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            maxWidth="62ch"
            eyebrow="This is me"
            title="My Foundation"
            intro="This is my four-legged stool. Faith, family, fitness, finances — in that order, and every leg load-bearing. Pull one and the whole thing tips. If I ever look like I am coming apart — or just off — it is because one of these four is off, and I need to recalibrate my rhythms before I try to fix anything else. Everything I build sits on top of these four."
          />
          <div className="mt-14">
            <TopicCards cards={PILLARS} />
          </div>
          <button
            type="button"
            onClick={() => onNavigate && onNavigate('fitness')}
            className="eyebrow-wide"
            style={{
              marginTop: 24,
              background: 'none',
              border: 'none',
              padding: 0,
              color: SECONDARY_DEEP,
              fontSize: 10,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10
            }}
          >
            Fitness has its own page
            <ArrowUpRight size={14} />
          </button>
        </div>
      </section>

      {/* ============================================================
          2 — AT HOME
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="At home"
            title="The Part That Matters Most"
            intro="Everything on the rest of this site is downstream of this section."
          />

          <div className="grid md:grid-cols-3 gap-px mt-14" style={{ backgroundColor: '#e2e2e2' }}>
            {HOME_PANELS.map((panel, i) => (
              <div key={panel.heading} className="p-9" style={{ backgroundColor: i === 1 ? PRIMARY : '#ffffff' }}>
                <p
                  className="eyebrow-wide"
                  style={{ color: i === 1 ? SECONDARY : SECONDARY_DEEP, fontSize: 10, marginBottom: 16 }}
                >
                  {panel.label}
                </p>
                <h3
                  className="display"
                  style={{ color: i === 1 ? '#ffffff' : SLATE, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', marginBottom: 14 }}
                >
                  {panel.heading}
                </h3>
                <p
                  style={{
                    color: i === 1 ? 'rgba(255,255,255,0.84)' : MUTED,
                    fontSize: 15.5,
                    lineHeight: 1.75
                  }}
                >
                  {panel.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3 — WHAT WE HAVE BUILT
          Short by design. This page is about who the family is; the
          companies are evidence, not the subject.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="Finance"
            title="What We Have Built"
            intro="Two decades of it, and none of it built alone. The detail lives on each company’s own site — this is the shape of it."
          />

          <div className="mt-14 grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
            {GROUPS.map((group) => (
              <div key={group.label} className="p-8 md:p-10" style={{ backgroundColor: INK }}>
                <h3 className="display" style={{ color: SECONDARY, fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', marginBottom: 12 }}>
                  {group.label}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, lineHeight: 1.75, marginBottom: 28 }}>
                  {group.blurb}
                </p>

                <ul className="space-y-px" style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}>
                  {group.companies.map((c) => (
                    <li key={c.name} style={{ backgroundColor: INK }}>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 py-4"
                        style={{ transition: 'opacity 160ms ease' }}
                        onMouseOver={(e) => { e.currentTarget.style.opacity = '0.72'; }}
                        onMouseOut={(e) => { e.currentTarget.style.opacity = '1'; }}
                      >
                        {/* Fixed-height slot whether or not a mark exists, so the
                            rows line up instead of jumping by logo. */}
                        <span style={{ width: 74, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                          {c.logo && (
                            <img src={c.logo} alt="" aria-hidden="true" style={{ maxWidth: 74, maxHeight: 26, width: 'auto' }} />
                          )}
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="display block" style={{ color: '#ffffff', fontSize: 17, lineHeight: 1.2 }}>
                            {c.name}
                          </span>
                          <span className="block" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, marginTop: 3 }}>
                            {c.role} · {displayUrl(c.url)}
                          </span>
                        </span>
                        <ArrowUpRight size={16} style={{ color: SECONDARY, flexShrink: 0 }} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4 — SCALE
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
          Built
        </span>
        <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {SCALE.map((s) => (
            <div key={s.label}>
              <div className="display" style={{ color: PRIMARY, fontSize: 'clamp(2.8rem, 6vw, 4.6rem)', lineHeight: 1 }}>
                {s.value}
                {s.unit && <span style={{ fontSize: '0.42em', marginLeft: 6, letterSpacing: '0.06em', color: SCALE_BROWN }}>{s.unit}</span>}
              </div>
              <span aria-hidden="true" style={{ display: 'block', width: 34, height: 2, backgroundColor: '#ffffff', margin: '16px 0' }} />
              <p style={{ color: SCALE_BROWN, fontSize: 14.5, lineHeight: 1.6, fontWeight: 500 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          5 — THE LINE TO REMEMBER
          ============================================================ */}
      <section className="px-6 py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="display" style={{ color: PRIMARY, fontSize: 'clamp(1.8rem, 5vw, 3.4rem)', marginBottom: 14 }}>
            Relationships. <span style={{ color: SECONDARY }}>Economics.</span> Execution.
          </p>
          <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8, maxWidth: '54ch', margin: '0 auto' }}>
            Trust compounds, the numbers have to work, and none of it counts until somebody does the
            unglamorous part on a Tuesday.
          </p>
        </div>
      </section>

      <BookingCTA onContactClick={onContactClick} context="Speaking" />
    </div>
  );
}
