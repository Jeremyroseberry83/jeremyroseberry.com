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
 * Capital Markets — the three platforms, then what actually moves through them.
 *
 * Company copy comes from TIERS so this page and the Entrepreneurs directory
 * cannot describe the same business two different ways. 4IR Studios sits in
 * the same tier in the data but is deliberately excluded here — it has its own
 * page, because PR and marketing is a different buyer.
 *
 * NOTHING ON THIS PAGE NAMES A DEAL, A RETURN, OR AN ALLOCATION. Deal flow is
 * described by shape — sectors, stages, cheque sizes — never by example.
 * Publishing live opportunities on an open web page is a securities question as much
 * as a design one, and a fabricated example would be worse than both. If real
 * flow ever goes here it belongs behind the Circle, not in front of it.
 */

const CM_TIER = TIERS.find((t) => t.label === 'Capital Markets');
// Order matters here: it runs Gatherings -> Venture -> Advisory, and each
// company carries its label. Driven from this list rather than from TIERS,
// which orders by when the businesses were added.
const ON_THIS_PAGE = ['Private Investor Circle', 'The 4IR Group', 'Access Global'];

/** The three words in the section intro, attached to the company each names. */
const KIND = {
  'Private Investor Circle': 'Gatherings',
  'The 4IR Group': 'Venture',
  'Access Global': 'Advisory'
};

const FOR_WHOM = {
  'Private Investor Circle': {
    who: 'Allocators and founders who would rather meet in a room than on a call',
    points: [
      'Small rooms, curated by hand, no pitch theatre',
      'Founders meet allocators who are actually in their stage and sector',
      'Every introduction comes from someone who knows both sides'
    ]
  },
  'Access Global': {
    who: 'Institutions and family offices deploying across borders',
    points: [
      'Thirty countries of private markets access on one platform',
      'CRE, private credit and infrastructure — sector agnostic by design',
      'Built for allocators who need reach without building the desk themselves'
    ]
  },
  'The 4IR Group': {
    who: 'Founders building at the front edge, and the capital that backs them',
    points: [
      'Venture building rather than passive cheque writing',
      'Operating help where it is scarcest — story, structure and the first raise',
      'Seco Bio was the first one out'
    ]
  }
};

/**
 * What crosses the desk, as the four categories a private-markets desk
 * actually splits into. Introductions came out because it was the odd one —
 * a service rather than an asset class, sitting in a list of asset classes.
 * The intro paragraph already carries that promise ("direct to the principal
 * or the GP"), which is where it belongs.
 *
 * DRAFT: private equity is my addition — it is the standard fourth alongside
 * real assets, credit and venture, and its absence was the reason the list
 * needed a service to round it out. Order is strongest first. Both want
 * Jeremy's confirmation.
 *
 * No named deal, return or allocation appears here. See the file header.
 */
const FLOW = [
  {
    label: 'Real assets',
    body: 'Commercial real estate and infrastructure. Sponsors who have done it before, in markets they already know, with a basis that makes sense before the story does.'
  },
  {
    label: 'Private credit',
    body: 'Where the return is contractual rather than hoped for. The category most allocators say they want more of and see the least of.'
  },
  {
    label: 'Private equity',
    body: 'Operating businesses with real cash flow and a reason to change hands. Sponsors who can say plainly what they intend to do differently after close.'
  },
  {
    label: 'Early venture',
    body: 'Founders at the point where operating help matters more than the size of the cheque. Usually the ones who did not need to be talked into the work.'
  }
];

export default function CapitalMarketsPage({ onContactClick }) {
  const companies = CM_TIER
    ? ON_THIS_PAGE.map((n) => CM_TIER.companies.find((c) => c.name === n)).filter(Boolean)
    : [];

  return (
    <div>
      <PageTopBand
        eyebrow="Capital Markets"
        title="Scaling The Five Levels Of Capital"
        titleWidth="18ch"
        subtitle="One goal — scale relational, socio-economical, organizational, time and monetary capital."
        image="/images/headers/speaking.jpg"
        tone="ink"
      />

      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="The platforms"
            title="A Platform For Capital Markets"
            intro="Gatherings / Venture / Advisory. Different rooms, same work — knowing people well enough to be genuinely useful to them, long before there is a transaction in it."
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
                    <span style={{ height: 30, marginBottom: 14, display: 'flex', alignItems: 'center' }}>
                      {c.logo && (
                        <img src={c.logo} alt="" aria-hidden="true" style={{ maxHeight: 30, maxWidth: 170, width: 'auto' }} />
                      )}
                    </span>
                    {KIND[c.name] && (
                      <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 10 }}>
                        {KIND[c.name]}
                      </p>
                    )}
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

      {/* Deal flow, described by shape. See the file header for why there are
          no named opportunities here. */}
      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: PRIMARY_DEEP }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            dark
            eyebrow="Deal flow"
            title="Pre-Vetted / Sector Agnostic"
            intro="Quality flow crosses my desk across most asset classes, and my role in it is advisory — I consult, I tell you what I actually think, and I put you direct to the principal or the GP. No middle layer, and no live opportunities posted on a website."
          />

          <div className="grid md:grid-cols-2 gap-px mt-14" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
            {FLOW.map((f, i) => (
              <article key={f.label} className="p-8 md:p-10" style={{ backgroundColor: PRIMARY_DEEP }}>
                <span
                  className="display block"
                  style={{ color: SECONDARY, opacity: 0.55, fontSize: 'clamp(1.5rem, 2.4vw, 2rem)', lineHeight: 1, marginBottom: 14 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="display" style={{ color: '#ffffff', fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', marginBottom: 14 }}>
                  {f.label}
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, lineHeight: 1.75 }}>{f.body}</p>
              </article>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: 48 }}>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, lineHeight: 1.8, maxWidth: '52ch', margin: '0 auto 28px' }}>
              If you are raising, allocating, or simply want to be in the room — that is a
              conversation I love to have.
            </p>
            <button
              onClick={() => onContactClick && onContactClick('Business / capital')}
              className="venture-visit"
              style={{ cursor: 'pointer' }}
            >
              Let’s Connect
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <BookingCTA onContactClick={onContactClick} />
    </div>
  );
}
