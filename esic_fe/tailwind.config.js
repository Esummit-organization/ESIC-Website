/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      background: {
        50: "#fff6e5",
        100: "#ffe5b3",
        150: "#FFE7B9",
        200: "#ffd380",
        300: "#ffc24d",
        400: "#ffb01a",
        500: "#ffb01a",
        600: "#b37500",
        700: "#805400",
        800: "#4d3200",
        900: "#1a1100",
        950: "#000D14",
      },
      secondary: {
        50: "#ffede5",
        100: "#ffc9b3",
        150: "#FF8C5C",
        200: "#ffa580",
        300: "#ff814d",
        400: "#ff5d1a",
        500: "#e64400",
        600: "#b33500",
        700: "#802600",
        800: "#4d1700",
        900: "#1a0800",
        950: "#040406",
      },
      white: "#fbfef9",
      gray: {
        50: "#FAFAFA",
        100: "#F2F2F2",
        200: "#E0E0E0",
        300: "#CFCFCF",
        400: "#BDBDBD",
        500: "#AAAAAA",
        600: "#878787",
        700: "#666666",
        800: "#454545",
        900: "#212121",
        950: "#121212",
      },
      accent: {
        50: "#f6f0ee",
        100: "#e5d3cc",
        150: "#A26952",
        200: "#d4b6aa",
        300: "#c39988",
        400: "#b27c67",
        500: "#98634d",
        600: "#774d3c",
        700: "#55372b",
        800: "#33211a",
        900: "#110b09",
      },
      hero: {
        50: "#012441"
      }
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}