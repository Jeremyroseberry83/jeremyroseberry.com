import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu, X, Mail, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import Logo from '../components/Logo';
import HomePage from '../components/HomePage';
import SpeakingPage from '../components/SpeakingPage';
import FaithFamilyPage from '../components/FaithFamilyPage';
import FitnessFunPage from '../components/FitnessFunPage';
import ContactForm from '../components/ContactForm';
import Translate from '../components/Translate';
import { Button } from '../components/ui';
import { company, colors, cta, nav as navItems, social } from '../site.config';

/**
 * Per-page metadata. This is a single-route app (one URL, pages swap in
 * state), so these titles improve the browser tab and back-button experience
 * but do NOT give each page its own indexable URL.
 *
 * Worth knowing: an organiser cannot link a colleague straight to the
 * speaking page, and Google only ever indexes one page. Converting to real
 * routes (/speaking, /podcasts) is the single highest-value SEO change
 * available on this site — it is a structural change, not a config tweak.
 */
/** Keys must match those in site.config.js `social`. */
const SOCIAL_ICONS = {
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  x: Twitter
};

const META = {
  home: {
    title: `${company.name} — Keynote Speaker, Host & Entrepreneur`,
    description:
      'Keynotes, event hosting and podcast conversations on leadership, mindset and what building a business actually costs. Book Jeremy Roseberry.'
  },
  faith: {
    title: `${company.name} — Faith, Family & Finance`,
    description:
      'Husband, father, and the values underneath two decades of building. The four foundations, the family, and what we have built in real estate and capital markets.'
  },
  fitness: {
    title: `${company.name} — Fitness, Fun & Friends`,
    description:
      'Training in 130-degree rooms, jet surfing, skydiving, base jumping into water — and the slow mornings that hold the rest of it together.'
  },
  speaking: {
    title: `Book ${company.name} to Speak — Keynotes, Books & Podcast`,
    description:
      'Signature keynotes on mindset and leadership, the Four Levels book series, and the podcast. Topics and availability for event organisers.'
  }
};

