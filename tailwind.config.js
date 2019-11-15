module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Arial', 'sans-serif'],
      body: ['Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        yellow: {
          100: '#FFFFF0',
          200: '#FEFCBF',
          300: '#FAF089',
          400: '#F6E05E',
          500: '#ffcf00',
          600: '#D69E2E',
          700: '#B7791F',
          800: '#975A16',
          900: '#744210',
        },
      },
    },
  },

  variants: {
    margin: ['responsive', 'last'],
    borderWidth: ['responsive', 'last'],
  },

  plugins: [],
}
