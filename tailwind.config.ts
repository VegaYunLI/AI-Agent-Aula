import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sitech: {
          primary: {
            DEFAULT: "#0f3b6c",
            light: "#1d5899",
            dark: "#0a2544",
          },
          secondary: {
            DEFAULT: "#0284c7",
            light: "#38bdf8",
            dark: "#0369a1",
          },
          accent: {
            DEFAULT: "#ea580c",
            light: "#fb923c",
            dark: "#c2410c",
          },
          neutral: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
