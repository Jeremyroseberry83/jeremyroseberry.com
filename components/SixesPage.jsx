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

/**
 * The Rule of 5 — five things a day in each area, in Jeremy's own words.
 *
 * This replaced a block of four abstractions (Heat / Consistency / Recovery /
 * Stewardship) that could have been written about anybody. A list this
 * specific — a five-second hug, an Off The Farm bar, finished eating by
 * eight — is the opposite: nobody else could have written it, which is the
 * only thing that makes a values section worth reading.
 *
 * So keep it concrete if you edit it. The moment an item becomes a principle
 * rather than an action, it belongs somewhere else on the page.
 */
const RULE_OF_5 = [
  {
    area: 'Family',
    items: [
      'Make breakfast',
      'Hug them for at least five seconds',
      'Text them',
      'Tell them I love them',
      'Pray with them'
    ]
  },
  {
    area: 'Food',
    items: [
      'Big breakfast — eggs, avocado, toast, chicken sausage',
      'Lean and green lunch',
      'An Off The Farm bar',
      'Lean and savoury dinner, finished by eight',
      'Nothing artificial — water, coffee, the occasional whiskey'
    ]
  },
  {
    // DRAFT — written from Jeremy's old training block, turned from things he
    // believes into things he does. Wants his sign-off or his own five.
    area: 'Fitness',
    items: [
      'Train in the heat — 130 degrees, before the day gets a vote',
      'Lift something heavy',
      'Get outside on my feet',
      'Ten minutes of stretching, usually at night',
      'Asleep by ten, because the training only counts if you recover from it'
    ]
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
    image: '/images/pursuits/base-jumping.jpg'
  },
  {
    // DRAFT copy — replaced 130-degree training, which now lives in the Rule
    // of 5 as something he does rather than somewhere he goes.
    name: 'Coffee shops',
    body: 'The opposite of the other three. A corner table, two hours, and most of the thinking that ever actually gets done.',
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
          3 — RULE OF 5

          Navy, not the charcoal this page uses elsewhere: the photograph is
          a dark gym, and charcoal-on-charcoal turned the whole band muddy.

          The image is the full frame, uncropped, at its own 0.385 aspect —
          so it is tall and narrow, and the three lists beside it are taller
          still. That mismatch is the layout: the photo column is sticky on
          desktop, so the figure stays with you while you read all fifteen
          items instead of scrolling away after the first five.

          Reading order is fixed by the grid, not by source order — the copy
          block is written first in the DOM so a screen reader and a phone
          both get the heading before the photograph.
          ============================================================ */}
      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: PRIMARY_DEEP }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16 items-start">

          {/* Photo. Order flipped on desktop so it sits left of the copy while
              staying second in the document. */}
          <div className="md:col-span-4 md:order-first mx-auto md:mx-0" style={{ maxWidth: 340, width: '100%' }}>
            <div className="md:sticky" style={{ top: 104 }}>
              <img
                src="/images/fitness-training.jpg"
                alt=""
                aria-hidden="true"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>

          <div className="md:col-span-8">
            <SectionHead
              dark
              eyebrow="The daily"
              title="Rule Of 5"
              intro="Five things a day, in each area. Not goals — the things that happen whether I feel like it or not."
            />

            <div className="mt-12 md:mt-14 space-y-12">
              {RULE_OF_5.map((group) => (
                <div key={group.area}>
                  <div
                    className="flex items-baseline gap-4 pb-4"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.16)' }}
                  >
                    <h3 className="display" style={{ color: SECONDARY, fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)' }}>
                      {group.area}
                    </h3>
                    <span
                      className="eyebrow-wide"
                      style={{ color: 'rgba(255,255,255,0.38)', fontSize: 10, marginLeft: 'auto' }}
                    >
                      Five a day
                    </span>
                  </div>

                  {/* Two columns on wide screens: five short lines in a single
                      column beside a photo leaves a long empty gutter, and the
                      whole block ran taller than the page needed. */}
                  <ol
                    className="grid sm:grid-cols-2 gap-x-10 gap-y-4"
                    style={{ listStyle: 'none', marginTop: 20 }}
                  >
                    {group.items.map((item, i) => (
                      <li key={item} className="flex gap-3.5">
                        <span
                          className="display"
                          style={{
                            color: SECONDARY,
                            opacity: 0.55,
                            fontSize: 12,
                            letterSpacing: '0.1em',
                            paddingTop: 4,
                            flexShrink: 0
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span style={{ color: 'rgba(255,255,255,0.84)', fontSize: 15.5, lineHeight: 1.6 }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
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

          {/* gap-px over the section's own navy, so the dividing lines read
              as thin navy rules between cream cards rather than the pale
              hairline that worked when the cards were dark. */}
          <div className="mt-14 grid md:grid-cols-2 gap-px" style={{ backgroundColor: PRIMARY_DEEP }}>
            {PURSUITS.map((p, i) => (
              <article key={p.name} className="relative overflow-hidden" style={{ backgroundColor: BG, minHeight: 300 }}>
                {/* The photos are phone portraits. Stretching one across the
                    full card means cover-cropping a wide band out of a tall
                    frame, which cuts the head off every time. So the image
                    takes a portrait-shaped panel on the right and dissolves
                    left into the card, with the copy in the clear half. */}
                {p.image && (
                  <>
                    {/* Phone: the card is one column and only ~340px wide, so a
                        46% side panel would leave the copy about 140px to live
                        in. Full bleed with a vertical wash instead, same as the
                        page banners do. */}
                    <img
                      src={p.image}
                      alt=""
                      aria-hidden="true"
                      className="md:hidden absolute inset-0 w-full h-full object-cover"
                      style={{ objectPosition: 'center 22%' }}
                    />
                    <span
                      aria-hidden="true"
                      className="md:hidden absolute inset-0"
                      style={{ background: 'linear-gradient(180deg, rgba(245,245,245,0.55) 0%, rgba(245,245,245,0.92) 52%, rgba(245,245,245,0.99) 100%)' }}
                    />

                    <img
                      src={p.image}
                      alt=""
                      aria-hidden="true"
                      className="hidden md:block absolute inset-y-0 right-0 h-full object-cover"
                      style={{ width: '46%', objectPosition: 'center 28%' }}
                    />
                    <span
                      aria-hidden="true"
                      className="hidden md:block absolute inset-y-0 right-0"
                      style={{
                        width: '52%',
                        background: 'linear-gradient(90deg, rgba(245,245,245,1) 0%, rgba(245,245,245,0.6) 42%, rgba(245,245,245,0.1) 100%)'
                      }}
                    />
                  </>
                )}
                <div className={`relative p-9 h-full flex flex-col${p.image ? ' md:max-w-[62%]' : ''}`}>
                  {/* Set large deliberately. SECONDARY_DEEP on #f5f5f5 is
                      3.11:1 — under the 4.5:1 floor for small text, over the
                      3:1 floor for large. At 15px the old size it would have
                      failed; at this size it passes and reads better. */}
                  <span
                    className="display"
                    style={{ color: SECONDARY_DEEP, fontSize: 'clamp(1.6rem, 2.4vw, 2rem)', letterSpacing: '0.06em', marginBottom: 16, lineHeight: 1 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="display" style={{ color: SLATE, fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', marginBottom: 14 }}>
                    {p.name}
                  </h3>
                  <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.75 }}>{p.body}</p>
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

      <BookingCTA onContactClick={onContactClick} />
    </div>
  );
}
