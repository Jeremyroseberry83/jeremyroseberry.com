import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PageTopBand, SectionHead, BookingCTA, SECONDARY, SECONDARY_DEEP, SLATE, MUTED, INK, BG } from './ui';

/**
 * "Entrepreneur" — the operating credentials.
 *
 * For an event organiser this page answers one question: is he still doing
 * the thing he talks about? Current operating work is worth far more here
 * than a list of past titles.
 *
 * PLACEHOLDER HANDLING: `description` and `value` render only when non-empty,
 * and `url` only links when set. Several ventures below came through without
 * copy — those cards render short rather than printing a bracket on a live
 * page. Fill the blank strings in and the lines appear. Search this file for
 * `''` to find what is outstanding.
 */
const VENTURES = [
  {
    name: 'Avestix Frontier',
    role: 'Chief Operating Officer',
    url: 'avestix.com',
    description: '',
    value: ''
  },
  {
    name: 'Roseberry Properties',
    role: 'Founder',
    url: 'roseberryproperties.com',
    description:
      'Referral-only residential and commercial real estate serving high-net-worth buyers and investors across South Florida and beyond.',
    value:
      '20 years of real estate investing experience. Direct access to deals. Relational approach to acquisitions and strategy. Kourtney leads operations and design.'
  },
  {
    name: 'Premiere Home Watch',
    role: 'Founder',
    url: 'premierhomewatch.com',
    description:
      'Luxury home concierge service for high-net-worth owners. Recurring revenue model. Acquisition-ready framework.',
    value: 'Built by Kourtney. Scaled from 8 to 20+ clients. Turnkey systems. Ready to scale.'
  },
  {
    name: 'Roseberry Capital',
    role: 'Founder',
    // Heads-up: the contact address on this site is @roseberrycapital.NET.
    // This card says .com. Confirm which one is live.
    url: 'roseberrycapital.com',
    description: 'Capital advisory and allocation platform.',
    value:
      'Direct relationships with sponsors, allocators, and capital partners across 25 countries. Sector agnostic. Relational capital focused.'
  },
  {
    name: 'Private Investor Circle',
    role: 'Founder',
    url: 'privateinvestorcircle.com',
    description: '',
    value: ''
  },
  {
    name: 'Access Global',
    role: 'Strategic Partner',
    url: 'accessglobal.co',
    description:
      '30-country private markets platform. Alternative investments: CRE, private credit, infrastructure, and more. Sector agnostic. Network of partners with shared values and standards.',
    value:
      'Senior capital advisor. Connect founders and allocators. Structure sound partnerships across global networks. Trusted advisor to select relationships.'
  },
  {
    name: 'Four IR Ventures',
    role: 'Co-founder, Chief Business Officer',
    url: 'secobio.com',
    description: '',
    value: ''
  }
];

function VentureCard({ venture, index }) {
  const { name, role, url, description, value } = venture;
  const Wrapper = url ? 'a' : 'div';
  return (
    <Wrapper
      {...(url ? { href: `https://${url}`, target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="p-8 md:p-9 flex flex-col"
      style={{ backgroundColor: '#ffffff' }}
    >
      <div className="flex items-start justify-between gap-4" style={{ marginBottom: 16 }}>
        <span className="display" style={{ color: SECONDARY, fontSize: 16, letterSpacing: '0.1em' }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        {url && <ArrowUpRight size={18} style={{ color: SECONDARY, flexShrink: 0 }} />}
      </div>

      <h3 className="display" style={{ color: SLATE, fontSize: 'clamp(1.3rem, 2.2vw, 1.7rem)', marginBottom: 10 }}>
        {name}
      </h3>
      <p className="eyebrow-wide" style={{ color: SECONDARY_DEEP, fontSize: 10, marginBottom: 18 }}>
        {role}
      </p>

      {description && (
        <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, marginBottom: value ? 18 : 0 }}>{description}</p>
      )}

      {value && (
        <div style={{ borderLeft: `2px solid ${SECONDARY}`, paddingLeft: 16, marginTop: 'auto', paddingTop: 2 }}>
          <p className="eyebrow-wide" style={{ color: SLATE, fontSize: 9, marginBottom: 8 }}>
            What I bring
          </p>
          <p style={{ color: MUTED, fontSize: 14, lineHeight: 1.7 }}>{value}</p>
        </div>
      )}

      {url && (
        <p style={{ color: SECONDARY_DEEP, fontSize: 13, marginTop: 18, letterSpacing: '0.02em' }}>{url}</p>
      )}
    </Wrapper>
  );
}

export default function EntrepreneurPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand
        eyebrow="Entrepreneur"
        title="Building Across Seven Platforms"
        subtitle="Capital. Operations. Real Estate. People."
        watermark="Build"
      />

      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-4xl mx-auto">
          <p style={{ color: MUTED, fontSize: 19, lineHeight: 1.8 }}>
            How I create value. Where I focus. What drives each business.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-6xl mx-auto">
          <SectionHead
            eyebrow="The portfolio"
            title="Still in the arena"
            intro="The talks are not a retirement act. Everything below is live operating work, which is why the material keeps changing."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px mt-14" style={{ backgroundColor: '#e2e2e2' }}>
            {VENTURES.map((v, i) => (
              <VentureCard key={v.name} venture={v} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden py-16 md:py-28 px-6" style={{ backgroundColor: INK }}>
        <div
          className="hero-wedge absolute inset-y-0 right-0 hidden md:block"
          style={{ width: '46%', backgroundColor: '#6b6b6b', opacity: 0.26 }}
        />
        <div className="relative max-w-4xl mx-auto">
          <SectionHead dark eyebrow="The through-line" title="Why These Businesses?" />
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18, lineHeight: 1.85, marginTop: 26 }}>
            Each one flows from the same conviction: real value comes from connecting people, solving
            problems, and building with integrity. Whether it’s capital, operations, real estate, or
            people development — the principle is the same.
          </p>
          <p
            className="display"
            style={{ color: SECONDARY, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', marginTop: 34 }}
          >
            Relationships. Economics. Execution.
          </p>
        </div>
      </section>

      <BookingCTA
        onContactClick={onContactClick}
        context="Speaking"
        title="Want this perspective in your room?"
        body="The businesses are where the material comes from. Tell me about your event and I will shape it to your audience."
      />
    </div>
  );
}
