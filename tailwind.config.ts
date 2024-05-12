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
      colors:{
        primary:{
          100:"#FEFCFB",
          200:"#FBF5F3",
          300:"#F9EFEC",
          400:"#F3DFD8",
          500:"#E7BEB2",
          600:"#DA9E8B",
          700:"#D48e77",
          800:"#CE7D63"
        },
        dark:{
          100:"#595959",
          200:"#4d4d4d",
          300:"#404040",
          400:"#333333",
          500:"#262626",
          600:"#1F1F1F",
          700:"#1A1A1A",
          800:"#0F0F0F"
        },
        shade:{
          100:"#fcfcfc",
          200:"#f7f7f7",
          300:"#f2f2f2",
          400:"#e6e6e6",
          500:"#cacace",
          600:"#b3b3b2",
          700:"#81807e",
          800:"#676665"
        }
      },
      keyframes: {
        infiniteScroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-270%)' },
        },
      },
      animation: {
        infiniteScroll: 'infiniteScroll 25s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
