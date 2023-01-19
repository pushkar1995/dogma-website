/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    fontFamily: {
      sans: ["Arial"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#842E66",
        },
        grey: {
          light: "#ECECEC",
          DEFAULT: "#707070",
        },
        white: {
          DEFAULT: '#ffff'
        },
        footerbg: {
          DEFAULT: '#231F20'
        },
        pinkyred: {
          DEFAULT: '#fe2c54'
        }
      },
    },
  },
  plugins: [],
}
