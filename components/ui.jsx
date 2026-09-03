import React from 'react';
import { colors, cta } from '../site.config';

// Re-exported from site.config so every page imports colors from one place
// and the palette can't drift between files.
export const PRIMARY = colors.PRIMARY;
export const PRIMARY_DEEP = colors.PRIMARY_DEEP;
export const PRIMARY_LIGHT = colors.PRIMARY_LIGHT;
export const SECONDARY = colors.SECONDARY;
export const SECONDARY_DEEP = colors.SECONDARY_DEEP;
export const SECONDARY_LIGHT = colors.SECONDARY_LIGHT;
export const SLATE = colors.SLATE;
export const MUTED = colors.MUTED;
export const INK = colors.INK;
export const BG = colors.BG;
export const TAUPE = colors.TAUPE;
export const GRAY_LIGHT = colors.GRAY_LIGHT;
export const GRAY_ACCENT = colors.GRAY_ACCENT;

/**
 * Accent — highlights a phrase inside a heading.
 * Gold is legible as a highlight on dark grounds; on white it needs the deeper
 * gold to clear contrast minimums. That's the whole reason this takes a tone
 * instead of hardcoding one hex.
 */
export function Accent({ children, tone = 'light' }) {
  return <span style={{ color: tone === 'dark' ? SECONDARY : SECONDARY_DEEP }}>{children}</span>;
}

export function Eyebrow({ children, color = SECONDARY_DEEP, className = '' }) {
  return (
    <p className={`eyebrow-wide ${className}`} style={{ color, fontSize: 11 }}>
      {children}
    </p>
  );
}

/**
 * Button — every call to action on the site renders through this, so the
 * booking ask looks identical everywhere.
 *
 * variant:
 *  gold  — the booking CTA. Charcoal on gold is 8.1:1, and it's the only gold
 *          fill on a page, so it reads as "the button" without instruction.
 *  navy  — secondary actions on light grounds.
 *  ghost — tertiary, on dark grounds and photography.
 *  quiet — tertiary, on light grounds.
 */
export function Button({ variant = 'gold', onClick, href, children, full, size = 'md', type = 'button', disabled }) {
  const pad = size === 'lg' ? '17px 38px' : size === 'sm' ? '10px 22px' : '14px 30px';
  const fontSize = size === 'lg' ? 16 : size === 'sm' ? 13 : 15;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 9,
    padding: pad,
    fontSize,
    fontWeight: 600,
    borderRadius: 2,
    cursor: 'pointer',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    transition: 'background-color 180ms ease, color 180ms ease, border-color 180ms ease',
    width: full ? '100%' : 'auto',
    border: '1.5px solid transparent',
    lineHeight: 1.2,
    textAlign: 'center'
  };

  const variants = {
    gold: { ...base, backgroundColor: SECONDARY, color: SLATE, borderColor: SECONDARY },
    navy: { ...base, backgroundColor: PRIMARY, color: '#ffffff', borderColor: PRIMARY },
    ghost: { ...base, backgroundColor: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.55)' },
    quiet: { ...base, backgroundColor: 'transparent', color: PRIMARY, borderColor: 'rgba(26,58,82,0.35)' }
  };

  const hover = {
    gold: { backgroundColor: SECONDARY_DEEP, borderColor: SECONDARY_DEEP, color: '#ffffff' },
    navy: { backgroundColor: PRIMARY_DEEP, borderColor: PRIMARY_DEEP, color: '#ffffff' },
    ghost: { backgroundColor: 'rgba(255,255,255,0.14)', borderColor: '#ffffff', color: '#ffffff' },
    quiet: { backgroundColor: PRIMARY, borderColor: PRIMARY, color: '#ffffff' }
  };

  const resolved = variants[variant] || variants.gold;
  const style = disabled ? { ...resolved, opacity: 0.6, cursor: 'not-allowed' } : resolved;
  const on = (e) => {
    if (!disabled) Object.assign(e.currentTarget.style, hover[variant] || hover.gold);
  };
  const off = (e) => Object.assign(e.currentTarget.style, style);

  if (href) {
    return (
      <a href={href} style={style} onMouseOver={on} onMouseOut={off}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} style={style} onMouseOver={on} onMouseOut={off}>
      {children}
    </button>
  );
}

