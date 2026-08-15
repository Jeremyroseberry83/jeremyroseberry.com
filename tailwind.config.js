const { colors } = require('./site.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.PRIMARY,
        'primary-dark': colors.PRIMARY_DEEP,
        'primary-light': colors.PRIMARY_LIGHT,
        secondary: colors.SECONDARY,
        'secondary-dark': colors.SECONDARY_DEEP,
        'secondary-light': colors.SECONDARY_LIGHT,
        slate: colors.SLATE,
        muted: colors.MUTED,
      }
    }
  },
  plugins: [],
};
