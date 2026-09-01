import React from 'react';
import { Play, Music, Youtube, Radio, Mic, Headphones } from 'lucide-react';
import {
  PageTopBand,
  SectionHead,
  Testimonials,
  BookingCTA,
  Button,
  SECONDARY,
  SECONDARY_DEEP,
  PRIMARY,
  PRIMARY_DEEP,
  SLATE,
  MUTED,
  INK,
  BG
} from './ui';
import { cta } from '../site.config';

/**
 * Set `url` on each platform once the show is listed there.
 *
 * PLACEHOLDER MARKS: these tiles use each platform's brand colour with a
 * generic glyph and the name set in this site's own typeface. They are NOT the
 * platforms' logos and are not meant to pass as them — an approximated
 * trademark drawn from memory comes out wrong, and a wrong logo reads worse
 * than no logo. Every platform publishes official badge artwork free (Apple
 * Podcasts Identity Guidelines, Spotify Branding, YouTube Brand Resources,
 * iHeart, Amazon Music, Pandora). Download the badges for the platforms the
 * show actually lands on, drop them in /public/images/platforms/, and add a
 * `badge` path here — the tile will use it in place of the glyph.
 */
const PLATFORMS = [
  { name: 'Apple Podcasts', url: '', color: '#9933CC', icon: Mic },
  { name: 'Spotify', url: '', color: '#1DB954', icon: Music },
  { name: 'YouTube', url: '', color: '#FF0000', icon: Youtube },
  { name: 'iHeartRadio', url: '', color: '#C6002B', icon: Radio },
  { name: 'Amazon Music', url: '', color: '#25D1DA', icon: Headphones },
  { name: 'Pandora', url: '', color: '#3668FF', icon: Play }
];

const EPISODES = [
  {
    title: 'The Honest Middle',
    length: '10 min',
    description: 'Where the real work happens. Why most people quit. How to stay.',
    book: 'Four Levels of Success',
    links: { listen: '', watch: '' }
  },
  {
    title: 'Four Levels',
    length: '12 min',
    description: 'Not all success is equal. The four rungs. Why most stop at level two.',
    book: 'Four Levels of Success',
    links: { listen: '', watch: '' }
  },
  {
    title: 'Mindset is Discipline, Not a Mood',
    length: '9 min',
    description: 'Why motivation fails. Why systems work. How discipline compounds.',
    book: 'Adulting',
    links: { listen: '', watch: '' }
  },
  {
    title: 'Building People',
    length: '11 min',
    description: 'Your job isn’t to build companies. It’s to build people who build companies.',
    book: 'Adulting',
    links: { listen: '', watch: '' }
  },
  {
    title: 'Systems That Work',
    length: '8 min',
    description: 'What separates founders who scale from those who don’t. The unglamorous answer.',
    book: 'Four Levels of Success',
    links: { listen: '', watch: '' }
  }
];

/**
 * Covers at /images/books/*.png are PLACEHOLDERS generated to the brand
 * palette so the layout can be judged with real weight in it. Replace each
 * with the designed cover as it is finished — same filename, same 2:3-ish
 * proportion, transparent PNG with the shadow baked in.
 */
