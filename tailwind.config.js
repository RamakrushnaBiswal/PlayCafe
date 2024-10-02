//** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      height: {
        'screen-dvh': '100dvh',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['"Roboto Serif"', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
