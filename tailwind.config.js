/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        venom: '#04826b',
        pink: '#f2a7cb',
        black: '#000000',
        dark: '#222222',
        gradient1: '#2c2c2c',
        gradient2: '#1c1c1c',
        graytext: '#6a6a6a'
      }
    },
  },
  plugins: [],
}