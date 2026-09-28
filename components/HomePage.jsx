import React, { useEffect, useRef, useState } from 'react';
import TryBlock from './TryBlock';
import PodcastLaunch from './PodcastLaunch';
import { Button, CountUp, PRIMARY, SECONDARY, INK } from './ui';
import { company, cta } from '../site.config';

/**
 * HomePage — the brand artwork with live type laid over it, then the band,
 * the Try block and the podcast note, which closes on its own email capture
 * — a second ask under it was one too many. It carries the site footer like
 * the rest of them.
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
// The four verbs, in sequence rather than as a list: think is your own head,
// try is your own action, lead is other people, scale is the organisation.
// Each step widens the circle and none doubles back — the previous order ran
// Think, Lead, Scale, Try, which escalated and then dropped back to the self.
//
// The order matters more now than it did when these faded in together. They
// arrive one at a time, half a second apart, which turns the line into
// something the eye follows in order.
const VERBS = ['Think', 'Try', 'Lead', 'Scale'];

const SCALE = [
  { value: '19', unit: 'yrs', label: 'Married' },
  { value: '15', unit: 'yrs', label: 'Dad' },
  { value: '20', unit: 'yrs', label: 'Investing' },
  // No number to count to. The point of the last one is that it does not stop.
  { value: '\u221e', unit: '', label: 'Entrepreneur', endless: true }
];

/**
 * The infinity figure. Its own observer rather than CountUp's, because it
 * fades over 2.4s against the numbers' 1.6s and then keeps breathing — a
 * symbol that means "no end" should not settle the way a count does.
 */
function Endless() {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOn(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setOn(true);
        io.disconnect();
      },
      { threshold: 0.5 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={`endless${on ? ' is-on' : ''}`} aria-label="Always">
      &#8734;
    </span>
  );
}


export default function HomePage({ onContactClick }) {
  return (
    <>
    <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
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
            className="eyebrow-wide"
            style={{ color: '#ffffff', fontSize: '1.55vw', marginBottom: '1.6vw' }}
          >
            <span className="hero-fade-1">Jeremy</span>{' '}
            <span className="hero-fade-2" style={{ color: SECONDARY }}>Roseberry</span>
          </p>

          {/* The audience word carries the size, not the verb. ENTREPRENEURS is
              13 characters against HELPING's 7, so setting both at one size
              would have forced the whole headline down to fit the long word —
              paying for the specific word with the scale that makes the hero
              work. Demoting HELPING buys the width back and puts the emphasis
              where it belongs: on who this is for.

              6vw is set by the ARTWORK, not by this column. The taupe wedge
              has a diagonal right edge, and sampling the source image across
              the rows the glyphs actually occupy puts it at 88.87% of the
              frame at its tightest — the top of the word, since the diagonal
              leans right as it falls. Starting at 45.5%, that leaves 43.37vw,
              so 6.295vw is where the word would touch the edge. 6vw holds a
              ~2vw margin of taupe. 6.7 overhung it by 2.8vw, which is what
              Jeremy saw bleeding onto the light panel.

              The whole hero is scale-invariant — the artwork is an exact 16:9
              against a 16:9 box, and the type is sized in vw off the same
              origin — so this one figure holds at every desktop width. */}
          <h1
            className="display hero-fade-3"
            style={{ color: '#ffffff', fontSize: '6vw', marginBottom: '1.8vw' }}
          >
            <span className="block hero-lede">Helping</span>
            <span aria-hidden="true" className="hero-rule" />
            <span className="block">Entrepreneurs</span>
          </h1>

          <p className="eyebrow-wide" style={{ color: '#ffffff', fontSize: '1.32vw', marginBottom: '2.2vw' }}>
            {VERBS.map((v, i) => (
              <span key={v} className="hero-verb" style={{ animationDelay: `${2.7 + i * 0.5}s` }}>
                {i > 0 && <span aria-hidden="true" className="hero-verb-dot">&bull;</span>}
                {v}
              </span>
            ))}
          </p>

          <div>
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
        {/* 12%, not 22%. The artwork is 2560x1440 and on a phone it is cropped
            to about a 665px-wide window of it; his face sits at 21.9% of the
            frame, so 22% put it a fifth of the way across the screen rather
            than in the middle. 12% centres it, and the figure comes out the
            same at 375, 390 and 430 wide. */}
        {/* A phone-specific copy of the artwork: the same file with 100px of
            its own top edge replicated above it. The desktop frame is 16:9
            and keeps the original.

            Position could not fix this. A phone box is far taller in
            proportion than the 16:9 artwork, so cover scales by HEIGHT and
            the vertical overflow is zero — the whole image is already on
            screen and object-position has nothing left to move. The artwork
            simply has almost no room above his head: his hair starts at y=28
            of 1440, which lands as about 16px on a phone.

            Extending the canvas is safe here because that strip is flat —
            every column's top 26 rows vary by under 2 levels across the full
            width, so a clamped edge is invisible. 100px takes the headroom to
            roughly 70px on a 390-wide phone. */}
        <img
          src="/images/hero-mobile.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: '12% center' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(42,42,42,0.30) 0%, rgba(42,42,42,0.72) 45%, rgba(42,42,42,0.95) 100%)'
          }}
        />

        <div className="relative px-6" style={{ paddingTop: 120, paddingBottom: 56 }}>
          <p className="eyebrow-wide" style={{ color: '#ffffff', fontSize: 11, marginBottom: 14 }}>
            <span className="hero-fade-1">Jeremy</span>{' '}
            <span className="hero-fade-2" style={{ color: SECONDARY }}>Roseberry</span>
          </p>

          <h1 className="display hero-fade-3" style={{ color: '#ffffff', fontSize: 'clamp(2rem, 12vw, 4rem)', marginBottom: 20 }}>
            <span className="block hero-lede">Helping</span>
            <span aria-hidden="true" className="hero-rule" />
            <span className="block">Entrepreneurs</span>
          </h1>

          <p className="eyebrow-wide" style={{ color: '#ffffff', fontSize: 11, marginBottom: 24 }}>
            {VERBS.map((v, i) => (
              <span key={v} className="hero-verb" style={{ animationDelay: `${2.7 + i * 0.5}s` }}>
                {i > 0 && <span aria-hidden="true" className="hero-verb-dot">&bull;</span>}
                {v}
              </span>
            ))}
          </p>

          <div>
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
              {s.endless ? <Endless /> : <CountUp end={Number(s.value)} duration={1600} />}
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
    <TryBlock />

    <PodcastLaunch />
    </>
  );
}
