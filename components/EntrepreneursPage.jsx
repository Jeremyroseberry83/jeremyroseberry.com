import React from 'react';
import WhereIWork from './WhereIWork';
import { PageTopBand, BookingCTA } from './ui';

/**
 * Entrepreneurs — the businesses, and nothing else.
 *
 * The page is deliberately one thing: the banner, the tiers, the ask. The
 * figures that used to sit here moved to the home page, where they do more
 * work introducing someone who has not chosen a page yet; a reader who
 * clicked through to Entrepreneurs has already decided they want the detail,
 * so give them the detail rather than the headline numbers again.
 *
 * WhereIWork renders its display variant here — full-width tier headers and a
 * row per company, against the compact card grid the home page used to show.
 */
export default function EntrepreneursPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Entrepreneurs"
        title="What I’m Building"
        subtitle="Two tiers, seven companies, and two decades of learning the difference between a good idea and a business."
        image="/images/headers/entrepreneur.jpg"
        tone="taupe"
      />

      <WhereIWork variant="display" />

      <BookingCTA onContactClick={onContactClick} />
    </div>
  );
}
