/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#06040d',
          900: '#0b0818',
          850: '#100b24',
          800: '#160e32',
          700: '#231552',
          card: 'rgba(23, 14, 49, 0.45)',
          pill: 'rgba(139, 92, 246, 0.08)',
        },
        neon: {
          violet: '#a855f7',
          purple: '#8b5cf6',
          lavender: '#c084fc',
          glow: '#d8b4fe',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(168, 85, 247, 0.3)',
        'glow-md': '0 0 25px -2px rgba(168, 85, 247, 0.35)',
        'glow-lg': '0 0 45px 0px rgba(168, 85, 247, 0.4)',
        'glow-button': '0 0 30px rgba(168, 85, 247, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gold-sweep': 'goldSweep 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        goldSweep: {
          '0%': { left: '-60%' },
          '100%': { left: '160%' },
        },
      }
    },
  },
  plugins: [],
}