export default function Site() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactContext, setContactContext] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = currentPage === 'home';

  // Off-white bar on every page. Settled.
  //
  // Trade-off, recorded so it stays a known cost: the "Jeremy" half of the
  // wordmark is gold, and gold on #f5f5f5 measures about 2:1. Fine for a logo
  // — wordmarks are exempt from the text minimums and "Roseberry" carries the
  // name at 4.89:1 — but the gold reads as a tint rather than as type.
  // SECONDARY_DEEP (#a8873f) is the same hue at 3.5:1 if it needs to be firmer.
  // Everything else is comfortable: navy monogram 10.9:1, taupe links 4.89:1.
  //
  // Recorded because it looks like an obvious idea and someone will try it:
  // painting the home bar in the artwork's own top-edge colours (gray to
  // 41.1%, taupe to 79.9%, gray out) does not work. No single text colour is
  // legible on both bands — the gray takes only dark type (white 2.6:1, gold
  // 1.2:1), the taupe only light type (charcoal 2.1:1) — and the nav group is
  // right-aligned inside a max-width container, so its left edge crosses that
  // boundary somewhere around 1024–1100px. Whatever colour you pick, there is
  // a window of viewport widths where the links vanish.
  const navBg = colors.BG;
  const navDark = false;

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const openContact = (type, message) => {
    // Guard against onClick={openContact} passing the DOM click event as `type`.
    setContactContext(typeof type === 'string' ? { type, message: message || '' } : null);
    setShowContactModal(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'faith':
        return <FaithFamilyPage onContactClick={openContact} onNavigate={handleNavClick} />;
      case 'fitness':
        return <FitnessFunPage onContactClick={openContact} />;
      case 'speaking':
        return <SpeakingPage onContactClick={openContact} />;
      default:
        return <HomePage onContactClick={openContact} onNavigate={handleNavClick} />;
    }
  };

  const meta = META[currentPage] || META.home;
  const socialLinks = Object.entries(social).filter(([, url]) => url);

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://${company.domain}`} />

        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content={company.name} />
        <meta property="og:url" content={`https://${company.domain}`} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={`https://${company.domain}/images/og-card.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={`https://${company.domain}/images/og-card.jpg`} />
      </Head>

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: navBg,
          boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.12)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          <button
            onClick={() => handleNavClick('home')}
            style={{ background: 'none', border: 'none', padding: 0 }}
            aria-label={`${company.name} — home`}
          >
            <Logo tone={navDark ? 'dark' : 'light'} />
          </button>

          <div className={`hidden xl:flex items-center ${isHome ? 'gap-7 ml-auto' : 'gap-6'}`}>
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const idle = colors.TAUPE;
              const on = colors.PRIMARY;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: '4px 0',
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: isActive ? on : idle,
                    borderBottom: `2px solid ${isActive ? colors.SECONDARY : 'transparent'}`,
                    transition: 'color 0.2s, border-color 0.2s'
                  }}
                  onMouseOver={(e) => {
                    if (!isActive) e.currentTarget.style.borderBottomColor = colors.SECONDARY;
                  }}
                  onMouseOut={(e) => {
                    if (!isActive) e.currentTarget.style.borderBottomColor = 'transparent';
                  }}
                >
                  {item.name}
                </button>
              );
            })}

            <Translate />
            <Button variant="gold" size="sm" onClick={() => openContact('Speaking')}>
              {cta.primary}
            </Button>
          </div>

          <button
            className="xl:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: colors.SLATE, background: 'none', border: 'none' }}
            aria-label="Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden" style={{ backgroundColor: colors.PRIMARY_DEEP, borderTop: `3px solid ${colors.SECONDARY}` }}>
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    textAlign: 'left',
                    fontSize: 15,
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: currentPage === item.id ? colors.SECONDARY : '#ffffff'
                  }}
                >
                  {item.name}
                </button>
              ))}
              <div style={{ paddingTop: 6 }}>
                <Translate />
              </div>
              <Button
                variant="gold"
                full
                onClick={() => {
                  openContact('Speaking');
                  setMobileMenuOpen(false);
                }}
              >
                {cta.primary}
              </Button>
            </div>
          </div>
        )}
      </nav>

      <main>{renderPage()}</main>

      {/* Floating booking button on every page except home. Home deliberately
          has exactly one button and the nav — nothing else to click. */}
      {!isHome && (
        <button
          onClick={() => openContact('Speaking')}
          className="fixed bottom-7 right-7 z-40"
          style={{
            backgroundColor: colors.SECONDARY,
            color: colors.SLATE,
            border: 'none',
            padding: 16,
            borderRadius: '50%',
            boxShadow: '0 6px 24px rgba(0,0,0,0.28)'
          }}
          aria-label={cta.primary}
        >
          <Mail size={22} />
        </button>
      )}

      {showContactModal && (
        <ContactForm
          onClose={() => setShowContactModal(false)}
          initialType={contactContext?.type}
          initialMessage={contactContext?.message}
        />
      )}

      {/* No footer on the home page — the hero is the whole page, and the only
          ways forward are the nav and the single button. */}
      {!isHome && (
        <footer className="px-6 py-12" style={{ backgroundColor: colors.INK, borderTop: `3px solid ${colors.SECONDARY}` }}>
          <div className="max-w-7xl mx-auto">
            <div
              className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
              style={{ paddingBottom: 22, marginBottom: 22, borderBottom: '1px solid rgba(255,255,255,0.16)' }}
            >
              <Logo tone="dark" />

              <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: 'rgba(255,255,255,0.72)',
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase'
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>

              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2"
                style={{ color: colors.SECONDARY, fontSize: 14 }}
              >
                <Mail size={15} />
                {company.email}
              </a>
            </div>

            {/* Social. Each icon renders only when site.config.js has a URL for
                it, so an account that does not exist yet leaves no dead link
                behind — and adding one later needs no code change. */}
            {socialLinks.length > 0 && (
              <div className="flex justify-center gap-3 mb-7">
                {socialLinks.map(([key, url]) => {
                  const Icon = SOCIAL_ICONS[key];
                  return (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                      className="flex items-center justify-center"
                      style={{
                        width: 42,
                        height: 42,
                        border: '1px solid rgba(255,255,255,0.28)',
                        color: 'rgba(255,255,255,0.85)',
                        transition: 'background-color 180ms ease, border-color 180ms ease, color 180ms ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = colors.SECONDARY;
                        e.currentTarget.style.borderColor = colors.SECONDARY;
                        e.currentTarget.style.color = colors.SLATE;
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)';
                        e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                      }}
                    >
                      {Icon ? <Icon size={18} strokeWidth={1.7} /> : key}
                    </a>
                  );
                })}
              </div>
            )}

            <div className="text-center" style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12 }}>
              © {new Date().getFullYear()} {company.name}. All rights reserved.
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
