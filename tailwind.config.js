/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend : {
      screens: {
        'sm': '680px'
      },
    },
    colors: {
      white: '#FAF9FF',
      black: '#292929',
      orange: '#FC7D46',
      purple: '#6F50EC',
      grey: '#f1f1f1',
      yellow: '#fbbf24',
      light_yellow:'#fef3c7',
      blue: '#0ea5e9',
      dark_red: '#dc2626',
      light_blue: '#dbeafe',
      red: '#fb7185',
      light_red: '#ffe4e6',
      green: '#22c55e'
    }, fontFamily: {
      'body': ['Poppins', ...defaultTheme.fontFamily.sans],
      'heading': ['Gilroy', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}
