module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {      
      backgroundImage: {
        //Attribution: https://www.trustedreviews.com/news/elden-ring-has-been-pushed-back-to-february-4174122
        'hero-background': "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('../public/images/hero-background.jpg')",
      },
    },
  },
  plugins: [],
}
