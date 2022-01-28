module.exports = {
  theme: {
    extend: {
      colors: {
        "ibb-lighter": "#C0E5EB",
        "ibb-light": "#66CEE0",
        "ibb": "#00ADCC",
        "ibb-dark": "#009CCA",
        gray: {
          100: "#F8F8F8",
          200: "#E0E0E0",
          300: "#C8C8C8",
          400: "#888888",
          500: "#707070",
          600: "#505050",
          700: "#383838",
          800: "#282828",
          900: "#101010",
        },
      },
      backgroundColor: (theme) => theme("colors"),
      textColor: (theme) => theme("colors"),
    },
  },
  important: true,
  purge: [],
  variants: {
    extend: {},
  },
  plugins: [],
};
