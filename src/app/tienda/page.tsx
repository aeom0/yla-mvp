import { redirect } from "next/navigation";

/** Redirección permanente al ancla de tienda en el landing (catálogo en Payhip). */
export default function TiendaPage() {
  redirect("/#tienda");
}
