import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
         sikhBlue: "#002147",
         sikhGold: "#F5821F",
      },
    },
  },
  plugins: [],
};
export default config;