/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-wine':'#8b3a45',
        'wine':'#7a0d20'
      }
    },
  },
  plugins: [],
}