/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        irisBlueColor: "#01B5C5",
        headingColor : "#181A1E",
        greencolor:  "#05472A" ,
        lightgreencolor: "#9BE5AA",
        textColor: "#4E545F",
        whiteColor: "#fff",
        blackColor: "#000000",
        gradientColor: "#f1a0b1",
        red: "#800000"
      },
      boxShadow: {
          panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      },
    },
  },
  plugins: [],
};

