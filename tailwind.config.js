const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // This enables dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.blue[600],
          dark: colors.blue[500],
        },
        secondary: {
          light: colors.teal[500],
          dark: colors.teal[400],
        },
        background: {
          light: colors.gray[100],
          dark: colors.gray[900],
        },
        text: {
          light: colors.gray[800],
          dark: colors.gray[100],
        },
        accent: {
          light: colors.purple[500],
          dark: colors.purple[400],
        },
      },
    },
  },
  plugins: [],
}