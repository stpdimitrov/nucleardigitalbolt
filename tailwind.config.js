/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          yellow: '#fdc500',
          black: '#000000',
          white: '#ffffff',
        },
        gray: {
          dark: '#242424',
          medium: '#333333',
          light: '#dddddd',
          mid: '#b0b0b0',
          darker: '#444444',
          darkest: '#111111',
        },
      },
      fontFamily: {
        ronzino: ['Ronzino', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        'inter-display': ['Inter Display', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        'apfel-grotezk': ['Apfel Grotezk', 'sans-serif'],
      },
      borderRadius: {
        full: '1000px',
      },
      backdropBlur: {
        nav: '20px',
        button: '25px',
      },
      screens: {
        'mobile': { 'max': '809.98px' },
        'tablet': { 'min': '810px', 'max': '1239.98px' },
        'desktop': { 'min': '1240px' },
      },
    },
  },
  plugins: [],
};
