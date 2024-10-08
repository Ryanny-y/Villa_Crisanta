/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'Arial', 'sans-serif'],
        'cursive': ['Grey Qo', 'cursive']
      },
      backgroundImage: {
        'hero-bg': "url('images/landing/hero-bg.jpg')"
      },
      brightness: {
        70: '.70'
      },
      colors: {
        'dark': '#202020',
        'dark-bg': '#202020e6',
        'light': 'rgb(250, 250, 250)',
        'theadBg': '#E3E3E3',
        'primaryGray': 'rgb(112, 112, 112)',
        'secondaryGray': 'rgb(240, 240, 240)'
      },
      screens: {
        'xxs': '400px'
      },
      flexBasis: {
        '75': '20rem'
      }, 
      gridTemplateRows: {
        'grid-lg': 'repeat(7, 240px)',
        'grid-none': 'repeat(8, 250px)',
      },
      spacing: {
        '15': '60px'
      }
    },
  },
  plugins: [],
}

