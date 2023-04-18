/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'cyber': ['Cyberpunk'],
        'valo': ["Valo"],
        'mono': ["Courier New"],
      }
    },
  },
  plugins: [],
}
