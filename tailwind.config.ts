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
          DEFAULT: "#1B4965", // Azul Petróleo Principal
          light: "#2A6F97",
          dark: "#0F2A3B",
          foreground: "#FFFFFF", // Branco para textos sobre primário
        },
        secondary: {
          DEFAULT: "#65A30D", // Verde Limão
          light: "#84CC16",
          dark: "#4D7C0F",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#FFD166", // Amarelo
          light: "#FFDD80",
          dark: "#FFC54D",
          foreground: "#1B4965", // Azul Petróleo para textos sobre accent
        },
        neutral: {
          100: "#F7F7F7", // Background Principal
          200: "#E5E5E5", // Background Secundário
          300: "#CCCCCC", // Bordas
          400: "#B3B3B3", // Elementos desabilitados
          500: "#999999", // Texto secundário
          600: "#808080",
          700: "#666666",
          800: "#4D4D4D",
          900: "#333333", // Texto Principal
        },
        success: {
          DEFAULT: "#22C55E",
          foreground: "#FFFFFF",
        },
        danger: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config