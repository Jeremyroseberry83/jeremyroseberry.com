import React, { useEffect, useRef, useState } from 'react';
import { SECONDARY, PRIMARY } from './ui';

/**
 * The creed, as a pull quote.
 *
 * Split onto three lines because the three share a shape — Live, Lead, Be —
 * and that parallel is invisible when they run together as prose. The verbs
 * carry the only colour; an earlier version highlighted the whole line and the
 * band ran through the descenders, which made it harder to read rather than
 * easier.
 *
 * Lines fade up one after another on scroll. Movement is small on purpose:
 * this sits at the end of a long page and should feel like it settles, not
 * like it performs.
 */
/** Navy on gold, 5.27:1. The verbs go deeper still at 6.64:1. */
const CREED_INK = PRIMARY;
const CREED_DEEP = '#12293b';

const LINES = [
  { verb: 'Live', rest: 'grateful for everything.' },
  { verb: 'Lead', rest: 'entitled to nothing.' },
  { verb: 'Be', rest: 'faithful in the small things.' }
];

export default function Creed() {
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

  // Gold ground. White on gold is 2.25:1 and unusable, so the type is navy at
  // 5.27:1 with the verbs a shade deeper at 6.64:1 — the two read apart by
  // weight of colour rather than by hue.
  return (
    <section className="px-6 py-16 md:py-28" style={{ backgroundColor: SECONDARY }}>
      <blockquote ref={ref} className="max-w-4xl mx-auto text-center" style={{ margin: '0 auto' }}>
        <span
          aria-hidden="true"
          style={{ display: 'block', width: 44, height: 2, backgroundColor: CREED_DEEP, margin: '0 auto 34px' }}
        />

        {LINES.map((l, i) => (
          <p
            key={l.verb}
            className="display"
            style={{
              color: CREED_INK,
              fontSize: 'clamp(1.35rem, 3.2vw, 2.3rem)',
              lineHeight: 1.3,
              marginBottom: i === LINES.length - 1 ? 0 : 8,
              opacity: on ? 1 : 0,
              transform: on ? 'none' : 'translateY(10px)',
              transition: 'opacity 1500ms ease, transform 1500ms cubic-bezier(0.22, 1, 0.36, 1)',
              transitionDelay: `${i * 380}ms`
            }}
          >
            <span style={{ color: CREED_DEEP }}>{l.verb}</span> {l.rest}
          </p>
        ))}

        <footer
          className="eyebrow-wide"
          style={{ color: CREED_DEEP, opacity: 0.75, fontSize: 10, marginTop: 34 }}
        >
          How I try to live
        </footer>
      </blockquote>
    </section>
  );
}
