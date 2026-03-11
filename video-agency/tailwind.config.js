/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
      },
      colors: {
        dark: '#222222',
      }
    },
  },
  plugins: [],
}
