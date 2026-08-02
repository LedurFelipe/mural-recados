import Link from "next/link";

export default function CardRecado({
  id,
  texto,
  autor,
  data,
}: {
  id: number;
  texto: string;
  autor: string;
  data: string;
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-slate-900">{texto}</p>

      <div className="mt-2 flex items-center justify-between">
        <p className="text-sm text-slate-500">
          {autor} · {data}
        </p>
        <Link
          href={`/recado/${id}`}
          className="text-sm text-emerald-600 hover:text-emerald-700"
        >
          ver recado
        </Link>
      </div>
    </article>
  );
}
