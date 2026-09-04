import React from 'react';
import PodcastLaunch from './PodcastLaunch';
import { Button, CountUp, PRIMARY, SECONDARY, SECONDARY_DEEP, SLATE, INK, BG } from './ui';
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
/** Brown for type on the gold band — 4.95:1, where the artwork's own is 2.8:1. */
const SCALE_BROWN = '#413a37';

/** Every figure is Jeremy's own claim. Nothing estimated or rounded up. */
const SCALE = [
  { value: '19', unit: 'yrs', label: 'Husband' },
  { value: '15', unit: 'yrs', label: 'Dad' },
  { value: '20', unit: 'yrs', label: 'Investing' },
  { value: '7', unit: '', label: 'Businesses' }
];


export default function HomePage({ onContactClick }) {
  return (
    <>
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
            Jeremy <span style={{ color: SECONDARY }}>Roseberry</span>
          </p>

          {/* Two words, full size. The name above is a fact, so the headline
              reads as a description of a named person rather than a claim
              floating on its own — which is what went wrong when ADDING VALUE
              sat here with a claim above it and a claim below it. */}
          <h1
            className="display hero-reveal-2"
            style={{ color: '#ffffff', fontSize: '10.6vw', marginBottom: '1.8vw' }}
          >
            Leader
            <br />
            Builder
          </h1>

          <div className="hero-reveal-3">
            <Button variant="navy" size="lg" borderColor="rgba(255,255,255,0.9)" onClick={() => onContactClick && onContactClick()}>
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
            Jeremy <span style={{ color: SECONDARY }}>Roseberry</span>
          </p>

          <h1 className="display hero-reveal-2" style={{ color: '#ffffff', fontSize: 'clamp(3.2rem, 19vw, 6rem)', marginBottom: 20 }}>
            Leader
            <br />
            Builder
          </h1>

          <div className="hero-reveal-3">
            <Button variant="navy" size="lg" full borderColor="rgba(255,255,255,0.9)" onClick={() => onContactClick && onContactClick()}>
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

    {/* The figures, directly under the hero. The home page is no longer a pure
        doorway — four numbers give a visitor the scale of the thing before
        they choose a page, and they read in about three seconds, which is all
        the attention a hero hands off. The company list lives on
        Entrepreneurs, where someone who wants that detail has already gone
        looking for it. */}
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
              <CountUp end={Number(s.value)} duration={1600} />
              {s.unit && <span style={{ fontSize: '0.42em', marginLeft: 6, letterSpacing: '0.06em', color: SCALE_BROWN }}>{s.unit}</span>}
            </div>
            <span aria-hidden="true" style={{ display: 'block', width: 34, height: 2, backgroundColor: '#ffffff', margin: '16px 0' }} />
            <p style={{ color: SCALE_BROWN, fontSize: 14.5, lineHeight: 1.6, fontWeight: 500 }}>{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* One dated announcement, directly under the figures. This is the whole
        content layer for now, and a single announcement is the honest size
        for it — a nav tab called Resources containing one unlaunched thing
        claimed more than exists. The capture starts building the list four
        months before launch, which is the point. */}
    {/* The statement. It sits between the gold figures and the navy podcast
        band on cream, which is the only quiet surface on the page — this line
        does not need help from a photograph or a gradient, and giving it any
        would make it look like a slogan rather than something he means. */}
    <section className="px-6 py-16 md:py-28" style={{ backgroundColor: BG }}>
      <div className="max-w-5xl mx-auto text-center">
        <p className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 11, marginBottom: 24 }}>
          What I actually do
        </p>
        {/* One sentence, broken where Jeremy broke it. The cap is 2.5rem
            rather than 3rem because the second half runs to forty-seven
            characters — any larger and the browser re-breaks it into three
            ragged lines, which loses the two-part structure the line depends
            on. The container is max-w-5xl for the same reason. */}
        <h2
          className="display"
          style={{ color: SLATE, fontSize: 'clamp(1.35rem, 3.1vw, 2.2rem)', marginBottom: 14 }}
        >
          I try to add value to people in my words and actions.
          <br />
          <span style={{ color: PRIMARY }}>I often help solve business problems that I didn’t make.</span>
        </h2>

        {/* Starts with "and", so it is set tight under the headline as a
            continuation of it rather than as a separate line of copy. */}
        <p
          style={{
            color: SECONDARY_DEEP,
            fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
            lineHeight: 1.5,
            fontStyle: 'italic',
            marginBottom: 26
          }}
        >
          and add enterprise value along the way.
        </p>

        {/* Set in the body face rather than the condensed display one. Three
            short declaratives in Oswald caps would read as a second headline
            competing with the first; in Inter caps they read as a creed, which
            is what they are. Tracking is 0.14em, not the eyebrow's 0.34em —
            that much air is right for two words and unreadable across three
            full sentences. */}
        <p
          style={{
            color: SLATE,
            fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
            fontWeight: 600,
            letterSpacing: '0.14em',
            lineHeight: 2,
            textTransform: 'uppercase'
          }}
        >
          I live grateful for everything. Entitled to nothing.
          <br className="hidden sm:block" />
          {' '}Faithful in the small things.
        </p>
      </div>
    </section>

    <PodcastLaunch />
    </>
  );
}
