/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          100: "#591c76",
          300: "#1c1c2d",
          900: "#0c0c14",
        },
      },
    },
  },
  plugins: [],
}