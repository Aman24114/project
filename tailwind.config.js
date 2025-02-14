/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Filson Pro', 'sans-serif'],
      },
      colors: {
        primary: '#3F4AE2',
        'form-bg': '#E9EAF4',
      }
    },
  },
  plugins: [],
};