/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins'],
      red_hat: ['Red Hat Text', 'sans-serif'],
      cabin: ['Cabin', 'sans-serif;'],
      lato: ['Lato', 'sans-serif'],
    },

    colors: {
      primary_green: '#07A081',
      text_black: '#404146',
    },

    screen: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
    plugins: [],
  },
};
