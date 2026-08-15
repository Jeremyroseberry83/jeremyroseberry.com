import React from 'react';
import { Mail } from 'lucide-react';
import {
  PageTopBand,
  SectionHead,
  SplitFeature,
  StatBand,
  BookingCTA,
  Button,
  SECONDARY,
  MUTED,
  INK,
  BG
} from './ui';
import { company } from '../site.config';

/**
 * Career numbers. Empty until they are real and Jeremy is happy to defend
 * every one of them on stage — an inflated figure on an About page is the
 * fastest way to lose a booking committee that does its homework.
 *
 *   { value: '$400M+', label: 'Transaction volume closed' }
 */
const STATS = [];

/**
 * FILL THESE IN — everything bracketed below is a fact only Jeremy can
 * supply. The surrounding prose is written to hold real specifics; swapping
 * a bracket for a vague phrase will make the whole page read as vague.
 */
export default function AboutPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="About"
        title="Who is on your stage"
        subtitle="An operator first and a speaker second — which is the reason the talks land. Still building, still getting things wrong, still willing to say so out loud."
        watermark="Story"
      />

      <SplitFeature
        eyebrow="The short version"
        title="Built it, broke it, built it again"
        image="/images/jeremy-portrait.jpg"
      >
        <p style={{ marginBottom: 18 }}>
          {company.name} is an entrepreneur and investor based in South Florida, where he runs
          [COMPANY / FUND NAME] and spends most of his week on the operating side of the business
          rather than the stage.
        </p>
        <p style={{ marginBottom: 18 }}>
          He started [WHAT HE STARTED, AND ROUGHLY WHEN] — and learned the hard parts the way most
          people do, by getting them wrong first. [ONE SPECIFIC, HONEST SETBACK: the deal that fell
          through, the year revenue went backwards, the hire that nearly cost the company.] That
          period is where the talks come from.
        </p>
        <p>
          Today he [WHAT HE ACTUALLY DOES NOW — the businesses, the fund, the rooms he convenes],
          and speaks to audiences of founders, operators and leadership teams about the part of the
          journey that does not make it into the case study.
        </p>
      </SplitFeature>

      {/* Renders nothing while STATS is empty — see the note above it. */}
      {STATS.length > 0 && <StatBand stats={STATS} />}

      {/* ============================================================
          WHAT HE IS BUILDING NOW
          Credibility for a booking committee comes from current operating
          work far more than from a list of past titles.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="Currently"
            title="Still in the arena"
            intro="The talks are not a retirement act. Everything below is live work, which is why the material keeps changing."
          />

          <div className="grid md:grid-cols-3 gap-px mt-14" style={{ backgroundColor: '#e2e2e2' }}>
            {[
              {
                role: '[ROLE], [COMPANY]',
                body: '[One sentence on what the business does and what he is responsible for inside it.]'
              },
              {
                role: '[ROLE], [SECOND VENTURE]',
                body: '[One sentence. If there is no second venture, delete this card — two strong entries beat three padded ones.]'
              },
              {
                role: 'Host, [EVENT OR SERIES]',
                body: '[The rooms he convenes — investor evenings, founder dinners, the podcast. This is the credential that matters most to event organisers.]'
              }
            ].map((item) => (
              <div key={item.role} className="p-9" style={{ backgroundColor: '#ffffff' }}>
                <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 14 }}>
                  {item.role}
                </p>
                <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BIOS TO COPY
          Event programs and podcast show-notes both need a bio, and the
          organiser always needs it at an inconvenient hour. Publishing both
          lengths removes an email from the booking process.
          ============================================================ */}
      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: INK }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="For organisers"
            title="Copy-and-paste bios"
            intro="Take whichever length fits your program. No need to ask first."
          />

          <div className="grid md:grid-cols-2 gap-px mt-14" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
            <div className="p-9" style={{ backgroundColor: INK }}>
              <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 16 }}>
                Short — 40 words
              </p>
              <p style={{ color: 'rgba(255,255,255,0.86)', fontSize: 16, lineHeight: 1.8 }}>
                {company.name} is an entrepreneur, speaker and host based in South Florida. He speaks
                to founders and leadership teams about mindset, leadership and the honest middle of
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
                audiences get the decisions, the costs and the recoveries in the same detail, and
                leave with something they can use immediately.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button variant="gold" onClick={() => onContactClick && onContactClick('Press')}>
              Request headshots
            </Button>
            <Button variant="ghost" href={`mailto:${company.email}`}>
              <Mail size={16} />
              {company.email}
            </Button>
          </div>
        </div>
      </section>

      <BookingCTA
        onContactClick={onContactClick}
        context="Speaking"
        title="That is the background. What is the event?"
        body="If the story fits the room you are building, the next step is a short conversation about the date."
      />
    </div>
  );
}
