/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "pages/**/*.{js,ts,jsx,tsx}",
    "components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blood-red': '#C7200D',
      },
    },
  },
  plugins: [],
}