const BOOKS = [
  {
    year: '2027',
    title: 'Four Levels of Success',
    type: 'Fable',
    cover: '/images/books/four-levels-of-success.png',
    blurb:
      'A story about real success and why so many people never get there. The four rungs nobody talks about.',
    points: [
      'What each of the four levels looks like, and how to recognise which one you are on',
      'Why most people plateau at level two and mistake it for arriving',
      'How to push through to levels three and four without burning down what you built'
    ],
    links: { order: '', ebook: '', audiobook: '' }
  },
  {
    year: '2028',
    title: 'Adulting',
    type: 'Framework',
    cover: '/images/books/adulting.png',
    blurb:
      'Eight areas where even successful people remain children. A manual for recognising where you’re immature and finding the mentor who can help.',
    points: [
      'The eight areas where capable adults quietly stay teenagers',
      'How to diagnose which one is currently costing you the most',
      'How to find, ask, and keep a mentor who will tell you the truth'
    ],
    links: { order: '', ebook: '', audiobook: '' }
  },
  {
    year: '2029',
    title: 'Kicking Off Bottom',
    type: 'Memoir',
    cover: '/images/books/kicking-off-bottom.png',
    blurb:
      'My personal story of paralysis, breakthrough, and self-leadership. How I went from stuck to unstuck, and what I learned along the way.',
    points: [
      'What "stuck" actually feels like from the inside, and how to name it early',
      'The decision that broke the paralysis, and why it was smaller than it sounds',
      'What I would do differently if I had to climb out of it again'
    ],
    links: { order: '', ebook: '', audiobook: '' }
  },
  {
    year: '2030',
    title: 'Why Lying Works',
    type: 'Contrarian',
    cover: '/images/books/why-lying-works.png',
    blurb:
      'Why shortcuts cost more than we think. What separates those who fake it from those who don’t.',
    points: [
      'Why the shortcut works in the short run — and exactly where the bill arrives',
      'How to spot the difference between confidence and performance in a room',
      'What compounding integrity actually buys you over a career'
    ],
    links: { order: '', ebook: '', audiobook: '' }
  }
];

const LABELS = { order: 'Order now', ebook: 'Download ebook', audiobook: 'Audiobook' };

/**
 * The talk catalogue.
 *
 * `featured: true` renders the full treatment — number, title, audience,
 * description, and takeaways. Everything else drops into a compact list below.
 *
 * Why the split: a booking committee handed ten equally-weighted options
 * cannot choose, and an unchosen speaker is an unbooked speaker. Five leading
 * talks with the rest available as a "these are also in the repertoire" list
 * gives range without forcing a decision. To promote or demote a talk, flip
 * this one flag — no layout work.
 *
 * Note also that 01/08 (both about the middle) and 05/07 (both about
 * rebuilding) cover close ground; only one of each pair is featured so the
 * headline set reads as five distinct ideas rather than three plus variations.
 */
