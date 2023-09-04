/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-green': '#040606',
        'black-green-opacity': 'rgba(4,6,6, 0.8)',
        'regular-green': '#048c73',
        'regular-green-opacity': '#048c7315',
        'light-green': '#04c2a3',
        'light-green-opacity': '#04c2a360',
        'dark-green': '#04544c',
        'dark-green-opacity': '#04544c60',
      },
      keyframes: {
        wiggle: {
          '0%, 40%, 80%': {marginLeft: '-5px'},
          '20%, 60%, 100%': {marginLeft: '0', marginRight: '-5px'},
        }
      },
      animation: {
        wiggle: 'wiggle .5s ease-in-out',
      }
    },
  },
  plugins: [],
}