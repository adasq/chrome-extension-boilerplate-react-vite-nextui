/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');

module.exports = {
  content: ['../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  /** shared theme configuration */
  theme: {
    extend: {},
  },
  /** shared plugins configuration */
  darkMode: 'class',
  plugins: [nextui()],
};
