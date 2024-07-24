/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage : {
        "linear" : "linear-gradient(45deg, #6cc2c5, #e06e8e)"
      },
      backgroundColor: {
        "rgba" : "rgba(0,0,0,0.1)",
        "rgba-dark" : "rgba(255,255,255,0.1)"
      },
      colors: {
        "primary" : "#6cc2c5",
        "primary-dark" : "#e06e8e",
        "icon-dark" : "#8C9BAB",
        "normal" : "#172b4d",
        "normal-dark" : "#9fadbc",
        "bg-dark" : "#101204"
      },
      dropShadow: {
        "primary" : "-10px 5px 10px #6cc2c5",
        "primary-dark" : "10px 5px 10px #e06e8e"
      },
      boxShadow: {
        "circlebtn" : "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        "circlebtn-dark" : "rgba(255, 255, 255, 0.4) 0px 3px 8px",
        "project" : "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        "nav" : "0px 1px 5px rgba(190, 190, 190, 0.46)"
      }
    }
  },
  plugins: []
}

