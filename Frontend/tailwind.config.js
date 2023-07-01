/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function({ addUtilities }) {
  addUtilities({
    ".dream-rotate-y-180":{
      transform:"rotateY(180deg)"
    },
    ".preserve-3d":{
      transformStyle: "preserve-3d"
    },
    ".backface-hidden":{
      backfaceVisibility: "hidden"
    }
  })
})
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    fontSize: {
      xs: ['11px', '14px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
  },
  plugins: [Myclass],
}
