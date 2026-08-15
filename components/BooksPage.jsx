import React from 'react';
import { PageTopBand, SectionHead, BookingCTA, Button, SECONDARY, SECONDARY_DEEP, SLATE, MUTED, INK, BG } from './ui';

/**
 * "Books & Podcast" — the content platform.
 *
 * PUBLISHING HONESTY (read before adding buttons):
 * None of these have shipped yet — the series runs 2027–2030. Every purchase
 * and listen button below renders ONLY when its URL is a non-empty string.
 * A book with no links shows a "Forthcoming" marker and a notify button
 * instead. A dead "Download Ebook" button on a book that does not exist costs
 * more trust than the button was ever going to earn, and an organiser who
 * clicks one stops believing the rest of the site.
 *
 * To publish: paste the real URL into the `links` object and the button
 * appears. No layout work.
 */

const BOOKS = [
  {
    year: '2027',
    title: 'Four Levels of Success',
    type: 'Fable',
    description:
      'A story about real success and why so many people never get there. The four rungs nobody talks about.',
    links: { ebook: '', apple: '', audiobook: '' }
  },
  {
    year: '2028',
    title: 'Adulting',
    type: 'Framework',
    description:
      'Eight areas where even successful people remain children. A manual for recognizing where you’re immature and finding the mentor who can help.',
    links: { ebook: '', apple: '', audiobook: '' }
  },
  {
    year: '2029',
    title: 'Kicking Off Bottom',
    type: 'Memoir',
    description:
      'My personal story of paralysis, breakthrough, and self-leadership. How I went from stuck to unstuck, and what I learned along the way.',
    links: { ebook: '', apple: '', audiobook: '' }
  },
  {
    year: '2030',
    title: 'Why Lying Works',
    type: 'Contrarian',
    description:
      'Why shortcuts cost more than we think. What separates those who fake it from those who don’t.',
    links: { ebook: '', apple: '', audiobook: '' }
  }
];

const EPISODES = [
  {
    title: 'The Honest Middle',
    length: '10 min',
    description: 'Where the real work happens. Why most people quit. How to stay.',
    book: 'Four Levels',
    links: { apple: '', spotify: '' }
  },
  {
    title: 'Four Levels',
    length: '12 min',
    description: 'Not all success is equal. The four rungs. Why most stop at level two.',
    book: 'Four Levels',
    links: { apple: '', spotify: '' }
  },
  {
    title: 'Mindset is Discipline, Not a Mood',
    length: '9 min',
    description: 'Why motivation fails. Why systems work. How discipline compounds.',
    book: 'Adulting',
    links: { apple: '', spotify: '' }
  },
  {
    title: 'Building People',
    length: '11 min',
    description: 'Your job isn’t to build companies. It’s to build people who build companies.',
    book: 'Adulting',
    links: { apple: '', spotify: '' }
  },
  {
    title: 'Systems That Work',
    length: '8 min',
    description: 'What separates founders who scale from those who don’t. The unglamorous answer.',
    book: 'Four Levels',
    links: { apple: '', spotify: '' }
  }
];

function LinkButtons({ links, labels, onNotify, notifyLabel }) {
  const live = Object.entries(links).filter(([, url]) => url);
  if (live.length === 0) {
    return (
      <Button variant="quiet" size="sm" onClick={onNotify}>
        {notifyLabel}
      </Button>
    );
  }
  return (
    <div className="flex flex-wrap gap-2">
      {live.map(([key, url]) => (
        <Button key={key} variant="quiet" size="sm" href={url}>
          {labels[key]}
        </Button>
      ))}
    </div>
  );
}

export default function BooksPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Books & podcast"
        title="Four Levels of Success"
        subtitle="Adulting. Kicking Off Bottom. Why Lying Works."
        watermark="Books"
      />

      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto">
          <p style={{ color: MUTED, fontSize: 19, lineHeight: 1.8 }}>
            A four-year series on real leadership, real success, and why most people never get there.
            Available in ebook, audiobook, and paperback. Built to give away at speaking events, share
            with your team, or read alone.
          </p>
        </div>
      </section>

      {/* THE SERIES */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="The series"
            title="Four books, four years"
            intro="Each one stands alone. Read together they are a single argument about how people actually grow."
          />

          <div className="mt-14 space-y-px" style={{ backgroundColor: '#e2e2e2' }}>
            {BOOKS.map((book, i) => (
              <article key={book.title} className="grid md:grid-cols-12 gap-8 p-8 md:p-12" style={{ backgroundColor: '#ffffff' }}>
                <div className="md:col-span-4">
                  <div className="display" style={{ color: SECONDARY, fontSize: 20, letterSpacing: '0.1em', marginBottom: 14 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="display" style={{ color: SLATE, fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', marginBottom: 12 }}>
                    {book.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className="eyebrow-wide"
                      style={{ color: SECONDARY_DEEP, fontSize: 10 }}
                    >
                      {book.type}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        backgroundColor: MUTED,
                        padding: '4px 10px'
                      }}
                    >
                      Forthcoming {book.year}
                    </span>
                  </div>
                </div>

                <div className="md:col-span-8">
                  <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8, marginBottom: 24 }}>{book.description}</p>
                  <LinkButtons
                    links={book.links}
                    labels={{ ebook: 'Download ebook', apple: 'Listen on Apple', audiobook: 'Audiobook on Amazon' }}
                    onNotify={() => onContactClick && onContactClick('Content', `Tell me when “${book.title}” is out.`)}
                    notifyLabel={`Tell me when it’s out`}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PODCAST */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="Podcast"
            title="Thoughts on Building, Leading, and What Actually Matters"
            intro="Short episodes. Real stories. Built to complement the books and give you ideas worth thinking about."
          />

          <div className="mt-14 space-y-px" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
            {EPISODES.map((ep, i) => (
              <article key={ep.title} className="grid md:grid-cols-12 gap-6 p-7 md:p-9" style={{ backgroundColor: INK }}>
                <div className="md:col-span-1">
                  <span className="display" style={{ color: SECONDARY, fontSize: 16, letterSpacing: '0.1em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <h3 className="display" style={{ color: '#ffffff', fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)', marginBottom: 8 }}>
                    {ep.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: 15, lineHeight: 1.7 }}>{ep.description}</p>
                </div>
                <div className="md:col-span-4 flex flex-col md:items-end gap-3">
                  <span className="eyebrow-wide" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10 }}>
                    {ep.length} · in {ep.book}
                  </span>
                  {Object.values(ep.links).some(Boolean) ? (
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {ep.links.apple && (
                        <Button variant="ghost" size="sm" href={ep.links.apple}>
                          Apple
                        </Button>
                      )}
                      {ep.links.spotify && (
                        <Button variant="ghost" size="sm" href={ep.links.spotify}>
                          Spotify
                        </Button>
                      )}
                    </div>
                  ) : (
                    <span style={{ color: 'rgba(255,255,255,0.42)', fontSize: 13 }}>Recording soon</span>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Button variant="gold" onClick={() => onContactClick && onContactClick('Content', 'Send me episodes as they publish.')}>
              Get episodes as they drop
            </Button>
          </div>
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
