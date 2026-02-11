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
        // Text – dark tones for light/pastel background
        cream: {
          DEFAULT: "#1e1a50", // deep indigo — main text
          muted: "#4e4a7a",   // medium indigo — secondary text
          faint: "#8a88b5",   // muted purple — faint text
        },
        gold: {
          DEFAULT: "#c9a84c",
          light: "#e8c870",
          muted: "#9e7d30",
        },
        // bg.primary kept for btn text (dark on gold button)
        bg: {
          primary: "#0a0a18",
          secondary: "#e8eeff", // overridden to glass in CSS
          card: "#f0f2ff",      // overridden to glass in CSS
        },
        border: "#bfb5e5", // light lavender — for border-border utilities
        purple: {
          accent: "#7b5eb8",
          soft: "#c4b8f0", // lightened for light bg
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-raleway)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
