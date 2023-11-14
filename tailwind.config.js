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
        gray: {
          100: "#f4f4f4",
          400: "#c4c4c4",
          800: "#4f4f4f",
          900: "#191919",
        },
        blue_gray: { 400: "#8d8d8d", "300_33": "#91aebb33" },
        orange: { A700: "#fd650b" },
        light_blue: {
          500: "#00a3ff",
          "500_72": "#00a3ff72",
          "500_7f": "#00a3ff7f",
        },
        black: { 900: "#000000", "900_3f": "#0000003f", "900_19": "#00000019" },
        white: { A700: "#ffffff" },
      },
      boxShadow: {
        bs1: "0px 30px  30px 0px #91aebb33",
        bs: "0px 4px  4px 0px #0000003f",
        bs4: "0px 3.69px  3px 0px #0000003f",
        bs3: "0px 3.84px  3px 0px #0000003f",
        bs2: "4px 4px  4px 0px #00000019",
      },
      fontFamily: {
        darkergrotesque: "Darker Grotesque",
        roboto: "Roboto",
        robotocondensed: "Roboto Condensed",
        worksans: "Work Sans",
      },
      textShadow: {
        ts: "0px 4px  4px #0000003f",
        ts1: "10px 4px  10px #0000003f",
        ts2: "10.41px 4.16px  10px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
