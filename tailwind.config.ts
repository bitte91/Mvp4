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
        background: "#F7F7F7", // cinza-claro neutro
        foreground: "#1B4965", // azul-petróleo para texto principal
        primary: {
          DEFAULT: "#1B4965", // azul-petróleo
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#A2D2B8", // verde-claro
          foreground: "#1B4965", // azul-petróleo para texto
        },
        accent: {
          DEFAULT: "#FFD166", // amarelo destaque
          foreground: "#1B4965", // azul-petróleo para texto
        },
        muted: {
          DEFAULT: "#E2E8F0", // um cinza um pouco mais escuro para fundos suaves
          foreground: "#64748B",
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