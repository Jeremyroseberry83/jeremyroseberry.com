import React from 'react';
import { Mail } from 'lucide-react';
import {
  PageTopBand,
  SectionHead,
  TopicCards,
  NumberStrip,
  SplitFeature,
  StatBand,
  Testimonials,
  BookingCTA,
  Button,
  SECONDARY,
  SECONDARY_DEEP,
  SLATE,
  MUTED,
  INK,
  BG
} from './ui';
import { company } from '../site.config';

/**
 * "Let's Meet" — the entire booking case in one page.
 *
 * Sequenced the way a booking decision actually gets made: what can I book him
 * for → what does he talk about → will it fit my agenda → why him and not
 * someone else → the bio and assets I need to say yes internally → the ask.
 *
 * It is a long page on purpose. An organiser who is genuinely evaluating will
 * read all of it; one who is not will hit the button in the nav. Splitting
 * this into four short pages would just add three chances to leave.
 */

const WAYS_TO_BOOK = [
  {
    eyebrow: 'Keynote',
    title: 'Speak',
    body:
      'A main-stage talk built around your theme, not a canned deck. Mindset, leadership, and the honest version of what building a business costs — delivered so the room leaves with something usable on Monday.'
  },
  {
    eyebrow: 'Emcee & moderator',
    title: 'Host',
    body:
      'Keeping a multi-day agenda moving, running panels that get real answers, and holding the energy of a room between sessions. The job nobody notices when it is done well.'
  },
  {
    eyebrow: 'Podcast & media',
    title: 'Guest',
    body:
      'Long-form conversation with no talking points and no rehearsed origin story. Bring the hard questions — the failures are the part worth recording.'
  }
];

/**
 * Signature talks — drafted from the brand positioning. Strong enough to book
 * from, but they need Jeremy's sign-off before an organiser sees them. Titles
 * matter more than descriptions: the title is what gets forwarded internally.
 */
const TALKS = [
  {
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
    title: 'Mindset Is a Discipline, Not a Mood',
    audience: 'Sales kickoffs, association conferences, general sessions',
    body:
      'Motivation is a feeling and it leaves. Discipline is a system and it stays. This talk takes the word "mindset" off the poster and turns it into something a person can actually run on a Tuesday morning when nothing is going their way.',
    takeaways: [
      'The difference between confidence and evidence, and why only one compounds',
      'A daily operating routine that survives a bad quarter',
      'How high performers reset inside a day instead of losing a week'
    ]
  },
  {
    title: 'Leading When You Are Not Sure',
    audience: 'Executive teams, emerging-leader programs, board retreats',
    body:
      'Leadership training assumes you have the answer. Most of the job is deciding without one. An honest look at leading through uncertainty without faking certainty — and why teams can always tell the difference.',
    takeaways: [
      'What to say to a team when you genuinely do not know yet',
      'Why transparency builds more speed than confidence does',
      'Making a reversible decision fast instead of a perfect one slowly'
    ]
  }
];

const FORMATS = [
  { title: 'Keynote', body: '45–60 minutes, main stage, any room size. The most common booking.' },
  { title: 'Workshop', body: '90 minutes to half a day, capped around 40 people so the room can actually talk.' },
  { title: 'Host / emcee', body: 'Full-day or multi-day. Agenda control, transitions, panels, energy between sessions.' },
  { title: 'Fireside', body: '30–45 minutes interviewed on stage, or moderating your headline guest.' }
];

const PRODUCER_POINTS = [
  {
    h: 'Prepared for your show specifically',
    p: 'I listen to two episodes before we record and shape the conversation around what your audience already knows, so we skip the ground you have covered.'
  },
  {
    h: 'No canned origin story',
    p: 'Ask the hard questions. The failures are the part worth recording, and I would rather talk about those than the highlight reel.'
  },
  {
    h: 'Promoted properly on publish',
    p: 'Clips, a post to my own audience, and a direct push to my list. The episode does not go quiet the day after it drops.'
  },
  {
    h: 'Remote or in person',
    p: 'Broadcast mic, treated room, hardwired connection. If you are recording in South Florida, I will come to your studio.'
  }
];

/**
 * Career numbers. Empty until they are real and Jeremy is happy to defend
 * every one of them on stage — an inflated figure is the fastest way to lose a
 * booking committee that does its homework.
 *
 *   { value: '$400M+', label: 'Transaction volume closed' }
 */
