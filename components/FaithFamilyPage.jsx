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
  PRIMARY_DEEP,
  MUTED,
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
 * Fitness keeps its card here even though it has its own page: the four
 * foundations only make sense as a set, so the card links across rather than
 * pretending the fourth one does not exist.
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
 * The tiers of business Jeremy works in — not a legacy list. Two groups
 * because an outsider can hold "real estate" and "capital markets" where they
 * cannot hold six company names; detail lives on each company's own site.
 */
const TIERS = [
  {
    label: 'Real Estate',
    blurb: 'Our family platform. Investing, acquisitions, and the service businesses built around ownership.',
    companies: [
      { name: 'Roseberry Properties', role: 'Founder', url: 'https://roseberryproperties.com', logo: '/images/logos/roseberry-properties.png' },
      { name: 'Premiere Home Watch', role: 'Founder', url: 'https://roseberryproperties.com/premierehomewatch', logo: '' },
      // Shares the Circle's address for now — Roseberry Capital has no site of
      // its own yet. Two cards pointing at one destination is a stopgap, not a
      // design; give this its own URL when there is one.
      { name: 'Roseberry Capital', role: 'Founder', url: 'https://www.privateinvestorcircle.com/', logo: '' }
    ]
  },
  {
    label: 'Capital Markets',
    blurb: 'Advisory, allocation, and the rooms where allocators actually meet founders.',
    companies: [
      { name: 'Private Investor Circle', role: 'Founder', url: 'https://www.privateinvestorcircle.com/', logo: '/images/logos/private-investor-circle.png' },
      { name: 'Avestix', role: 'Chief Operating Officer', url: 'https://avestix.com', logo: '/images/logos/avestix.png' },
      { name: 'Access Global', role: 'Strategic Partner', url: 'https://accessglobal.co', logo: '/images/logos/access-global.png' },
      { name: 'The 4IR Group', role: 'Co-founder, CBO', url: 'https://secobio.com', logo: '' }
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
          1 — THE FOUR FOUNDATIONS
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            maxWidth="62ch"
            eyebrow="This is me"
            title="My Foundation"
            intro="These are my four foundations — Faith, Family, Fitness, Finances. In that order, and all four load-bearing. Let one slip and everything built on top of it moves. If I ever look like I am coming apart, or just off, it is because one of these four is off — and I need to recalibrate my rhythms before I try to fix anything else."
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
          2 — THE TIERS
          Navy rather than charcoal, and laid out as tier-then-companies
          rather than two stacked lists. It is a map of where he works, not
          a monument to what he has built — the heading says so.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: PRIMARY_DEEP }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="The tiers"
            title="Where I Work"
            intro="Two tiers, seven companies. The detail lives on each company’s own site — this is the shape of the week."
          />

          <div className="mt-14 space-y-12">
            {TIERS.map((tier) => (
              <div key={tier.label} className="grid md:grid-cols-12 gap-8 md:gap-10">
                <div className="md:col-span-4">
                  <h3 className="display" style={{ color: SECONDARY, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: 12 }}>
                    {tier.label}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: 15, lineHeight: 1.75 }}>{tier.blurb}</p>
                </div>

                <div className="md:col-span-8 grid sm:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
                  {tier.companies.map((c) => {
                    // A card without a URL renders as a div, not an <a href="">.
                    // An empty href reloads the current page, which is a worse
                    // outcome than simply not being clickable.
                    const Card = c.url ? 'a' : 'div';
                    return (
                    <Card
                      key={c.name}
                      {...(c.url ? { href: c.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="p-6 flex flex-col"
                      style={{ backgroundColor: PRIMARY, transition: 'background-color 180ms ease', minHeight: 150 }}
                      onMouseOver={(e) => { if (c.url) e.currentTarget.style.backgroundColor = '#1f4666'; }}
                      onMouseOut={(e) => { e.currentTarget.style.backgroundColor = PRIMARY; }}
                    >
                      {/* Fixed-height logo slot so cards align whether or not a
                          mark exists yet. */}
                      <span style={{ height: 26, marginBottom: 16, display: 'flex', alignItems: 'center' }}>
                        {c.logo && <img src={c.logo} alt="" aria-hidden="true" style={{ maxHeight: 26, maxWidth: 130, width: 'auto' }} />}
                      </span>
                      <span className="display block" style={{ color: '#ffffff', fontSize: 17, lineHeight: 1.2, marginBottom: 6 }}>
                        {c.name}
                      </span>
                      <span className="block" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.5 }}>
                        {c.role}
                      </span>
                      <span
                        className="flex items-center gap-2"
                        style={{ marginTop: 'auto', paddingTop: 14, color: SECONDARY, fontSize: 12 }}
                      >
                        {c.url ? (
                          <>
                            {displayUrl(c.url)}
                            <ArrowUpRight size={13} />
                          </>
                        ) : null}
                      </span>
                    </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3 — SCALE
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
          4 — THE LINE TO REMEMBER
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