const TALKS = [
  {
    featured: true,
    title: 'The Honest Middle',
    audience: 'Founders, sales teams, leadership offsites',
    body:
      'Everyone posts the launch and the exit. Nobody posts the four years in between, which is where the actual work happens and where most people quit. A talk about staying in the middle long enough to get out the other side.',
    takeaways: [
      'Why the "overnight success" story is the most damaging thing in business media',
      'How to tell whether a hard season is a signal to stop or a cost of continuing',
      'The three questions to run before making a decision you cannot reverse'
    ]
  },
  {
    featured: true,
    title: 'Mindset Is a Discipline, Not a Mood',
    audience: 'Sales kickoffs, leadership conferences',
    body:
      'Motivation is a feeling and it leaves. Discipline is a system and it stays. This talk takes the word "mindset" off the poster and turns it into something a person can actually run on a Tuesday morning when nothing is going their way.',
    takeaways: [
      'Why motivation fails and systems work',
      'How to build discipline that compounds',
      'The specific habits that separate builders from everyone else'
    ]
  },
  {
    featured: true,
    title: 'Building People',
    audience: 'Leadership offsites, founder retreats',
    body:
      'Your job isn’t to build companies. It’s to build people who build companies. Most leaders never get this distinction. Those who do scale differently.',
    takeaways: [
      'The difference between managing performance and developing people',
      'How to know whether someone has potential or just enthusiasm',
      'Where to invest your coaching time for maximum return'
    ]
  },
  {
    featured: true,
    title: 'Systems That Work',
    audience: 'Operational leadership, scaling companies',
    body:
      'What separates founders who scale from those who don’t. The unglamorous answer: systems. Not vision. Not charisma. Systems.',
    takeaways: [
      'The four systems every scaled company has running',
      'How to build systems without killing the culture',
      'When to systematize and when to stay flexible'
    ]
  },
  {
    featured: true,
    title: 'Kicking Off Bottom',
    audience: 'Motivational keynotes, turnaround stories',
    body:
      'Personal story of paralysis to progress. How I got unstuck. How you can too.',
    takeaways: [
      'What "stuck" actually feels like and how to recognize it',
      'The decision that broke me out',
      'What I’d do differently if I had to do it again'
    ]
  },
  {
    title: 'Four Levels of Accomplishing Anything',
    audience: 'Sales conferences, founder panels',
    body: 'Not all success is equal. There are four levels. Most people stop at level two.',
    takeaways: [
      'What each level looks like and how to recognize it',
      'Why most people plateau at level two',
      'How to push through to level three and four'
    ]
  },
  {
    title: 'Starting Over',
    audience: 'Resilience panels, leadership conferences',
    body: 'What happens when everything changes. How to rebuild with clarity and without ego.',
    takeaways: [
      'How to tell the difference between a pivot and a restart',
      'What you keep and what you leave behind',
      'How to move fast without repeating the same mistakes'
    ]
  },
  {
    title: 'Lessons From Leading in the Middle',
    audience: 'Leadership development, manager training',
    body: 'The middle is where the real work happens. Why it’s uncomfortable. Why most people skip it. How to stay.',
    takeaways: [
      'Why the middle is where real leadership is built',
      'How to lead without the authority to force',
      'When staying is winning and when it’s time to go'
    ]
  },
  {
    title: 'Clarifying Vision',
    audience: 'Strategic planning, board retreats',
    body:
      'Most leaders are fuzzy on vision. How to get crystal clear. How to make decisions 10x faster once you are.',
    takeaways: [
      'The specific framework for defining vision',
      'How to communicate it so people actually understand',
      'How clarity speeds up every decision that follows'
    ]
  },
  {
    // Heads-up: this ordering leads with Finance, while "Let's Meet" says every
    // decision flows from values that predate the deal. If the intended
    // hierarchy is Faith first, change the title here — the body copy works
    // either way.
    title: 'Finance › Faith › Family › Fitness › Friends › Fun',
    audience: 'Wealth forums, lifestyle conferences',
    body: 'The hierarchy of decision-making. Why this order. What breaks when you reverse it.',
    takeaways: [
      'How to use this framework in your own life',
      'Where most people get the order wrong',
      'How to reset when you’ve drifted'
    ]
  }
];

