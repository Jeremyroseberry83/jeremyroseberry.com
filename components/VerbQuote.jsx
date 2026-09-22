import React from 'react';
import { SECONDARY, SECONDARY_DEEP, SLATE, BG } from './ui';

/**
 * One of the four verbs from the hero — Think, Lead, Scale, Try — set as a
 * quote box. One per page, in that order, so a visitor walking the nav
 * finishes the sentence the home page started.
 *
 * Deliberately plain: a rule, the verb, a line. The hero already does the
 * typographic work; these are the echo, and an echo that shouts is noise.
 *
 * Every line is addressed to the reader and about their situation — their
 * decision, their people, their company, their courage. Keep the "you".
 *
 * These are Jeremy's sentences in Jeremy's order. An earlier pass rearranged
 * Scale to put the feeling first and it lost his rhythm; polish the wording,
 * never the running order.
 */
const QUOTES = {
  think: {
    line: 'Most of what is in your way is debilitating noise. Dial it down and your decisions become more intentional and clear.',
    note: 'Think'
  },
  lead: {
    line: 'People crave certainty, but they follow real and clear. Be you, be real, lead clear.',
    note: 'Lead'
  },
  scale: {
    line: 'You can calm and solve the fear that growth breeds complexity that overwhelms.',
    note: 'Scale'
  },
  try: {
    line: 'You do not have to be good at it yet. The courage to start puts you ahead of almost everyone still deciding.',
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
            maxWidth: '34ch',
            margin: '0 auto'
          }}
        >
          {q.line}
        </p>
      </div>
    </section>
  );
}
