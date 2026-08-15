import React from 'react';
import { PageTopBand, SectionHead, TopicCards, BookingCTA, SECONDARY, MUTED, INK, BG, GRAY_LIGHT } from './ui';

/**
 * "Let's Meet" — the values and background page.
 *
 * Not the booking page (that is Speaking). This one answers "who is this
 * person" for someone deciding whether to trust him with their room, so it
 * still closes on the booking ask rather than dead-ending.
 */

const PILLARS = [
  {
    eyebrow: 'Principle',
    title: 'Faith',
    body:
      'Every decision — business, family, capital — flows from values that predate the deal. Trust compounds. Integrity is non-negotiable.'
  },
  {
    eyebrow: 'Foundation',
    title: 'Family',
    body:
      'Married 16 years to Kourtney. Two teenagers. They teach me more about leadership than any conference. Family stability is the ultimate competitive advantage.'
  },
  {
    eyebrow: 'Practice',
    title: 'Fitness',
    body:
      'Physical discipline mirrors mental discipline. How you show up for your body tells me how you’ll show up for a partnership.'
  }
];

export default function MeetPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Let’s meet"
        title="The Foundation"
        subtitle="Faith, family, fitness. How I make decisions."
        watermark="Meet"
      />

      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <TopicCards cards={PILLARS} />
        </div>
      </section>

      {/* Portrait band. Full-bleed and short rather than a boxed photo, so it
          reads as a divider between the values and the background rather than
          as a second hero competing with the top of the page. */}
      <section style={{ backgroundColor: GRAY_LIGHT }}>
        <div style={{ position: 'relative', width: '100%', height: 'clamp(260px, 42vw, 520px)', overflow: 'hidden' }}>
          <img
            src="/images/jeremy-portrait.jpg"
            alt="Jeremy Roseberry"
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ objectPosition: 'center 28%', filter: 'grayscale(100%)' }}
          />
          <span
            aria-hidden="true"
            style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 3, backgroundColor: SECONDARY }}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <SectionHead eyebrow="Background" title="Who I Am" />
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8, marginTop: 22 }}>
              Two decades in private markets, real assets, and capital formation. Based in South
              Florida, operating globally. I connect people who build things worth building.
            </p>
          </div>
          <div>
            <SectionHead eyebrow="The reason" title="Why This Platform" />
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8, marginTop: 22 }}>
              Most leadership content is generic. Most financial conferences are sterile. Real growth
              happens through honest stories — the messy middle, the character tests, the decisions you
              can’t reverse. That’s what I speak and write about.
            </p>
          </div>
        </div>
      </section>

      {/* Typographic on purpose, no photograph. This section argues Jeremy can
          hold a room, and the only image that supports that claim is a real
          on-stage shot. See the shoot brief in README.md. */}
      <section className="relative overflow-hidden py-16 md:py-28 px-6" style={{ backgroundColor: INK }}>
        <div
          className="hero-wedge absolute inset-y-0 right-0 hidden md:block"
          style={{ width: '48%', backgroundColor: '#6b6b6b', opacity: 0.28 }}
        />
        <span
          aria-hidden="true"
          className="watermark absolute hidden md:block"
          style={{
            right: '-2%',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(5rem, 14vw, 12rem)',
            color: 'rgba(255,255,255,0.045)'
          }}
        >
          Honest
        </span>

        <div className="relative max-w-6xl mx-auto">
          <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 11, marginBottom: 20 }}>
            Why book Jeremy
          </p>
          <blockquote
            className="display"
            style={{ color: '#ffffff', fontSize: 'clamp(1.9rem, 4.6vw, 3.5rem)', maxWidth: '20ch', marginBottom: 44 }}
          >
            The talk people remember is the one where somebody finally said the quiet part out loud.
          </blockquote>
          <span
            aria-hidden="true"
            style={{ display: 'block', width: 54, height: 3, backgroundColor: SECONDARY, marginBottom: 36 }}
          />
          <div className="grid md:grid-cols-2 gap-10 md:gap-16" style={{ maxWidth: 940 }}>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 17, lineHeight: 1.8 }}>
              Most business talks are a highlight reel with a lesson bolted on the end. That is not what
              moves a room. People lean in when the person on stage is honest about the part that did
              not work — the payroll nearly missed, the call got wrong, the year they wanted out.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: 17, lineHeight: 1.8 }}>
              That honesty is the whole method. It earns attention in the first ninety seconds, and it
              makes the practical part land, because by then the audience believes the person saying it
              has actually been there.
            </p>
          </div>
        </div>
      </section>

      <BookingCTA
        onContactClick={onContactClick}
        context="Speaking"
        title="Tell me about your event."
        body="Date, city, audience, and what you need them to walk out believing. That is enough to get started — I will come back with availability and a plan."
      />
    </div>
  );
}
