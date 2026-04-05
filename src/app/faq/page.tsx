import { FAQ } from "@/components/home/FAQ";
import { Footer } from "@/components/home/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas frecuentes — Yoga con Lógica y Alma",
  description:
    "Todo lo que necesitas saber sobre el método, los programas y las clases.",
};

export default function FAQPage() {
  return (
    <div className="min-h-0">
      <div className="pt-8 pb-4">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
