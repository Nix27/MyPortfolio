/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        "dark-purple": "#100D15",
        "primary-cyan": "#3CF3FF"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        "ink-free": ["Ink Free", "sans-serif"]
      }
    },
    screens: {
      xs: "480px",
      sm: "620px",
      md: "768px",
      lg: "1060px",
      xl: "1200px",
      '2xl': "1700px",
    }
  },
  plugins: [],
})

