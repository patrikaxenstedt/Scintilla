const colors = require('tailwindcss/colors');

// My Tailwind config.
// I´ve created my own theme colors and named whem
// This makes it easy to get the colors when styling with Tailwindcss.
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // false or 'media'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      mainOne: '#363636',
      mainTwo: '#8739F9',
      mainThree: '#C651CD',
      darkOne: '#100F10',
      darkTwo: '#1B1B1B',
      darkThree: '#242424',
    }),
    extend: {
      colors: {
        lime: colors.lime,
        emerald: colors.emerald,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
