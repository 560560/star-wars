/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sw-cyan': {
          DEFAULT: '#17a2b8',
          dark: '#138496',
          light: 'rgba(23, 162, 184, 0.6)',
        },
        'sw-gray': {
          light: '#f8f9fa',
          lighter: '#f5f5f5',
        },
        'sw-indicator': {
          gradient1: '#ffffff',
          gradient2: '#91caf4',
          border: '#93c3fd',
          glow: 'rgba(51, 138, 252, 0.97)',
        },
      },
      fontFamily: {
        starjedi: ['Starjedi', 'sans-serif'],
        aurebesh: ['AurebeshDroid', 'sans-serif'],
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          'sans-serif',
        ],
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        tablet: '768px',
        desktop: '1366px',
      },
      gridTemplateRows: {
        layout: '56px 1fr 40px',
      },
      spacing: {
        18: '4.5rem',
      },
      borderRadius: {
        card: '5px',
        carousel: '20px',
        indicator: '10px',
      },
      transitionDuration: {
        400: '400ms',
        500: '500ms',
        600: '600ms',
        800: '800ms',
      },
      boxShadow: {
        'indicator-glow': '0px 0px 9px 0px rgba(51, 138, 252, 0.97)',
      },
      backgroundImage: {
        'sw-main': "url('/src/assets/images/bg.jpg')",
      },
      scale: {
        104: '1.04',
      },
    },
  },
  plugins: [],
}
