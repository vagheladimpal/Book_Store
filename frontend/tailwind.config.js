const { StayPrimaryLandscape } = require("@mui/icons-material");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#001f58",
      },
      fontfamiy: {
        font: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
