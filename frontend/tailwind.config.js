/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f8f3ea",
        champagne: "#d5b16d",
        bronze: "#8b6842",
        espresso: "#241913",
        charcoal: "#111111"
      },
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 24px 70px rgba(213, 177, 109, 0.18)"
      }
    }
  },
  plugins: []
};
