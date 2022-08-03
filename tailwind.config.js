/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'homeCoverM':"url('/images/coverM.jpg')",
        'homeCover':"url('/images/cover.jpg')",
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
