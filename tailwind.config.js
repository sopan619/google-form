/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        dancin: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
