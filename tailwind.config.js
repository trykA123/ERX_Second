/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-dark": "#1b1b1b",
        "brand-gold": "#a38d1c",
        "brand-gold-2": "#B8A442",
        "accent-pink": "#fbe0d9",
        "grey-accent": "#d9d0ce",
        "back-accent": "#E3DDBB",
        "back-accent-2": "#404040",
        "yellow-text-dark": "#625511",
        "yellow-text-bright": "#FAF7E6",
        "yellow-header-dark": "#211C06",
        "yellow-header-dark2": "#41380B",
        "yellow-button": "#A38D1C",
      },
    },
  },
  plugins: [],
};
