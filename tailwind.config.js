/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: ['attribute', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
      },
      keyframes: {
        'star-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'star-rotate': 'star-rotate 6s linear infinite',
        'star-rotate-fast': 'star-rotate 3s linear infinite',
        'fade-in-up': 'fade-in-up 0.8s ease forwards',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
}
