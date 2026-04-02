import { redirect } from "next/navigation";

// /tienda → vuelve al landing en la sección tienda
export default function TiendaPage() {
  redirect("/#tienda");
}
