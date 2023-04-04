/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        pink: "#ff52bf",
        paleCyan: "#ebfbff",
        darkCyan: "#00252e",
        grayishBlue: "#808d99"
      }
    },
    screens:{
      'lg':'1044px'
    }
  },
  plugins: [],
}