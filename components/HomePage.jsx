import React from 'react';
import { Button, PRIMARY, SECONDARY, INK, TAUPE, GRAY_LIGHT } from './ui';
import { company, cta } from '../site.config';

/**
 * HomePage — one full-viewport hero and nothing else.
 *
 * No sections below, no footer (pages/index.jsx suppresses it on this route).
 * The page is a doorway: the only ways out are the nav and the single button,
 * which is exactly the point — an undecided visitor has to make a choice
 * instead of scrolling past the ask into a wall of copy.
 *
 * The brand graphic is rebuilt as layout rather than used as a flat image:
 * the diagonal geometry is CSS and the headline is real text. That means it
 * reflows on a phone, stays sharp at any pixel density, can be read by search
 * engines and screen readers, and the wording can change without a trip back
 * to a design tool.
 *
 * Only asset required: /images/jeremy-hero.jpg — the black-and-white cut-out
 * of Jeremy with no type baked into it.
 */
export default function HomePage({ onContactClick }) {
  return (
    <section className="hero-shell relative overflow-hidden flex items-center" style={{ backgroundColor: INK }}>
      {/* Desktop: photo sits in a light-gray panel down the left. */}
      <div className="hidden md:block absolute inset-y-0 left-0" style={{ width: '46%', backgroundColor: GRAY_LIGHT }}>
        <img
          src="/images/jeremy-hero.jpg"
          alt={`${company.name} — ${company.role}`}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center bottom', filter: 'grayscale(100%) contrast(1.05)' }}
        />
      </div>

      {/* Mobile: same photo full-bleed under a heavy charcoal wash, so the
          headline keeps its contrast no matter how the image crops. */}
      <div className="md:hidden absolute inset-0">
        <img
          src="/images/jeremy-hero.jpg"
          alt={`${company.name} — ${company.role}`}
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 15%', filter: 'grayscale(100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(42,42,42,0.60) 0%, rgba(42,42,42,0.86) 55%, rgba(42,42,42,0.96) 100%)'
          }}
        />
      </div>

      {/* The taupe wedge — the diagonal from the brand graphic. */}
      <div
        className="hero-wedge absolute inset-y-0 right-0 hidden md:block"
        style={{ width: '62%', backgroundColor: TAUPE, opacity: 0.55 }}
      />
      <div
        className="hero-slash absolute inset-y-0 right-0 hidden md:block"
        style={{ width: '26%', backgroundColor: TAUPE, opacity: 0.42 }}
      />

      {/* Oversized surname watermark. Texture, not information — it must never
          compete with the headline for attention. */}
      <span
        aria-hidden="true"
        className="watermark absolute hidden md:block"
        style={{
          right: '-3%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(7rem, 20vw, 20rem)',
          color: 'rgba(255,255,255,0.06)'
        }}
      >
        {company.shortName}
      </span>

      <div className="relative w-full max-w-7xl mx-auto px-6" style={{ paddingTop: 120, paddingBottom: 64 }}>
        <div className="md:grid md:grid-cols-12">
          <div className="md:col-start-6 md:col-span-7">
            <p
              className="eyebrow-wide hero-reveal"
              style={{ color: '#ffffff', fontSize: 'clamp(11px, 1.5vw, 14px)', marginBottom: 18 }}
            >
              Mindset <span style={{ color: SECONDARY }}>Motivation</span>
            </p>

            <h1
              className="display hero-reveal-2"
              style={{ color: '#ffffff', fontSize: 'clamp(3.4rem, 11vw, 8rem)', marginBottom: 26 }}
            >
              Honest
              <br />
              Stories
            </h1>

            {/* The badge bar from the graphic. Spelling corrected — the
                original artwork reads "ENTREPRENUER". */}
            <p
              className="hero-reveal-3"
              style={{
                display: 'inline-block',
                backgroundColor: PRIMARY,
                color: '#ffffff',
                fontSize: 'clamp(10px, 1.6vw, 13px)',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '11px 20px',
                marginBottom: 30
              }}
            >
              {company.tagline}
            </p>

            {/* The headline is the brand line; this line does the selling and
                carries the words an organiser actually searches for. */}
            <p
              className="hero-reveal-3"
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                lineHeight: 1.7,
                maxWidth: '44ch',
                marginBottom: 36
              }}
            >
              Keynotes, event hosting, and podcast conversations on leadership, mindset, and what
              building a business actually costs — from someone still doing it.
            </p>

            <div className="hero-reveal-4">
              <Button variant="gold" size="lg" onClick={() => onContactClick && onContactClick('Speaking')}>
                {cta.primary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
