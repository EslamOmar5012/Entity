/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#030712',    // Ultra dark navy
          secondary: '#070D19',  // Deep navy
          tertiary: '#0B1528',   // Lighter navy
          card: 'rgba(7, 13, 25, 0.6)', // Glass card bg
        },
        accent: {
          blue: '#2563EB',       // Electric blue
          cyan: '#06B6D4',       // Cyan glow
          purple: '#7C3AED',     // Violet highlight for software
          magenta: '#D946EF',    // Magenta detail glow
        },
        text: {
          primary: '#F3F4F6',    // Off-white
          secondary: '#9CA3AF',  // Muted gray
          cyan: '#22D3EE',       // Glowing cyan text
        },
        border: {
          glow: 'rgba(37, 99, 235, 0.2)',
          purpleGlow: 'rgba(124, 58, 237, 0.2)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 15px rgba(37, 99, 235, 0.35)',
        'glow-cyan': '0 0 15px rgba(6, 182, 212, 0.35)',
        'glow-purple': '0 0 15px rgba(124, 58, 237, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(37, 99, 235, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(37, 99, 235, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}

