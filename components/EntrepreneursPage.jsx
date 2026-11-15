import React from 'react';
import VerbQuote from './VerbQuote';
import { ArrowUpRight, Play } from 'lucide-react';
import ValueStatement from './ValueStatement';
import WhereIWork from './WhereIWork';
import {
  PageTopBand,
  BookingCTA,
  SectionHead,
  SECONDARY,
  SECONDARY_DEEP,
  SLATE,
  MUTED,
  INK
} from './ui';

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

/**
 * "Fitness + Fun + Friends" — the human page.
 *
 * The rest of the site is competence. This one is character, and it is the
 * page that makes a stranger want to have dinner with him rather than just
 * hire him. Which means the writing has to stay specific: "I stay active" is
 * worth nothing, "130-degree rooms and base jumping into water" is worth the
 * whole page.
 *
 * Everything marked FILL below is a slot. Each renders honestly while empty
 * rather than printing a bracket on a live page.
 */



/**
 * The six F's, in Jeremy's order. Faith, Family and Finances used to sit on
 * the Entrepreneurs page while Fitness, Friends and Fun sat here, which made
 * both pages argue two things at once. All six live together now.
 */


/**
 * MEDIA — clips and photographs, mostly pulled from Instagram.
 *
 * Empty renders nothing; add entries and the grid appears. `video: true` puts
 * a play badge on the tile and, if `href` is set, the tile links out to the
 * post rather than trying to play inline — an embedded player per tile would
 * cost more in weight and autoplay policy headaches than it buys on a page
 * that is really a contact sheet.
 *
 * Filenames the intake script already expects:
 *   reel-surf-01 … reel-surf-04     reel-lift-01 … reel-lift-04
 *   reel-family-01 … reel-family-04 reel-host-01 … reel-host-04
 *
 *   { src: '/images/reels/surf-01.jpg', label: 'Jet surfing', video: true, href: '' }
 */
const MEDIA = [];

/**
 * FILL — the adrenaline list. These are real and specific, which is the whole
 * point; add photos as they exist and swap `image` in.
 */


/**
 * FILL — people. Empty renders nothing rather than an empty shelf.
 * Naming someone publicly is their call as much as yours, so ask first.
 *
 *   { name: 'Full Name', role: 'What they do', note: 'How you know them', url: '' }
 */
const FRIENDS = [];

export default function EntrepreneursPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="About"
        title="Jeremy"
        subtitle="There are only two roles in my life that make me “unique” — husband and dad. I am not looking to replace myself in either one. Every other position, somebody else will eventually do."
        subtitleWidth="62ch"
        portrait="/images/portraits/about.jpg"
        tone="deep"
      />

      <ValueStatement />

      <WhereIWork variant="display" only="Capital Markets" />

      <VerbQuote verb="lead" />

      <WhereIWork variant="display" only="Real Estate" heading={false} />




      {/* ============================================================
          2 — THE CONTACT SHEET
          Clips and photographs. Renders nothing until there are files —
          an empty grid of grey boxes reads as broken, not as coming soon.
          ============================================================ */}
      {MEDIA.length > 0 && (
        <section className="py-16 md:py-28 px-6" style={{ backgroundColor: INK }}>
          <div className="max-w-6xl mx-auto">
            <SectionHead
              dark
              eyebrow="Off the feed"
              title="Surfing, Lifting, Family, Hosting"
              intro="The week as it actually looks, pulled from Instagram."
            />
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3">
              {MEDIA.map((m) => {
                const Tile = m.href ? 'a' : 'div';
                return (
                  <Tile
                    key={m.src}
                    {...(m.href ? { href: m.href, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="relative overflow-hidden group"
                    style={{ aspectRatio: '4 / 5', backgroundColor: '#3a3a3a' }}
                  >
                    <img src={m.src} alt={m.label || ''} loading="lazy" className="w-full h-full object-cover" />
                    {m.video && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: 'rgba(42,42,42,0.28)' }}
                      >
                        <span
                          className="flex items-center justify-center"
                          style={{ width: 48, height: 48, borderRadius: '50%', backgroundColor: SECONDARY, color: SLATE }}
                        >
                          <Play size={19} fill={SLATE} strokeWidth={0} style={{ marginLeft: 3 }} />
                        </span>
                      </span>
                    )}
                    {m.label && (
                      <span
                        className="absolute left-0 right-0 bottom-0 p-3"
                        style={{
                          background: 'linear-gradient(180deg, transparent, rgba(42,42,42,0.85))',
                          color: '#ffffff',
                          fontSize: 12,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase'
                        }}
                      >
                        {m.label}
                      </span>
                    )}
                  </Tile>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          3 — FRIENDS
          Renders nothing while FRIENDS is empty. Naming someone in public
          is their decision as much as his, so this stays opt-in.
          ============================================================ */}
      {FRIENDS.length > 0 && (
        <section className="py-16 md:py-28 px-6" style={{ backgroundColor: '#ffffff' }}>
          <div className="max-w-6xl mx-auto">
            <SectionHead
              eyebrow="Friends"
              title="The People Around It"
              intro="Some of these I do business with. All of them would tell you the truth about me, which is the only qualification that matters."
            />
            <div className="grid md:grid-cols-3 gap-px mt-14" style={{ backgroundColor: '#e2e2e2' }}>
              {FRIENDS.map((f) => {
                const Wrap = f.url ? 'a' : 'div';
                return (
                  <Wrap
                    key={f.name}
                    {...(f.url ? { href: f.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="p-9"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    <h3 className="display" style={{ color: SLATE, fontSize: 20, marginBottom: 6 }}>
                      {f.name}
                    </h3>
                    <p className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 11.5, marginBottom: 14 }}>
                      {f.role}
                    </p>
                    <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75 }}>{f.note}</p>
                    {f.url && <ArrowUpRight size={16} style={{ color: SECONDARY, marginTop: 16 }} />}
                  </Wrap>
                );
              })}
            </div>
          </div>
        </section>
      )}


      <BookingCTA onContactClick={onContactClick} />

    </div>
  );
}
