import React from 'react';
import { SECONDARY, SECONDARY_DEEP, PRIMARY, SLATE, BG } from './ui';

/**
 * What I do — three lines, nothing else.
 *
 * The three are a widening scope: a person, then a problem, then an entire
 * enterprise. The colour carries that rather than any decoration — charcoal,
 * navy, gold — so the progression is felt before it is read. Sizing them
 * differently was tried and read as a hierarchy, which is wrong: these are
 * three equal things done at three different scales.
 *
 * No highlight, no underline. An earlier version marker-penned the lines and
 * the band cut straight through the descenders.
 */
const LINES = [
  { text: 'Add value to people', color: SLATE },
  { text: 'Solve complex problems', color: PRIMARY },
  { text: 'Add enterprise value.', color: SECONDARY_DEEP }
];

export default function ValueStatement({ ground = BG }) {
  return (
    <section className="px-6 py-16 md:py-28" style={{ backgroundColor: ground }}>
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow-wide text-center" style={{ color: SECONDARY_DEEP, fontSize: 11, marginBottom: 34 }}>
          What I do
        </p>

        <div className="relative">
          {/* Behind the type, not beside it — a mark that pushes the lines
              sideways turns a statement into a magazine pull-quote. */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '4%',
              top: '-34%',
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(8rem, 18vw, 15rem)',
              lineHeight: 1,
              color: SECONDARY,
              opacity: 0.12,
              userSelect: 'none',
              pointerEvents: 'none'
            }}
          >
            &ldquo;
          </span>

          <div className="relative text-center">
            {LINES.map((l, i) => (
              <p
                key={l.text}
                className="display"
                style={{
                  color: l.color,
                  fontSize: 'clamp(1.8rem, 4.6vw, 3.4rem)',
                  lineHeight: 1.14,
                  marginBottom: i === LINES.length - 1 ? 0 : 6
                }}
              >
                {l.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
