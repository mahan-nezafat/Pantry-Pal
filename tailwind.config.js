/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          'hero': "url('src/assets/images/hero.jpg')"
      },
      animation: {
          'bounce-slow': "bounce 1.5s infinite"
      }
    },
  },
  plugins: [],
}

