/** @type {import('tailwindcss').Config} */
export default {
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
        "secondary" : "#e06e8e",
        "normal" : "#172b4d"
      }
    }
  },
  plugins: []
}

