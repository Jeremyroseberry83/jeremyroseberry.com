import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { SECONDARY, SECONDARY_DEEP, SLATE, MUTED, INK, PRIMARY } from './ui';
import { social, company } from '../site.config';

/**
 * A horizontally-scrolling strip of recent Instagram posts.
 *
 * ============================================================
 * WHY THIS IS NOT A LIVE FEED YET — read before "fixing" it.
 * ============================================================
 * There is no longer a free, no-auth way to pull a public Instagram timeline
 * into a website. Meta retired the Instagram Basic Display API in December
 * 2024, and the Graph API that replaced it needs a Business or Creator
 * account, a Meta app, and a long-lived token that expires every 60 days and
 * has to be refreshed by something running server-side. On a statically
 * deployed Next.js site that means a scheduled Netlify function and a secret
 * to rotate — real work, and real maintenance, for a strip of photos.
 *
 * THREE WAYS TO MAKE IT LIVE, cheapest first:
 *
 *  1. A hosted widget (Behold, LightWidget, SnapWidget, Elfsight). You sign
 *     up, connect the account, and they hand you a script plus a div id.
 *     Free tiers exist. This is the normal answer and takes about ten
 *     minutes — but it is an account only you can create, and it puts a
 *     third-party script on the page, so it is your call rather than mine.
 *
 *  2. Instagram's own post embeds. Free, no account, no token — but you embed
 *     specific posts by URL rather than a live feed, so it needs updating by
 *     hand and each post arrives with Instagram's own chrome around it.
 *
 *  3. Graph API + a Netlify scheduled function that caches the last N posts
 *     to JSON. Genuinely live, no third-party script, but it is the option
 *     with a token to babysit.
 *
 * UNTIL THEN: drop images into POSTS below and the strip renders them, each
 * linking to its post. That is a five-minute job, looks identical to a live
 * feed, and costs nothing. With POSTS empty the section renders a follow
 * panel instead of an empty shelf.
 *
 *   { image: '/images/instagram/01.jpg', url: 'https://www.instagram.com/p/…', caption: '…' }
 */
const POSTS = [];

export default function InstagramRail() {
  const handle = '@jeremyroseberry_';
  const profile = social.instagram;

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: INK }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 11, marginBottom: 16 }}>
              Day to day
            </p>
            <h2 className="display" style={{ color: '#ffffff', fontSize: 'clamp(1.9rem, 4vw, 3rem)' }}>
              Follow along
            </h2>
          </div>

          {profile && (
            <a
              href={profile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3"
              style={{ color: SECONDARY, fontSize: 15, fontWeight: 600, letterSpacing: '0.04em' }}
            >
              <Instagram size={19} strokeWidth={1.8} />
              {handle}
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </div>

      {POSTS.length > 0 ? (
        /* Full-bleed so the strip runs off the right edge — that overflow is
           the affordance telling a reader there is more to scroll. */
        <div
          className="flex gap-4 overflow-x-auto pb-4"
          style={{ paddingInline: 'max(24px, calc((100% - 72rem) / 2))', scrollSnapType: 'x mandatory' }}
        >
          {POSTS.map((post) => (
            <a
              key={post.url || post.image}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ flex: '0 0 auto', width: 'clamp(220px, 26vw, 300px)', scrollSnapAlign: 'start' }}
            >
              <div style={{ aspectRatio: '1 / 1', overflow: 'hidden', backgroundColor: '#3a3a3a' }}>
                <img src={post.image} alt={post.caption || ''} loading="lazy" className="w-full h-full object-cover" />
              </div>
              {post.caption && (
                <p style={{ color: 'rgba(255,255,255,0.66)', fontSize: 13, lineHeight: 1.6, marginTop: 12 }}>
                  {post.caption}
                </p>
              )}
            </a>
          ))}
        </div>
      ) : (
        <div className="max-w-6xl mx-auto px-6">
          <div
            className="flex flex-wrap items-center justify-between gap-8 p-9 md:p-12"
            style={{ backgroundColor: PRIMARY }}
          >
            <div style={{ maxWidth: '46ch' }}>
              <p style={{ color: '#ffffff', fontSize: 18, lineHeight: 1.75, marginBottom: 10 }}>
                The unfiltered version — what the week actually looked like, between the stages and the
                deal rooms.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: 14 }}>
                {company.name} on Instagram
              </p>
            </div>
            {profile && (
              <a
                href={profile}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3"
                style={{
                  backgroundColor: SECONDARY,
                  color: SLATE,
                  padding: '15px 32px',
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  borderRadius: 2
                }}
              >
                <Instagram size={17} strokeWidth={2} />
                Follow
              </a>
            )}
          </div>
          <p style={{ color: MUTED, fontSize: 13, lineHeight: 1.7, marginTop: 14 }}>
            The scrolling post strip switches on as soon as there are posts to show — see the note at
            the top of <span style={{ color: SECONDARY_DEEP }}>components/InstagramRail.jsx</span>.
          </p>
        </div>
      )}
    </section>
  );
}
