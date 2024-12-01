/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
    "./toolkit/index.html",
    "./pwa/index.html",
  ],
  theme: {
    extend: {
      listStyleType: {
        dash: '"- "',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '-100% 50%' }, // Start off-screen to the left
          '100%': { backgroundPosition: '100% 50%' }, // End off-screen to the right
        },
      },
      animation: {
        gradient: 'gradientMove 8s linear infinite', // Smooth left-to-right motion
      },
    },
  },
  plugins: [],
};
