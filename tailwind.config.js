module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      tablet: { raw: "(min-width: 768px)" },
      default: "1200px",
    },
    colors: {
      "footer-bg": "#3A5F5F",
      "primary-heading": "#244D4D",
      "secondary-heading": "#3D3D3F",
      "primary-text": "#5F5F64",
    },
    fontFamily: {
      noto: ["'Noto Serif JP'", "sans-serif"],
      montserrat: ["'Montserrat'", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
