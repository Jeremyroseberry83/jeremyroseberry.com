import React from 'react';
import { Download, Mic, Volume2, Star, Play, Headphones, Music, Youtube, Radio } from 'lucide-react';
import { PageTopBand, SectionHead, BookingCTA, Button, SECONDARY, SECONDARY_DEEP, PRIMARY, PRIMARY_DEEP, SLATE, MUTED, INK, BG } from './ui';

/**
 * "Books & Podcast" — the content platform.
 *
 * ============================================================
 * PUBLISHING HONESTY — read before adding a button or a number.
 * ============================================================
 * Nothing here has shipped: the series runs 2027–2030 and the show has not
 * launched. Two rules keep that from becoming a credibility problem:
 *
 *  1. Every purchase / listen / subscribe button renders ONLY when its URL is
 *     a non-empty string. No URL, no button. A dead "Download Ebook" on a book
 *     that does not exist costs more trust than the button could ever earn,
 *     and an organiser who clicks one stops believing the rest of the site.
 *
 *  2. The stats bar renders ONLY when STATS has entries. The reference design
 *     this is modelled on runs "100 million downloads" across the top — that
 *     bar is doing all the persuasive work, and it works precisely because the
 *     numbers are real. Putting invented numbers in the same slot inverts the
 *     effect the first time somebody checks. Add each figure the day it is
 *     true, not before.
 *
 * To go live: paste real URLs into the `links` objects and real figures into
 * STATS. No layout work in either case.
 */

/** e.g. { icon: 'download', value: '100,000', label: 'Downloads' } */
const STATS = [];

const STAT_ICONS = { download: Download, mic: Mic, volume: Volume2, star: Star };

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

export default function BooksPage({ onContactClick }) {
  const latest = EPISODES[0];

  return (
    <div>
      <PageTopBand
        eyebrow="Books & podcast"
        title="Four Levels of Success"
        subtitle="Adulting. Kicking Off Bottom. Why Lying Works."
        image="/images/headers/books.jpg"
        tone="deep"
      />

      {/* ============================================================
          THE BOOKS — alternating cover / copy
          ============================================================ */}
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
          STATS BAR — hidden until the numbers are real. See the note at
          the top of this file.
          ============================================================ */}
      {STATS.length > 0 && (
        <section className="px-6" style={{ backgroundColor: INK }}>
          <div
            className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4"
            style={{ backgroundColor: '#ffffff', transform: 'translateY(-1px)' }}
          >
            {STATS.map((s, i) => {
              const Icon = STAT_ICONS[s.icon] || Star;
              return (
                <div
                  key={s.label}
                  className="flex items-center gap-4 px-6 py-8 justify-center"
                  style={{ borderLeft: i === 0 ? 'none' : '1px solid #e2e2e2' }}
                >
                  <Icon size={26} strokeWidth={1.6} style={{ color: SECONDARY, flexShrink: 0 }} />
                  <div>
                    <div style={{ color: SLATE, fontSize: 17, fontWeight: 700, lineHeight: 1.25 }}>{s.value}</div>
                    <div style={{ color: MUTED, fontSize: 14, lineHeight: 1.3 }}>{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

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

      <BookingCTA
        onContactClick={onContactClick}
        context="Speaking"
        title="Want the full framework in your room?"
        body="The books and the keynotes are the same ideas in different formats. Tell me which room you are filling."
      />
    </div>
  );
}
