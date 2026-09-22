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
 * Order is the short-form clips, the Think quote, the six foundations, then
 * the creed — the encouragement, the idea it turns on, the structure
 * underneath, and the belief it all rests on last.
 */
export default function MotivationPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Motivation"
        title="Thought Leadership"
        titleWidth="12ch"
        subtitle="Helping people find motivation in life, thought leadership, relationships and business."
        subtitleWidth="54ch"
        portrait="/images/portraits/pr.jpg"
        tone="ink"
      />

      <ShortForm />

      <VerbQuote verb="think" />

      <SixFoundations />

      <Creed />

      <BookingCTA onContactClick={onContactClick} />
    </div>
  );
}
