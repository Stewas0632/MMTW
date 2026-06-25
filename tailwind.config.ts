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
        mmtw: {
          black: "#000000",
          dark: "#0a0a0a",
          gray: "#141414",
          muted: "#a0a0a0",
          light: "#ffffff",
          flame: "#f37021",
          gold: "#ffba08",
          accent: "#f37021",
          accentDim: "#c45a1a",
          navy: "#2b4162",
          forest: "#4a5d4e",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.35em",
      },
      boxShadow: {
        flame: "0 0 40px rgba(243, 112, 33, 0.35)",
        "flame-lg":
          "0 0 60px rgba(243, 112, 33, 0.3), 0 0 100px rgba(255, 186, 8, 0.12)",
        gold: "0 0 30px rgba(255, 186, 8, 0.25)",
      },
      backgroundImage: {
        "flame-radial":
          "radial-gradient(ellipse at center, rgba(243,112,33,0.15) 0%, transparent 70%)",
        "flame-gradient":
          "linear-gradient(135deg, #f37021 0%, #ffba08 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        shimmer: "shimmer 2s infinite",
        flicker: "flicker 3s ease-in-out infinite",
        "pulse-flame": "pulseFlame 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
          "75%": { opacity: "0.95" },
        },
        pulseFlame: {
          "0%, 100%": {
            boxShadow:
              "0 0 40px rgba(243, 112, 33, 0.2), 0 0 80px rgba(255, 186, 8, 0.08)",
          },
          "50%": {
            boxShadow:
              "0 0 60px rgba(243, 112, 33, 0.4), 0 0 100px rgba(255, 186, 8, 0.15)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
