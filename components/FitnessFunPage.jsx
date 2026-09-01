import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  PageTopBand,
  SectionHead,
  NumberStrip,
  BookingCTA,
  Button,
  SECONDARY,
  SECONDARY_DEEP,
  PRIMARY,
  SLATE,
  MUTED,
  INK,
  BG,
  TAUPE
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
 * FILL — the adrenaline list. These are real and specific, which is the whole
 * point; add photos as they exist and swap `image` in.
 */
const PURSUITS = [
  {
    name: 'Jet surfing',
    body: 'Motorised board, open water, no forgiveness for a bad decision. Closest thing to flying at sea level.',
    image: ''
  },
  {
    name: 'Skydiving',
    body: 'The part nobody tells you about is the quiet before the door opens.',
    image: ''
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
 * FILL — the slow half. This page fails if it is only adrenaline: what makes
 * it human is the contrast between base jumping and a good coffee.
 */
const SIMPLE = [
  'A long breakfast with no phone on the table',
  'Coffee before anyone else in the house is up',
  'Boat days that go nowhere in particular',
  'Watching my kids do something they are getting good at'
];

/**
 * FILL — people. Empty renders nothing rather than an empty shelf.
 * Naming someone publicly is their call as much as yours, so ask first.
 *
 *   { name: 'Full Name', role: 'What they do', note: 'How you know them', url: '' }
 */
const FRIENDS = [];

export default function FitnessFunPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Fitness + Fun + Friends"
        title="The Real Me"
        subtitle="Discipline, adrenaline, and the slow enjoyment of very simple things. Usually in the same week."
        image="/images/headers/fitness.jpg"
        tone="ink"
      />

      {/* ============================================================
          1 — DISCIPLINE
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="Fitness"
            title="How I Train"
            intro="One of the four foundations, and the one that holds the other three steady when they start to slip. It is not vanity — it is the daily proof that I can do a hard thing on purpose."
          />
          <div className="mt-14">
            <NumberStrip items={DISCIPLINES} />
          </div>
        </div>
      </section>

      {/* ============================================================
          2 — ADRENALINE
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="Fun"
            title="Where I Go To Feel Alive"
            intro="Not a bucket list. These are the things that reset me — and the reason I can sit still in a board meeting the next morning."
          />

          <div className="mt-14 grid md:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
            {PURSUITS.map((p, i) => (
              <article key={p.name} className="relative overflow-hidden" style={{ backgroundColor: INK, minHeight: 260 }}>
                {p.image && (
                  <>
                    <img src={p.image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.5 }} />
                    <span aria-hidden="true" className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(42,42,42,0.92) 0%, rgba(42,42,42,0.55) 100%)' }} />
                  </>
                )}
                <div className="relative p-9 h-full flex flex-col">
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
          3 — THE SLOW HALF
          The counterweight. Without it this page is just a man shouting
          about cliffs.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <SectionHead
              eyebrow="And the other half"
              title="Slow Things"
              intro="For every jump there are twenty mornings that look like nothing at all. Those are the ones that actually hold a life together."
            />
          </div>
          <div className="md:col-span-7 flex items-center">
            <ul className="w-full">
              {SIMPLE.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-5 py-5"
                  style={{ borderTop: i === 0 ? 'none' : '1px solid #e2e2e2' }}
                >
                  <span className="display" style={{ color: SECONDARY, fontSize: 14, letterSpacing: '0.12em', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ color: SLATE, fontSize: 'clamp(1.05rem, 2vw, 1.35rem)', lineHeight: 1.55 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          4 — FRIENDS
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

      {/* ============================================================
          5 — THE LINE
          ============================================================ */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24" style={{ backgroundColor: PRIMARY }}>
        <div
          className="hero-wedge absolute inset-y-0 right-0 hidden md:block"
          style={{ width: '46%', backgroundColor: TAUPE, opacity: 0.22 }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 11, marginBottom: 20 }}>
            Why any of this is here
          </p>
          <p className="display" style={{ color: '#ffffff', fontSize: 'clamp(1.7rem, 4.2vw, 2.9rem)', marginBottom: 22 }}>
            You cannot lead people you would not have dinner with.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 17, lineHeight: 1.8, maxWidth: '52ch', margin: '0 auto 32px' }}>
            The discipline is real and so is the fun. Anyone who tells you they only have one of the
            two is selling you something.
          </p>
          <Button variant="gold" onClick={() => onContactClick && onContactClick('Speaking')}>
            Let’s talk
          </Button>
        </div>
      </section>

      <BookingCTA onContactClick={onContactClick} context="Speaking" />
    </div>
  );
}
