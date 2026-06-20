/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Theme-adaptive semantic colors (driven by CSS custom properties) ──
        // All RGB triplets are defined in index.css under :root (dark) and .light
        background: {
          primary: "rgb(var(--c-bg-primary)   / <alpha-value>)",
          secondary: "rgb(var(--c-bg-secondary) / <alpha-value>)",
          tertiary: "rgb(var(--c-bg-tertiary)  / <alpha-value>)",
          card: "rgb(var(--c-bg-card)      / <alpha-value>)",
        },
        text: {
          primary: "rgb(var(--c-text-primary)   / <alpha-value>)",
          secondary: "rgb(var(--c-text-secondary) / <alpha-value>)",
          // Use text-text-heading for h1/h2/h3/h4 so they invert in light mode
          heading: "rgb(var(--c-text-heading)   / <alpha-value>)",
          cyan: "rgb(var(--c-text-cyan)      / <alpha-value>)",
        },
        border: {
          glow: "rgb(var(--c-border-glow)        / <alpha-value>)",
          purpleGlow: "rgb(var(--c-border-purple-glow) / <alpha-value>)",
          muted: "rgb(var(--c-border-muted)      / <alpha-value>)",
        },
        // ── Fixed accent colors (identical in both themes) ──
        accent: {
          blue: "#2563EB",
          cyan: "#06B6D4",
          purple: "#7C3AED",
          magenta: "#D946EF",
        },
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
        arabic: ["Cairo", "Tajawal", "sans-serif"],
      },
      boxShadow: {
        "glow-blue": "0 0 15px rgba(37, 99, 235, 0.35)",
        "glow-cyan": "0 0 15px rgba(6, 182, 212, 0.35)",
        "glow-purple": "0 0 15px rgba(124, 58, 237, 0.35)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow 3s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(37, 99, 235, 0.2)" },
          "100%": { boxShadow: "0 0 20px rgba(37, 99, 235, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
