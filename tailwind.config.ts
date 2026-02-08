import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        "display-large": ["clamp(2.5rem, 4vw + 1.5rem, 5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-medium": ["clamp(2.25rem, 3vw + 1rem, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "heading-1": ["clamp(2rem, 2vw + 1rem, 3rem)", { lineHeight: "1.2" }],
        "heading-2": ["clamp(1.75rem, 1.5vw + 1rem, 2.25rem)", { lineHeight: "1.25" }],
        "body-large": ["clamp(1.125rem, 0.7vw + 0.9rem, 1.25rem)", { lineHeight: "1.75" }],
        "body-base": ["clamp(0.95rem, 0.3vw + 0.9rem, 1rem)", { lineHeight: "1.5" }],
        "label-caps": ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.1em" }],
      },
      colors: {
        "dugri-blue": {
          DEFAULT: "#1E40AF",
          light: "#3B82F6",
          dark: "#003366",
        },
        "dugri-gold": "#D4AF37",
        "dugri-red": "#DC2626",
        "dugri-dark": "#111827",
        primary: {
          DEFAULT: "#1E40AF",
          light: "#3B82F6",
          dark: "#003366",
        },
        secondary: "#D4AF37",
        accent: "#DC2626",
        neutral: "#111827",
      },
    },
  },
  plugins: [],
};

export default config;
