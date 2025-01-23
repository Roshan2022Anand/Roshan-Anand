/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        "text-color": "var(--text-color)",
        "accent-one": "var(--accent-one-color)",
        "accent-two": "var(--accent-two-color)",
      },
      fontFamily: {
        "font-head": "var(--font-head)",
        "font-accent": "var(--font-accent)",
        "font-p": "var(--font-p)",
      },
    },
  },
  plugins: [],
};