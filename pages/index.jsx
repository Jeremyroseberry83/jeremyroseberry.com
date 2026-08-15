import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu, X, Mail } from 'lucide-react';
import HomePage from '../components/HomePage';
import ProductPage from '../components/ProductPage';
import PartnersPage from '../components/PartnersPage';
import AboutPage from '../components/AboutPage';
import ContactForm from '../components/ContactForm';
import VideoModal from '../components/VideoModal';
import Translate from '../components/Translate';
import { company, colors, nav as navItems } from '../site.config';

export default function Site() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactContext, setContactContext] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const overHero = !scrolled;

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
      case 'product':  return <ProductPage onNavigate={handleNavClick} />;
      case 'partners': return <PartnersPage onContactClick={openContact} />;
      case 'about':    return <AboutPage onContactClick={openContact} />;
      default:         return <HomePage onContactClick={openContact} onWatchFilm={() => setShowVideo(true)} onNavigate={handleNavClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{company.name} — [Your headline]</title>
        <meta name="description" content="[One-sentence description of what you do, for search results and social previews.]" />
        <link rel="canonical" href={`https://${company.domain}`} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={company.name} />
        <meta property="og:url" content={`https://${company.domain}`} />
        <meta property="og:title" content={`${company.name} — [Your headline]`} />
        <meta property="og:description" content="[One-sentence description of what you do, for search results and social previews.]" />
        <meta property="og:image" content={`https://${company.domain}/images/hero-poster.jpg`} />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${company.name} — [Your headline]`} />
        <meta name="twitter:description" content="[One-sentence description of what you do, for search results and social previews.]" />
        <meta name="twitter:image" content={`https://${company.domain}/images/hero-poster.jpg`} />
      </Head>

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: overHero ? 'transparent' : '#FFFFFF',
          boxShadow: overHero ? 'none' : '0 1px 3px rgba(0,0,0,0.06)'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              aria-label={`${company.name} home`}
            >
              {/* Both variants render from mount and crossfade via opacity — swapping
                  the `src` directly caused a flicker while the other file loaded.
                  Replace /public/images/logo-white.png and logo-dark.png with your own. */}
              <div style={{ position: 'relative', height: 34, width: 28, flexShrink: 0 }}>
                <img
                  src="/images/logo-white.png"
                  alt={company.name}
                  style={{ position: 'absolute', inset: 0, height: 34, width: 28, display: 'block', opacity: overHero ? 1 : 0, transition: 'opacity 250ms ease' }}
                />
                <img
                  src="/images/logo-dark.png"
                  alt=""
                  aria-hidden="true"
                  style={{ position: 'absolute', inset: 0, height: 34, width: 28, display: 'block', opacity: overHero ? 0 : 1, transition: 'opacity 250ms ease' }}
                />
              </div>
              <div>
                <div
                  className="text-lg font-bold"
                  style={{ color: overHero ? '#FFFFFF' : colors.PRIMARY, letterSpacing: '0.08em', lineHeight: 1 }}
                >
                  {company.name.toUpperCase()}
                </div>
                <div
                  style={{
                    fontSize: '9px',
                    fontWeight: 600,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    color: overHero ? 'rgba(255,255,255,0.8)' : colors.SLATE,
                    lineHeight: 1
                  }}
                >
                  {company.tagline}
                </div>
              </div>
            </button>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const activeUnderline = overHero ? 'rgba(255,255,255,0.95)' : colors.PRIMARY;
              const hoverColor = overHero ? 'rgba(255,255,255,0.7)' : colors.PRIMARY;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm font-semibold transition-colors"
                  style={{
                    color: overHero
                      ? isActive ? '#FFFFFF' : 'rgba(255,255,255,0.75)'
                      : isActive ? colors.PRIMARY : colors.MUTED,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    paddingBottom: '4px',
                    borderBottom: `2px solid ${isActive ? activeUnderline : 'transparent'}`,
                    transition: 'color 0.2s, border-color 0.2s'
                  }}
                  onMouseOver={(e) => { if (!isActive) e.currentTarget.style.borderBottomColor = hoverColor; }}
                  onMouseOut={(e) => { if (!isActive) e.currentTarget.style.borderBottomColor = 'transparent'; }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Translate />
            <button
              onClick={openContact}
              className="px-6 py-2.5 text-sm font-semibold text-white rounded-full"
              style={{ background: `linear-gradient(90deg, ${colors.PRIMARY} 0%, ${colors.PRIMARY_DEEP} 100%)` }}
            >
              Get in touch
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: overHero ? '#FFFFFF' : colors.SLATE }}
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t" style={{ borderColor: '#DCE3F7' }}>
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm font-medium text-left"
                  style={{ color: colors.SLATE }}
                >
                  {item.name}
                </button>
              ))}
              <Translate />
              <button
                onClick={() => { openContact(); setMobileMenuOpen(false); }}
                className="px-4 py-2.5 text-sm font-semibold text-white rounded-full w-full"
                style={{ background: `linear-gradient(90deg, ${colors.PRIMARY} 0%, ${colors.PRIMARY_DEEP} 100%)` }}
              >
                Get in touch
              </button>
            </div>
          </div>
        )}
      </nav>

      <main style={{ paddingTop: 0 }}>{renderPage()}</main>

      {currentPage !== 'home' && (
        <button
          onClick={openContact}
          className="fixed bottom-8 right-8 p-4 rounded-full text-white shadow-lg z-40"
          style={{ background: `linear-gradient(135deg, ${colors.PRIMARY} 0%, ${colors.PRIMARY_DEEP} 100%)` }}
          aria-label="Get in touch"
        >
          <Mail size={24} />
        </button>
      )}

      {showContactModal && (
        <ContactForm
          onClose={() => setShowContactModal(false)}
          initialType={contactContext?.type}
          initialMessage={contactContext?.message}
        />
      )}
      {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}

      <footer
        className="py-10 px-6"
        style={{
          background: `linear-gradient(120deg, ${colors.SECONDARY_DEEP} 0%, ${colors.SECONDARY} 100%)`,
          color: 'white',
          borderTop: `3px solid ${colors.SECONDARY}`
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between text-center md:text-left"
            style={{
              flexWrap: 'wrap',
              gap: '1.5rem',
              paddingBottom: '1.25rem',
              marginBottom: '1.25rem',
              borderBottom: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <img src="/images/logo-white.png" alt="" style={{ height: 26, width: 'auto' }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, letterSpacing: '0.5px' }}>{company.name.toUpperCase()}</div>
                <div style={{ fontSize: 12, opacity: 0.65 }}>{company.tagline}</div>
              </div>
            </div>

            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
              style={{ fontSize: 13 }}
            >
              <Mail size={14} strokeWidth={1.8} />
              {company.email}
            </a>
          </div>

          <div className="text-xs text-center" style={{ opacity: 0.5 }}>
            © {new Date().getFullYear()} {company.name}. Privacy · Terms
          </div>
        </div>
      </footer>
    </div>
  );
}
