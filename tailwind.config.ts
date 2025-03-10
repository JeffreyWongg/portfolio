import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        jwBackground: "#21202E",
        jwYellow: "#F2E371",
        jwPink: "#F259A3",
        jwBlue: "#69E2FF",
        jwPurple: "#6242F2",
        jwGreen: "#61FFAC",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "serif"],
        afacad: ["Afacad", "serif"],
      },
      lineHeight: {
        tightest: "0.7",
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "title": "12rem",
      },
      
    },
  },
  plugins: [],
} satisfies Config;
