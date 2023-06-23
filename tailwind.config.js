const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          sans: ["Inter", ...defaultTheme.fontFamily.sans],
          title: ["Fraunces", ...defaultTheme.fontFamily.serif],
          playfair: ["Playfair Display", ...defaultTheme.fontFamily.sans],
        },
    },
  },
  plugins: [],
}