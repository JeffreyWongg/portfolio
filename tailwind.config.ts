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
        bebas: ["Bebas Neue", 'serif'],
        afacad: ["Afacad", 'serif'],
      },
      lineHeight: {
        tightest: "0.7",
      },
    },
  },
  plugins: [

  ],
} satisfies Config;
