module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          10: '#141619'
        },
        gray: {
          10: '#f1f1f1',
          950: '#64707c'
        }
      },
      backgroundImage: {
        'hero-bg': "url('./assets/images/home-bg.jpg')"
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
};