import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#F5F0E8",
        "parchment-dark": "#E8E0D0",
        "parchment-light": "#FAF7F2",
        "kansho-black": "#1A1A1A",
        "kansho-red": "#C41E3A",
        "kansho-red-dark": "#8B0000",
        "kansho-red-glow": "#FF2D55",
        "kansho-red-subtle": "#D4546A",
        "frame-light": "#C8C0B0",
        "frame-mid": "#A09888",
        "frame-dark": "#706860",
        "frame-shadow": "#504840",
        terminal: "#2A2420",
      },
      fontFamily: {
        ocr: ['"OCR A Std"', '"OCR-A"', '"OCR A Extended"', "monospace"],
        display: ['"Courier New"', '"Courier"', "monospace"],
      },
      animation: {
        scanline: "scanline 8s linear infinite",
        flicker: "flicker 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "border-pulse": "border-pulse 4s ease-in-out infinite",
        glitch: "glitch 0.3s ease-in-out",
        "circuit-trace": "circuit-trace 15s linear infinite",
      },
      keyframes: {
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.97" },
          "52%": { opacity: "1" },
          "54%": { opacity: "0.95" },
          "56%": { opacity: "1" },
        },
        "glow-pulse": {
          "0%, 100%": { textShadow: "0 0 4px rgba(196, 30, 58, 0.3)" },
          "50%": { textShadow: "0 0 12px rgba(196, 30, 58, 0.6), 0 0 24px rgba(196, 30, 58, 0.2)" },
        },
        "border-pulse": {
          "0%, 100%": { borderColor: "rgba(196, 30, 58, 0.3)" },
          "50%": { borderColor: "rgba(196, 30, 58, 0.6)" },
        },
        glitch: {
          "0%": { transform: "translate(0)", filter: "none" },
          "20%": { transform: "translate(-2px, 2px)", filter: "hue-rotate(90deg)" },
          "40%": { transform: "translate(2px, -2px)", filter: "hue-rotate(-90deg) saturate(2)" },
          "60%": { transform: "translate(-1px, -1px)", filter: "hue-rotate(45deg)" },
          "80%": { transform: "translate(1px, 1px)", filter: "none" },
          "100%": { transform: "translate(0)", filter: "none" },
        },
        "circuit-trace": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
