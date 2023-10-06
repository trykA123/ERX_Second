/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-dark": "#1b1b1b",
        "main-light": "#F6F4E8",
        "brand-gold": "#a38d1c",
        "brand-gold-2": "#B8A442",
        "accent-pink": "#fbe0d9",
        "grey-accent": "#d9d0ce",
        "back-accent": "#E3DDBB",
        "back-accent-2": "#404040",
        "button-yellow": "#B8A442",
        "yellow-text-dark": "#625511",
        "yellow-text-bright": "#FAF7E6",
        "yellow-header-dark": "#211C06",
        "yellow-header-dark2": "#41380B",
        "yellow-button": "#A38D1C",
        "navbar-border": "rgba(246, 244, 232, 0.5)",
        "gold-100": "#FAF7E6",
        "gold-200": "#F1ECD2",
        "gold-300": "#ECE6C4",
        "gold-400": "#B8A442",
        "gold-500": "#A38D1C",
        "gold-600": "#8C7914",
        "gold-700": "#322B0D",
        "gold-800": "#2C2506",
        "gold-900": "#211C06",
      },
      keyframes: {
        iconBounce: {
          "0%, 100%": { transform: "translateY(-25%)" },
          "50%": { transform: "none" },
        },
      },
      backgroundImage: {
        servicesImg: "url('./src/assets/img/2.jpg')",
      },
    },
  },
  plugins: [],
};
