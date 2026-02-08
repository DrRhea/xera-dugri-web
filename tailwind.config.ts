import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
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
