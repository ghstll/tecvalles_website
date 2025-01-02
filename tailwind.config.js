/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'Roboto' : ['"Roboto Condensed"']
      },
      keyframes : {
        appear : {
          '0%' : {opacity : 0},
          '100%' : {opacity : 1}
        }
      }
    },
  },
  plugins: [],
}

