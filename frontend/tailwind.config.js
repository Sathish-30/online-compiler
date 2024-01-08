/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
      screens: {
          'vsm': {'min': '0px', 'max': '576px'},
          // => @media (min-width: 576px) { ... }
          'sm': '576px',
          // => @media (min-width: 768px) { ... }
          'md': '768px',
          // => @media (min-width: 992px) { ... }
          'lg': '992px',
          // => @media (min-width: 1200px) { ... }
          'xl': '1200px',

      },
    extend: {},
  },
  plugins: [],
}

