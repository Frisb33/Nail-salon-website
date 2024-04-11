/** @type {import('tailwindcss').Config} */
// tailwind.config.js
import { fontFamily } from "tailwindcss/defaultTheme";
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        n: {
          1: "#FFFFFF",
          2: "#000000",
          3: "#FCC9C9",
          4: "#252134",
          5: "#AC6AFF",
          6: "#daa7a4",
        },
      },
      fontFamily: {
        code: "var(--font-code)",
      },
    },
  },
  plugins: [],
};

