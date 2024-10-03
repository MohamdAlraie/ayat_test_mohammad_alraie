/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Main: "#3b86ff",
        Secondary: "#414141",
        Third: "#ebf3ff",
        Fourth: "#c6cdd2",
        Red: "#fd8f8f",
      },
    },
  },
  plugins: ["tailwindcss-rtl"],
};
