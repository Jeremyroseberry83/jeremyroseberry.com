/**
 * Central config for this site template. Edit this file first when starting
 * a new client site — colors, company name, nav labels, and contact email
 * all flow from here into ui.jsx, the page shell, and the contact form.
 *
 * What ISN'T here on purpose: page copy (headlines, body text, stats, team
 * bios). That content is too specific to templatize usefully — go straight
 * into each component in /components and replace the [BRACKETED] placeholder
 * text. Search the whole project for "[YOUR" to find every spot that needs
 * real content before launch.
 */

module.exports = {
  company: {
    name: '[Your Name]',
    tagline: 'One-line tagline under the logo',
    domain: 'jeremyroseberry.com',
    email: 'hello@jeremyroseberry.com'
  },

  // Primary = main brand color (buttons, links, active states).
  // Secondary = accent color (used for a second CTA track, success states).
  // The _DEEP variants are for gradients; _LIGHT variants are pale tints
  // used as card/badge backgrounds.
  colors: {
    PRIMARY: '#3B60E4',
    PRIMARY_DEEP: '#2F4FC9',
    PRIMARY_LIGHT: '#EEF2FE',
    SECONDARY: '#1E8E5A',
    SECONDARY_DEEP: '#176E46',
    SECONDARY_LIGHT: '#E1F4EE',
    SLATE: '#3D4654',
    MUTED: '#6B7280',
    INK: '#2E4259',
    BG: '#FAFBFD'
  },

  // Top nav items. `id` must match a case in pages/index.jsx's renderPage().
  nav: [
    { name: 'Product', id: 'product' },
    { name: 'Partners', id: 'partners' },
    { name: 'About', id: 'about' }
  ],

  // Google Translate widget language list. Set to the markets you actually
  // sell into — every extra language is a maintenance cost, not a feature.
  translateLanguages: 'en,es,fr,de,pt,zh-CN'
};