/**
 * SectionHead — the standard way every section opens: wide-tracked eyebrow,
 * short gold rule, condensed display headline, optional intro. Consistency
 * here is what makes a one-person site read as a brand rather than a stack of
 * unrelated blocks.
 */
export function SectionHead({ eyebrow, title, intro, dark, align = 'left', maxWidth = '48ch' }) {
  const ink = dark ? '#ffffff' : SLATE;
  const body = dark ? 'rgba(255,255,255,0.72)' : MUTED;
  const centered = align === 'center';
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: centered ? '62ch' : undefined,
        marginLeft: centered ? 'auto' : undefined,
        marginRight: centered ? 'auto' : undefined
      }}
    >
      {eyebrow && (
        <p className="eyebrow-wide" style={{ color: dark ? SECONDARY : SECONDARY_DEEP, fontSize: 11, marginBottom: 18 }}>
          {eyebrow}
        </p>
      )}
      <span
        aria-hidden="true"
        style={{
          display: 'block',
          width: 54,
          height: 3,
          backgroundColor: SECONDARY,
          marginBottom: 24,
          marginLeft: centered ? 'auto' : 0,
          marginRight: centered ? 'auto' : 0
        }}
      />
      <h2 className="display" style={{ color: ink, fontSize: 'clamp(2rem, 4.4vw, 3.4rem)', marginBottom: intro ? 22 : 0 }}>
        {title}
      </h2>
      {intro && (
        <p
          style={{
            color: body,
            fontSize: 17,
            lineHeight: 1.75,
            maxWidth,
            marginLeft: centered ? 'auto' : 0,
            marginRight: centered ? 'auto' : 0
          }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/**
 * PageTopBand — the banner that opens every non-home page.
 *
 * Structure: photograph across the full band, with a colour wash weighted to
 * the text side so the type always has a solid ground under it regardless of
 * what the photograph is doing. The wash is opaque at the text edge and
 * clears by roughly two-thirds across, which is what lets one component carry
 * four different images without any of them needing to be shot for it.
 *
 * `tone` sets that wash colour and is the only thing that varies page to
 * page — navy, charcoal, deep navy, taupe. Using the palette rather than a
 * per-page hex is what stops four banners becoming four brands.
 *
 * With no `image` it falls back to the original typographic band, so any page
 * that has no photograph worth using still opens correctly.
 */
const BAND_TONES = {
  primary: PRIMARY,
  deep: PRIMARY_DEEP,
  ink: INK,
  taupe: TAUPE,
  gold: SECONDARY
};

/**
 * Light band tones. Currently unused — the gold Speaking banner was tried and
 * reverted to charcoal — but kept because the handling is the non-obvious part
 * and would otherwise be rediscovered from scratch.
 *
 * Gold is light enough that white type fails on it: white on #c9a961 is
 * 2.25:1, under the floor even at display size. A tone listed here flips the
 * band's whole ink set to navy (5.3:1) and swaps the gold CTA for the navy
 * one, since a gold button on a gold ground is not a button. Add any future
 * light tone here rather than special-casing it at the call site.
 */
const LIGHT_TONES = new Set(['gold']);

export function PageTopBand({ eyebrow, title, subtitle, watermark, image, video, poster, tone = 'ink', cta, onCta }) {
  const wash = BAND_TONES[tone] || INK;
  const rgb = {
    [PRIMARY]: '26,58,82',
    [PRIMARY_DEEP]: '18,41,59',
    [INK]: '42,42,42',
    [TAUPE]: '107,107,107',
    [SECONDARY]: '201,169,97'
  }[wash] || '42,42,42';

  const light = LIGHT_TONES.has(tone);
  const ink = light ? PRIMARY : '#ffffff';
  const eyebrowInk = light ? PRIMARY_DEEP : SECONDARY;
  // Solid rather than 82% on light tones: navy at 82% over gold falls to
  // 3.21:1, under the floor for 18px body text. Full strength is 5.27:1.
  const subInk = light ? PRIMARY : 'rgba(255,255,255,0.82)';

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: wash }}>
      {video ? (
        <>
          {/* Muted, looping, inline — the only combination browsers will
              autoplay without a gesture. `poster` covers the gap before the
              first frame decodes and is what a data-saver or reduced-motion
              visitor keeps instead. preload="metadata" so the file is not
              fetched in full before the page is usable. */}
          {/* Poster sits underneath as a real image, not just the video's
              poster attribute, so hiding the video for reduced-motion leaves a
              still frame rather than a hole. */}
          {poster && (
            <img
              src={poster}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ objectPosition: 'center 38%' }}
            />
          )}
          <video
            className="band-video absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 38%' }}
            src={video}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, rgba(${rgb},0.92) 0%, rgba(${rgb},0.80) 38%, rgba(${rgb},0.55) 70%, rgba(${rgb},0.40) 100%)`
            }}
          />
          {/* Same vertical pass the photo branch uses. On a phone the copy runs
              the full width and crosses into the 55%/40% end of the horizontal
              gradient, where moving video underneath it destroys legibility. */}
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: `linear-gradient(180deg, rgba(${rgb},0.55) 0%, rgba(${rgb},0.92) 70%)` }}
          />
        </>
      ) : image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center' }}
          />
          {/* Opaque under the type, clearing across the photograph. The extra
              vertical pass keeps the bottom edge readable on tall phones,
              where the horizontal gradient alone leaves the copy on bare
              image. */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(90deg, rgba(${rgb},0.97) 0%, rgba(${rgb},0.93) 34%, rgba(${rgb},0.62) 62%, rgba(${rgb},0.18) 100%)`
            }}
          />
          <div
            className="absolute inset-0 md:hidden"
            style={{ background: `linear-gradient(180deg, rgba(${rgb},0.55) 0%, rgba(${rgb},0.92) 70%)` }}
          />
        </>
      ) : (
        <div
          className="hero-wedge absolute inset-y-0 right-0 hidden md:block"
          style={{ width: '52%', backgroundColor: TAUPE, opacity: 0.34 }}
        />
      )}

      {watermark && !image && (
        <span
          aria-hidden="true"
          className="watermark absolute"
          style={{
            right: '-2%',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: 'clamp(5rem, 15vw, 13rem)',
            color: 'rgba(255,255,255,0.05)'
          }}
        >
          {watermark}
        </span>
      )}

      <div
        className="relative max-w-6xl mx-auto px-6"
        style={{ paddingTop: 'clamp(130px, 16vw, 180px)', paddingBottom: 'clamp(56px, 8vw, 88px)', minHeight: video ? 'clamp(420px, 46vw, 620px)' : undefined }}
      >
        {/* Half-width beside the photograph on desktop, full width on a phone
            where the image sits behind a vertical wash instead. */}
        <div className={image || video ? 'w-full md:w-7/12' : undefined}>
          {eyebrow && (
            <p className="eyebrow-wide" style={{ color: eyebrowInk, fontSize: 11, marginBottom: 18 }}>
              {eyebrow}
            </p>
          )}
          <h1 className="display" style={{ color: ink, fontSize: 'clamp(2.4rem, 6vw, 4.4rem)', maxWidth: '16ch' }}>
            {title}
          </h1>
          {subtitle && (
            <p style={{ color: subInk, fontSize: 18, lineHeight: 1.7, maxWidth: '46ch', marginTop: 22 }}>
              {subtitle}
            </p>
          )}
          {cta && (
            <div style={{ marginTop: 32 }}>
              <Button variant={light ? 'navy' : 'gold'} onClick={onCta}>
                {cta}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** SplitFeature — photo one side, copy the other. Alternates via `flip`. */
export function SplitFeature({ eyebrow, title, children, image, flip, quote, dark, ratio = '4 / 5' }) {
  const bg = dark ? INK : 'transparent';
  const heading = dark ? '#ffffff' : SLATE;
  const body = dark ? 'rgba(255,255,255,0.78)' : MUTED;
  return (
    <section className="py-16 md:py-28 px-6" style={{ backgroundColor: bg }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className={flip ? 'order-2' : 'order-2 md:order-1'}>
          {eyebrow && (
            <Eyebrow color={dark ? SECONDARY : SECONDARY_DEEP} className="mb-4">
              {eyebrow}
            </Eyebrow>
          )}
          <h2 className="display mb-7" style={{ color: heading, fontSize: 'clamp(1.8rem, 3.4vw, 2.7rem)' }}>
            {title}
          </h2>
          <div style={{ color: body, fontSize: 17, lineHeight: 1.8 }}>{children}</div>
        </div>

        <div className={flip ? 'order-1' : 'order-1 md:order-2'}>
          <div style={{ position: 'relative' }}>
            {/* Offset gold rule — the one piece of decoration that ties an
                ordinary photograph into the brand system. */}
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: flip ? 'auto' : -14,
                right: flip ? -14 : 'auto',
                top: -14,
                width: '46%',
                height: 3,
                backgroundColor: SECONDARY
              }}
            />
            <div style={{ aspectRatio: ratio, backgroundColor: GRAY_LIGHT, overflow: 'hidden' }}>
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
                loading="lazy"
                style={{ filter: 'grayscale(100%)' }}
              />
            </div>
          </div>
          {quote && (
            <div
              style={{
                backgroundColor: dark ? 'rgba(255,255,255,0.06)' : SECONDARY_LIGHT,
                borderLeft: `3px solid ${SECONDARY}`,
                padding: '22px 26px'
              }}
            >
              <p
                style={{
                  color: dark ? 'rgba(255,255,255,0.9)' : SLATE,
                  fontSize: 15,
                  lineHeight: 1.7,
                  fontStyle: 'italic'
                }}
              >
                {quote}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/** NumberStrip — bordered 01/02/03/04 row. */
export function NumberStrip({ items, dark }) {
  const line = dark ? 'rgba(255,255,255,0.16)' : '#e2e2e2';
  const heading = dark ? '#ffffff' : SLATE;
  const body = dark ? 'rgba(255,255,255,0.7)' : MUTED;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ borderTop: `1px solid ${line}` }}>
      {items.map((it, i) => (
        <div key={it.title} className="p-8" style={{ borderLeft: `1px solid ${line}`, borderBottom: `1px solid ${line}` }}>
          <div className="display mb-4" style={{ color: SECONDARY, fontSize: 20, letterSpacing: '0.1em' }}>
            {String(i + 1).padStart(2, '0')}
          </div>
          <h4 className="font-bold mb-3" style={{ color: heading, fontSize: 16 }}>
            {it.title}
          </h4>
          <p style={{ color: body, fontSize: 15, lineHeight: 1.7 }}>{it.body}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * TopicCards — talk topics and formats. First card is filled navy so the eye
 * has an entry point instead of scanning identical boxes.
 * Uses gap-px over a colored parent to draw hairline rules without doubling
 * borders where cards meet.
 */
export function TopicCards({ cards, dark }) {
  // Column count follows the data: four cards go to quarters, everything else
  // to thirds — which gives three in one row and six in two clean rows.
  // Hardcoding thirds left a four-card set with an orphan on its own row.
  const cols = cards.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3';
  return (
    <div className={`grid ${cols} gap-px`} style={{ backgroundColor: dark ? 'rgba(255,255,255,0.14)' : '#e2e2e2' }}>
      {cards.map((c, i) => (
        <div key={c.title} className="p-9" style={{ backgroundColor: i === 0 ? PRIMARY : dark ? INK : '#ffffff' }}>
          {c.eyebrow && (
            <p
              className="eyebrow-wide"
              style={{ color: i === 0 ? SECONDARY : SECONDARY_DEEP, fontSize: 10, marginBottom: 14 }}
            >
              {c.eyebrow}
            </p>
          )}
          <h4 className="display mb-4" style={{ color: i === 0 || dark ? '#ffffff' : SLATE, fontSize: 22 }}>
            {c.title}
          </h4>
          <p
            style={{
              color: i === 0 ? 'rgba(255,255,255,0.85)' : dark ? 'rgba(255,255,255,0.72)' : MUTED,
              fontSize: 15,
              lineHeight: 1.75
            }}
          >
            {c.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/** CountUp — animates a number from 0 to `end` once it scrolls into view. */
export function CountUp({ end, duration = 1400, prefix = '', suffix = '', decimals = 0 }) {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState(0);
  const started = React.useRef(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // A number ticking upward is motion. Reduced-motion visitors get the final
    // figure immediately rather than a stat that reads 0 until it animates.
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(end);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(end * eased);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

/** StatBand — oversized figures on the charcoal ground. */
export function StatBand({ stats }) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
      <div
        className="hero-wedge absolute inset-y-0 right-0 hidden md:block"
        style={{ width: '46%', backgroundColor: TAUPE, opacity: 0.3 }}
      />
      <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="display mb-3" style={{ color: SECONDARY, fontSize: 'clamp(2.4rem, 5.5vw, 4rem)' }}>
                {s.value}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, lineHeight: 1.6 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Testimonials — social proof. For a speaker this is the highest-value block
 * on the site: organisers book the person another organiser vouched for.
 *
 * Renders nothing when `items` is empty. An empty testimonial rail is better
 * than a fabricated one — and better than a visible "coming soon" that
 * advertises the gap.
 */
export function Testimonials({ items, eyebrow = 'What organisers say', title = 'Proof, not promises' }) {
  if (!items || items.length === 0) return null;
  return (
    <section className="py-16 md:py-28 px-6" style={{ backgroundColor: BG }}>
      <div className="max-w-6xl mx-auto">
        <SectionHead eyebrow={eyebrow} title={title} />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {items.map((t) => (
            <figure key={t.name} style={{ backgroundColor: '#ffffff', padding: '34px 30px', borderTop: `3px solid ${SECONDARY}` }}>
              <blockquote style={{ color: SLATE, fontSize: 16, lineHeight: 1.75 }}>{`“${t.quote}”`}</blockquote>
              <figcaption style={{ marginTop: 22 }}>
                <div style={{ color: SLATE, fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                <div style={{ color: MUTED, fontSize: 13, marginTop: 3 }}>{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * BookingCTA — the closing block on every page.
 *
 * A booking site should never end a page without asking. Same component
 * everywhere, so the ask is identical no matter where a visitor runs out of
 * scroll.
 */
export function BookingCTA({ onContactClick, title = 'Ready to book?', body, context }) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: PRIMARY }}>
      <div
        className="hero-slash absolute inset-y-0 right-0 hidden md:block"
        style={{ width: '40%', backgroundColor: PRIMARY_DEEP }}
      />
      <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
        <p className="eyebrow-wide" style={{ color: SECONDARY, fontSize: 11, marginBottom: 20 }}>
          Booking now
        </p>
        <h2 className="display" style={{ color: '#ffffff', fontSize: 'clamp(2rem, 4.6vw, 3.3rem)', marginBottom: 20 }}>
          {title}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 17, lineHeight: 1.75, maxWidth: '52ch', margin: '0 auto 36px' }}>
          {body ||
            'Tell me about your event and what you are hoping people take away.'}
        </p>
        {/* One button. The second ("check availability") opened the same
            modal as the first, so it was a choice with no consequence — and a
            second option next to a primary action reliably lowers how many
            people take either. */}
        <div className="flex justify-center">
          <Button variant="gold" size="lg" onClick={() => onContactClick && onContactClick(context || 'Speaking')}>
            {cta.connect}
          </Button>
        </div>
      </div>
    </section>
  );
}
