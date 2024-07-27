/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '.5rem'
    },
    extend: {
      colors: {
        'white': '#fafafa',
        'black': '#202020'
      }
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif', 'Arial']
    }
  },
  plugins: [],
}

