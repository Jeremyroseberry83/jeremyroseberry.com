import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TIERS } from './WhereIWork';
import {
  PageTopBand,
  SectionHead,
  BookingCTA,
  SECONDARY,
  SECONDARY_DEEP,
  PRIMARY,
  PRIMARY_DEEP,
  SLATE,
  MUTED
} from './ui';

/**
 * Real Estate — the three companies, then the content.
 *
 * Company copy is pulled from TIERS in WhereIWork rather than retyped, so the
 * Entrepreneurs directory and this page cannot drift into describing the same
 * business two different ways. What this page adds is the outward-facing half:
 * WHO each one is for and what they actually do for that person. The directory
 * answers "what is it"; this answers "why would I call".
 *
 * TOPICS are Jeremy's own content hooks, taken off the reels. Each is built to
 * take a video: drop a file at /videos/real-estate/<id>.mp4 with a poster and
 * fill the two fields — the card already renders a play affordance when a
 * video exists and stays a clean editorial card when it does not. Nothing here
 * fakes a play button over a still.
 */

const RE_TIER = TIERS.find((t) => t.label === 'Real Estate');

/** The outward-facing half — who it is for, in Jeremy's words. */
const FOR_WHOM = {
  'Roseberry Properties': {
    who: 'Owners, buyers and investors who want an advisor before an agent',
    points: [
      'Referral and advisory across every asset class, not just the ones with a listing attached',
      'A broker who will tell you when the deal in front of you is not the deal',
      'The network to place something quietly when a public listing is the wrong move'
    ]
  },
  'Premiere Home Watch': {
    who: 'Second-home and seasonal owners who are not there most of the year',
    points: [
      'Eyes on the property when you are eleven hundred miles away',
      'Vendors managed, problems caught while they are still small and cheap',
      'Recurring, documented, and built so the business runs without me in it'
    ]
  },
  'Roseberry Capital': {
    who: 'Sponsors raising and allocators deploying, across twenty-five countries',
    points: [
      'Capital advisory for people who need the introduction, not the pitch deck',
      'Relationships built over two decades rather than bought off a list',
      'Honest read on whether a raise is ready before it goes out'
    ]
  }
};

/**
 * Content hooks off the reels. Copy is DRAFT — written from Jeremy's own
 * titles, in his register, and wanting his sign-off.
 *
 * Deliberately no tax or return specifics. These are opinions about how to
 * think, not advice about what to do, and the moment one of them names a
 * depreciation schedule or a yield it becomes something else entirely.
 */
const TOPICS = [
  {
    id: 'skip-mls',
    kicker: 'Skip MLS',
    title: 'Build Custom',
    body:
      'Everyone is fighting over the same listed inventory and paying a premium for the privilege. Building takes longer and it is not for everybody — but you set the basis, you pick what matters, and you are not bidding against six other people for someone else’s compromise.',
    video: '',
    poster: ''
  },
  {
    id: 'sitting-on-equity',
    kicker: 'Sitting on',
    title: 'Equity',
    body:
      'For most people their largest position is dead money and they do not know it. Equity that just sits is a decision — usually one nobody actually made. Know what it is worth, know what it could be doing, then decide on purpose.',
    video: '',
    poster: ''
  },
  {
    id: 'four-wealth-builders',
    kicker: 'Custom',
    title: '4 Wealth Builders',
    body:
      'Four things stack when you build instead of buy: equity you created rather than purchased, a basis you set yourself, a property built for how you actually live, and an asset with no comparable on the street. Buying gets you one of those on a good day.',
    video: '',
    poster: ''
  },
  {
    id: 'panic-or-strategy',
    kicker: 'Panic',
    title: 'Or Strategy',
    body:
      'Rates move, headlines follow, and people make permanent decisions about temporary conditions. The question was never what the market did this week. It is whether the thing you own still does the job you bought it to do.',
    video: '',
    poster: ''
  },
  {
    id: 'number-one-alt',
    kicker: '#1 Alt',
    title: 'Investment',
    body:
      'Every alternative asset class gets its moment. Real estate keeps getting picked because it is the only one you can finance cheaply, improve with your own hands, live inside, and hand to your kids.',
    video: '',
    poster: ''
  }
];

