import React, { useEffect, useRef, useState } from 'react';
import { SECONDARY, SECONDARY_DEEP, PRIMARY, SLATE, BG } from './ui';

/**
 * The value statement, set as a quote.
 *
 * One component, mounted on both the home page and About, so the wording
 * cannot drift between them — this is the line the whole brand rests on and
 * two versions of it would be worse than none.
 *
 * The creed at the bottom reveals on scroll with a marker-pen highlight that
 * wipes left to right, one line after the other. That is the only animation on
 * the block on purpose: the eye goes to the thing that moves, and the creed is
 * what should be read last and remembered. Everything above it holds still.
 */
export default function ValueStatement({ ground = BG }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // A highlight that wipes across the text is motion. Reduced-motion
    // visitors get the finished state, not a permanently un-highlighted one.
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
      { threshold: 0.45 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const line = (text, i) => (
    <span className={`creed-line${on ? ' is-on' : ''}`} style={{ transitionDelay: `${i * 260}ms` }}>
      {text}
    </span>
  );

  return (
    <section className="px-6 py-16 md:py-28" style={{ backgroundColor: ground }}>
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow-wide text-center" style={{ color: SECONDARY_DEEP, fontSize: 11, marginBottom: 30 }}>
          What I do
        </p>

        <blockquote className="relative" style={{ margin: 0 }}>
          {/* Decorative quote mark, set behind the type rather than beside it.
              A mark that pushes the text sideways turns a statement into a
              pull-quote in a magazine; sitting behind it, it reads as texture. */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '-2%',
              top: '-38%',
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(9rem, 20vw, 17rem)',
              lineHeight: 1,
              color: SECONDARY,
              opacity: 0.13,
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          >
            &ldquo;
          </span>

          <div className="relative text-center">
            <p
              className="display"
              style={{ color: SLATE, fontSize: 'clamp(1.6rem, 3.8vw, 2.8rem)', marginBottom: 14 }}
            >
              Add value to people in words &amp; action.
              <br />
              <span style={{ color: PRIMARY }}>Solve complex problems I didn’t make.</span>
            </p>

            <p
              style={{
                color: SECONDARY_DEEP,
                fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)',
                lineHeight: 1.5,
                fontStyle: 'italic'
              }}
            >
              and add enterprise value.
            </p>
          </div>
        </blockquote>

        {/* The creed. Reads as the attribution under the quote. */}
        <div ref={ref} className="text-center" style={{ marginTop: 44 }}>
          <span
            aria-hidden="true"
            style={{ display: 'block', width: 44, height: 2, backgroundColor: SECONDARY, margin: '0 auto 30px' }}
          />
          <p
            style={{
              color: SLATE,
              fontSize: 'clamp(0.85rem, 1.4vw, 1rem)',
              fontWeight: 600,
              letterSpacing: '0.14em',
              lineHeight: 2.4,
              textTransform: 'uppercase'
            }}
          >
            {line('Live grateful for everything.', 0)}{' '}
            {line('Lead entitled to nothing.', 1)}{' '}
            {line('Be faithful in the small things.', 2)}
          </p>
        </div>
      </div>
    </section>
  );
}
