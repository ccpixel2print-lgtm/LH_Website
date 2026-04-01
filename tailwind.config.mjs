/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        alabaster: '#FAF9F6',
        // Recalibrated to match the new vibrant orange theme (#F7931E)
        sunset: {
          50: '#fef8f0',
          100: '#fdedda',
          200: '#fbd4aa',
          300: '#f8b671',
          400: '#f59635',
          500: '#F7931E', // Main Theme Orange
          600: '#e1780d',
          700: '#bc5c0e',
          800: '#954812',
          900: '#783c12',
        },
        // Recalibrated to match the new vibrant nature green theme (#8CC63F)
        leaf: {
          50: '#f4f8f1',
          100: '#e5efe0',
          200: '#ccdfbf',
          300: '#a8c994',
          400: '#81ad66',
          500: '#8CC63F', // Main Theme Green
          600: '#4e7e29',
          700: '#3d6323',
          800: '#345021',
          900: '#2b421e',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};