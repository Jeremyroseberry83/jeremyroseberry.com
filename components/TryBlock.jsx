import React, { useEffect, useRef, useState } from 'react';
import { SECONDARY_DEEP, PRIMARY, SLATE, MUTED, BG } from './ui';

/**
 * The Try block — the home page's version of the verb quote, and deliberately
 * not the same object as the one-liners on the inner pages.
 *
 * Three short lines that build rather than a single sentence, each arriving
 * half a second after the last, so the block is read in the order it argues:
 * you will not feel ready, you will not be good yet, do it anyway. A single
 * paragraph would land all at once and lose the build.
 *
 * DRAFT — my words, from Jeremy's line about courage and the top ten percent.
 */
const LINES = [
  { text: 'You will not feel ready.', tone: 'ink' },
  { text: 'You will not be good at it yet.', tone: 'ink' },
  { text: 'Do it anyway.', tone: 'accent' }
];

export default function TryBlock() {
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
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <section className="px-6 py-16 md:py-24" style={{ backgroundColor: BG }}>
      <div ref={ref} className="max-w-4xl mx-auto text-center">
        <p className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 11, marginBottom: 28 }}>
          Try
        </p>

        {LINES.map((l, i) => (
          <p
            key={l.text}
            className="display"
            style={{
              color: l.tone === 'accent' ? PRIMARY : SLATE,
              fontSize: 'clamp(1.6rem, 4.2vw, 3rem)',
              lineHeight: 1.2,
              marginBottom: i === LINES.length - 1 ? 24 : 6,
              opacity: on ? 1 : 0,
              transform: on ? 'none' : 'translateY(10px)',
              transition: 'opacity 700ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
              transitionDelay: `${i * 500}ms`
            }}
          >
            {l.text}
          </p>
        ))}

        <p
          style={{
            color: MUTED,
            fontSize: 17,
            lineHeight: 1.8,
            maxWidth: '46ch',
            margin: '0 auto',
            opacity: on ? 1 : 0,
            transition: 'opacity 900ms ease',
            transitionDelay: '1600ms'
          }}
        >
          The courage to start is what puts you ahead of almost everyone still deciding — and
          nobody is holding it back from you.
        </p>
      </div>
    </section>
  );
}
