import React from 'react';
import { Button, PRIMARY, SECONDARY, INK } from './ui';
import { company, cta } from '../site.config';

/**
 * HomePage — the brand artwork with live type laid over it. Nothing else on
 * the page, and no footer (pages/index.jsx suppresses it here).
 *
 * The artwork at /images/hero-honest-stories.jpg is the TYPELESS version:
 * portrait, taupe wedge and ROSEBERRY watermark are baked in, the headline is
 * not. So this file draws no wedge and no watermark of its own — they would
 * double up on what is already in the image. It draws only the words.
 *
 * Why live text rather than the pre-typed artwork: it reflows on a phone,
 * stays sharp at any pixel density, is readable by search engines and screen
 * readers, and the wording can change without a trip back to a design tool.
 * (The pre-typed version is kept at /images/brand-lockup.jpg for decks and
 * one-pagers, and is what og-card.jpg is built from.)
 *
 * DESKTOP: the section takes the image's own 16:9 ratio so the artwork is
 * never cropped or letterboxed, and the text block is positioned in PERCENT
 * of that box — which means it stays locked to the wedge at every width.
 * Sizes are in vw for the same reason: 1vw is 1% of the artwork's width, so
 * the type scales with the composition instead of drifting out of it.
 */
export default function HomePage({ onContactClick }) {
  return (
    <section className="relative" style={{ backgroundColor: INK }}>
      {/* ---------- Desktop / tablet ----------
          Sits below the nav rather than under it: the artwork's top-left is
          light gray, so nav type laid over it washes out. */}
      <div className="hidden md:block relative" style={{ width: '100%', aspectRatio: '16 / 9', marginTop: 76 }}>
        <img
          src="/images/hero-honest-stories.jpg"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />

        {/* Text block, pinned to the taupe panel by percentage. */}
        <div
          style={{
            position: 'absolute',
            left: '45.5%',
            right: '6%',
            top: '50%',
            transform: 'translateY(-50%)'
          }}
        >
          <p
            className="eyebrow-wide hero-reveal"
            style={{ color: '#ffffff', fontSize: '1.55vw', marginBottom: '1.6vw' }}
          >
            Mindset <span style={{ color: SECONDARY }}>Motivation</span>
          </p>

          <h1
            className="display hero-reveal-2"
            style={{ color: '#ffffff', fontSize: '10.6vw', marginBottom: '1.8vw' }}
          >
            Honest
            <br />
            Stories
          </h1>

          <p
            className="hero-reveal-3"
            style={{
              display: 'inline-block',
              backgroundColor: PRIMARY,
              color: '#ffffff',
              fontSize: '1.32vw',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '0.85vw 1.5vw',
              marginBottom: '2vw'
            }}
          >
            {company.tagline}
          </p>

          <div className="hero-reveal-4">
            <Button variant="gold" size="lg" onClick={() => onContactClick && onContactClick('Speaking')}>
              {cta.primary}
            </Button>
          </div>
        </div>
      </div>

      {/* ---------- Mobile ----------
          Now that the artwork carries no baked-in type, the phone gets a real
          hero instead of a shrunken 16:9 band: the photo half is cropped to
          portrait under a charcoal wash, with the same words stacked over it.
          This is why a separate portrait export of the artwork is no longer
          needed. */}
      <div className="md:hidden relative flex items-end" style={{ minHeight: '100svh' }}>
        <img
          src="/images/hero-honest-stories.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '22% center' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(42,42,42,0.30) 0%, rgba(42,42,42,0.72) 45%, rgba(42,42,42,0.95) 100%)'
          }}
        />

        <div className="relative px-6" style={{ paddingTop: 120, paddingBottom: 56 }}>
          <p className="eyebrow-wide hero-reveal" style={{ color: '#ffffff', fontSize: 11, marginBottom: 14 }}>
            Mindset <span style={{ color: SECONDARY }}>Motivation</span>
          </p>

          <h1 className="display hero-reveal-2" style={{ color: '#ffffff', fontSize: 'clamp(3.2rem, 19vw, 6rem)', marginBottom: 20 }}>
            Honest
            <br />
            Stories
          </h1>

          <p
            className="hero-reveal-3"
            style={{
              display: 'inline-block',
              backgroundColor: PRIMARY,
              color: '#ffffff',
              fontSize: 10.5,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '9px 14px',
              marginBottom: 26
            }}
          >
            {company.tagline}
          </p>

          <div className="hero-reveal-4">
            <Button variant="gold" size="lg" full onClick={() => onContactClick && onContactClick('Speaking')}>
              {cta.primary}
            </Button>
          </div>
        </div>
      </div>

      {/* The artwork is decorative (aria-hidden) because the H1 above already
          carries the words. This keeps the page's identity in the text layer
          for screen readers and search engines rather than in alt text. */}
      <h2 className="sr-only">
        {company.name} — {company.role}
      </h2>
    </section>
  );
}
