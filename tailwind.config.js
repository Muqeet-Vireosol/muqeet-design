/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#9E1B1B',
          dark: '#7F1515',
          deep: '#5D1515',
          soft: '#C8523A',
          muted: '#E8D4CE',
        },
        cream: {
          DEFAULT: '#FBF8F3',
          card: '#F3EDE2',
          dark: '#EAE1D2',
        },
        sand: {
          DEFAULT: '#E6DCB8',
          light: '#F5EFE0',
        },
        oak: {
          DEFAULT: '#2C1A14',
          medium: '#4A352B',
          light: '#6E5244',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
};
