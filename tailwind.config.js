/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  screens: {
    'mobile': '640px',
    'tablet' : '768px',
    'desktop': '1024px',
    'widescreen': '1280px',
  },
  plugins: [],
}

