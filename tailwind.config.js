module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./components/**/*.{astro,html,js,jsx,ts,tsx}",
    "./pages/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#ffafcc",
        "secondary-pink": "#ffc8dd",
        "primary-blue": "#a2d2ff",
        "secondary-blue": "#bde0fe",
        "primary-purple": "#cdb4db",
        "primary-green": "#155463",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
