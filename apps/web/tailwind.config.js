/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#08080f',
        bg2: '#0f0f1c',
        primary: {
          DEFAULT: '#7c6fff',
          dark: '#6355ff',
          light: '#a78bfa',
        },
        accent: '#10b981',
        textPrimary: '#ffffff',
        textSecondary: '#9090b0',
        textTertiary: '#4a4a6a',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        glow: '0 0 20px rgba(124, 111, 255, 0.4)',
      }
    },
  },
  plugins: [],
}
