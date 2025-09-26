import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3B82F6", // Alterado de #2563eb para #3B82F6 (blue-500)
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#F97316", // Adicionado #F97316 (orange-500)
          foreground: "#ffffff",
        },
        success: {
          DEFAULT: "#22C55E", // Adicionado #22C55E (green-500)
          foreground: "#ffffff",
        },
        warning: {
          DEFAULT: "#F97316", // orange-500 para alertas
          foreground: "#ffffff",
        },
        danger: {
          DEFAULT: "#EF4444", // Adicionado #EF4444 (red-500)
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#F8FAFC", // Alterado para slate-50
          foreground: "#64748B", // slate-500
        },
        accent: {
          DEFAULT: "#f1f5f9",
          foreground: "#0F172A", // slate-900
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config