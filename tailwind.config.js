/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        "rgba" : "rgba(0,0,0,0.1)"
      },
      colors: {
        "primary" : "#6cc2c5",
        "primary-dark" : "#e06e8e",
        "secondary" : "#e06e8e",
        "normal" : "#172b4d",
        "bg-dark" : "#101204"
      },
      dropShadow: {
        "primary" : "-10px 5px 10px #6cc2c5"
      },
      boxShadow: {
        "circlebtn" : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "circlebtn-dark" : "rgba(255, 255, 255, 0.4) 0px 3px 8px"
      }
    }
  },
  plugins: []
}

