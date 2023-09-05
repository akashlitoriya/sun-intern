/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    
    fontFamily:{
      sans: ['Syne', 'sans-serif'],
      kanit: ['Kanit', 'sans-serif'],
    },
    extend: {
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'voilet' : '#E9E5FF',
        'button-bg-color': '#000000',
        'qoute-color': '#6754E9'
      },
    },
  },
  plugins: [],
}

