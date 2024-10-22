/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        nurse : {
          100 : "#62D5C733",
          200 : "#007BFF33",
          300 : "#007BFF",
          400 : "#FFFFFF",
          500 : "#888888",
          600: "#D4D4D4",



        },
        nurselight:{
          100 : "#f2f2f2"
        },
        dash:{
          100 : "#080C75",
          200 :  "#E6EEF5",
          300 : "#D9D9D9",
          400 : "#EBEBF0",



        }


        

      }
    }
    ,
  },
  plugins: [],
}

