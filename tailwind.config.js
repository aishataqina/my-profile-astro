module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    "./components/**/*.{astro,html,js,jsx,ts,tsx}",
    "./pages/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1024px",
      lg: "1200px",
    },
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
