const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./components/**/*.{js,ts,vue}', './pages/**/*.{js,ts,vue}'],
  darkMode: false, // or 'media' or 'class'
  important: false,
  separator: ':',
  theme: {
    extend: {},
    colors: {
      ...defaultTheme.colors
    },
    fontSize: {
      ...defaultTheme.fontSize
    }
  },
  variants: {},
  plugins: []
};
