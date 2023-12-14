module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d2d2d2", 900: "#2e2e2e" },
        gray: { 500: "#afa8a8", "500_01": "#afa7a7" },
        black: { 900: "#000000", "900_3f": "#0000003f" },
        blue: { A700_ea: "#0c58ecea" },
        white: { A700: "#ffffff" },
      },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
      fontFamily: {
        alegreyasans: "Alegreya Sans",
        cabin: "Cabin",
        bebasneue: "Bebas Neue",
        urbanist: "Urbanist",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
