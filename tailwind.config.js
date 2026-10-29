/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#F5F7FC',
          100: '#E4E8F5',
          200: '#C9D0E8',
          300: '#A3ADD0',
          400: '#7782B0',
          500: '#4B5690',
          600: '#323C74',
          700: '#22295A',
          800: '#141A40',
          900: '#0C1030',
          950: '#070A1F',
        },
        brand: {
          200: '#FFE98A',
          300: '#FFD84D',
          400: '#FFC21F',
          500: '#F5A524',
          600: '#D97706',
        },
        accent: {
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#7C3AED',
          900: '#2E1065',
        },
        success: {
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#16A34A',
          900: '#052E16',
        },
        whatsapp: {
          400: '#34E07A',
          500: '#25D366',
          900: '#0B3B2A',
        },
        error: {
          300: '#FCA5A5',
          500: '#DC2626',
        },
      },
      boxShadow: {
        glow: '0 10px 30px -8px rgba(255, 194, 31, 0.45)',
        'glow-lg': '0 14px 40px -6px rgba(255, 194, 31, 0.6)',
        violet: '0 30px 80px -20px rgba(124, 58, 237, 0.55)',
        card: '0 20px 50px -20px rgba(0, 0, 0, 0.6)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-up-delayed': 'fade-up 0.7s ease-out 0.15s both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
