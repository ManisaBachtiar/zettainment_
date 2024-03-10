/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/tw-elements-react/dist/js/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        fly: {
          "0%": { transform: "translateY(5%)" },
          "25%": { transform: "translateY(7.5%)" },
          "50%": { transform: "translateY(10%)" },
          "75%": { transform: "translateY(7.5%)" },
          "100%": { transform: "translateY(5%)" }
        },
        
      },
      darkMode: "class",
      plugins: [require("tw-elements-react/dist/plugin.cjs")]
    },
      animation: {
        fly: "fly 3s linear infinite",
      },
    },
  plugins: [],
};
