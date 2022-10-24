/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html",
    "./src/*.tsx"
  ],
  theme: {
    fontFamily:{
      sans:['Roboto ']
    },
    extend: {backgroundImage:{
      galaxy:"url('./public/Fundo.png')",
      contato:"url('./public/images.jpg')",
      'nlw-gradient':"linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%)",
      'game-gradient':"linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)"
    }},
  },
  plugins: [],
}