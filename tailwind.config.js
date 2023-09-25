/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"],

      },
      boxShadow: {
        '4xl': 'rgba(0, 0, 0, 0.1) 0px 20px 30px -10px, rgba(0, 0, 0, 0.04) 0px 10px 30px -10px',
        '5xl': 'rgba(0, 0, 0, 0.1) -30px 20px 30px -5px, rgba(0, 0, 0, 0.04) -30px 10px 30px -5px',
      },

    },
  },
  plugins: [require("daisyui")],
}
