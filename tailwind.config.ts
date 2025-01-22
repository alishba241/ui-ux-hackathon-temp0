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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        progressFill: "progressFill 3s linear forwards",
        moveLine: "moveLine 1.5s linear infinite",
      },
      keyframes: {
        progressFill: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        moveLine: {
          '0%': { backgroundPosition: '200% 0%' },
          '100%': { backgroundPosition: '-200% 0%' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
