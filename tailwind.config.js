/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    "*",
  ],
  theme: {
    extend: {
      fontFamily:{
        DotGothic16:['Noto Sans Buhid', "sans-serif"],
        RalewayDot:["Raleway Dots", "cursive"],
        Dancing:['Dancing Script', "cursive"],
        Shadows:['Shadows Into Light', "cursive"],
        Caveat:['Caveat', 'cursive'],
        Satisfy:['Satisfy', 'cursive'],
        Pacifico:['Pacifico', 'cursive'],
        Qwitcher:['Qwitcher Grypen', 'cursive'],
        Conflict:['Passions Conflict', "cursive"],
        Dirt: ['Rubik Dirt', "cursive"],
        Marker: ['Permanent Marker', ],
        
      },
    },
  },
  plugins: [],
}