export default function SpeakingPage({ onContactClick }) {
  const latest = EPISODES[0];

  const featured = TALKS.filter((t) => t.featured);
  const rest = TALKS.filter((t) => !t.featured);

  return (
    <div>
      <PageTopBand
        eyebrow="Speaking + Content"
        title="Signature Talks"
        subtitle="Keynotes, workshops and fireside conversations — plus the books and the podcast the material comes from."
        image="/images/headers/speaking.jpg"
        tone="ink"
        cta={cta.primary}
        onCta={() => onContactClick && onContactClick('Speaking')}
      />

      {/* SIGNATURE TALKS */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="The lineup"
            title="Most Requested"
            intro="These five get booked the most. The wider repertoire is listed underneath — any of them can headline."
          />

          <div className="mt-14 space-y-px" style={{ backgroundColor: '#e2e2e2' }}>
            {featured.map((talk, i) => (
              <article key={talk.title} className="grid md:grid-cols-12 gap-8 p-8 md:p-12" style={{ backgroundColor: '#ffffff' }}>
                <div className="md:col-span-5">
                  <div className="display" style={{ color: SECONDARY, fontSize: 20, letterSpacing: '0.1em', marginBottom: 14 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="display" style={{ color: SLATE, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: 14 }}>
                    {talk.title}
                  </h3>
                  <p className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 10 }}>
                    {talk.audience}
                  </p>
                </div>

                <div className="md:col-span-7">
                  <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8, marginBottom: 24 }}>{talk.body}</p>
                  <p className="eyebrow-wide" style={{ color: SLATE, fontSize: 10, marginBottom: 14 }}>
                    The room leaves with
                  </p>
                  <ul className="space-y-3">
                    {talk.takeaways.map((t) => (
                      <li key={t} className="flex gap-3" style={{ color: MUTED, fontSize: 15, lineHeight: 1.7 }}>
                        <span aria-hidden="true" style={{ color: SECONDARY, flexShrink: 0, fontWeight: 700 }}>
                          —
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {/* The wider repertoire — deliberately compact. Range without asking
              the reader to evaluate ten full descriptions. */}
          {rest.length > 0 && (
            <div className="mt-16">
              <p className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 10, marginBottom: 20 }}>
                Also in the repertoire
              </p>
              <div className="grid sm:grid-cols-2 gap-px" style={{ backgroundColor: '#e2e2e2' }}>
                {rest.map((talk, i) => (
                  <div key={talk.title} className="p-7" style={{ backgroundColor: '#ffffff' }}>
                    <div className="flex gap-4">
                      <span
                        className="display"
                        style={{ color: SECONDARY, fontSize: 15, letterSpacing: '0.1em', flexShrink: 0, paddingTop: 3 }}
                      >
                        {String(featured.length + i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h4 className="display" style={{ color: SLATE, fontSize: 18, marginBottom: 7 }}>
                          {talk.title}
                        </h4>
                        <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7, marginBottom: 8 }}>{talk.body}</p>
                        <p className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 9 }}>
                          {talk.audience}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
          THE BOOKS
          Merged in when Books & Podcast stopped being its own page. It
          sits after the talks because a reader who came to book wants the
          talks first; a reader who came for the writing scrolls.
          ============================================================ */}
      <section className="pt-16 md:pt-28 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="The writing"
            title="Four Levels of Success"
            intro="A four-year series on real leadership, real success, and why most people never get there. Built to give away at speaking events, share with your team, or read alone."
          />
        </div>
      </section>
      {BOOKS.map((book, i) => {
        const flip = i % 2 === 1;
        const liveLinks = Object.entries(book.links).filter(([, url]) => url);
        return (
          <section
            key={book.title}
            className={`px-6 ${i === 0 ? 'pt-20 md:pt-28 pb-16 md:pb-28' : 'py-16 md:py-28'}`}
            style={{ backgroundColor: i % 2 === 0 ? '#ffffff' : BG }}
          >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className={flip ? 'md:order-2' : ''}>
                <p className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 10, marginBottom: 14 }}>
                  Book {String(i + 1).padStart(2, '0')} · {book.type}
                </p>
                <h2
                  className="display"
                  style={{ color: SLATE, fontSize: 'clamp(2rem, 4.4vw, 3.2rem)', marginBottom: 20 }}
                >
                  {book.title}
                </h2>
                <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8, marginBottom: 28 }}>{book.blurb}</p>

                <p style={{ color: SLATE, fontSize: 16, fontWeight: 700, marginBottom: 16 }}>In this book, you’ll:</p>
                <ul className="space-y-4" style={{ marginBottom: 32 }}>
                  {book.points.map((pt) => (
                    <li key={pt} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        style={{ color: SECONDARY, flexShrink: 0, fontSize: 17, fontWeight: 700, lineHeight: 1.5 }}
                      >
                        ✓
                      </span>
                      <span style={{ color: MUTED, fontSize: 16, lineHeight: 1.75 }}>{pt}</span>
                    </li>
                  ))}
                </ul>

                {liveLinks.length > 0 ? (
                  <div className="flex flex-wrap gap-3">
                    {liveLinks.map(([key, url], n) => (
                      <Button key={key} variant={n === 0 ? 'gold' : 'quiet'} href={url}>
                        {LABELS[key]}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap items-center gap-4">
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        backgroundColor: MUTED,
                        padding: '6px 12px'
                      }}
                    >
                      Forthcoming {book.year}
                    </span>
                    <Button
                      variant="quiet"
                      onClick={() => onContactClick && onContactClick('Content', `Tell me when “${book.title}” is out.`)}
                    >
                      Tell me when it’s out
                    </Button>
                  </div>
                )}
              </div>

              <div className={`flex justify-center ${flip ? 'md:order-1 md:justify-start' : 'md:justify-end'}`}>
                <img
                  src={book.cover}
                  alt={`${book.title} — cover`}
                  loading="lazy"
                  style={{ display: 'block', width: '100%', maxWidth: 360, height: 'auto' }}
                />
              </div>
            </div>
          </section>
        );
      })}

      {/* ============================================================
          LATEST EPISODE + SUBSCRIBE
          ============================================================ */}
      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Episode card — the artwork panel doubles as the cover art until
              per-episode art exists. */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden" style={{ backgroundColor: INK, aspectRatio: '16 / 10' }}>
              <img
                src="/images/jeremy-navy-card.jpg"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
              />
              {/* Left-weighted wash: the figure sits on the right of that
                  composite, so the gradient darkens the left where the type
                  goes and leaves his face alone. */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(18,41,59,0.96) 0%, rgba(18,41,59,0.86) 42%, rgba(18,41,59,0.35) 78%, rgba(18,41,59,0.12) 100%)'
                }}
              />

              <div className="relative h-full flex flex-col justify-center p-8 md:p-12">
                <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 14 }}>
                  Latest episode
                </p>
                <h3
                  className="display"
                  style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 4vw, 3rem)', marginBottom: 14 }}
                >
                  {latest.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.85)',
                    fontSize: 16,
                    lineHeight: 1.7,
                    maxWidth: '44ch',
                    marginBottom: 26
                  }}
                >
                  {latest.description}
                </p>

                {latest.links.listen || latest.links.watch ? (
                  <div className="flex flex-wrap gap-3">
                    {latest.links.listen && (
                      <Button variant="gold" href={latest.links.listen}>
                        <Headphones size={16} />
                        Listen
                      </Button>
                    )}
                    {latest.links.watch && (
                      <Button variant="ghost" href={latest.links.watch}>
                        <Play size={16} />
                        Watch
                      </Button>
                    )}
                  </div>
                ) : (
                  <span className="eyebrow-wide" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10 }}>
                    Recording soon
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Subscribe grid */}
          <div className="lg:col-span-5">
            <h3 className="display" style={{ color: SLATE, fontSize: 'clamp(1.8rem, 3.6vw, 2.6rem)', marginBottom: 8 }}>
              Subscribe
            </h3>
            <p style={{ color: MUTED, fontSize: 16, marginBottom: 26 }}>Don’t miss any episode.</p>

            <div className="grid grid-cols-2 gap-3">
              {PLATFORMS.map((p) => {
                const live = Boolean(p.url);
                const Tag = live ? 'a' : 'div';
                const Glyph = p.icon;
                return (
                  <Tag
                    key={p.name}
                    {...(live ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-3 px-4 py-4"
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e2e2e2',
                      borderLeft: `3px solid ${p.color}`,
                      color: SLATE,
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: '0.03em',
                      minHeight: 66,
                      opacity: live ? 1 : 0.72,
                      transition: 'box-shadow 160ms ease, opacity 160ms ease'
                    }}
                    onMouseOver={(e) => {
                      if (live) e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <Glyph size={20} strokeWidth={1.9} style={{ color: p.color, flexShrink: 0 }} />
                    <span>{p.name}</span>
                  </Tag>
                );
              })}
            </div>

            {/* Shown while nothing is listed yet, so the grid reads as a
                roadmap rather than as six broken links. */}
            {!PLATFORMS.some((p) => p.url) && (
              <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, marginTop: 16 }}>
                Listings go live as each platform approves the show. Want the first episode when it
                drops?{' '}
                <button
                  type="button"
                  onClick={() => onContactClick && onContactClick('Content', 'Send me the first episode.')}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    color: SECONDARY_DEEP,
                    fontWeight: 600,
                    textDecoration: 'underline'
                  }}
                >
                  Tell me here.
                </button>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          EPISODE LIST
          Every row is a play control, not a paragraph. A podcast list that
          you read rather than press does not feel like a podcast — the
          circular button is the affordance that says "this is audio".
          Rows with no URL keep the same shape and go quiet rather than
          disappearing, so the layout does not reflow when episodes land.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: PRIMARY_DEEP }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="Podcast"
            title="Thoughts on Building, Leading, and What Actually Matters"
            intro="Short episodes. Real stories. Built to complement the books and give you ideas worth thinking about."
          />

          <div className="mt-14 space-y-3">
            {EPISODES.map((ep, i) => {
              const live = Boolean(ep.links.listen || ep.links.watch);
              const Row = live ? 'a' : 'div';
              return (
                <Row
                  key={ep.title}
                  {...(live
                    ? { href: ep.links.listen || ep.links.watch, target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group flex items-center gap-5 md:gap-7 p-5 md:p-6"
                  style={{
                    backgroundColor: PRIMARY,
                    border: '1px solid rgba(255,255,255,0.10)',
                    transition: 'background-color 180ms ease, border-color 180ms ease, transform 180ms ease'
                  }}
                  onMouseOver={(e) => {
                    if (!live) return;
                    e.currentTarget.style.backgroundColor = '#1f4666';
                    e.currentTarget.style.borderColor = SECONDARY;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = PRIMARY;
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)';
                  }}
                >
                  {/* Play control */}
                  <span
                    aria-hidden="true"
                    className="flex items-center justify-center flex-shrink-0"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      backgroundColor: live ? SECONDARY : 'transparent',
                      border: live ? 'none' : '1.5px solid rgba(255,255,255,0.28)',
                      color: live ? SLATE : 'rgba(255,255,255,0.42)'
                    }}
                  >
                    <Play size={20} fill={live ? SLATE : 'none'} strokeWidth={live ? 0 : 1.8} style={{ marginLeft: 3 }} />
                  </span>

                  <span className="display flex-shrink-0 hidden sm:block" style={{ color: SECONDARY, fontSize: 15, letterSpacing: '0.12em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="flex-1 min-w-0">
                    <span className="display block" style={{ color: '#ffffff', fontSize: 'clamp(1.1rem, 2vw, 1.45rem)', marginBottom: 5 }}>
                      {ep.title}
                    </span>
                    <span className="block" style={{ color: 'rgba(255,255,255,0.68)', fontSize: 14.5, lineHeight: 1.6 }}>
                      {ep.description}
                    </span>
                  </span>

                  <span className="flex-shrink-0 text-right">
                    <span className="eyebrow-wide block" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10, marginBottom: 6 }}>
                      {ep.length}
                    </span>
                    <span
                      className="block"
                      style={{ color: live ? SECONDARY : 'rgba(255,255,255,0.38)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}
                    >
                      {live ? 'Play' : 'Soon'}
                    </span>
                  </span>
                </Row>
              );
            })}
          </div>

          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13, marginTop: 20 }}>
            Each episode expands on a chapter — the book it belongs to is noted on the card once it is live.
          </p>
        </div>
      </section>

      {/* Empty until real quotes exist — see components/ui.jsx Testimonials. */}
      <Testimonials items={[]} />

      <BookingCTA
        onContactClick={onContactClick}
        context="Speaking"
        title="Ready to book?"
        body="Tell me about your event and what you are hoping people take away."
      />
    </div>
  );
}
