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
          default: "#FFFFFF",//#FFFFFF
          form : "#00FF00", //#3B82F6
          search : "#1D7493", //#1D7493
          secondary : "#E7EAEC",//#E7EAEC
        },
        textColor: {
          default: "#4b4c4c",//#4b4c4c 
          heading: "#272a2b",//#272a2b
          subheading: "#393939",//#393939 
        },
      },
      //can be deleted
    },
  },
  plugins: [],
}
