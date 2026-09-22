import React from 'react';
import VerbQuote from './VerbQuote';
import Creed from './Creed';
import ShortForm from './ShortForm';
import SixFoundations from './SixFoundations';
import { PageTopBand, BookingCTA } from './ui';

/**
 * Motivation — what he comes back to, in three blocks.
 *
 * This page was PR + Marketing. All of that content is gone: the Capital
 * Ready banner, the four READY stages, the 4IR Studios block and the
 * capital-readiness closing ask. 4IR Studios itself still lives in TIERS and
 * so still appears on About; it just no longer has a page of its own.
 *
 * Order is the Try quote, the short-form clips, the six foundations, then
 * the creed — the invitation, the encouragement, the structure underneath
 * both, and the belief it all rests on last.
 */
export default function MotivationPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Leadership"
        title="Motivation"
        subtitle="Courage, the six foundations, and the handful of things I come back to when it gets hard."
        subtitleWidth="54ch"
        portrait="/images/portraits/pr.jpg"
        tone="ink"
      />

      <VerbQuote verb="try" />

      <ShortForm />

      <SixFoundations />

      <Creed />

      <BookingCTA onContactClick={onContactClick} />
    </div>
  );
}
