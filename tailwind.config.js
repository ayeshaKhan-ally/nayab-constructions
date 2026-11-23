/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "#F8F6F0",
          card: "#FFFFFF",
          beige: "#EFE7DA",
          gold: "#C6A46A",
          "gold-light": "#D8BC89",
          "gold-dark": "#A88347",
          charcoal: "#282828",
          dark: "#1A1A1A",
          body: "#66615B",
          border: "#E9E2D7",
          muted: "#9E9992",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px -10px rgba(40, 40, 40, 0.06)",
        "luxury-lg": "0 20px 40px -15px rgba(198, 164, 106, 0.12)",
        "luxury-hover": "0 20px 35px -10px rgba(40, 40, 40, 0.12)",
      },
    },
  },
  plugins: [],
};
