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
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        gradient: 'gradientMove 3s linear infinite alternate',
      },
    },
  },
  plugins: [],
};
