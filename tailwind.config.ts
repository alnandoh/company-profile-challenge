import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          100: "#FEFCFB",
          200: "#FBF5F3",
          300: "#F9EFEC",
          400: "#F3DFD8",
          500: "#E7BEB2",
          600: "#DA9E8B",
          700: "#D48E77",
          800: "#CE7D63",
        },
        dark: {
          100: "#6E6E6E",
          200: "#606060",
          300: "#525252",
          400: "#454545",
          500: "#383838",
          600: "#2B2B2B",
          700: "#1D1D1D",
          800: "#0F0F0F",
        },
        shade: {
          100: "#FCFCFC",
          200: "#F5F5F5",
          300: "#ECECEC",
          400: "#DFDFDF",
          500: "#C2C2C2",
          600: "#A7A7A7",
          700: "#858585",
          800: "#6B6B6B",
        },
      },
      keyframes: {
        infiniteScroll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-270%)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        infiniteScroll: "infiniteScroll 25s linear infinite",
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
