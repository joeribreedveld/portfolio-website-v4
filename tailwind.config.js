/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./categories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["sans-serif", "Open Sans"],
        serif: ["serif", "Open Sans"],
        sans: ["sans-serif", "Open Sans"],
        mono: ["monospace", "Roboto Mono"],
      },
      colors: {
        black: "#24292f",
        primary: "#608598",
        secondary: "#4c6978",
        tertiary: "#7ba7bd",
        gray: "#f7f7f7",
      },
    },
  },
  plugins: [],
};
