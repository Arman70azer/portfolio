module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-dark-gray': '#232323', 
        'custom-orange': '#FF6347', 
        'custom-blue': '#0077FF',
      },
    },
  },
  plugins: [],
};
