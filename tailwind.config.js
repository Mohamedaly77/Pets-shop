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
      nunito: ['Nunito', ' sans-serif'],
    },

    colors: {
      primary_green: '#07A081',
      text_black: '#404146',
      primary_black: '#333333',
      text_white: '#FFFFFF',
      red: '#FF3C3C',
      grey: '#545454',
      grey2: '#F6F6F6',
      grey3: '#828282',
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
