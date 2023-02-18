/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'green': '#CDF567',
      'pink': '#FFD0D5',
      'orange': '#ffc68e',
      'blue': '#A4C9D8',
      'primary': '#171313',
      'yellow': '#ffe818',
      'gray': '#837e7e',
      'white': '#ffffff',
      'red': '#ff0101'
    },
    extend: {
    },
  },
  plugins: [],
}