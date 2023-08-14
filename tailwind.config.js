/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      kaushan: ["Kaushan Script"],
      robotoSlab: ["Roboto Slab"],
      burtons: "burtons",
    },
    boxShadow: {
      "custom-light": "0 0 3px #313131",
      // "custom-dark": "0 5px 10px #0a0c0e , -5px -5px 10px #14161c",
      "custom-dark": "0 0 10px #999c98",
      "custom-teal": "0 0 10px rgb(13 148 136)",
      "custom-teal-m": "0 0 20px rgb(13 148 136)",
    },
    extend: {
      colors: {
        green: {
          DEFAULT: "#00f260",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
