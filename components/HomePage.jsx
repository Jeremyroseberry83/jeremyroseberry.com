import React from 'react';
import { Play } from 'lucide-react';
import { PRIMARY, PRIMARY_DEEP, SECONDARY, SECONDARY_DEEP, BG } from './ui';

export default function HomePage({ onContactClick, onNavigate, onWatchFilm }) {
  const [videoReady, setVideoReady] = React.useState(false);

  React.useEffect(() => {
    // Auto-open a promo video shortly after landing, once per browser
    // session. Delete this whole effect (and the video section below) if
    // you don't have a film to show.
    if (sessionStorage.getItem('introPlayed')) return;
    const timer = setTimeout(() => {
      sessionStorage.setItem('introPlayed', '1');
      onWatchFilm && onWatchFilm();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onWatchFilm]);

  return (
    <div>
      {/* HERO — replace /public/videos/hero.mp4 and /public/images/hero-poster.jpg
          with your own. The poster shows before the video loads and on
          connections too slow to bother streaming video. */}
      <section className="relative w-full" style={{ height: '100vh', minHeight: 560, backgroundColor: '#0C1018', backgroundImage: 'url(/images/hero-poster.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <video autoPlay muted loop playsInline preload="auto" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: videoReady ? 1 : 0, transition: 'opacity 700ms' }} onPlaying={() => setVideoReady(true)} onLoadedData={() => setVideoReady(true)}>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,16,24,0.72) 0%, rgba(12,16,24,0.34) 26%, rgba(12,16,24,0) 55%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 1.5rem 8vh' }}>
          <div style={{ maxWidth: 760 }}>
            <h1 style={{ fontSize: 'clamp(32px, 5.5vw, 56px)', fontWeight: 700, color: 'white', lineHeight: 1.15, letterSpacing: '-0.01em', textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}>
              [Your headline. <span style={{ color: SECONDARY, fontStyle: 'italic' }}>One key word</span> in accent color.]
            </h1>
            <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.95)', lineHeight: 1.65, marginTop: '1.5rem', maxWidth: 640, marginLeft: 'auto', marginRight: 'auto', textShadow: '0 1px 12px rgba(0,0,0,0.35)' }}>
              [One or two sentences on the problem you solve and how — this is the first thing anyone reads, keep it concrete and specific to your product, not generic.]
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <button
                onClick={() => onNavigate && onNavigate('product')}
                style={{ padding: '14px 28px', borderRadius: '999px', border: 'none', background: `linear-gradient(90deg, ${PRIMARY} 0%, ${PRIMARY_DEEP} 100%)`, color: 'white', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
              >
                Learn more
              </button>
              <button
                onClick={onWatchFilm}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', borderRadius: '999px', border: '1.5px solid rgba(255,255,255,0.7)', background: 'transparent', color: 'white', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
              >
                <Play size={16} fill="white" />
                Watch our story
              </button>
            </div>
          </div>
        </div>
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', height: 'clamp(70px, 13vw, 200px)', display: 'block' }}>
          <path d="M0,200 L0,8 C360,150 1080,150 1440,8 L1440,200 Z" fill={BG} />
        </svg>
      </section>

      {/* Slim button row below the hero — a quiet second nav, not a full
          section with its own headline/copy (that duplicates the hero and
          the product page). Point these at whatever two paths make sense
          for your visitors. */}
      <section style={{ backgroundColor: 'white', padding: '2.5rem 1.5rem' }}>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => onNavigate && onNavigate('about')}
            style={{ padding: '13px 26px', borderRadius: '999px', border: 'none', background: `linear-gradient(90deg, ${SECONDARY} 0%, ${SECONDARY_DEEP} 100%)`, color: 'white', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
          >
            Our story
          </button>
          <button
            onClick={() => onNavigate && onNavigate('partners')}
            style={{ padding: '13px 26px', borderRadius: '999px', border: `1.5px solid rgba(30,142,90,0.35)`, background: 'transparent', color: SECONDARY_DEEP, fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}
          >
            For partners
          </button>
        </div>
      </section>
    </div>
  );
}
