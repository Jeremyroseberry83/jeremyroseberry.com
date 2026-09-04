import React, { useState } from 'react';
import { Play } from 'lucide-react';
import PodcastLaunch from './PodcastLaunch';
import {
  PageTopBand,
  SectionHead,
  BookingCTA,
  SECONDARY,
  SECONDARY_DEEP,
  PRIMARY_DEEP,
  SLATE,
  MUTED,
  BG
} from './ui';

/**
 * Speaking — two blocks, as asked: the topics, then the podcast.
 *
 * The clips sit above both. They are the only first-hand evidence on this
 * page, and a visitor deciding whether they want Jeremy in a room will believe
 * forty seconds of him talking over any amount of copy about what he talks
 * about. Everything below them is a menu; this is the tasting.
 *
 * VIDEO LOADING: preload="none" and no autoplay. Four clips at ~13MB each is
 * 54MB — autoplaying or preloading them would make this the most expensive
 * page on the site by an order of magnitude, on a page people reach from a
 * phone. Nothing is fetched until a poster is clicked.
 */

const CLIPS = [
  { id: 1, label: 'On staying in the middle' },
  { id: 2, label: 'On the long view' },
  { id: 3, label: 'On getting ahead of it' },
  { id: 5, label: 'On moving first' }
];

/**
 * The topics. Recovered from the talks list built earlier in this project.
 * Each is a subject Jeremy speaks on, with the room it is built for — an
 * organiser scans the audience line first, so it is set as the eyebrow.
 */
const TOPICS = [
  {
    title: 'The Honest Middle',
    audience: 'Founders, sales teams, leadership offsites',
    body: 'Everyone posts the launch and the exit. Nobody posts the four years in between, which is where the actual work happens and where most people quit.'
  },
  {
    title: 'Mindset Is a Discipline, Not a Mood',
    audience: 'Sales kickoffs, leadership conferences',
    body: 'Motivation is a feeling and it leaves. Discipline is a system and it stays. Taking the word off the poster and turning it into something you can run on a Tuesday.'
  },
  {
    title: 'Building People',
    audience: 'Leadership offsites, founder retreats',
    body: 'Your job is not to build companies. It is to build people who build companies. Most leaders never get this distinction; the ones who do scale differently.'
  },
  {
    title: 'Systems That Work',
    audience: 'Operational leadership, scaling companies',
    body: 'What separates founders who scale from those who do not. The unglamorous answer: systems. Not vision, not charisma.'
  },
  {
    title: 'Kicking Off Bottom',
    audience: 'Motivational keynotes, turnaround stories',
    body: 'Paralysis, breakthrough and self-leadership — how you get from stuck to unstuck, and why the decision that does it is always smaller than it sounds.'
  },
  {
    title: 'Four Levels of Accomplishing Anything',
    audience: 'Sales conferences, founder panels',
    body: 'Not all success is equal. The four rungs nobody names, and why most people stop at the second one and mistake it for arriving.'
  },
  {
    title: 'Starting Over',
    audience: 'Resilience panels, leadership conferences',
    body: 'What it actually costs to begin again, and what you find out about yourself that you could not have learned any other way.'
  },
  {
    title: 'Leading in the Middle',
    audience: 'Leadership development, manager training',
    body: 'For the people carrying a team without the title, the budget, or the authority to fix what is broken.'
  },
  {
    title: 'Clarifying Vision',
    audience: 'Strategic planning, board retreats',
    body: 'Getting a room to agree on what they are actually building before they argue about how to build it.'
  },
  {
    title: 'Faith, Family, Fitness, Finances, Friends, Fun',
    audience: 'Wealth forums, lifestyle conferences',
    body: 'Six foundations, all load-bearing. Let one slip and everything built on top of it moves.'
  }
];

function Clip({ id, label }) {
  const [playing, setPlaying] = useState(false);
  const poster = `/images/speaking/clip-${id}-poster.jpg`;
  const src = `/videos/speaking/clip-${id}.mp4`;

  return (
    <figure>
      <div
        className="venture-thumb"
        style={{ borderRadius: 14, aspectRatio: '9 / 16', backgroundColor: SLATE }}
      >
        {playing ? (
          <video
            src={src}
            poster={poster}
            controls
            autoPlay
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play clip — ${label}`}
            style={{
              position: 'relative',
              display: 'block',
              width: '100%',
              height: '100%',
              padding: 0,
              border: 'none',
              background: 'none'
            }}
          >
            <img
              src={poster}
              alt=""
              aria-hidden="true"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: 'linear-gradient(180deg, rgba(18,41,59,0.15) 0%, rgba(18,41,59,0.5) 100%)' }}
            >
              <span
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: '50%',
                  backgroundColor: SECONDARY,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Play size={22} fill={SLATE} color={SLATE} style={{ marginLeft: 3 }} />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption
        className="eyebrow-wide"
        style={{ color: 'rgba(255,255,255,0.6)', fontSize: 10, marginTop: 14 }}
      >
        {label}
      </figcaption>
    </figure>
  );
}

export default function SpeakingPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Speaking"
        title="Hear Me First"
        subtitle="Before the topics, the bio or the fee — here is what I actually sound like. Everything else on this page is a menu; this part is the tasting."
        image="/images/headers/speaking.jpg"
        tone="ink"
      />

      {/* Clips. First, because they are the only first-hand evidence here. */}
      <section className="px-6 py-16 md:py-24" style={{ backgroundColor: PRIMARY_DEEP }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {CLIPS.map((c) => (
              <Clip key={c.id} id={c.id} label={c.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Block one — the topics. */}
      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="Topics"
            title="What I Speak About"
            intro="Ten subjects, each built for a particular room. Most of them started as a conversation I had already had a hundred times before anyone asked me to give it a title."
          />

          <div className="grid md:grid-cols-2 gap-px mt-14" style={{ backgroundColor: '#e2e2e2' }}>
            {TOPICS.map((t) => (
              <article key={t.title} className="p-8 md:p-9" style={{ backgroundColor: '#ffffff' }}>
                <p className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 10, marginBottom: 14 }}>
                  {t.audience}
                </p>
                <h3 className="display" style={{ color: SLATE, fontSize: 'clamp(1.3rem, 2.3vw, 1.75rem)', marginBottom: 12 }}>
                  {t.title}
                </h3>
                <p style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.75 }}>{t.body}</p>
              </article>
            ))}
          </div>

          <p style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.8, maxWidth: '54ch', marginTop: 34 }}>
            None of these are off a shelf. Tell me the room and what you want people carrying out
            of it, and the talk gets built for that.
          </p>
        </div>
      </section>

      {/* Block two. */}
      <PodcastLaunch />

      <BookingCTA onContactClick={onContactClick} />
    </div>
  );
}
