import React from 'react';
import { SectionHead, TopicCards, CountUp, BG } from './ui';

/**
 * The six foundations — all six on one page, and the order is the argument.
 *
 * Lifted out of the About page so it can be mounted anywhere. The data came
 * with it rather than staying behind, which is the only way this remains a
 * single source rather than two lists that drift.
 */
const SIXES = [
  {
    eyebrow: 'Principle',
    title: 'Faith',
    body:
      'God is first. Church is the center of our world, and our creativity and influence in every sphere flows from it.'
  },
  {
    eyebrow: 'Foundation',
    title: 'Family',
    body:
      'Married 18 years to Kourtney. Two teenagers. They teach me more about leadership than any conference. Family stability is the ultimate competitive advantage.'
  },
  {
    eyebrow: 'Practice',
    title: 'Fitness',
    body:
      'Stewarding my body. Physical discipline mirrors mental discipline — how you show up for your body tells me how you’ll show up for a partnership.'
  },
  {
    eyebrow: 'Stewardship',
    title: 'Finances',
    body:
      'Money just makes you more of who you already are. It does not rule my family — but every now and then it buys happiness, and it buys radical generosity.'
  },
  {
    eyebrow: 'The room',
    title: 'Friends',
    body:
      'The people who would tell me the truth about myself. Some I do business with, all of them outrank the calendar.'
  },
  {
    eyebrow: 'Release',
    title: 'Fun',
    body:
      'Jet surfing, skydiving, base jumping into water. Not a bucket list — the things that reset me, and the reason I can sit still in a board meeting the next morning.'
  }
];

export default function SixFoundations() {
  return (
  <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
    <div className="max-w-6xl mx-auto">
      <SectionHead
        maxWidth="62ch"
        eyebrow="What I’m built on"
        title={<><CountUp end={6} duration={2600} /> Foundations</>}
        intro="Faith, Family, Fitness, Finances, Friends, Fun. In that order, and all six load-bearing. Let one slip and everything built on top of it moves. If I ever look like I am coming apart, or just off, it is because one of these is off — and I need to recalibrate my rhythms before I try to fix anything else."
      />
      <div className="mt-14">
        <TopicCards numbered cards={SIXES} />
      </div>
    </div>
  </section>
  );
}
