/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-dark": "#1b1b1b",
        "brand-gold": "#a38d1c",
        "accent-pink": "#fbe0d9",
        "grey-accent": "#d9d0ce",
        "back-accent": "#E3DDBB",
        "yellow-text-dark": "#625511",
        "yellow-header-dark": "#41380B",
        "yellow-button": "#A38D1C",
      },
    },
  },
  plugins: [],
};
