/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        passion: ['"Passion One"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#e238ec",
      },
    },
  },
  plugins: [],
};
