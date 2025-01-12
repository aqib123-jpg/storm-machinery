/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      screens: {
        xs: '400px', 
      },
      writingMode: {
        'vertical-rl': 'vertical-rl',
      },
    },
  },
  plugins: [],
}
