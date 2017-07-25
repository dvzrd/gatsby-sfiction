import Typography from 'typography';

const options = {
  googleFonts: [
    {
      name: 'Exo',
      styles: [
        '400',
        '600',
        '700'
      ]
    },
    {
      name: 'Yrsa',
      styles: [
        '400',
        '600',
        '700'
      ]
    }
  ],
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  headerColor: 'hsla(0,0%,0%,0.8)',
  bodyColor: 'hsla(0,0%,0%,0.7)',
  blockMarginBottom: 0.5,
  headerFontFamily: ['Exo', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Yrsa', 'georgia', 'serif'],
  overrideStyles: () => {
    return {
      html: {
        overflowY: 'scroll',
      },
      'h1, h2, h3, h4, h5, h6': {
        position: 'relative',
        marginBottom: '0.83333em',
        lineHeight: 1.25,
      },
      a: {
        color: '#00ccff',
        fontSize: 'inerit',
        fontWeight: 'inherit',
        textDecoration: 'none',
        transition: 'color 250ms'
      },
      'a:hover': {
        color: '#00d8ff',
        textDecoration: 'underline'
      },
      hr: {
        margin: '4.83333em auto',
        width: '8.83333em',
        background: '#e0e0e0'
      }
    }
  },
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

module.exports = typography
