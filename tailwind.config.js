/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#28d5fc",

          "secondary": "#9bea88",

          "accent": "#3dce45",

          "neutral": "#322338",

          "base-100": "#fcfcfd",

          "info": "#9fbaf9",

          "success": "#1db997",

          "warning": "#f5ab3d",

          "error": "#ee6e68",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

