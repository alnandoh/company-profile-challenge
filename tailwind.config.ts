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
          100: "#7A7A7A",
          200: "#6A6A6A",
          300: "#5A5A5A",
          400: "#4A4A4A",
          500: "#3A3A3A",
          600: "#2A2A2A",
          700: "#1A1A1A",
          800: "#0A0A0A",
        },
        shade: {
          100: "#FFFFFF",
          200: "#F9F9F9",
          300: "#F2F2F2",
          400: "#E6E6E6",
          500: "#CCCCCC",
          600: "#B3B3B3",
          700: "#999999",
          800: "#808080",
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
