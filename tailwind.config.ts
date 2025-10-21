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
          DEFAULT: "#2563EB",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#10B981",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F59E0B",
          foreground: "#FFFFFF",
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
          DEFAULT: "#F59E0B",
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