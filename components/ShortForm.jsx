import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { SectionHead, SECONDARY, PRIMARY_DEEP, SLATE } from './ui';

/**
 * Short form — a playlist rather than a wall of thumbnails.
 *
 * The four-across grid this replaces made a viewer choose between four
 * near-identical stills of the same man talking, with nothing to choose on.
 * Here the picking happens in text: each clip states the idea it teaches, so
 * the list is readable on its own and the video is what you go to once one of
 * them lands. Somebody who never presses play still leaves having read four
 * ideas, which the grid could not do.
 *
 * The player is sticky beside the list on desktop, so switching clips does not
 * scroll the video out from under you.
 *
 * TITLES AND POINTS ARE DRAFT. They were inferred from the captions burned
 * into the clips — Pressfield, "under qualified", "ready to begin", a 19th
 * century bankruptcy, markets shifting — not from a transcript. Jeremy should
 * correct them against what he actually says.
 */
const CLIPS = [
  {
    id: 1,
    title: 'You don’t need the whole staircase',
    point:
      'Markets shift and the view never clears completely. Waiting for the whole flight to be visible costs more than taking the first step does.'
  },
  {
    id: 2,
    title: 'Fear is the normal part',
    point:
      'Bankruptcy, failure, the thing you are afraid will define you. It usually turns out to be a chapter rather than the ending.'
  },
  {
    id: 3,
    title: 'Everyone feels under-qualified',
    point:
      'Pressfield calls it resistance. It shows up hardest right before the work that matters — which is how you know you are pointed at the right thing.'
  },
  {
    id: 5,
    title: 'Nobody is ever ready',
    point:
      'Are you holding, or are you beginning? Ready is not a state you arrive at. It is something you decide to act without.'
  }
];

export default function ShortForm() {
  const [active, setActive] = useState(CLIPS[0].id);
  const [playing, setPlaying] = useState(false);

  const open = (id) => {
    setActive(id);
    setPlaying(true);
  };

  const poster = `/images/speaking/clip-${active}-poster.jpg`;
  const src = `/videos/speaking/clip-${active}.mp4`;
  const current = CLIPS.find((c) => c.id === active) || CLIPS[0];

  return (
    <section className="px-6 py-16 md:py-28" style={{ backgroundColor: PRIMARY_DEEP }}>
      <div className="max-w-6xl mx-auto">
        <SectionHead
          dark
          eyebrow="Short form"
          title="Four Ideas, Four Minutes"
          intro="One point each, said plainly. If you would rather read them than watch them, they are written out beside the player."
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start mt-14">
          {/* Player. Sticky so switching clips does not scroll the video out
              from under you mid-list. */}
          <div className="md:col-span-5 mx-auto md:mx-0" style={{ maxWidth: 380, width: '100%' }}>
            <div className="md:sticky" style={{ top: 104 }}>
              <div
                className="venture-thumb"
                style={{ borderRadius: 14, aspectRatio: '9 / 16', backgroundColor: SLATE }}
              >
                {playing ? (
                  /* key remounts the element on change — without it the browser
                     keeps the previous clip's buffer and ignores the new src. */
                  <video
                    key={active}
                    src={src}
                    poster={poster}
                    controls
                    autoPlay
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label={`Play — ${current.title}`}
                    style={{ position: 'relative', display: 'block', width: '100%', height: '100%', padding: 0, border: 'none', background: 'none' }}
                  >
                    <img
                      src={poster}
                      alt=""
                      aria-hidden="true"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: 'linear-gradient(180deg, rgba(18,41,59,0.12) 0%, rgba(18,41,59,0.55) 100%)' }}
                    >
                      <span
                        style={{ width: 64, height: 64, borderRadius: '50%', backgroundColor: SECONDARY, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >
                        <Play size={24} fill={SLATE} color={SLATE} style={{ marginLeft: 3 }} />
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* The list. Each row is the idea in text, so the section reads
              without anyone pressing play. */}
          <ol className="md:col-span-7" style={{ listStyle: 'none' }}>
            {CLIPS.map((c, i) => {
              const on = c.id === active;
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => open(c.id)}
                    aria-current={on ? 'true' : undefined}
                    className="w-full text-left flex gap-5 md:gap-7 items-start"
                    style={{
                      padding: '22px 20px 22px 18px',
                      background: on ? 'rgba(255,255,255,0.06)' : 'transparent',
                      borderLeft: `3px solid ${on ? SECONDARY : 'rgba(255,255,255,0.14)'}`,
                      border: 'none',
                      borderLeftWidth: 3,
                      borderLeftStyle: 'solid',
                      borderLeftColor: on ? SECONDARY : 'rgba(255,255,255,0.14)',
                      cursor: 'pointer',
                      transition: 'background-color 180ms ease, border-color 180ms ease'
                    }}
                    onMouseOver={(e) => { if (!on) e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.035)'; }}
                    onMouseOut={(e) => { if (!on) e.currentTarget.style.backgroundColor = 'transparent'; }}
                  >
                    <span
                      className="display"
                      style={{ color: on ? SECONDARY : 'rgba(255,255,255,0.34)', fontSize: 14, letterSpacing: '0.1em', paddingTop: 5, flexShrink: 0 }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span>
                      <span
                        className="display block"
                        style={{ color: '#ffffff', fontSize: 'clamp(1.15rem, 2vw, 1.5rem)', lineHeight: 1.2, marginBottom: 8 }}
                      >
                        {c.title}
                      </span>
                      <span className="block" style={{ color: 'rgba(255,255,255,0.76)', fontSize: 15.5, lineHeight: 1.7 }}>
                        {c.point}
                      </span>
                      <span
                        className="eyebrow-wide inline-flex items-center gap-2"
                        style={{ color: SECONDARY, fontSize: 10, marginTop: 12, opacity: on ? 1 : 0.75 }}
                      >
                        <Play size={11} fill={SECONDARY} color={SECONDARY} />
                        {on && playing ? 'Now playing' : 'Watch'}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
