/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./apps/web/src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4f46e5',
          DEFAULT: '#4338ca',
          dark: '#3730a3'
        },
        secondary: {
          light: '#10b981',
          DEFAULT: '#059669',
          dark: '#047857'
        }
      }
    }
  },
  plugins: []
};