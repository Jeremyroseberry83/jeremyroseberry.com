import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import {
  PageTopBand,
  SectionHead,
  TopicCards,
  BookingCTA,
  Button,
  SECONDARY,
  SLATE,
  MUTED,
  INK,
  BG
} from './ui';
import { company } from '../site.config';

const GUEST_TOPICS = [
  {
    eyebrow: 'Most requested',
    title: 'The honest middle',
    body:
      'What the years between starting and succeeding actually look like, and why almost nobody talks about them publicly. Works for founder shows, business shows, and general-interest interviews.'
  },
  {
    eyebrow: 'Leadership',
    title: 'Deciding without the answer',
    body:
      'Leading a team through a stretch where you genuinely do not know what happens next — and why pretending otherwise is the fastest way to lose them.'
  },
  {
    eyebrow: 'Mindset',
    title: 'Discipline over motivation',
    body:
      'Taking "mindset" off the poster and turning it into a routine that survives a bad quarter. Practical, not inspirational.'
  }
];

/**
 * Past appearances. Empty until there are real ones to list — an empty state
 * is handled below rather than shipping placeholder logos, which an
 * experienced booker spots instantly and reads as inexperience.
 *
 *   { show: 'Show name', host: 'Host name', url: 'https://…', note: 'Ep 128 · Mar 2026' }
 */
const APPEARANCES = [];

export default function PodcastsPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Podcasts & media"
        title="Put me on your show"
        subtitle="A guest who prepares, shows up on time, promotes the episode, and does not recite the same origin story you have already heard on four other shows."
        watermark="Mic"
      />

      {/* ============================================================
          WHY BOOK — written for the person who books guests, whose real
          worry is a flat episode and a guest who disappears at publish.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <SectionHead
              eyebrow="For producers"
              title="An easy booking"
              intro="You are not looking for a guest. You are looking for an episode that performs and a person who makes your week easier."
            />
          </div>
          <div className="md:col-span-7">
            <ul className="space-y-7">
              {[
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
              ].map((item) => (
                <li key={item.h} className="flex gap-5">
                  <span
                    aria-hidden="true"
                    style={{ width: 3, flexShrink: 0, backgroundColor: SECONDARY, alignSelf: 'stretch' }}
                  />
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

      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="Conversation starters"
            title="What we could talk about"
            intro="Angles that tend to make a strong episode. Take one as-is, or use them to find the version that fits your audience."
          />
          <div className="mt-14">
            <TopicCards cards={GUEST_TOPICS} />
          </div>
        </div>
      </section>

      {/* ============================================================
          APPEARANCES — real ones or an honest empty state. Never fake logos.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="On the record"
            title="Recent appearances"
            intro={
              APPEARANCES.length
                ? 'Episodes worth starting with if you want to hear how the conversation goes.'
                : 'Episodes will be listed here as they publish. In the meantime, ask and I will send recordings directly.'
            }
          />

          {APPEARANCES.length > 0 && (
            <div className="mt-14 space-y-px" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
              {APPEARANCES.map((a) => (
                <a
                  key={a.show}
                  href={a.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-wrap items-center justify-between gap-4 p-7"
                  style={{ backgroundColor: INK }}
                >
                  <div>
                    <div className="display" style={{ color: '#ffffff', fontSize: 22, marginBottom: 6 }}>
                      {a.show}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                      {a.host}
                      {a.note ? ` · ${a.note}` : ''}
                    </div>
                  </div>
                  <span style={{ color: SECONDARY, display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 600 }}>
                    Listen
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              ))}
            </div>
          )}

          {/* ============================================================
              PRESS KIT — the thing a producer needs at 11pm the night before
              they build the episode page. Making them email for a headshot is
              a small friction that loses real bookings.
              ============================================================ */}
          <div className="mt-16 p-8 md:p-12" style={{ border: '1px solid rgba(255,255,255,0.18)' }}>
            <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 16 }}>
              Press kit
            </p>
            <h3 className="display" style={{ color: '#ffffff', fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', marginBottom: 18 }}>
              Everything you need to publish
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 16, lineHeight: 1.75, maxWidth: '56ch', marginBottom: 20 }}>
              High-resolution headshots, long and short bios, and the one-line intro to read on air. Ask
              and it is in your inbox the same day.
            </p>

            <div style={{ borderLeft: `3px solid ${SECONDARY}`, paddingLeft: 20, marginBottom: 28 }}>
              <p className="eyebrow-wide" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 10, marginBottom: 10 }}>
                Read this on air
              </p>
              <p style={{ color: '#ffffff', fontSize: 16, lineHeight: 1.8, fontStyle: 'italic', maxWidth: '60ch' }}>
                “{company.name} is an entrepreneur, speaker and host who talks about the part of business
                most people leave out — the honest middle, where the work actually happens.”
              </p>
            </div>

            <Button variant="gold" onClick={() => onContactClick && onContactClick('Podcast')}>
              Request the press kit
            </Button>
          </div>
        </div>
      </section>

      <BookingCTA
        onContactClick={onContactClick}
        context="Podcast"
        title="Let’s record something worth publishing."
        body="Send your show, your audience, and a couple of dates. If it is a fit I will say yes quickly, and if it is not I will say so rather than leaving you waiting."
      />
    </div>
  );
}
