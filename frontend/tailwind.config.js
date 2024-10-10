//** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      height: {
        'screen-dvh': '100dvh',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['"Roboto Serif"', 'sans-serif'],
      },
      keyframes: {
        fadeInBounce: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOutBounce: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(40px)' },
        },
      },
      animation: {
        fadeInBounce: 'fadeInBounce 0.5s ease-out forwards',
        fadeOutBounce: 'fadeOutBounce 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
