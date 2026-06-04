/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#1B4332',
          50: '#E8F0EC',
          100: '#C5DACF',
          200: '#9EC1AF',
          300: '#76A88F',
          400: '#4F8F6F',
          500: '#1B4332',
          600: '#173A2C',
          700: '#123025',
          800: '#0D261D',
          900: '#081C16',
        },
        oak: {
          DEFAULT: '#D4A373',
          50: '#FAF3EB',
          100: '#F2E1CC',
          200: '#E9CFAD',
          300: '#E0BD8E',
          400: '#D4A373',
          500: '#C58E54',
          600: '#A87340',
          700: '#7E5630',
          800: '#553A21',
          900: '#2B1D10',
        },
        onyx: {
          DEFAULT: '#1A1D1E',
          50: '#E8E9E9',
          100: '#C7C9C9',
          200: '#A5A8A9',
          300: '#838788',
          400: '#616667',
          500: '#404546',
          600: '#2D3132',
          700: '#1A1D1E',
          800: '#0D0F10',
          900: '#000000',
        },
        warmgray: '#F8F9FA',
      },
      fontFamily: {
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.02em',
      },
      boxShadow: {
        'soft': '0 4px 24px -8px rgba(27, 67, 50, 0.08)',
        'medium': '0 10px 40px -10px rgba(27, 67, 50, 0.15)',
        'strong': '0 20px 60px -15px rgba(27, 67, 50, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
