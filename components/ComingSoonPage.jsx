import React from 'react';
import PodcastLaunch from './PodcastLaunch';
import {
  PageTopBand,
  SectionHead,
  BookingCTA,
  SECONDARY,
  SECONDARY_DEEP,
  PRIMARY,
  PRIMARY_DEEP,
  SLATE,
  MUTED,
  BG
} from './ui';

/**
 * Coming Soon — the content platform, stated as a plan rather than a product.
 *
 * This page exists because the alternative was worse in both directions. A
 * "Resources" tab holding four unwritten books and an unlaunched podcast
 * claimed a body of work that does not exist. Deleting it left the site
 * silent about the thing Jeremy is actually spending his time on.
 *
 * So: everything here is written in the future tense, dated where a date is
 * real, and nothing offers a link to buy or listen. A reader should finish it
 * knowing exactly what stage this is at. That honesty is the asset — announcing
 * early and letting people watch it get built is a stronger position than
 * arriving with a finished shelf and no audience.
 *
 * RULE FOR ANYONE EDITING THIS FILE: nothing here gets a purchase link, a
 * play button, or a testimonial until the thing is real. The moment a book
 * ships or the podcast launches, that item moves off this page onto a
 * Resources page — it does not quietly turn into a product listing here.
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
  }
];

export default function ComingSoonPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="In progress"
        title="What I’m Building"
        subtitle="A leadership and thought-leadership platform — the podcast, the books, and the speaking. None of it has launched. Here is the plan, and where each piece actually stands."
        image="/images/headers/speaking.jpg"
        tone="ink"
      />

      {/* ============================================================
          1 — THE HONEST PART
          The page's whole credibility rests on saying this plainly and
          first, before anything that could read as a claim.
          ============================================================ */}
      <section className="px-6 py-16 md:py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-3xl mx-auto">
          <SectionHead
            eyebrow="Where this stands"
            title="Not Launched Yet"
            intro="I have spent twenty years building businesses. For the last few I have been studying, writing, and quietly preparing a second thing: a platform for leadership, business thinking, and motivation."
          />
          <div style={{ marginTop: 30 }}>
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.85, marginBottom: 22 }}>
              Nothing on this page is finished. The books are outlined and being written. The
              podcast has a launch date and a format. The speaking is something I am working
              toward deliberately rather than something I already do.
            </p>
            <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.85, marginBottom: 22 }}>
              I would rather tell you that than let a website imply otherwise. If you have read
              anything else on this site, you know the businesses are real and the years behind
              them are real. This part is the one I am still earning.
            </p>
            <p style={{ color: SLATE, fontSize: 17, lineHeight: 1.85, fontWeight: 500 }}>
              If it interests you, follow along. The first thing lands in January.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          2 — THE PODCAST. The one dated, committed piece, so it goes
          first among the three. Same block the home page carries.
          ============================================================ */}
      <PodcastLaunch />

      {/* ============================================================
          3 — THE WRITING
          Four books with years attached. Deliberately no covers-as-
          product-shots framing and no buy buttons — these are a
          publishing plan, and the year is the honest headline.
          ============================================================ */}
      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="The writing"
            title="Four Books, Four Years"
            intro="A series, written in order, each one building on the last. The years are targets I am working to, not release dates you can hold me to."
          />

          <div className="mt-14 space-y-px" style={{ backgroundColor: '#e2e2e2' }}>
            {BOOKS.map((b, i) => (
              <article
                key={b.title}
                className="grid md:grid-cols-12 gap-6 md:gap-10 items-start p-7 md:p-9"
                style={{ backgroundColor: '#ffffff' }}
              >
                <div className="md:col-span-2 flex md:block items-center gap-4">
                  <span
                    className="display"
                    style={{ color: SECONDARY_DEEP, fontSize: 'clamp(1.8rem, 3.4vw, 2.6rem)', lineHeight: 1 }}
                  >
                    {b.year}
                  </span>
                  <span
                    className="eyebrow-wide block"
                    style={{ color: MUTED, fontSize: 10, marginTop: 8 }}
                  >
                    {b.type}
                  </span>
                </div>

                <div className="md:col-span-3">
                  <img
                    src={b.cover}
                    alt=""
                    aria-hidden="true"
                    style={{ width: '100%', maxWidth: 190, display: 'block' }}
                  />
                </div>

                <div className="md:col-span-7">
                  <h3 className="display" style={{ color: SLATE, fontSize: 'clamp(1.4rem, 2.6vw, 1.9rem)', marginBottom: 12 }}>
                    {b.title}
                  </h3>
                  <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.75, marginBottom: 18 }}>{b.blurb}</p>
                  <ul className="space-y-2" style={{ listStyle: 'none' }}>
                    {b.points.map((pt) => (
                      <li key={pt} className="flex gap-3" style={{ color: MUTED, fontSize: 14.5, lineHeight: 1.7 }}>
                        <span aria-hidden="true" style={{ color: SECONDARY, flexShrink: 0 }}>›</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className="eyebrow-wide"
                    style={{ color: SECONDARY_DEEP, fontSize: 10, marginTop: 20 }}
                  >
                    {i === 0 ? 'In progress' : 'Outlined'}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4 — THE SPEAKING
          The piece with no date and no artefact, so it gets the least
          space and the plainest language. Anything more would be the
          exact overclaim this page exists to avoid.
          ============================================================ */}
      <section className="relative overflow-hidden px-6 py-16 md:py-28" style={{ backgroundColor: PRIMARY_DEEP }}>
        <div
          className="hero-wedge absolute inset-y-0 right-0 hidden md:block"
          style={{ width: '42%', backgroundColor: PRIMARY, opacity: 0.55 }}
        />
        <div className="relative max-w-3xl mx-auto">
          <SectionHead
            dark
            eyebrow="The speaking"
            title="The Part I Am Working Toward"
            intro="A leadership and motivation platform — stages, teams, rooms of founders. This is the piece with no launch date, because it is the piece you do not get to schedule."
          />
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, lineHeight: 1.85, marginTop: 26 }}>
            I am studying it properly: the material, the craft, the people who do it well. When
            I stand in front of a room I want it to be because I have something worth an hour of
            everyone’s time, not because a website said I was available.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, lineHeight: 1.85, marginTop: 20 }}>
            If you run an event and want to talk early — before there is a reel, a fee, or a
            one-sheet — that is a conversation I would genuinely like to have.
          </p>
        </div>
      </section>

      <BookingCTA onContactClick={onContactClick} />
    </div>
  );
}
