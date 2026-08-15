import React from 'react';
import { CountUp, PageTopBand, PRIMARY, SECONDARY, SLATE, MUTED, INK } from './ui';

// Local tints for this page's cards — pull these into site.config.js colors
// if you reuse the same palette elsewhere, or leave them page-local like
// this if they're one-off.
const PRIMARY_BG_LIGHT = '#EEF1FD';
const SECONDARY_BG_LIGHT = '#EAF7EF';
const GRAY_BG_LIGHT = '#F3F4F6';
const DARK_INK_BG = 'rgba(46, 66, 89, 0.9)';
const LIGHT_SECONDARY_ACCENT = '#7FE3A8';

/**
 * ProductPage — a deep-dive page: what you do, why it's hard, how you solve
 * it, proof. The sections below are patterns pulled from a real client site;
 * keep the ones that fit your story and delete the rest — they don't need
 * to appear in this order, or at all.
 */
export default function ProductPage({ onNavigate }) {
  return (
    <div>
      <PageTopBand image="/images/product-band.jpg" />

      {/* 1. THE CLAIM — headline + 3 stat proof points */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: '#FAFBFD' }}>
        <div className="max-w-3xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: SLATE, marginBottom: '1.5rem', lineHeight: 1.2 }}>[Your core claim, stated plainly — this is the thesis of the whole page.]</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
            {[
              { value: <CountUp end={10} suffix="x" />, caption: '[what this number proves]' },
              { value: <CountUp end={6.5} decimals={1} suffix=" months" />, caption: '[what this number proves]' },
              { value: <CountUp end={2000} />, caption: '[what this number proves]' }
            ].map((stat, i) => (
              <div key={i} style={{ display: 'flex', gap: '1rem' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: SECONDARY, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: SLATE, marginBottom: '0.25rem' }}>{stat.value}</div>
                  <div style={{ fontSize: '14px', color: MUTED }}>{stat.caption}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a href="#" style={{ display: 'inline-block', backgroundColor: PRIMARY, color: 'white', padding: '12px 24px', borderRadius: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
              [Primary proof link →]
            </a>
            <a href="#" style={{ display: 'inline-block', backgroundColor: 'white', color: PRIMARY, border: `2px solid ${PRIMARY}`, padding: '10px 24px', borderRadius: '24px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
              [Secondary link, e.g. download PDF]
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM — proportional comparison visual (two circles sized
          to their relative values, not just numbers side by side). Sizes use
          clamp() so they scale down on mobile instead of overflowing. */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: SLATE, marginBottom: '1rem', lineHeight: 1.2, textAlign: 'center' }}>[The gap between what exists today and what's actually possible.]</h2>
          <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '2.5rem', fontStyle: 'italic', textAlign: 'center', maxWidth: '60ch', marginLeft: 'auto', marginRight: 'auto' }}>[One sentence framing why that gap matters to the reader.]</p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(1rem, 4vw, 2.5rem)', flexWrap: 'wrap', padding: '1rem 0 2.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 'clamp(56px, 18vw, 76px)', height: 'clamp(56px, 18vw, 76px)', borderRadius: '50%', backgroundColor: GRAY_BG_LIGHT, border: `2px solid ${MUTED}`, margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 'clamp(11px, 2.6vw, 13px)', fontWeight: 700, color: MUTED }}>[small #]</span>
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: MUTED }}>[Label for<br />smaller value]</div>
            </div>
            <div style={{ fontSize: '24px', color: MUTED }}>→</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: 'clamp(150px, 55vw, 240px)', height: 'clamp(150px, 55vw, 240px)', borderRadius: '50%', backgroundColor: SECONDARY_BG_LIGHT, border: `3px solid ${SECONDARY}`, margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 'clamp(30px, 9vw, 42px)', fontWeight: 700, color: SLATE }}><CountUp end={100} prefix="~" /></span>
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: SECONDARY }}>[Label for<br />larger value]</div>
            </div>
          </div>

          <div style={{ backgroundColor: INK, color: 'white', borderRadius: '16px', padding: '2.5rem 2rem', textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(40px, 7vw, 56px)', fontWeight: 800, color: LIGHT_SECONDARY_ACCENT, lineHeight: 1 }}>
              <CountUp end={10} prefix="~" suffix="x" />
            </div>
            <div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', margin: '0.5rem 0 1.25rem' }}>[What this multiplier represents]</div>
            <p style={{ fontSize: 'clamp(19px, 2.6vw, 26px)', fontWeight: 700, lineHeight: 1.35, maxWidth: '24ch', margin: '0 auto' }}>
              [The punchline sentence — the actual point of this section, stated as a single clear claim.]
            </p>
          </div>
        </div>
      </section>

      {/* 3. PROOF CARDS — 3 stat cards backing up the claim */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: '#FAFBFD' }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: SLATE, marginBottom: '1rem', lineHeight: 1.2 }}>[Subhead reinforcing why this is hard to do well.]</h2>
          <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.8, marginBottom: '2.5rem' }}>[A paragraph explaining the mechanism/process behind the problem — what actually goes wrong today.]</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
            {[
              { label: '[Metric one]', value: '[X of Y]', caption: '[what this measures]' },
              { label: '[Metric two]', value: '[1 in N]', caption: '[what this measures]' },
              { label: '[Metric three]', value: '[N×]', caption: '[what this measures]' }
            ].map(({ label, value, caption }) => (
              <div key={label} style={{ backgroundColor: 'white', borderRadius: '12px', borderTop: `4px solid ${PRIMARY}`, padding: '1.5rem' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: PRIMARY, marginBottom: '0.75rem' }}>{label}</div>
                <div style={{ fontSize: '32px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem' }}>{value}</div>
                <div style={{ fontSize: '13px', color: MUTED, lineHeight: 1.6 }}>{caption}</div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '13px', color: MUTED, fontStyle: 'italic' }}>
            [Citation / source line, if these numbers come from a study or report.]
          </p>
        </div>
      </section>

      {/* 4. THE SOLUTION — image + supporting "how it works" card */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: SLATE, marginBottom: '2.5rem', lineHeight: 1.2 }}>[Your solution, in one sentence.]</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', minHeight: '340px' }}>
              <img src="/images/product-detail.jpg" alt="[Describe what this image shows]" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
            </div>

            <div style={{ backgroundColor: PRIMARY_BG_LIGHT, borderRadius: '12px', borderTop: `4px solid ${PRIMARY}`, padding: '2rem' }}>
              <h4 style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: PRIMARY, marginBottom: '1.5rem' }}>How it works</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { title: '[Feature one]', desc: '[short description]' },
                  { title: '[Feature two]', desc: '[short description]' },
                  { title: '[Feature three]', desc: '[short description]' }
                ].map(({ title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: '0.75rem' }}>
                    <div style={{ width: 26, height: 26, borderRadius: '50%', backgroundColor: SECONDARY, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>✓</div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: SLATE }}>{title}</div>
                      <div style={{ fontSize: '13px', color: MUTED }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS — numbered steps on a dark ground */}
      <section style={{ padding: '4rem 1.5rem', backgroundColor: DARK_INK_BG }}>
        <div className="max-w-6xl mx-auto">
          <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: 'white', marginBottom: '1rem', lineHeight: 1.2 }}>[How you deliver the solution, step by step.]</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '2rem' }}>[One sentence framing the process.]</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { num: '01', label: '[Stage]', title: '[Step title]', body: '[What happens in this step.]' },
              { num: '02', label: '[Stage]', title: '[Step title]', body: '[What happens in this step.]' },
              { num: '03', label: '[Stage]', title: '[Step title]', body: '[What happens in this step.]' }
            ].map(({ num, label, title, body }) => (
              <div key={num} style={{ backgroundColor: 'white', borderRadius: '12px', borderTop: `4px solid ${PRIMARY}`, padding: '1.5rem' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: PRIMARY, marginBottom: '0.25rem' }}>{num}</div>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase', color: PRIMARY, marginBottom: '0.5rem' }}>{label}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: SLATE, marginBottom: '0.5rem' }}>{title}</div>
                <div style={{ fontSize: '13px', color: MUTED, lineHeight: 1.6 }}>{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE DO YOU FIT IN — dual-path cards, routes to Partners page */}
      <section style={{ backgroundColor: 'white', padding: '4rem 1.5rem 5rem' }}>
        <div className="max-w-4xl mx-auto text-center" style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: SLATE, lineHeight: 1.2 }}>Where do you fit in?</h2>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <div
            onClick={() => onNavigate && onNavigate('partners')}
            className="transition-colors"
            style={{ cursor: 'pointer', border: `2px solid rgba(59,96,228,0.2)`, borderTop: `3px solid ${PRIMARY}`, borderRadius: '12px', padding: '2rem' }}
          >
            <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: PRIMARY, marginBottom: '0.75rem' }}>[Partner track one]</h3>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.7 }}>[Who this is for and what they get.]</p>
          </div>
          <div
            onClick={() => onNavigate && onNavigate('partners')}
            className="transition-colors"
            style={{ cursor: 'pointer', border: `2px solid rgba(30,142,90,0.2)`, borderTop: `3px solid ${SECONDARY}`, borderRadius: '12px', padding: '2rem' }}
          >
            <h3 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', color: SECONDARY, marginBottom: '0.75rem' }}>[Partner track two]</h3>
            <p style={{ fontSize: '16px', color: MUTED, lineHeight: 1.7 }}>[Who this is for and what they get.]</p>
          </div>
        </div>
      </section>
    </div>
  );
}
