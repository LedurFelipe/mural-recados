import { listarRecados } from "@/lib/dados";

export default function Home() {
  const recados = listarRecados();

  return (
    <div>
      <h1 className="text-2xl font-bold">Recados</h1>

      <div className="mt-6 space-y-3">
        {/* Repetido de propósito: no próximo bloco a gente extrai um componente. */}
        <article className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-slate-900">{recados[0].texto}</p>
          <p className="mt-2 text-sm text-slate-500">
            {recados[0].autor} · {recados[0].data}
          </p>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-slate-900">{recados[1].texto}</p>
          <p className="mt-2 text-sm text-slate-500">
            {recados[1].autor} · {recados[1].data}
          </p>
        </article>

        <article className="rounded-lg border border-slate-200 bg-white p-4">
          <p className="text-slate-900">{recados[2].texto}</p>
          <p className="mt-2 text-sm text-slate-500">
            {recados[2].autor} · {recados[2].data}
          </p>
        </article>
      </div>
    </div>
  );
}
