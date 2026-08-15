import React from 'react';
import { ArrowRight, Check, Mail } from 'lucide-react';
import { PageTopBand, Eyebrow, SLATE, MUTED, PRIMARY, SECONDARY, SECONDARY_DEEP, INK } from './ui';

export default function PartnersPage({ onContactClick }) {
  const connectA = () => onContactClick('Partnership', '[Interested in connecting as a — track A partner.]');
  const connectB = () => onContactClick('Partnership', '[Interested in connecting as a — track B partner.]');

  return (
    <div>
      <PageTopBand image="/images/partners-band.jpg" />

      {/* Opening headline — lives in the page's normal flow rather than a
          colored hero band, matching the other pages. */}
      <section className="pt-16 pb-6 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: SLATE, marginBottom: '1rem', lineHeight: 1.2 }}>
            [Headline framing the two ways to work with you.] <span style={{ color: SECONDARY, fontStyle: 'italic' }}>[accent phrase]</span>
          </h1>
          <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8 }}>
            [One sentence on what starting a conversation actually involves — an NDA, a call, whatever your real first step is.]
          </p>
        </div>
      </section>

      {/* Two-panel positioning — swap in your own two partner tracks. If you
          only have one, delete the grid and keep a single full-width card. */}
      <section className="pt-6 pb-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <div
            className="rounded-2xl p-10"
            style={{ backgroundColor: '#E1F4EE', borderTop: `4px solid ${SECONDARY}` }}
          >
            <Eyebrow color={SECONDARY_DEEP} className="mb-3">[Track A]</Eyebrow>
            <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: '19px' }}>
              [Short description of who track A is for]
            </h3>
            <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7, marginBottom: 24 }}>
              [A sentence or two on what you're looking for from this kind of partner.]
            </p>
            <button
              onClick={connectA}
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: SECONDARY_DEEP, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Connect with us <ArrowRight size={14} />
            </button>
          </div>

          <div
            className="rounded-2xl p-10"
            style={{ backgroundColor: '#EEF2FE', borderTop: `4px solid ${PRIMARY}` }}
          >
            <Eyebrow className="mb-3">[Track B]</Eyebrow>
            <h3 className="font-bold mb-4" style={{ color: SLATE, fontSize: '19px' }}>
              [Short description of who track B is for]
            </h3>
            <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7, marginBottom: 24 }}>
              [A sentence or two on what you offer this kind of partner.]
            </p>
            <button
              onClick={connectB}
              className="inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: PRIMARY, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              Connect with us <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* X-item / checklist split — what's painful today (plain cards) vs.
          what you deliver (checked list). A strong pattern for any page
          arguing "here's the cost of the status quo." Delete if it doesn't fit. */}
      <section className="pt-4 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Eyebrow color={SECONDARY_DEEP} className="mb-3">[Section eyebrow]</Eyebrow>
          <h2
            className="font-bold mb-10"
            style={{ color: SLATE, fontSize: 'clamp(1.7rem, 3vw, 2.5rem)', lineHeight: 1.12, letterSpacing: '-0.025em' }}
          >
            [Problem-framing headline.] <span style={{ color: SECONDARY, fontStyle: 'italic' }}>[accent phrase]</span>
          </h2>

          <p style={{ color: MUTED, fontSize: '15px', marginBottom: 24 }}>
            [One sentence naming the cost of not solving this.]
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {['[Pain point one]', '[Pain point two]', '[Pain point three]'].map((t) => (
              <div key={t} className="rounded-xl p-6" style={{ backgroundColor: '#F7F8FA', border: '1px solid #E4E8F2' }}>
                <p style={{ color: SLATE, fontSize: '15px', lineHeight: 1.6, fontWeight: 600 }}>{t}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #E4E8F2', borderBottom: '1px solid #E4E8F2', padding: '2.5rem 0', textAlign: 'center', marginBottom: 40 }}>
            <p
              className="font-bold mx-auto mb-4"
              style={{ color: SLATE, fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)', lineHeight: 1.3, maxWidth: '32ch' }}
            >
              [Centerpiece statement — the single sentence that sums up what a working relationship with you actually looks like.]
            </p>
            <p style={{ color: MUTED, fontSize: '15px' }}>
              [Supporting line, e.g. what stays unchanged on their end.]
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-10" style={{ border: '1px solid #E4E8F2' }}>
              <Eyebrow className="mb-6">What we need from you</Eyebrow>
              <ul className="space-y-4">
                {['[Input one]', '[Input two]', '[Input three]', '[Input four]', '[Input five]'].map((t) => (
                  <li key={t} className="flex gap-3" style={{ color: MUTED, fontSize: '15px', lineHeight: 1.6 }}>
                    <span style={{ color: MUTED, flexShrink: 0 }}>›</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-10" style={{ backgroundColor: '#E1F4EE' }}>
              <Eyebrow color={SECONDARY_DEEP} className="mb-6">What you get back</Eyebrow>
              <ul className="space-y-4">
                {['[Deliverable one]', '[Deliverable two]', '[Deliverable three]', '[Deliverable four]', '[Deliverable five]'].map((t) => (
                  <li key={t} className="flex gap-3" style={{ color: SLATE, fontSize: '16px', lineHeight: 1.6 }}>
                    <Check size={17} style={{ color: SECONDARY_DEEP, flexShrink: 0, marginTop: 3 }} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-16 md:py-28 px-6 text-center" style={{ backgroundColor: INK }}>
        <span
          aria-hidden="true"
          style={{ display: 'block', width: 46, height: 3, borderRadius: 2, backgroundColor: SECONDARY, margin: '0 auto 34px' }}
        />
        <h2
          className="text-white font-bold mb-10"
          style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)', letterSpacing: '-0.03em' }}
        >
          Let's start the conversation.
        </h2>
        <button
          onClick={connectA}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-sm font-semibold"
          style={{ color: INK }}
        >
          <Mail size={17} />
          Get in touch
        </button>
      </section>
    </div>
  );
}
