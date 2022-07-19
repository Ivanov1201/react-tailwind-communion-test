/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-text-normal": "#6D6F8A",
        "color-text-placeholder": "#A9ABB9",
        "color-text-number": "#606279",
        "color-text-card-title": "#B0B2D6",

        "color-background-normal": "#EDEDF3",
        "color-background-body": "#F8F8F9"
      }
    },
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
    }
  },
  plugins: [],
}
