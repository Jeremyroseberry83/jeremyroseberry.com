import React from 'react';
import { SECONDARY, SECONDARY_DEEP, SLATE, BG } from './ui';

/**
 * One of the four verbs from the hero — Think, Lead, Scale, Try — set as a
 * quote box. One per page, in that order, so a visitor walking the nav
 * finishes the sentence the home page started.
 *
 * Deliberately plain: a rule, the verb, a line. The hero already does the
 * typographic work; these are the echo, and an echo that shouts is noise.
 */
const QUOTES = {
  think: {
    line: 'Clear thinking is not a talent. It is what is left once you stop reacting.',
    note: 'Think'
  },
  lead: {
    line: 'Lead yourself first. Everything else you are trying to lead is downstream of that.',
    note: 'Lead'
  },
  scale: {
    line: 'Scale is systems, not effort. Effort is what you do until the system exists.',
    note: 'Scale'
  },
  try: {
    line: 'Courage to try puts you in the top ten percent before you are any good at it.',
    note: 'Try'
  }
};

export default function VerbQuote({ verb, ground = BG }) {
  const q = QUOTES[verb];
  if (!q) return null;
  const dark = ground !== BG && ground !== '#ffffff';

  return (
    <section className="px-6 py-14 md:py-20" style={{ backgroundColor: ground }}>
      <div className="max-w-4xl mx-auto text-center">
        <span
          aria-hidden="true"
          style={{
            display: 'block',
            width: 40,
            height: 2,
            backgroundColor: dark ? SECONDARY : SECONDARY_DEEP,
            margin: '0 auto 26px'
          }}
        />
        <p
          className="eyebrow-wide"
          style={{ color: dark ? SECONDARY : SECONDARY_DEEP, fontSize: 11, marginBottom: 18 }}
        >
          {q.note}
        </p>
        <p
          className="display"
          style={{
            color: dark ? '#ffffff' : SLATE,
            fontSize: 'clamp(1.3rem, 3vw, 2.1rem)',
            lineHeight: 1.28,
            maxWidth: '26ch',
            margin: '0 auto'
          }}
        >
          {q.line}
        </p>
      </div>
    </section>
  );
}
