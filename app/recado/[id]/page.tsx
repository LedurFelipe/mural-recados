import Link from "next/link";
import { notFound } from "next/navigation";
import { buscarRecado } from "@/lib/dados";

export default async function PaginaRecado({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // No Next.js 16 params e uma Promise: precisa de await.
  const { id } = await params;

  const recado = buscarRecado(Number(id));

  if (!recado) {
    notFound();
  }

  return (
    <div>
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-900">
        &larr; voltar para o mural
      </Link>

      <article className="mt-4 rounded-lg border border-slate-200 bg-white p-6">
        <p className="text-xl text-slate-900">{recado.texto}</p>
        <p className="mt-4 text-sm text-slate-500">
          {recado.autor} · {recado.data}
        </p>
      </article>
    </div>
  );
}
