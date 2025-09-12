/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "430px",   // 2 cards from 430px
        mdx: "990px",  // 3 cards from 990px
        xxl: "1200px", // 5 cards at 1200px+//
       },
    },
  },
  plugins: [],
}