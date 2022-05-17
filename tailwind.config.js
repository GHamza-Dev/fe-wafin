module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#FF9900',
        darken: '#030050',
        grayish: '#666666',
        lightgray: '#E3E3E3',
        lighten: '#FBFCFF',
        light: '#FFFDFD'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      fontFamily:{
        'poppins': 'Poppins , sans-serif'
      }
    }
  }
}
