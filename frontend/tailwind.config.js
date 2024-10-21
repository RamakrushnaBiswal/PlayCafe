//** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      height: {
        'screen-dvh': '100dvh', // Handles dynamic viewport height for mobile devices
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['"Roboto Serif"', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#6366f1',
          dark: '#4f46e5',
        },
        background: {
          light: '#ffffff',
          dark: '#121212',
        },
        text: {
          light: '#1a1a1a',
          dark: '#f5f5f5',
        },
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
