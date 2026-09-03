import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHead, SECONDARY, PRIMARY, PRIMARY_DEEP } from './ui';

/**
 * The tiers of business Jeremy works in — not a legacy list. Two groups
 * because an outsider can hold "real estate" and "capital markets" where they
 * cannot hold seven company names.
 *
 * Descriptions are deliberately one sentence. These are cards in a grid, not
 * a portfolio page: enough for a reader to know what the company is, and the
 * link carries anyone who wants more. Anything marked DRAFT below is recovered
 * from the old Entrepreneur page and still wants Jeremy's sign-off.
 */
const TIERS = [
  {
    label: 'Real Estate',
    blurb: 'Our family platform. Investing, acquisitions, and the service businesses built around ownership.',
    companies: [
      {
        name: 'Roseberry Properties',
        thumb: '/images/ventures/photos/roseberry-properties.jpg',
        role: 'Founder',
        url: 'https://roseberryproperties.com',
        logo: '/images/logos/roseberry-properties.png',
        description: 'A real estate brokerage specializing in referral and advisory services across all asset classes.'
      },
      {
        // DRAFT — recovered from the old Entrepreneur page.
        name: 'Premiere Home Watch',
        thumb: '/images/ventures/photos/premiere-home-watch.jpg',
        role: 'Founder',
        url: 'https://roseberryproperties.com/premierehomewatch',
        logo: '',
        description: 'Lifestyle services and luxury home concierge for distinguished clientele. Recurring revenue, acquisition-ready.'
      },
      {
        // DRAFT. Also shares the Circle's address for now — Roseberry Capital
        // has no site of its own yet. Two cards pointing at one destination is
        // a stopgap, not a design; give this its own URL when there is one.
        name: 'Roseberry Capital',
        thumb: '/images/ventures/photos/roseberry-capital.jpg',
        role: 'Founder',
        url: 'https://www.privateinvestorcircle.com/',
        logo: '',
        description: 'Capital advisory and allocation — relationships with sponsors and allocators across 25 countries.'
      }
    ]
  },
  {
    label: 'Capital Markets',
    blurb: 'Advisory, allocation, and the rooms where allocators actually meet founders.',
    companies: [
      {
        // DRAFT — recovered from the old Entrepreneur page.
        name: 'Private Investor Circle',
        thumb: '/images/ventures/photos/private-investor-circle.jpg',
        role: 'Founder',
        url: 'https://www.privateinvestorcircle.com/',
        logo: '/images/logos/private-investor-circle.png',
        description: 'A curated circle of investors, allocators and founders who meet in person. Small rooms, no pitch theatre.'
      },
      {
        // DRAFT — recovered from the old Entrepreneur page.
        name: 'Avestix',
        thumb: '/images/ventures/photos/avestix.jpg',
        role: 'Chief Operating Officer',
        url: 'https://avestix.com',
        logo: '/images/logos/avestix.png',
        description: 'An invitation-only private society for families building enduring wealth. Governed, principals-only, AI-native.'
      },
      {
        // DRAFT — recovered from the old Entrepreneur page.
        name: 'Access Global',
        thumb: '/images/ventures/photos/access-global.jpg',
        role: 'Strategic Partner',
        url: 'https://accessglobal.co',
        logo: '/images/logos/access-global.png',
        description: 'A 30-country private markets platform. CRE, private credit, infrastructure. Sector agnostic.'
      },
      {
        // DRAFT — recovered from the old Entrepreneur page.
        name: 'The 4IR Group',
        thumb: '/images/ventures/photos/four-ir-group.jpg',
        role: 'Co-founder, CBO',
        url: 'https://secobio.com',
        logo: '',
        description: 'Venture building at the edge of the Fourth Industrial Revolution. Seco Bio is the first.'
      }
    ]
  }
];

const displayUrl = (url) => url.replace(/^https?:\/{2}/, '').replace(/^www\./, '').replace(/\/$/, '');

/**
 * "Where I Work" — the two tiers and their companies.
 *
 * Extracted into its own component when the home page needed it too. One
 * source, so the two pages cannot drift into listing different companies —
 * which is exactly what would have happened with a copy-paste, and it is the
 * kind of drift nobody notices until a reader does.
 */
