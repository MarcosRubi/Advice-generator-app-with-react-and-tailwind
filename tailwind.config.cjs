/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         letterSpacing: {
            1: "5px",
         },
         boxShadow: {
            "3xl": "0 0 20px 5px rgba(255, 255, 255, 255.3)",
         },
      },
   },
   plugins: [],
};
