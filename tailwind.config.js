/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-purple": "#832EFF",
        "custom-pink": "#FF4FF3",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
