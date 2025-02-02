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
      //can be deleted
      colors: {
        // primary: {
        //   DEFAULT: "#1E3A8A", 
        //   light: "#3B82F6", 
        //   dark: "#1E40AF", 
        // },
        // secondary: {
        //   DEFAULT: "#FFFFFF",
        //   light: "#C084FC",
        //   dark: "#7E22CE",
        // },
        background: {
          DEFAULT: "#FFFFFF",//#FFFFFF
          form : "#3B82F6", //#3B82F6
          search : "#1D7493", //#1D7493
          secondary : "#E7EAEC",//#E7EAEC
        },
        // text: {
        //   primary: "#111827", 
        //   secondary: "#6B7280",
        //   light: "#9CA3AF", 
        // },
      },
      //can be deleted
    },
  },
  plugins: [],
}
