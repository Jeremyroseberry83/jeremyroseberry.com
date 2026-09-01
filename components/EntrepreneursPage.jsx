import React from 'react';
import WhereIWork from './WhereIWork';
import {
  PageTopBand,
  BookingCTA,
  SECONDARY,
  PRIMARY,
  MUTED
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






/** Brown for type on the gold band — 4.95:1, where the artwork's own is 2.8:1. */
const SCALE_BROWN = '#413a37';

/** Every figure is Jeremy's own claim. Nothing estimated or rounded up. */
const SCALE = [
  { value: '20', unit: 'yrs', label: 'Investing in real estate' },
  { value: '25', unit: '', label: 'Countries with capital relationships' },
  { value: '30', unit: '', label: 'Country private-markets platform' },
  { value: '18', unit: 'yrs', label: 'Married to Kourtney' }
];

export default function EntrepreneursPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Entrepreneurs"
        title="What We Build"
        subtitle="Two tiers, seven companies, and two decades of learning the difference between a good idea and a business."
        image="/images/headers/entrepreneur.jpg"
        tone="taupe"
      />

      <WhereIWork />

      {/* ============================================================
          1 — SCALE
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
          2 — THE LINE TO REMEMBER
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
