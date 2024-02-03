/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    safelist: [
      "animate-[fade-in_1s_ease-in-out]",
      "animate-[fade-in-left_1s_ease-in-out]",
    ],
  },
  plugins: [],
};