/**
 * "Where I Work" — the two tiers and their companies.
 *
 * Extracted into its own component when the home page needed it too. One
 * source, so the two pages cannot drift into listing different companies —
 * which is exactly what would have happened with a copy-paste, and it is the
 * kind of drift nobody notices until a reader does.
 *
 * Two layouts off the same data, because the two pages have different readers:
 *
 *  - variant="grid" (home) — compact cards. A first-time visitor is skimming
 *    for the shape of the thing, not reading seven descriptions.
 *  - variant="display" (Entrepreneurs) — a wide directory. Someone who chose
 *    this page is looking for the SECTORS, so tiers get full-width headers and
 *    each company gets a row it can breathe in rather than a card it has to
 *    fit inside. The portrait sits at the top because on this page the reader
 *    is deciding whether they want to work with a person, not a portfolio.
 */
export default function WhereIWork({ variant = 'grid' }) {
  if (variant === 'display') return <WhereIWorkDisplay />;
  return <WhereIWorkGrid />;
}

/* ============================================================
   DISPLAY — Entrepreneurs page
   ============================================================ */

function WhereIWorkDisplay() {
  return (
    <section className="py-16 md:py-28 px-6" style={{ backgroundColor: PRIMARY_DEEP }}>
      <div className="max-w-6xl mx-auto">
        {/* Portrait beside the intro rather than above it: at this width a
            centred headshot reads as a profile page, and this is a directory
            of businesses that happens to have a person attached. */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
          <img
            src="/images/jeremy-round.png"
            alt="Jeremy Roseberry"
            className="shrink-0"
            style={{
              width: 'clamp(112px, 16vw, 168px)',
              height: 'clamp(112px, 16vw, 168px)',
              borderRadius: '50%',
              objectFit: 'cover',
              border: `2px solid ${SECONDARY}`
            }}
          />
          <div>
            <SectionHead
              dark
              maxWidth="62ch"
              eyebrow="The tiers"
              title="Where I Work"
              intro="Two tiers, seven companies. Just a simple serial entrepreneur. No, it is never perfect — but on my best days I like to think it is all vertically integrated."
            />
          </div>
        </div>

        <div className="mt-14 md:mt-20 space-y-16 md:space-y-20">
          {TIERS.map((tier, ti) => (
            <div key={tier.label}>
              {/* Tier header runs the full width — this is the unit an
                  entrepreneur is actually scanning for. */}
              <div
                className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-6"
                style={{ borderBottom: `1px solid ${SECONDARY}` }}
              >
                <div className="flex items-baseline gap-5">
                  <span
                    className="display"
                    style={{ color: 'rgba(255,255,255,0.28)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', lineHeight: 1 }}
                  >
                    {String(ti + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className="display"
                    style={{ color: SECONDARY, fontSize: 'clamp(2rem, 5vw, 3.4rem)', lineHeight: 1 }}
                  >
                    {tier.label}
                  </h3>
                </div>
                <p
                  style={{ color: 'rgba(255,255,255,0.68)', fontSize: 15, lineHeight: 1.7, maxWidth: '46ch' }}
                >
                  {tier.blurb}
                </p>
              </div>

              {/* One row per company. Hairline dividers instead of card gaps —
                  a directory reads down a column, and boxes fight that. */}
              <div>
                {tier.companies.map((c) => {
                  const Row = c.url ? 'a' : 'div';
                  return (
                    <Row
                      key={c.name}
                      {...(c.url ? { href: c.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="venture-row grid md:grid-cols-12 gap-4 md:gap-8 items-start py-7 md:py-8"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.13)', transition: 'background-color 180ms ease' }}
                      onMouseOver={(e) => { if (c.url) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
                    >
                      {/* The column is reserved whether or not a photo exists,
                          so rows stay aligned as thumbnails arrive one at a
                          time rather than reflowing the whole list each time. */}
                      <div className="md:col-span-2 max-w-[104px] md:max-w-none">
                        {c.thumb && (
                          <span className="venture-thumb">
                            <img src={c.thumb} alt="" aria-hidden="true" />
                          </span>
                        )}
                      </div>

                      <div className="md:col-span-3">
                        {/* Fixed slot so names line up whether or not a mark exists. */}
                        <span style={{ height: 30, marginBottom: 12, display: 'flex', alignItems: 'center' }}>
                          {c.logo && (
                            <img src={c.logo} alt="" aria-hidden="true" style={{ maxHeight: 30, maxWidth: 150, width: 'auto' }} />
                          )}
                        </span>
                        <span
                          className="display block"
                          style={{ color: '#ffffff', fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', lineHeight: 1.15 }}
                        >
                          {c.name}
                        </span>
                        <span
                          className="eyebrow-wide block"
                          style={{ color: SECONDARY, fontSize: 10, marginTop: 8 }}
                        >
                          {c.role}
                        </span>
                      </div>

                      <div className="md:col-span-5">
                        {c.description && (
                          <span className="block" style={{ color: 'rgba(255,255,255,0.8)', fontSize: 15.5, lineHeight: 1.75 }}>
                            {c.description}
                          </span>
                        )}
                      </div>

                      <div className="md:col-span-2 md:text-right">
                        {c.url && (
                          <span
                            className="inline-flex items-center gap-2"
                            style={{ color: SECONDARY, fontSize: 13 }}
                          >
                            {displayUrl(c.url)}
                            <ArrowUpRight size={14} />
                          </span>
                        )}
                      </div>
                    </Row>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   GRID — home page. Unchanged.
   ============================================================ */

function WhereIWorkGrid() {
  return (
  <section className="py-16 md:py-28 px-6" style={{ backgroundColor: PRIMARY_DEEP }}>
          <div className="max-w-6xl mx-auto">
            <SectionHead
              dark
              maxWidth="60ch"
              eyebrow="The tiers"
              title="Where I Work"
              intro="Two tiers, seven companies. Just a simple serial entrepreneur. No, it is never perfect — but on my best days I like to think it is all vertically integrated."
            />

            <div className="mt-14 space-y-12">
              {TIERS.map((tier) => (
                <div key={tier.label} className="grid md:grid-cols-12 gap-8 md:gap-10">
                  <div className="md:col-span-4">
                    <h3 className="display" style={{ color: SECONDARY, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: 12 }}>
                      {tier.label}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.68)', fontSize: 15, lineHeight: 1.75 }}>{tier.blurb}</p>
                  </div>

                  <div className="md:col-span-8 grid sm:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.14)' }}>
                    {tier.companies.map((c) => {
                      // A card without a URL renders as a div, not an <a href="">.
                      // An empty href reloads the current page, which is a worse
                      // outcome than simply not being clickable.
                      const Card = c.url ? 'a' : 'div';
                      return (
                      <Card
                        key={c.name}
                        {...(c.url ? { href: c.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="p-6 flex flex-col"
                        style={{ backgroundColor: PRIMARY, transition: 'background-color 180ms ease', minHeight: 210 }}
                        onMouseOver={(e) => { if (c.url) e.currentTarget.style.backgroundColor = '#1f4666'; }}
                        onMouseOut={(e) => { e.currentTarget.style.backgroundColor = PRIMARY; }}
                      >
                        {/* Fixed-height logo slot so cards align whether or not a
                            mark exists yet. */}
                        <span style={{ height: 26, marginBottom: 16, display: 'flex', alignItems: 'center' }}>
                          {c.logo && <img src={c.logo} alt="" aria-hidden="true" style={{ maxHeight: 26, maxWidth: 130, width: 'auto' }} />}
                        </span>
                        <span className="display block" style={{ color: '#ffffff', fontSize: 17, lineHeight: 1.2, marginBottom: 6 }}>
                          {c.name}
                        </span>
                        <span className="block" style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.5 }}>
                          {c.role}
                        </span>
                        {c.description && (
                          <span
                            className="block"
                            style={{ color: 'rgba(255,255,255,0.78)', fontSize: 14, lineHeight: 1.65, marginTop: 12 }}
                          >
                            {c.description}
                          </span>
                        )}
                        <span
                          className="flex items-center gap-2"
                          style={{ marginTop: 'auto', paddingTop: 14, color: SECONDARY, fontSize: 12 }}
                        >
                          {c.url ? (
                            <>
                              {displayUrl(c.url)}
                              <ArrowUpRight size={13} />
                            </>
                          ) : null}
                        </span>
                      </Card>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
  );
}
