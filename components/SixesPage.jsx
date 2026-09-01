import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import {
  PageTopBand,
  SectionHead,
  TopicCards,
  BookingCTA,
  SECONDARY,
  SECONDARY_DEEP,
  PRIMARY_DEEP,
  SLATE,
  MUTED,
  INK,
  BG
} from './ui';

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

const DISCIPLINES = [
  {
    title: 'Heat',
    body: 'Training in 130-degree rooms. The point is not the sweat — it is proving to yourself that discomfort is survivable before the day makes that argument for you.'
  },
  {
    title: 'Consistency',
    body: 'Showing up on the days it is inconvenient. Nobody is impressed by the workout you did when you felt like it.'
  },
  {
    title: 'Recovery',
    body: 'Sleep, food and the discipline to stop. The people who burn out are usually the ones who never learned this half.'
  },
  {
    title: 'Stewardship',
    body: 'The body is on loan. How you show up for it is how you will show up for everything that depends on you.'
  }
];

/**
 * The six F's, in Jeremy's order. Faith, Family and Finances used to sit on
 * the Entrepreneurs page while Fitness, Friends and Fun sat here, which made
 * both pages argue two things at once. All six live together now.
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
const PURSUITS = [
  {
    name: 'Jet surfing',
    body: 'Motorised board, open water, no forgiveness for a bad decision. Closest thing to flying at sea level.',
    image: '/images/pursuits/jet-surfing.jpg'
  },
  {
    name: 'Skydiving',
    body: 'The part nobody tells you about is the quiet before the door opens.',
    image: '/images/pursuits/skydiving.jpg'
  },
  {
    name: 'Base jumping into water',
    body: 'A cliff, a countdown, and about four seconds where nothing else in your life exists.',
    image: ''
  },
  {
    name: '130-degree training',
    body: 'The unglamorous one, and the one that actually changes how the other three feel.',
    image: ''
  }
];


/**
 * FILL — people. Empty renders nothing rather than an empty shelf.
 * Naming someone publicly is their call as much as yours, so ask first.
 *
 *   { name: 'Full Name', role: 'What they do', note: 'How you know them', url: '' }
 */
const FRIENDS = [];

export default function SixesPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Foundation"
        title="The Real Me"
        subtitle="Discipline, adrenaline, and the slow enjoyment of very simple things. Usually in the same week."
        video="/videos/six-hero.mp4"
        poster="/images/six-hero-poster.jpg"
        tone="ink"
      />

      {/* ============================================================
          1 — THE SIX
          All six on one page. The order is the argument.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            maxWidth="62ch"
            eyebrow="This is me"
            title="The Six Foundations"
            intro="Faith, Family, Fitness, Finances, Friends, Fun. In that order, and all six load-bearing. Let one slip and everything built on top of it moves. If I ever look like I am coming apart, or just off, it is because one of these is off — and I need to recalibrate my rhythms before I try to fix anything else."
          />
          <div className="mt-14">
            <TopicCards cards={SIXES} />
          </div>
        </div>
      </section>

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
          3 — DISCIPLINE
          Photograph bleeding off the left edge, disciplines as an
          editorial list on the right. The bordered four-across grid this
          replaces gave four equal boxes on white — accurate, and completely
          inert. A page about physical discipline should look like effort,
          which means a dark ground, a real photograph, and type that has
          somewhere to go.
          ============================================================ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
        {/* Desktop: the photo runs the full height of the section and off the
            left edge of the viewport, with a gradient dissolving its right
            side into the ground so there is no hard seam against the type. */}
        <div className="hidden md:block absolute inset-y-0 left-0" style={{ width: '44%' }}>
          <img
            src="/images/fitness-training.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <span
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'linear-gradient(90deg, transparent 0%, transparent 55%, rgba(42,42,42,0.85) 88%, rgba(42,42,42,1) 100%)' }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-28">
          {/* Mobile: same photo as a band above the copy. */}
          <div className="md:hidden" style={{ aspectRatio: '4 / 3', overflow: 'hidden', marginBottom: 40 }}>
            <img
              src="/images/fitness-training.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>

          <div className="md:grid md:grid-cols-12">
            <div className="md:col-start-6 md:col-span-7">
              <SectionHead
                dark
                eyebrow="Fitness"
                title="How I Train"
                intro="One of the six, and the one that holds the others steady when they start to slip. Not vanity — the daily proof that I can do a hard thing on purpose."
              />

              <ul className="mt-12">
                {DISCIPLINES.map((d, i) => (
                  <li
                    key={d.title}
                    className="flex gap-6 py-7"
                    style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.14)' }}
                  >
                    <span
                      className="display flex-shrink-0"
                      style={{ color: SECONDARY, fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1, width: '2.2em' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span>
                      <span className="display block" style={{ color: '#ffffff', fontSize: 'clamp(1.15rem, 2vw, 1.5rem)', marginBottom: 8 }}>
                        {d.title}
                      </span>
                      <span className="block" style={{ color: 'rgba(255,255,255,0.74)', fontSize: 16, lineHeight: 1.75 }}>
                        {d.body}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4 — ADRENALINE
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: PRIMARY_DEEP }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="Fun"
            title="Where I Go To Feel Alive"
            intro="Not a bucket list. These are the things that reset me — and the reason I can sit still in a board meeting the next morning."
          />

          <div className="mt-14 grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
            {PURSUITS.map((p, i) => (
              <article key={p.name} className="relative overflow-hidden" style={{ backgroundColor: INK, minHeight: 300 }}>
                {/* The photos are phone portraits. Stretching one across the
                    full card means cover-cropping a wide band out of a tall
                    frame, which cuts the head off every time. So the image
                    takes a portrait-shaped panel on the right and dissolves
                    left into the card, with the copy in the clear half. */}
                {p.image && (
                  <>
                    <img
                      src={p.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-y-0 right-0 h-full object-cover"
                      style={{ width: '46%', objectPosition: 'center 28%' }}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 right-0"
                      style={{
                        width: '52%',
                        background: 'linear-gradient(90deg, rgba(42,42,42,1) 0%, rgba(42,42,42,0.55) 40%, rgba(42,42,42,0.12) 100%)'
                      }}
                    />
                  </>
                )}
                <div
                  className="relative p-9 h-full flex flex-col"
                  style={p.image ? { maxWidth: '62%' } : undefined}
                >
                  <span className="display" style={{ color: SECONDARY, fontSize: 15, letterSpacing: '0.14em', marginBottom: 18 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="display" style={{ color: '#ffffff', fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', marginBottom: 14 }}>
                    {p.name}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.76)', fontSize: 16, lineHeight: 1.75 }}>{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          5 — FRIENDS
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
                    <p className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 10, marginBottom: 14 }}>
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

      <BookingCTA onContactClick={onContactClick} context="Speaking" />
    </div>
  );
}
