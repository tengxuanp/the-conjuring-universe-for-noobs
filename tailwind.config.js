/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'homeCover':"url('/assets/images/test.jpg')",
      },
      colors:{
        'mYellow':'#FFE600',
      },
      gridTemplateColumns: {
        'autoFit': 'repeat(auto-fit, minmax(140px, 1fr))',
      },
    },
  },
  plugins: [],
}
