import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TIERS } from './WhereIWork';
import {
  PageTopBand,
  SectionHead,
  CountUp,
  BookingCTA,
  SECONDARY,
  PRIMARY,
  PRIMARY_DEEP,
  SLATE,
  MUTED
} from './ui';

/**
 * PR + Marketing — one company, so the page is built around the offer rather
 * than around a list.
 *
 * The four READY stages come straight off 4IR Studios' own artwork, which is
 * the strongest thing it has: a company can locate itself on that ladder in
 * about four seconds, and that self-diagnosis is the whole pitch. The page is
 * now the company, the ladder, and the ask — nothing between the diagnosis
 * and the invitation to fix it.
 */

const STUDIOS =
  (TIERS.find((t) => t.label === 'Capital Markets') || { companies: [] }).companies.find(
    (c) => c.name === '4IR Studios'
  ) || {};

const STAGES = [
  {
    label: 'Investor ready',
    body: 'The story holds up in a room full of people who have heard it all. Numbers, narrative and deck saying the same thing.'
  },
  {
    label: 'Financing ready',
    body: 'Materials a lender or a credit committee can actually work from, rather than a pitch that needs you present to make sense.'
  },
  {
    label: 'Acquisition ready',
    body: 'Positioned so a buyer sees the asset and not the founder. What that takes is usually structural before it is cosmetic.'
  },
  {
    label: 'IPO ready',
    body: 'Institutional-grade story, design and market presence — built long before the bankers ask to see any of it.'
  }
];


export default function PRMarketingPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="PR + Marketing"
        title="Are You Capital Ready?"
        subtitle="Most companies lose the raise on the story, the communication, and not emphasizing their strengths."
        image="/images/headers/speaking.jpg"
        tone="ink"
      />

      {/* The company */}
      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-5">
            {STUDIOS.thumb && (
              <span className="venture-thumb" style={{ borderRadius: 14 }}>
                <img src={STUDIOS.thumb} alt="" aria-hidden="true" />
              </span>
            )}
          </div>

          <div className="md:col-span-7">
            <span style={{ height: 34, marginBottom: 18, display: 'flex', alignItems: 'center' }}>
              {STUDIOS.logo && (
                <img
                  src={STUDIOS.logo}
                  alt=""
                  aria-hidden="true"
                  /* The mark is white — it needs a dark ground, and this
                     section is white. Inverted rather than swapped for a
                     second file that would then have to be kept in sync. */
                  style={{ maxHeight: 34, maxWidth: 200, width: 'auto', filter: 'invert(1)' }}
                />
              )}
            </span>

            <h2 className="display" style={{ color: SLATE, fontSize: 'clamp(1.9rem, 3.8vw, 2.8rem)', marginBottom: 10 }}>
              {STUDIOS.name || '4IR Studios'}
            </h2>
            <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 22 }}>
              {STUDIOS.role}
            </p>
            <p style={{ color: MUTED, fontSize: 17.5, lineHeight: 1.8, marginBottom: 26 }}>
              {STUDIOS.description}
            </p>
            <p style={{ color: SLATE, fontSize: 16, lineHeight: 1.8, marginBottom: 30 }}>
              I have sat on both sides of this table — raising for my own companies, and in the
              room when somebody else was raising. The gap between a good business or offering and
              a fundable one is never the concept.
            </p>

            {STUDIOS.url && (
              <a
                href={STUDIOS.url}
                target="_blank"
                rel="noopener noreferrer"
                className="venture-visit"
                style={{ backgroundColor: PRIMARY, color: '#ffffff', borderColor: PRIMARY }}
              >
                Visit Website
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* The ladder */}
      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: PRIMARY_DEEP }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="Helping you be market ready"
            title={<><CountUp end={4} duration={2400} /> Kinds Of Ready</>}
            intro="Read them in order and one will describe you. The honest answer is usually a stage behind where a company thinks it is — and naming that gap is what makes the next raise, or the next lender, go differently. If you can see where you actually are, I can help you close the distance to the next one."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px mt-14" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
            {STAGES.map((s, i) => (
              <article key={s.label} className="p-8 flex flex-col" style={{ backgroundColor: PRIMARY_DEEP, minHeight: 260 }}>
                <span
                  className="display"
                  style={{ color: SECONDARY, opacity: 0.55, fontSize: '1.6rem', lineHeight: 1, marginBottom: 16 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="display" style={{ color: '#ffffff', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', marginBottom: 14 }}>
                  {s.label}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15, lineHeight: 1.7 }}>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* The generic close asks what you are working on. This page has spent
          four stages and five disciplines making a reader diagnose themselves,
          so it closes on that diagnosis instead. */}
      <BookingCTA
        onContactClick={onContactClick}
        eyebrow="Capital readiness"
        title="Let’s get you ready."
        body="Tell me what you are raising for and where you think the story is weakest. If the honest answer is that you are not ready for any of it yet, I will say so — that is usually the more useful conversation."
        context="Business / capital"
      />
    </div>
  );
}
