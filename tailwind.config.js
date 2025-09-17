/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "430px",   
        mdx: "990px",  
        xxl: "1200px", 
       },
    },
  },
  plugins: [],
}