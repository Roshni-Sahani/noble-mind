/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': '"Outfit", sans-serif;',
        'exo': '"Exo 2", sans-serif;',
        'Montserrat': 'Montserrat'
      },
      backgroundImage: {
        'bg-gradient': 'linear-gradient(130.88deg, #A854E9 -9.14%, #4F91FC 283.16%)'
      }
    },
  },
  plugins: [],
}