export default function RealEstatePage({ onContactClick }) {
  const companies = RE_TIER ? RE_TIER.companies : [];

  return (
    <div>
      <PageTopBand
        eyebrow="Real Estate"
        title="Our Family Platform"
        subtitle="Three businesses built around ownership. Most people call me with a problem attached to a property, not a listing they want to look at — and twenty years of my own money went in before anybody else’s did."
        image="/images/headers/entrepreneur.jpg"
        tone="ink"
      />

      {/* ============================================================
          1 — THE THREE
          Full-bleed alternating blocks rather than the compact rows on
          Entrepreneurs. Someone who chose this page wants to know whether
          to call, which takes more than one sentence.
          ============================================================ */}
      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="What we run"
            title="Three Businesses"
            intro="Different clients, same discipline. Each one exists because the last one kept running into a problem it could not solve."
          />

          <div className="mt-14 md:mt-20 space-y-16 md:space-y-24">
            {companies.map((c, i) => {
              const extra = FOR_WHOM[c.name] || {};
              const flip = i % 2 === 1;
              return (
                <div key={c.name} className="grid md:grid-cols-12 gap-8 md:gap-14 items-center">
                  <div className={`md:col-span-5 ${flip ? 'md:order-last' : ''}`}>
                    {c.thumb && (
                      <span className="venture-thumb" style={{ borderRadius: 14 }}>
                        <img src={c.thumb} alt="" aria-hidden="true" />
                      </span>
                    )}
                  </div>

                  <div className="md:col-span-7">
                    <span
                      style={{ height: 30, marginBottom: 14, display: 'flex', alignItems: 'center' }}
                    >
                      {c.logo && (
                        <img src={c.logo} alt="" aria-hidden="true" style={{ maxHeight: 30, maxWidth: 170, width: 'auto' }} />
                      )}
                    </span>

                    <h3 className="display" style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3.4vw, 2.5rem)', marginBottom: 10 }}>
                      {c.name}
                    </h3>
                    <p className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 10, marginBottom: 20 }}>
                      {c.role}
                    </p>

                    <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8, marginBottom: 22 }}>{c.description}</p>

                    {extra.who && (
                      <p style={{ color: SLATE, fontSize: 15.5, lineHeight: 1.7, fontWeight: 500, marginBottom: 18 }}>
                        {extra.who}.
                      </p>
                    )}

                    {extra.points && (
                      <ul className="space-y-3" style={{ listStyle: 'none', marginBottom: 28 }}>
                        {extra.points.map((pt) => (
                          <li key={pt} className="flex gap-3" style={{ color: MUTED, fontSize: 15.5, lineHeight: 1.7 }}>
                            <span aria-hidden="true" style={{ color: SECONDARY, flexShrink: 0 }}>›</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {c.url && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="venture-visit"
                        style={{ backgroundColor: PRIMARY, color: '#ffffff', borderColor: PRIMARY }}
                      >
                        Visit Website
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          2 — THE CONTENT
          Jeremy's own hooks. Built video-ready: the moment a file exists
          the card grows a real player, and until then it is an essay
          card rather than a still with a fake play button on it.
          ============================================================ */}
      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: PRIMARY_DEEP }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="What I talk about"
            title="Real Estate, Plainly"
            intro="The conversations I keep having, usually with someone who has already been told the opposite by somebody selling something."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px mt-14" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
            {TOPICS.map((t) => (
              <article key={t.id} className="p-8 md:p-9 flex flex-col" style={{ backgroundColor: PRIMARY_DEEP, minHeight: 300 }}>
                {t.video && t.poster && (
                  <video
                    className="mb-6"
                    src={t.video}
                    poster={t.poster}
                    controls
                    playsInline
                    preload="none"
                    style={{ width: '100%', borderRadius: 10, display: 'block' }}
                  />
                )}

                <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 10 }}>
                  {t.kicker}
                </p>
                <h3 className="display" style={{ color: '#ffffff', fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', marginBottom: 16 }}>
                  {t.title}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15.5, lineHeight: 1.75 }}>{t.body}</p>
              </article>
            ))}

            {/* Balances the 3-up grid at five items and does a real job: the
                content section should end by asking for the conversation it
                has spent five cards earning. */}
            <article
              className="p-8 md:p-9 flex flex-col justify-center"
              style={{ backgroundColor: PRIMARY, minHeight: 300 }}
            >
              <h3 className="display" style={{ color: SECONDARY, fontSize: 'clamp(1.4rem, 2.4vw, 1.8rem)', marginBottom: 14 }}>
                Ask Me Anything
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 15.5, lineHeight: 1.75, marginBottom: 24 }}>
                Buying, building, sitting on equity you have not looked at in years — if you want a
                straight answer with nothing attached to it, ask.
              </p>
              <button
                onClick={() => onContactClick && onContactClick('Business / capital')}
                className="venture-visit"
                style={{ alignSelf: 'flex-start', cursor: 'pointer' }}
              >
                Let’s Connect
                <ArrowUpRight size={14} />
              </button>
            </article>
          </div>
        </div>
      </section>

      <BookingCTA onContactClick={onContactClick} />
    </div>
  );
}
