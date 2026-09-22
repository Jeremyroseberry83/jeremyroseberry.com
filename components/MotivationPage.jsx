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
 * Order is the creed, then the short-form clips, then the six foundations —
 * the belief, the encouragement, the structure underneath both.
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

      <Creed />

      <ShortForm />

      <SixFoundations />

      <VerbQuote verb="try" />

      <BookingCTA onContactClick={onContactClick} />
    </div>
  );
}
