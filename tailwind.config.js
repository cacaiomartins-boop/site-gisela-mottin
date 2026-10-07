/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta extraída da logo da Gisela
        coral: { DEFAULT: "#FC8974", soft: "#FFE3DC", deep: "#D9604B" },
        sage: { DEFAULT: "#80B3B7", soft: "#E3EEEE" },
        petrol: { DEFAULT: "#2B4A5F", dark: "#1E3647" },
        slate2: "#5D6981",
        paper: "#F7F4EF",
        sand: "#EFE9E0",
        ink: "#25384A",
        wood: "#B98B5E",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ["Jost", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -20px rgba(43,74,95,.28)",
      },
    },
  },
  plugins: [],
};