const STATS = [];

/**
 * Testimonials. Empty renders nothing at all. Three real quotes from past
 * organisers is the highest-value hour of work available on this whole site —
 * organisers book the person another organiser vouched for.
 *
 *   { quote: '…', name: 'Full Name', role: 'Title, Event or Company' }
 */
const TESTIMONIALS = [];

export default function MeetPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Let’s meet"
        title="Book the room"
        subtitle="Keynotes, event hosting, and podcast conversations on leadership, mindset, and the real economics of building something. Tell me the room and I will build the talk around it."
        watermark="Meet"
      />

      {/* ============================================================
          1 — TRIAGE. An organiser should never have to work out which
          box they fit in.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="Three ways to book"
            title="Stage, mic, or your show"
            intro="Different rooms need different things. Pick the one that matches yours and I will come back with availability and a plan for the session."
          />
          <div className="mt-14">
            <TopicCards cards={WAYS_TO_BOOK} />
          </div>
        </div>
      </section>

      {/* ============================================================
          2 — SIGNATURE TALKS. The section that gets forwarded to a
          committee, so each talk leads with the outcome.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="Signature talks"
            title="What I speak about"
            intro="Each of these adapts to your theme and your audience. If none is quite right, say what you need the room to walk out believing and I will build something for it."
          />

          <div className="mt-14 space-y-px" style={{ backgroundColor: '#e2e2e2' }}>
            {TALKS.map((talk, i) => (
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
        </div>
      </section>

      {/* ============================================================
          3 — FORMATS AND LOGISTICS. Answering the practical questions
          before they are asked is what shortens the gap between first
          email and a signed date.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="Formats"
            title="How the session can run"
            intro="Every format below has been run before. If your agenda needs something between two of them, that is usually fine — ask."
          />
          <div className="mt-14">
            <NumberStrip items={FORMATS} dark />
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {[
              {
                h: 'Travel',
                p: 'Based in South Florida, available nationally and internationally. Travel handled on your side or billed at cost — whichever is simpler for your finance team.'
              },
              {
                h: 'Lead time',
                p: 'Most dates confirm six to twelve weeks out. Short-notice replacements are worth asking about — it is a call, not a form.'
              },
              {
                h: 'What you get',
                p: 'A pre-event call, a talk shaped to your theme, promotional assets for your channels, and a reply from me personally rather than an assistant.'
              }
            ].map((item) => (
              <div key={item.h}>
                <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 12 }}>
                  {item.h}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.75 }}>{item.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          4 — POSITIONING. Why this speaker and not the other forty on
          the shortlist.
          ============================================================ */}
      <SplitFeature
        eyebrow="Why book Jeremy"
        title="The version most speakers leave out"
        image="/images/jeremy-speaking.jpg"
        flip
        quote="The talk people remember is the one where somebody finally said the quiet part out loud."
      >
        <p style={{ marginBottom: 18 }}>
          Most business talks are a highlight reel with a lesson bolted on the end. That is not what
          moves a room. People lean in when the person on stage is honest about the part that did not
          work — the payroll nearly missed, the call got wrong, the year they wanted out.
        </p>
        <p>
          That honesty is the whole method. It earns attention in the first ninety seconds, and it
          makes the practical part land, because by then the audience believes the person saying it has
          actually been there.
        </p>
      </SplitFeature>

      {/* Renders nothing while STATS is empty — see the note above it. */}
      {STATS.length > 0 && <StatBand stats={STATS} />}

      {/* ============================================================
          5 — FOR PRODUCERS. Written for the person who books guests,
          whose real worry is a flat episode and a guest who disappears
          at publish.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <SectionHead
              eyebrow="For podcast producers"
              title="An easy booking"
              intro="You are not looking for a guest. You are looking for an episode that performs and a person who makes your week easier."
            />
            <div className="mt-10">
              <Button variant="navy" onClick={() => onContactClick && onContactClick('Podcast')}>
                Pitch your show
              </Button>
            </div>
          </div>
          <div className="md:col-span-7">
            <ul className="space-y-7">
              {PRODUCER_POINTS.map((item) => (
                <li key={item.h} className="flex gap-5">
                  <span aria-hidden="true" style={{ width: 3, flexShrink: 0, backgroundColor: SECONDARY, alignSelf: 'stretch' }} />
                  <div>
                    <h3 className="font-bold" style={{ color: SLATE, fontSize: 17, marginBottom: 7 }}>
                      {item.h}
                    </h3>
                    <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.75 }}>{item.p}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          6 — WHO IS ON YOUR STAGE. The bio, plus the assets an organiser
          needs to say yes internally.
          FILL THESE IN — everything bracketed is a fact only Jeremy can
          supply. The prose is written to hold real specifics; swapping a
          bracket for a vague phrase makes the whole section read as vague.
          ============================================================ */}
      <SplitFeature
        eyebrow="Who is on your stage"
        title="Built it, broke it, built it again"
        image="/images/jeremy-portrait.jpg"
      >
        <p style={{ marginBottom: 18 }}>
          {company.name} is an entrepreneur and investor based in South Florida, where he runs
          [COMPANY / FUND NAME] and spends most of his week on the operating side of the business
          rather than on a stage.
        </p>
        <p style={{ marginBottom: 18 }}>
          He started [WHAT HE STARTED, AND ROUGHLY WHEN] and learned the hard parts the way most people
          do — by getting them wrong first. [ONE SPECIFIC, HONEST SETBACK: the deal that fell through,
          the year revenue went backwards, the hire that nearly cost the company.] That period is where
          the talks come from.
        </p>
        <p>
          Today he [WHAT HE ACTUALLY DOES NOW — the businesses, the fund, the rooms he convenes] and
          speaks to founders, operators and leadership teams about the part of the journey that never
          makes it into the case study.
        </p>
      </SplitFeature>

      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="For organisers and producers"
            title="Everything you need to publish"
            intro="Bios in both lengths, ready to paste into a program or show notes. Headshots and the full press kit are one click away."
          />

          <div className="grid md:grid-cols-2 gap-px mt-14" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
            <div className="p-9" style={{ backgroundColor: INK }}>
              <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 16 }}>
                Short — 40 words
              </p>
              <p style={{ color: 'rgba(255,255,255,0.86)', fontSize: 16, lineHeight: 1.8 }}>
                {company.name} is an entrepreneur, speaker and host based in South Florida. He speaks to
                founders and leadership teams about mindset, leadership and the honest middle of
                building a business — the part most people leave out.
              </p>
            </div>
            <div className="p-9" style={{ backgroundColor: INK }}>
              <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 16 }}>
                Long — 100 words
              </p>
              <p style={{ color: 'rgba(255,255,255,0.86)', fontSize: 16, lineHeight: 1.8 }}>
                {company.name} is an entrepreneur and investor who runs [COMPANY] and hosts
                [EVENT / PODCAST]. After [BRIEF ARC — what he built, what went wrong, what he built
                next], he now speaks internationally on leadership, mindset and the real economics of
                building something that lasts. His talks are known for skipping the highlight reel:
                audiences get the decisions, the costs and the recoveries in the same detail, and leave
                with something they can use immediately.
              </p>
            </div>
          </div>

          <div style={{ borderLeft: `3px solid ${SECONDARY}`, paddingLeft: 20, marginTop: 40, marginBottom: 32 }}>
            <p className="eyebrow-wide" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10, marginBottom: 10 }}>
              Read this on air
            </p>
            <p style={{ color: '#ffffff', fontSize: 16, lineHeight: 1.8, fontStyle: 'italic', maxWidth: '60ch' }}>
              “{company.name} is an entrepreneur, speaker and host who talks about the part of business
              most people leave out — the honest middle, where the work actually happens.”
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button variant="gold" onClick={() => onContactClick && onContactClick('Press')}>
              Request the press kit
            </Button>
            <Button variant="ghost" href={`mailto:${company.email}`}>
              <Mail size={16} />
              {company.email}
            </Button>
          </div>
        </div>
      </section>

      {/* Empty until real quotes exist — see components/ui.jsx Testimonials. */}
      <Testimonials items={TESTIMONIALS} />

      <BookingCTA
        onContactClick={onContactClick}
        context="Speaking"
        title="Tell me about your event."
        body="Date, city, audience, and what you need them to walk out believing. That is enough to get started — I will come back with availability and a plan."
      />
    </div>
  );
}
