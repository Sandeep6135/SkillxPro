/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0c1324',
        bg2: '#151b2d',
        primary: {
          DEFAULT: '#a855f7',
          dark: '#842bd2',
          light: '#ddb7ff',
        },
        accent: '#4edea3',
        textPrimary: '#dce1fb',
        textSecondary: '#cfc2d6',
        textTertiary: '#988d9f',
        
        // Stitch Surface Containers
        surface: '#0c1324',
        surfaceBright: '#33394c',
        surfaceContainerLowest: '#070d1f',
        surfaceContainerLow: '#151b2d',
        surfaceContainer: '#191f31',
        surfaceContainerHigh: '#23293c',
        surfaceContainerHighest: '#2e3447',
        tertiary: {
          DEFAULT: '#8582ff',
          light: '#c3c0ff',
          dark: '#4f46e5'
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
        glow: '0 0 20px rgba(168, 85, 247, 0.4)',
        emeraldGlow: '0 0 20px rgba(78, 222, 163, 0.4)',
      }
    },
  },
  plugins: [],
}
