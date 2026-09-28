import React from 'react';
import VerbQuote from './VerbQuote';
import { ArrowUpRight } from 'lucide-react';
import { TIERS } from './WhereIWork';
import {
  PageTopBand,
  SectionHead,
  BookingCTA,
  useInView,
  SECONDARY,
  SECONDARY_DEEP,
  PRIMARY,
  SLATE,
  MUTED
} from './ui';

/**
 * Capital Markets — the three platforms, and who each one is for.
 *
 * Company copy comes from TIERS so this page and the About directory cannot
 * describe the same business two different ways. 4IR Studios sits in the same
 * tier in the data but is deliberately excluded here — PR and marketing is a
 * different buyer.
 *
 * NOTHING ON THIS PAGE NAMES A DEAL, A RETURN, OR AN ALLOCATION. The rule
 * outlived the Deal Flow section it was written for: it now governs the
 * company copy, which describes capability by shape — asset classes,
 * geographies, who is in the room — never by example. Publishing live
 * opportunities on an open web page is a securities question as much as a
 * design one, and a fabricated example would be worse than both. If real flow
 * ever appears, it belongs behind the Circle rather than in front of it.
 */

const CM_TIER = TIERS.find((t) => t.label === 'Capital Markets');
// Company order is Jeremy's: Private Investor Circle, then 4IR, then Access
// Global. Driven from this list rather than from TIERS, which orders by when
// the businesses were added.
//
// The section headline runs in this same order, so the three words and the
// three companies below them line up.
const ON_THIS_PAGE = ['Private Investor Circle', 'The 4IR Group', 'Access Global'];

/** The three words in the section intro, attached to the company each names. */
const KIND = {
  'Access Global': 'Advisory',
  'The 4IR Group': 'Investing',
  'Private Investor Circle': 'Private gatherings'
};

const FOR_WHOM = {
  'Private Investor Circle': {
    who: 'Firms that want the room to themselves',
    points: [
      'One firm presents — yours. No competing pitches on either side of you',
      'A room of 30–50 principals, family offices, wealth managers and RIAs, each invited personally',
      'Introductions made in the room on the day, walked over rather than emailed afterwards',
      'The guest list before the day, and everyone\u2019s details after it, with their permission',
      'We will tell you plainly if we think the room would be wasted on you right now'
    ]
  },
  'Access Global': {
    who: 'Institutions and family offices deploying across borders',
    points: [
      'All asset classes, all countries, all directions',
      'Private equity, private credit, real estate, venture, hedge funds, structured products, M&A and digital assets',
      'Twenty-five countries of private markets access on one platform',
      'The more complex the asset class or the geography, the more valuable we become'
    ]
  },
  'The 4IR Group': {
    who: 'Founders with real companies solving real problems, taken from founder to exit',
    points: [
      'Not all capital is money — we grow every kind that moves a company forward',
      'AI is the intelligence: what decides, routes and optimises, faster than any control room',
      'Robotics is the execution: what moves, welds, picks and builds. Intelligence with nothing to act through is a demo',
      'Infrastructure is the foundation: power, plants, networks, grid. Everything above it is theory without this',
      'Seco Bio was the first one out'
    ]
  }
};


/**
 * One company: the photograph, then the words beside it.
 *
 * Both halves move, 150ms apart, so the eye lands on the image and the copy
 * arrives under it — the order someone reads the row in anyway. The image
 * leads on a normal row and the text leads on a flipped one, so the motion
 * always starts on whichever side sits left.
 *
 * 0.18 threshold rather than 0: on a phone these rows are taller than the
 * viewport, and firing at first contact would run the whole reveal while the
 * row is still below the fold.
 */
function CompanyRow({ flip, children }) {
  const [ref, inView] = useInView(0.18);
  const kids = React.Children.toArray(children);
  return (
    <div ref={ref} className="grid md:grid-cols-12 gap-8 md:gap-14 items-center">
      {kids.map((child, i) => (
        <React.Fragment key={i}>
          {React.cloneElement(child, {
            style: {
              ...(child.props.style || {}),
              opacity: inView ? 1 : 0,
              transform: inView ? 'none' : 'translateY(22px)',
              transition: 'opacity 700ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1)',
              transitionDelay: `${(flip ? 1 - i : i) * 150}ms`
            }
          })}
        </React.Fragment>
      ))}
    </div>
  );
}

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
        subtitle="Relational · socio-economical · organizational · time · monetary"
        portrait="/images/portraits/capital.jpg"
        tone="primary"
      />

      <section className="px-6 py-16 md:py-28" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="Adding value"
            title="Private Gatherings / Investing / Advisory"
            intro="Firms rarely stall because the deal was bad or the strategy was wrong. They stall because the right thirty people never sat down together — the allocator whose mandate already fits, the advisor whose clients would care, the operator who has already solved it. That room takes years to build, and we still make every invitation ourselves."
          />

          <div className="mt-14 md:mt-20 space-y-16 md:space-y-24">
            {companies.map((c, i) => {
              const extra = FOR_WHOM[c.name] || {};
              const flip = i % 2 === 1;
              return (
                <CompanyRow key={c.name} flip={flip}>
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
                      <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 11.5, marginBottom: 10 }}>
                        {KIND[c.name]}
                      </p>
                    )}
                    <h3 className="display" style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3.4vw, 2.5rem)', marginBottom: 10 }}>
                      {c.name}
                    </h3>
                    <p className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 11.5, marginBottom: 20 }}>
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
                </CompanyRow>
              );
            })}
          </div>
        </div>
      </section>

      <VerbQuote verb="scale" />



      <BookingCTA onContactClick={onContactClick} />
    </div>
  );
}
