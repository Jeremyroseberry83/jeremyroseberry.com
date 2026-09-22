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
 * decision, their people, their company, their courage. An earlier set stated
 * principles in the abstract, which made them things Jeremy believes rather
 * than things the reader recognises about themselves. Keep the "you".
 */
const QUOTES = {
  think: {
    line: 'Most of what is in your way is noise. Quiet it and the decision you keep circling is already made.',
    note: 'Think'
  },
  lead: {
    line: 'Your people are not waiting on your strategy. They are watching how you carry the week you did not plan for.',
    note: 'Lead'
  },
  scale: {
    line: 'Your company only outgrows you once you build something that runs when you are not in the room.',
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
