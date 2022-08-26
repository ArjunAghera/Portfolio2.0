/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: "#060606",
        brandSecondary: "#cc1133",
        brandTextPrimary: "#fffafa",
        brandTextSecondary: "#e7fafa",
      },
      fontFamily: {
        brandSecondary: ["Inter"],
        // brandPrimary: ["Allison"],
      },
    },
  },
  plugins: [],
};
