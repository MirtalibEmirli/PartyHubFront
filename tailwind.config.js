module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Bütün JS/TS/JSX/TSX faylları üçün
    "./public/index.html", // HTML faylları üçün
  ],
  theme: {
    extend: {}
    ,
    fontFamily:{
      poppins:["Poppins","sans-serif"],
      orbitron: ["Orbitron", "sans-serif"],
    }
  },
  plugins: [],
};
