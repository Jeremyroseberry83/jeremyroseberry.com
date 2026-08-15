import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { company } from '../site.config';

/**
 * VideoModal — plays a full video (e.g. a company/promo film).
 * Starts muted so it can autoplay reliably even when opened automatically
 * (not just on a user click) — visitors can unmute via the video controls.
 * Delete this component (and its usage in pages/index.jsx and HomePage.jsx)
 * if you don't have a video to show.
 */
export default function VideoModal({ onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    // Muted background videos elsewhere on the page shouldn't compete.
    const others = Array.from(document.querySelectorAll('video')).filter(
      (v) => v !== videoRef.current
    );
    others.forEach((v) => v.pause());

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      others.forEach((v) => v.play().catch(() => {}));
    };
  }, [onClose]);

  useEffect(() => {
    // Hold on the poster for a beat before playing, instead of cutting
    // straight to video the instant the modal appears.
    const timer = setTimeout(() => {
      videoRef.current?.play().catch(() => {});
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8 modal-fade-in"
      style={{ backgroundColor: 'rgba(10,14,20,0.92)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${company.name} video`}
    >
      <button
        onClick={onClose}
        aria-label="Skip video"
        className="absolute top-5 right-5 sm:top-7 sm:right-7 inline-flex items-center gap-2 pl-4 pr-3 py-2.5 rounded-full font-semibold transition-opacity hover:opacity-80"
        style={{ color: '#fff', backgroundColor: 'rgba(255,255,255,0.16)', fontSize: 14 }}
      >
        Skip
        <X size={18} />
      </button>

      <div className="w-full" style={{ maxWidth: 1180 }} onClick={(e) => e.stopPropagation()}>
        <video
          ref={videoRef}
          className="w-full rounded-xl"
          style={{ aspectRatio: '16 / 9', backgroundColor: '#000', display: 'block' }}
          controls
          muted
          playsInline
          poster="/images/video-poster.jpg"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
