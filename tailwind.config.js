const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    rotate: {
      "5": "5deg",
    },
    extend: {
      colors: {
        "avis-blue": "#1F4997",
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
