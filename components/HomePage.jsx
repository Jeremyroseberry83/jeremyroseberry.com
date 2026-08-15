import React from 'react';
import { Button, INK } from './ui';
import { company, cta } from '../site.config';

/**
 * HomePage — the brand graphic, full width, and one button. Nothing else.
 *
 * No footer (pages/index.jsx suppresses it here) and no sections below. The
 * page is a doorway: the only ways out are the nav and the single button.
 *
 * The artwork already contains the headline, the tagline and the portrait, so
 * nothing is drawn on top of it — anything added here would compete with type
 * that is already in the image.
 *
 * DESKTOP: the section takes the image's own 16:9 ratio, so the graphic is
 * never cropped and never letterboxed. Fitting a fixed 16:9 image to an
 * arbitrary viewport height forces a choice between cutting the edges off
 * (object-fit: cover, which clips "HONEST STORIES" on shorter laptops) or
 * black bars (contain). Sizing the container to the image instead avoids both.
 *
 * MOBILE: a 16:9 graphic on a portrait phone renders only about 220px tall,
 * and the type baked into it is unreadable at that size. For now the image is
 * shown complete and centred on the charcoal ground with the button beneath
 * it — nothing is cropped, it is just small.
 *
 * The real fix is a portrait export of the same artwork (roughly 4:5, with the
 * headline stacked above the portrait). When that exists, swap the <img> below
 * for a <picture> with a `(max-width: 767px)` source. Don't add the <picture>
 * before the file exists: a matching <source> pointing at a 404 renders a
 * broken image rather than falling back.
 */
export default function HomePage({ onContactClick }) {
  return (
    <section className="relative" style={{ backgroundColor: INK }}>
      {/* ---------- Desktop / tablet ----------
          Sits below the nav rather than under it. The artwork's top edge is
          light gray, so nav type laid over it washes out and a scrim heavy
          enough to fix that would dirty the top of the image. The white nav
          bar above it picks up the same light-gray tone instead. */}
      <div className="hidden md:block relative" style={{ width: '100%', aspectRatio: '16 / 9', marginTop: 76 }}>
        <img
          src="/images/hero-honest-stories.jpg"
          alt={`${company.name} — Honest Stories. ${company.tagline}`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />

        {/* The single button, overlaying the artwork. Positioned under the
            "LEADER. SPEAKER. ENTREPRENEUR." bar rather than centred, so it
            reads as part of the lockup instead of floating over the portrait.
            Percentages, not pixels, so it tracks the artwork as it scales. */}
        <div style={{ position: 'absolute', left: '47.5%', top: '76%' }}>
          <Button variant="gold" size="lg" onClick={() => onContactClick && onContactClick('Speaking')}>
            {cta.primary}
          </Button>
        </div>
      </div>

      {/* ---------- Mobile ---------- */}
      <div
        className="md:hidden flex flex-col justify-center"
        style={{ minHeight: '100svh', paddingTop: 96, paddingBottom: 48 }}
      >
        <img
          src="/images/hero-honest-stories.jpg"
          alt={`${company.name} — Honest Stories. ${company.tagline}`}
          style={{ width: '100%', display: 'block' }}
        />

        <div className="px-6" style={{ marginTop: 36 }}>
          <Button variant="gold" size="lg" full onClick={() => onContactClick && onContactClick('Speaking')}>
            {cta.primary}
          </Button>
        </div>
      </div>
    </section>
  );
}
