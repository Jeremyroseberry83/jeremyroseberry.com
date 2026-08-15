import React from 'react';
import { colors, company } from '../site.config';

/**
 * Logo — the JR monogram plus the linear "JEREMY ROSEBERRY" wordmark,
 * rebuilt in type rather than shipped as a PNG.
 *
 * Why type and not the image file: a text lockup stays razor sharp at every
 * density, recolors itself for dark and light grounds, costs no extra network
 * request, and the name is readable by search engines and screen readers.
 * The PNG is still on disk at /images/jr-monogram.png for social/OG previews
 * and the favicon, which do need a raster file.
 *
 * The monogram is set in Jost (a geometric Futura-like face) at Light with
 * negative tracking, which is the closest a real font gets to the drawn
 * J/R ligature in the original mark.
 *
 * COLOUR NOTE — on the light (cream) bar: navy monogram, "Jeremy" in brand
 * gold, "Roseberry" in taupe, all as specified. Gold on #f5f5f5 measures about
 * 2:1, which is well under the 4.5:1 text minimum — acceptable here only
 * because a logo wordmark is exempt from that rule and "Roseberry" carries the
 * name at 5.4:1. If "Jeremy" ever needs to be genuinely legible at small
 * sizes, SECONDARY_DEEP (#a8873f) is the same hue at 3.5:1.
 *
 * On the dark bar the original spec still applies: #d9d9d9 thin, white bold.
 */
export default function Logo({ tone = 'dark', size = 'md', framed = false }) {
  const isDark = tone === 'dark';

  const scale = size === 'sm' ? 0.82 : size === 'lg' ? 1.25 : 1;

  const monogramColor = isDark ? colors.SECONDARY : colors.PRIMARY;
  const thinColor = isDark ? colors.GRAY_LIGHT : colors.SECONDARY;
  const boldColor = isDark ? '#ffffff' : colors.TAUPE;

  // `framed` sets the lockup in a cream plate with a gold rule around it —
  // the boxed treatment from the brand mockup. Currently unused: it was added
  // to rescue the logo from a dark header background, and reads as a sticker
  // when the bar behind it is already light. Kept because it is the right
  // treatment for placing the lockup on a photograph or a dark ground.
  const frame = framed
    ? {
        backgroundColor: colors.BG,
        border: `1px solid ${colors.SECONDARY}`,
        padding: `${11 * scale}px ${17 * scale}px`
      }
    : null;

  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: 11 * scale, ...frame }}
      aria-label={company.name}
    >
      <span
        aria-hidden="true"
        style={{
          fontFamily: "'Jost', 'Futura', 'Century Gothic', sans-serif",
          fontWeight: 300,
          fontSize: 30 * scale,
          lineHeight: 1,
          letterSpacing: '-0.07em',
          color: monogramColor,
          transition: 'color 250ms ease',
          paddingRight: 2 * scale
        }}
      >
        {company.initials}
      </span>

      {/* Hairline divider — keeps the monogram reading as a mark rather than
          as the first two letters of the name. */}
      <span
        aria-hidden="true"
        style={{
          width: 1,
          height: 22 * scale,
          backgroundColor: isDark ? 'rgba(255,255,255,0.28)' : 'rgba(42,42,42,0.18)',
          transition: 'background-color 250ms ease'
        }}
      />

      <span
        aria-hidden="true"
        style={{
          fontSize: 13 * scale,
          letterSpacing: '0.19em',
          lineHeight: 1,
          textTransform: 'uppercase',
          whiteSpace: 'nowrap'
        }}
      >
        <span style={{ fontWeight: 200, color: thinColor, transition: 'color 250ms ease' }}>Jeremy </span>
        <span style={{ fontWeight: 700, color: boldColor, transition: 'color 250ms ease' }}>Roseberry</span>
      </span>
    </span>
  );
}
