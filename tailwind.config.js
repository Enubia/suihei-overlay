const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/components/**/*.{js,ts,vue}',
    './src/views/**/*.{js,ts,vue}',
    './src/*.{js,ts,vue}'
  ],
  darkMode: false,
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
