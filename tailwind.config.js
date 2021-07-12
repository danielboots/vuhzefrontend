const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        coolgray: colors.blueGray,
        medblue: colors.blue,
      },

      fontFamily: {
        body: ["Red Hat Display"],
        doctor: ["Doctor"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
