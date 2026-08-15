import React from 'react';
import {
  PageTopBand,
  SectionHead,
  TopicCards,
  NumberStrip,
  SplitFeature,
  Testimonials,
  BookingCTA,
  SECONDARY,
  SECONDARY_DEEP,
  SLATE,
  MUTED,
  INK,
  BG
} from './ui';

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
    eyebrow: 'Fireside & panel',
    title: 'Converse',
    body:
      'Interviewed on stage, or moderating the people you have flown in. Lower production lift than a keynote, and often the session an audience quotes afterwards.'
  }
];

/**
 * Signature talks. These are drafts built from the brand positioning —
 * strong enough to book from, but they should carry Jeremy's sign-off before
 * they go in front of an organiser. Titles are the part that gets forwarded
 * internally, so they matter more than the descriptions.
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
    audience: 'Sales kickoffs, association conferences, large general sessions',
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
  { title: 'Keynote', body: '45–60 minutes, main stage, up to any room size. The most common booking.' },
  { title: 'Workshop', body: '90 minutes to half a day, capped at around 40 people so the room can actually talk.' },
  { title: 'Host / emcee', body: 'Full-day or multi-day. Agenda control, transitions, panels, and energy between sessions.' },
  { title: 'Fireside', body: '30–45 minutes interviewed on stage, or moderating your headline guest.' }
];

export default function SpeakingPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Speaking"
        title="Book the stage"
        subtitle="Keynotes, hosting and workshops on leadership, mindset and the real economics of building something. Tell me the room and I will build the talk around it."
        watermark="Speak"
      />

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
          SIGNATURE TALKS
          The section an organiser forwards to their committee. Each talk
          leads with the outcome and lists takeaways, because that is what
          gets pasted into an internal approval email.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="Signature talks"
            title="What I speak about"
            intro="Each of these adapts to your theme and your audience. If none of them is quite right, say what you need the room to walk out believing and I will build something for it."
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
          FORMATS + LOGISTICS
          Answers the practical questions before an organiser has to ask,
          which is what shortens the gap between first email and a signed date.
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
            <div>
              <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 12 }}>
                Travel
              </p>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.75 }}>
                Based in South Florida, available nationally and internationally. Travel handled on your
                side or billed at cost — whichever is simpler for your finance team.
              </p>
            </div>
            <div>
              <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 12 }}>
                Lead time
              </p>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.75 }}>
                Most dates are confirmed six to twelve weeks out. Short-notice replacements are worth
                asking about — it is a call, not a form.
              </p>
            </div>
            <div>
              <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 12 }}>
                What you get
              </p>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 15, lineHeight: 1.75 }}>
                A pre-event call, a talk shaped to your theme, promotional assets for your channels,
                and a reply from me personally rather than an assistant.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      {/* Empty until real quotes exist — see components/ui.jsx Testimonials. */}
      <Testimonials items={[]} />

      <BookingCTA
        onContactClick={onContactClick}
        context="Speaking"
        title="Tell me about your event."
        body="Date, city, audience, and what you need them to walk out believing. That is enough to get started — I will come back with availability and a plan."
      />
    </div>
  );
}
