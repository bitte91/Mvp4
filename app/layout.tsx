import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css';
import { BottomNav } from "@/components/layout/BottomNav";
import { cn } from "@/lib/utils";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontDisplay = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Conecta Bairro - Sua vizinhança conectada",
  description: "Plataforma comunitária para conectar vizinhos",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#1B4965", // Atualizado para a nova cor primária
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontDisplay.variable)}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 top-0 left-0 bg-white text-black p-4">
          Pular para o conteúdo principal
        </a>
        <main id="main-content" className="relative pb-16">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
