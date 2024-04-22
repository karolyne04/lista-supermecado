import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cor-primary': '#6C22A6',
        'cor-secondary':'#6962AD',
        'cor-terceria': '#83C0C1',
        'cor-quartearia': '#96E9C6'
      },
      
    },
  },
  plugins: [],
};
export default config;
