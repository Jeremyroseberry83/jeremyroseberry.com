import React from 'react';
import {
  PageTopBand,
  SectionHead,
  Testimonials,
  BookingCTA,
  SECONDARY,
  SECONDARY_DEEP,
  SLATE,
  MUTED,
  INK,
  BG
} from './ui';
import { cta } from '../site.config';

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
  const featured = TALKS.filter((t) => t.featured);
  const rest = TALKS.filter((t) => !t.featured);

  return (
    <div>
      <PageTopBand
        eyebrow="Speaking"
        title="Signature Talks"
        subtitle="Keynotes, workshops, fireside conversations. Built for your room."
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
