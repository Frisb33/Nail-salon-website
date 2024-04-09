/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: 'rgba(236, 194, 190, 1)', // Define your RGBA color
      },
    },
  },
  plugins: [],
};

