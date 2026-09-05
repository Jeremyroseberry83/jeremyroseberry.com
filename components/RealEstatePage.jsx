import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TIERS } from './WhereIWork';
import SixFoundations from './SixFoundations';
import {
  PageTopBand,
  SectionHead,
  CountUp,
  BookingCTA,
  SECONDARY,
  SECONDARY_DEEP,
  PRIMARY,
  SLATE,
  MUTED
} from './ui';

/**
 * Real Estate — the three companies, then the content.
 *
 * Company copy is pulled from TIERS in WhereIWork rather than retyped, so the
 * Entrepreneurs directory and this page cannot drift into describing the same
 * business two different ways. What this page adds is the outward-facing half:
 * WHO each one is for and what they actually do for that person. The directory
 * answers "what is it"; this answers "why would I call".
 */

const RE_TIER = TIERS.find((t) => t.label === 'Real Estate');

/** The outward-facing half — who it is for, in Jeremy's words. */
const FOR_WHOM = {
  'Roseberry Properties': {
    who: 'Owners, buyers and investors who want an advisor before an agent',
    points: [
      'Referral and advisory across every asset class, not just the ones with a listing attached',
      'A broker who will tell you when the deal in front of you is not the deal',
      'The network to place something quietly when a public listing is the wrong move'
    ]
  },
  'Premiere Home Watch': {
    who: 'Second-home and seasonal owners who are not there most of the year',
    points: [
      'Eyes on the property when you are eleven hundred miles away',
      'Vendors managed, problems caught while they are still small and cheap',
      'Recurring, documented, and built so the business runs without me in it'
    ]
  },
  'Roseberry Capital': {
    who: 'Sponsors raising and allocators deploying, across twenty-five countries',
    points: [
      'Capital advisory for people who need the introduction, not the pitch deck',
      'Relationships built over time. Not bought off a list',
      'Honest consulting on whether a raise is ready before it goes to market'
    ]
  }
};



export default function RealEstatePage({ onContactClick }) {
  const companies = RE_TIER ? RE_TIER.companies : [];

  return (
    <div>
      <PageTopBand
        eyebrow="Real Estate"
        title="Our Family Platform"
        subtitle="Businesses built around adding value. We advise and refer exclusively. No agents. No listings. Always looking for the best experts in every market."
        subtitleWidth="56ch"
        portrait="/images/portraits/real-estate.jpg"
        tone="ink"
      />

      {/* ============================================================
          1 — THE THREE
          Full-bleed alternating blocks rather than the compact rows on
          Entrepreneurs. Someone who chose this page wants to know whether
          to call, which takes more than one sentence.
          ============================================================ */}
      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="What we run"
            title={<><CountUp end={3} duration={2200} /> Businesses</>}
            intro="Different clients, same discipline. Each one exists because the last one kept running into a problem it could not solve."
          />

          <div className="mt-14 md:mt-20 space-y-16 md:space-y-24">
            {companies.map((c, i) => {
              const extra = FOR_WHOM[c.name] || {};
              const flip = i % 2 === 1;
              return (
                <div key={c.name} className="grid md:grid-cols-12 gap-8 md:gap-14 items-center">
                  <div className={`md:col-span-5 ${flip ? 'md:order-last' : ''}`}>
                    {c.thumb && (
                      <span className="venture-thumb" style={{ borderRadius: 14 }}>
                        <img src={c.thumb} alt="" aria-hidden="true" />
                      </span>
                    )}
                  </div>

                  <div className="md:col-span-7">
                    <span
                      style={{ height: 30, marginBottom: 14, display: 'flex', alignItems: 'center' }}
                    >
                      {c.logo && (
                        <img src={c.logo} alt="" aria-hidden="true" style={{ maxHeight: 30, maxWidth: 170, width: 'auto' }} />
                      )}
                    </span>

                    <h3 className="display" style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3.4vw, 2.5rem)', marginBottom: 10 }}>
                      {c.name}
                    </h3>
                    <p className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 10, marginBottom: 20 }}>
                      {c.role}
                    </p>

                    <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8, marginBottom: 22 }}>{c.description}</p>

                    {extra.who && (
                      <p style={{ color: SLATE, fontSize: 15.5, lineHeight: 1.7, fontWeight: 500, marginBottom: 18 }}>
                        {extra.who}.
                      </p>
                    )}

                    {extra.points && (
                      <ul className="space-y-3" style={{ listStyle: 'none', marginBottom: 28 }}>
                        {extra.points.map((pt) => (
                          <li key={pt} className="flex gap-3" style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.7 }}>
                            <span aria-hidden="true" style={{ color: SECONDARY, flexShrink: 0 }}>›</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {c.url && (
                      <a
                        href={c.url}
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
              );
            })}
          </div>
        </div>
      </section>

      <SixFoundations />

      <BookingCTA onContactClick={onContactClick} />
    </div>
  );
}
