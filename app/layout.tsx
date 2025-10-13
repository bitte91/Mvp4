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
        <main className="relative pb-16">{children}</main>
        <BottomNav />
      </body>
    </html>
  );
}
