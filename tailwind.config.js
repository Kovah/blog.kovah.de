const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const fontSpecial = `"Overpass", ${defaultTheme.fontFamily.sans.join(',')}`

module.exports = {
  purge: [
    './layouts/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        special: ['"Overpass"', ...defaultTheme.fontFamily.sans]
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
          ...colors.gray
        },
        'blue': {
          '50': '#f0f8ff',
          '100': '#cde7fe',
          '200': '#9ccffc',
          '300': '#6ab7fb',
          '400': '#389ffa',
          '500': '#0687f9',
          '600': '#056cc7',
          '700': '#045195',
          '800': '#033663',
          '900': '#011b32'
        }
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            h1: {
              fontFamily: fontSpecial,
            },
            h2: {
              fontFamily: fontSpecial,
            },
            h3: {
              fontFamily: fontSpecial,
            },
            h4: {
              fontFamily: fontSpecial,
            },
            h5: {
              fontFamily: fontSpecial,
              color: theme('colors.gray.900', defaultTheme.colors.gray[900]),
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              lineHeight: '1.5'
            }
          }
        },
        lg: {
          css: {
            h5: {
              marginTop: '1.7em',
              marginBottom: '0.5em'
            }
          }
        },
        xl: {
          css: {
            h5: {
              marginTop: '1.8em',
              marginBottom: '0.5em'
            }
          }
        }
      })
    }
  },
  variants: {
    extend: {
      textColor: ['group-focus']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
