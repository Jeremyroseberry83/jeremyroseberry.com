/**
 * Central config for jeremyroseberry.com.
 *
 * Colors flow from here into tailwind.config.js, styles/globals.css (as CSS
 * custom properties), components/ui.jsx, and every page — change a hex once
 * here and it changes everywhere.
 *
 * Palette rationale (read this before "fixing" a color):
 *  - NAVY is the identity color, taken off the JR monogram. It carries primary
 *    buttons, links, and active nav states.
 *  - GOLD is an accent, never a workhorse. #c9a961 on white is ~2.2:1 contrast,
 *    far under the 4.5:1 minimum for body text. Gold is used for rules,
 *    eyebrows on DARK grounds, and as a filled button with charcoal text on it.
 *    SECONDARY_DEEP (#a8873f) is the only gold approved for text on light
 *    grounds, and only at large/bold sizes.
 *  - CHARCOAL / TAUPE / LIGHT GRAY come off the black-and-white brand
 *    photography, so the layout and the photography read as one system.
 */

module.exports = {
  company: {
    name: 'Jeremy Roseberry',
    shortName: 'Roseberry',
    initials: 'JR',
    tagline: 'Leader. Builder. Entrepreneur.',
    domain: 'jeremyroseberry.com',
    email: 'jeremy@roseberrycapital.net',
    role: 'Entrepreneur & Investor'
  },

  colors: {
    // Primary — navy, off the monogram
    PRIMARY: '#1a3a52',
    PRIMARY_DEEP: '#12293b',
    PRIMARY_LIGHT: '#eaeff4',

    // Secondary — gold / champagne accent
    SECONDARY: '#c9a961',
    SECONDARY_DEEP: '#a8873f',
    SECONDARY_LIGHT: '#f7f1e3',

    // Neutrals off the brand photography
    SLATE: '#2a2a2a',
    MUTED: '#6b6b6b',
    INK: '#2a2a2a',
    BG: '#f5f5f5',

    // Support tones
    TAUPE: '#6b6b6b',
    GRAY_LIGHT: '#d9d9d9',
    GRAY_ACCENT: '#999999'
  },

  // `id` must match a case in pages/index.jsx renderPage().
  //
  // Three pages, Speaking first. The standalone bio page was cut and its two
  // useful parts moved rather than deleted: the introduction and the four
  // pillars now sit on Speaking, where an organiser already is; the Instagram
  // rail sits on Books & Podcast with the rest of the content.
  nav: [
    { name: 'Entrepreneurs', id: 'entrepreneurs' },
    { name: 'Foundation', id: 'foundation' },
    { name: 'Coming Soon', id: 'coming' }
  ],

  // Booking is the entire point of this site. One label, used on every primary
  // button, so the ask is identical everywhere the visitor looks.
  cta: {
    // Nav and hero. Was 'Book To Speak', which made two claims that are not
    // true yet: that there is an established speaking practice to book, and
    // that speaking is what this site is for. It also turned away the capital,
    // deal and partnership enquiries that are the actual inbound today.
    primary: 'Let’s Connect',
    // The closing block on every page. Warmer on purpose: by the time someone
    // reaches the bottom they have already read the case, and "connect" also
    // fits the podcast, press and content enquiries the same form handles.
    connect: 'Let’s Connect'
  },

  // Blank entries are skipped by the footer social row — better than shipping
  // dead links. Fill each in as the account goes live. Keys must match those
  // in SOCIAL_ICONS in pages/index.jsx, and these URLs are also what the
  // Person schema in pages/_document.jsx publishes as `sameAs`, which is how
  // search engines tie the site and the profiles into one identity.
  social: {
    linkedin: 'https://www.linkedin.com/in/jeremy-roseberry-8264891a1/',
    instagram: 'https://www.instagram.com/jeremyroseberry_/',
    youtube: '',
    x: ''
  },

  translateLanguages: 'en,es,pt,fr'
};
