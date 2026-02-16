import { BottomNav } from "@/components/layout/BottomNav";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Yoga con Lógica y Alma",
  description: "Organizamos el bienestar, ritualizamos la estructura.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-bg text-text">
        <Providers>
          <div className="min-h-dvh flex flex-col">
            <Header />
            {/* Removemos el padding del container para que la landing tenga full width */}
            <main className="flex-1">{children}</main>
            <BottomNav />
          </div>
        </Providers>
      </body>
    </html>
  );
}
