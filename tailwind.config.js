/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Main: "#29E5AB",
        Secondary: "#00FFB0",
        Third: "#1A1F1D",
        DarkGray: "#c6cdd2",
        silver: "#86909B",
        yellow: "#FFC72C",
        liteGreen: "#E7FFF8",
        dark: "#414D5A",
        pink: "#FFE2DC",
        Red: "#fd8f8f",
      },
    },
  },
  plugins: ["tailwindcss-rtl"],
};
