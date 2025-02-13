/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0086FF',
        secondary: '#307BC4',
      },
      container: {
        center: true, 
        padding: {
          DEFAULT: "1rem", 
          sm: "2rem", 
          md: "3rem", 
          lg: "4rem", 
          xl: "5rem", 
          "2xl": "6rem", 
        },
      },
      boxShadow: {
        'custom': '0 0 30px #8dbbe2bf',
      },
    },
  },
  plugins: [],
};
