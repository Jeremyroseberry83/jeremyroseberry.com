import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import { PageTopBand, PRIMARY, SECONDARY, SLATE, MUTED, INK } from './ui';

function Eyebrow({ children, color = PRIMARY }) {
  return (
    <p className="text-xs font-bold uppercase mb-4" style={{ color, letterSpacing: '0.22em' }}>
      {children}
    </p>
  );
}

function Person({ name, title, bio, photo, accent, linkedin, category }) {
  return (
    <div>
      <div
        className="relative rounded-2xl overflow-hidden mb-6"
        style={{ aspectRatio: '1 / 1', backgroundColor: '#E9EDF6' }}
      >
        <img src={photo} alt={name} className="w-full h-full object-cover" loading="lazy" />
        {category && (
          <span
            className="absolute top-3 left-3 text-xs font-bold uppercase"
            style={{ color: 'white', backgroundColor: accent, padding: '4px 10px', borderRadius: '999px', letterSpacing: '0.08em' }}
          >
            {category}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2.5 mb-1">
        <h3 className="font-bold" style={{ color: SLATE, fontSize: '19px' }}>
          {name}
        </h3>
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${name} on LinkedIn`}
            className="inline-flex items-center justify-center rounded-full transition-colors"
            style={{ width: 24, height: 24, color: accent, backgroundColor: 'rgba(0,0,0,0.04)', flexShrink: 0 }}
          >
            <Linkedin size={13} strokeWidth={2} />
          </a>
        )}
      </div>

      <p className="font-semibold mb-4" style={{ color: accent, fontSize: '13px' }}>
        {title}
      </p>
      <p style={{ color: MUTED, fontSize: '15px', lineHeight: 1.7 }}>{bio}</p>
    </div>
  );
}

export default function AboutPage({ onContactClick }) {
  return (
    <div>
      <PageTopBand image="/images/about-band.jpg" />

      {/* Opening headline — lives in the page's normal flow, matching the
          other pages, rather than a separate colored hero band. */}
      <section className="pt-16 pb-4 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 style={{ fontSize: 'clamp(1.7rem, 5vw, 2.25rem)', fontWeight: 700, color: SLATE, lineHeight: 1.25 }}>
            [How long you've been at this.] <span style={{ color: PRIMARY, fontStyle: 'italic' }}>[What you were built to do.]</span>
          </h1>
        </div>
      </section>

      {/* Origin */}
      <section className="pt-8 pb-12 md:pt-12 md:pb-24 px-6" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div
            className="rounded-2xl overflow-hidden"
            style={{ aspectRatio: '4 / 3', background: 'linear-gradient(135deg, #171B33 0%, #2E4259 100%)' }}
          >
            <img
              src="/images/origin.jpg"
              alt="[Describe what this image shows]"
              className="w-full h-full object-cover" loading="lazy"
            />
          </div>
          <div>
            <Eyebrow>Where this came from</Eyebrow>
            <p className="mb-6" style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75 }}>
              [The origin story — where the idea/technology came from, who was involved, and why it matters. Two or three sentences of real specifics beat a paragraph of platitudes.]
            </p>
            <p className="mb-8" style={{ color: MUTED, fontSize: '17px', lineHeight: 1.75 }}>
              [Why you exist now / what you're bringing this to.]
            </p>

            {/* "Backed & published by" credential badges — 2-column grid on
                mobile so pairs always wrap evenly (a flex-wrap row of
                differently-sized pills can wrap 3-then-1, which looks
                lopsided). Falls back to a normal wrapping row at md+. */}
            <div style={{ paddingTop: '1.5rem', borderTop: '1px solid #E4E8F2' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: MUTED, marginBottom: '0.85rem' }}>
                Backed &amp; published by
              </div>
              <div className="grid grid-cols-2 justify-items-center md:flex md:flex-wrap md:justify-items-none md:justify-start md:items-center gap-2.5">
                {['[Name]', '[Name]', '[Name]', '[Name]'].map((name, i) => (
                  <div
                    key={i}
                    className="w-full text-center md:w-auto md:text-left"
                    style={{ backgroundColor: '#EEF2FE', borderRadius: '999px', padding: '8px 18px', fontSize: '14px', fontWeight: 700, color: PRIMARY }}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="font-bold" style={{ color: SLATE, fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
              Founders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <Person
                key={i}
                name="[Founder Name]"
                linkedin="https://www.linkedin.com/in/example/"
                title="[Title]"
                category="Founder"
                accent={PRIMARY}
                photo="/images/team/placeholder.jpg"
                bio="[One sentence on their background relevant to why they're building this.]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advisory board / leadership — reuse Person, drop this whole section
          if you don't have one */}
      <section className="pt-16 pb-8 md:pt-28 md:pb-12 px-6" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="font-bold" style={{ color: SLATE, fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
              Advisory board
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {[1, 2, 3].map((i) => (
              <Person
                key={i}
                name="[Advisor Name]"
                linkedin="https://www.linkedin.com/in/example/"
                title="[Title, Company]"
                category="Advisor"
                accent={SECONDARY}
                photo="/images/team/placeholder.jpg"
                bio="[One sentence on their relevant background.]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Where we focus — core focus + prospective expansion. Cut this
          section if it doesn't apply to your business. */}
      <section className="pt-8 pb-16 md:pt-12 md:pb-28 px-6" style={{ backgroundColor: '#F7F8FA' }}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <Eyebrow>Where we focus</Eyebrow>
            <h2 className="font-bold" style={{ color: SLATE, fontSize: 'clamp(1.8rem, 3.2vw, 2.7rem)', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
              [Headline framing current focus vs. where you're headed.]
            </h2>
            <p className="mt-5" style={{ color: MUTED, fontSize: '16px', lineHeight: 1.7 }}>
              [One sentence naming your core focus today.]
            </p>
          </div>

          <div className="text-xs font-bold uppercase mb-6 pb-2" style={{ color: PRIMARY, letterSpacing: '0.16em', borderBottom: '1px solid #E4E8F2' }}>
            Core focus
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {['[Focus area one]', '[Focus area two]', '[Focus area three]'].map((title, i) => (
              <div key={i} className="rounded-xl overflow-hidden text-center" style={{ backgroundColor: 'white', borderTop: `3px solid ${PRIMARY}` }}>
                <div style={{ aspectRatio: '4 / 3', overflow: 'hidden' }}>
                  <img src="/images/placeholder-square.jpg" alt={title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold mb-2" style={{ color: SLATE, fontSize: '16px' }}>{title}</h4>
                  <p style={{ color: MUTED, fontSize: '13px' }}>[Short description]</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs font-bold uppercase mb-6 pb-2" style={{ color: MUTED, letterSpacing: '0.16em', borderBottom: '1px solid #E4E8F2' }}>
            Prospective expansion
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['[Area one]', '[Area two]', '[Area three]', '[Area four]'].map((title, i) => (
              <div key={i} className="rounded-lg overflow-hidden text-center" style={{ backgroundColor: 'white', border: '1px solid #E4E8F2' }}>
                <div style={{ aspectRatio: '1', overflow: 'hidden' }}>
                  <img src="/images/placeholder-square.jpg" alt={title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4">
                  <h4 style={{ color: SLATE, fontSize: '13px' }}>{title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-28 px-6 text-center" style={{ backgroundColor: INK }}>
        <span aria-hidden="true" style={{ display: 'block', width: 46, height: 3, borderRadius: 2, backgroundColor: SECONDARY, margin: '0 auto 34px' }} />
        <h2 className="text-white font-bold mb-10" style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.8rem)', letterSpacing: '-0.03em' }}>
          [Closing CTA headline]
        </h2>
        <button
          onClick={onContactClick}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-sm font-semibold"
          style={{ color: '#2F4FC9' }}
        >
          <Mail size={17} />
          Get in touch
        </button>
      </section>
    </div>
  );
}
