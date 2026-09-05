import React, { useEffect, useRef, useState } from 'react';
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
  // The four stages arrive a second apart. Reduced-motion visitors get them
  // all at once — a three-second wait for the last card is a long time to
  // stare at nothing if the animation is not wanted in the first place.
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      { threshold: 0.25 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <PageTopBand
        eyebrow="PR + Marketing"
        title="Are You Capital Ready?"
        subtitle="Most companies lose the raise on the story, the communication, and not emphasizing their strengths."
        image="/images/headers/pr-marketing.jpg"
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
      {/* Navy into gold. The warm stop is #57492c rather than the brand gold:
          at #c9a961 the 72%-white body copy falls to 1.83:1, and even a
          mid-gold like #6b5a35 only reaches 4.39:1. #57492c is the lightest
          warm tone where that copy still clears 4.5:1, at 5.48. */}
      <section
        ref={ref}
        className="px-6 py-16 md:py-28"
        style={{ background: `linear-gradient(135deg, ${PRIMARY_DEEP} 0%, ${PRIMARY} 42%, #57492c 100%)` }}
      >
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="Helping you be market ready"
            title={
              <>
                <CountUp end={4} duration={2400} /> Types of{' '}
                {/* Rule drawn as a border on the word, not a separate element:
                    it has to follow the word if the headline rewraps. */}
                <span style={{ borderBottom: `5px solid ${SECONDARY}`, paddingBottom: '0.06em' }}>
                  Ready
                </span>
              </>
            }
            intro="Read them in order and one will describe you. The honest answer is usually a stage behind where a company thinks it is — and naming that gap is what makes the next raise, or the next lender, go differently. If you can see where you actually are, I can help you close the distance to the next one."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px mt-14" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
            {STAGES.map((s, i) => (
              <article
                key={s.label}
                className="p-8 flex flex-col"
                style={{
                  backgroundColor: PRIMARY_DEEP,
                  minHeight: 260,
                  opacity: shown ? 1 : 0,
                  transform: shown ? 'none' : 'translateY(14px)',
                  transition: 'opacity 700ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
                  transitionDelay: `${i * 1000}ms`
                }}
              >
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
