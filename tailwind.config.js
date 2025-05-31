/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/assets/stylesheets/**/*.{css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Shippori Mincho', 'sans-serif'],
        title: ['Playfair Display SC', 'Shippori Mincho', 'serif'],
      },
      height: {
        'screen-full': '100vh',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fit-sm': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
    },
  },
  plugins: [],
};