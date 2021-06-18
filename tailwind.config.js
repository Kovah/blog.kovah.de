const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.liquid'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        special: ['"Nexa"', ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        '68': '17rem',
        '88': '22rem'
      },
      fontSize: {
        '8.5xl': '7rem',
        '10xl': '9rem'
      },
      colors: {
        gray: {
          ...colors.blueGray,
        },
        'blue': {
          '50': '#F0F8FF',
          '100': '#CDE7FE',
          '200': '#9CCFFC',
          '300': '#6AB7FB',
          '400': '#389FFA',
          '500': '#0687F9',
          '600': '#056CC7',
          '700': '#045195',
          '800': '#033663',
          '900': '#011B32'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
