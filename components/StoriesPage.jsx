import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PageTopBand, SectionHead, BookingCTA, Button, SECONDARY, SLATE, MUTED, BG } from './ui';

/**
 * The content archive.
 *
 * Posts live in this array rather than a CMS on purpose: at this volume a CMS
 * is a monthly bill and a second login to forget. When the archive passes
 * roughly thirty pieces, or when someone other than Jeremy needs to publish,
 * that is the moment to move to a CMS — not before.
 *
 * Each entry:
 *   { title, kind, date, blurb, url }
 *   kind — 'Essay' | 'Episode' | 'Video' | 'Talk'
 *   url  — external link, or leave blank for "coming soon" styling
 */
const POSTS = [];

const KINDS = ['All', 'Essay', 'Episode', 'Video', 'Talk'];

export default function StoriesPage({ onContactClick }) {
  const [filter, setFilter] = React.useState('All');

  const visible = filter === 'All' ? POSTS : POSTS.filter((p) => p.kind === filter);

  return (
    <div>
      <PageTopBand
        eyebrow="Stories"
        title="Notes from the middle"
        subtitle="Short pieces, episodes and talks on leadership, mindset and the mechanics of building something. The same material the keynotes are built from."
        watermark="Notes"
      />

      <section className="py-16 md:py-28 px-6" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-6xl mx-auto">
          {POSTS.length === 0 ? (
            /* ============================================================
               Empty state. It says what is coming and still asks for
               something, rather than being a dead end with "coming soon"
               and no way forward.
               ============================================================ */
            <div style={{ maxWidth: '58ch' }}>
              <SectionHead
                eyebrow="Just getting started"
                title="The archive opens soon"
                intro="First pieces are being written now — on the honest middle, on leading without the answer, and on what a decade of building actually taught versus what it looked like from outside."
              />
              <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.8, marginTop: 24, marginBottom: 32 }}>
                Want them as they publish? Say so and you will be on the short list — no sequence, no
                daily email, just the new thing when there is a new thing.
              </p>
              <Button variant="navy" onClick={() => onContactClick && onContactClick('Content')}>
                Send me new pieces
              </Button>
            </div>
          ) : (
            <>
              <SectionHead
                eyebrow="The archive"
                title="Everything in one place"
                intro="Filter by format, or read straight through."
              />

              <div className="flex flex-wrap gap-2 mt-10 mb-12">
                {KINDS.map((k) => {
                  const active = filter === k;
                  return (
                    <button
                      key={k}
                      type="button"
                      onClick={() => setFilter(k)}
                      style={{
                        padding: '9px 20px',
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        border: `1px solid ${active ? SECONDARY : '#e2e2e2'}`,
                        backgroundColor: active ? SECONDARY : 'transparent',
                        color: active ? SLATE : MUTED,
                        borderRadius: 2
                      }}
                    >
                      {k}
                    </button>
                  );
                })}
              </div>

              <div className="space-y-px" style={{ backgroundColor: '#e2e2e2' }}>
                {visible.map((post) => {
                  const Wrapper = post.url ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={post.title}
                      {...(post.url ? { href: post.url, target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="grid md:grid-cols-12 gap-6 items-baseline p-7 md:p-9"
                      style={{ backgroundColor: '#ffffff' }}
                    >
                      <div className="md:col-span-3">
                        <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 10, marginBottom: 6 }}>
                          {post.kind}
                        </p>
                        <p style={{ color: MUTED, fontSize: 13 }}>{post.date}</p>
                      </div>
                      <div className="md:col-span-8">
                        <h3 className="display" style={{ color: SLATE, fontSize: 'clamp(1.3rem, 2.4vw, 1.8rem)', marginBottom: 10 }}>
                          {post.title}
                        </h3>
                        <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.75 }}>{post.blurb}</p>
                      </div>
                      <div className="md:col-span-1 flex md:justify-end">
                        {post.url && <ArrowUpRight size={20} style={{ color: SECONDARY }} />}
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      <section className="py-16 md:py-24 px-6" style={{ backgroundColor: BG }}>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHead
            align="center"
            eyebrow="Heard something that fits your event?"
            title="The talks come from here"
            intro="Every keynote starts as one of these. If a piece lands with you, it can be built out into a session for your room."
          />
          <div className="mt-10 flex justify-center">
            <Button variant="navy" onClick={() => onContactClick && onContactClick('Speaking')}>
              Talk about an event
            </Button>
          </div>
        </div>
      </section>

      <BookingCTA
        onContactClick={onContactClick}
        context="Content"
        title="Want this in front of your audience?"
        body="The written pieces and the stage material are the same ideas in different rooms. Tell me which room you are filling."
      />
    </div>
  );
}
