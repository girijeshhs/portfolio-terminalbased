/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00f3ff',
          pink: '#ff00ff',
          green: '#0aff00',
          purple: '#bc13fe',
        },
        terminal: {
          bg: 'rgba(10, 10, 15, 0.9)',
          header: '#1a1a24',
          text: '#e0e0e0',
          dim: '#6b7280',
        }
      },
      fontFamily: {
        mono: ['"Fira Code"', 'monospace'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'flicker': 'flicker 0.15s infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        flicker: {
          '0%': { opacity: '0.9' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0.9' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}
