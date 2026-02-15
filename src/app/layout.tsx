import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import { Header } from "@/components/layout/Header";
import { BottomNav } from "@/components/layout/BottomNav";

export const metadata: Metadata = {
  title: "Yoga con Lógica y Alma",
  description: "Organizamos el bienestar, ritualizamos la estructura.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-bg text-text">
        <Providers>
          <div className="min-h-dvh flex flex-col">
            <Header />
            <main className="container-yla flex-1 py-8">{children}</main>
            <BottomNav />
          </div>
        </Providers>
      </body>
    </html>
  );
}
