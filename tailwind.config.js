/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          rust: '#C4622D',       /* Primary CTA & Accent */
          terracotta: '#D4845A', /* Secondary Terracotta */
          sand: '#E8B89A',       /* Sand / Thin Border */
          cream: '#F5DEC8',      /* Light Cream Section */
          dark: '#1A1008',       /* Deep Rich Brown Dark */
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        none: 'none',
      }
    },
  },
  plugins: [],
};
