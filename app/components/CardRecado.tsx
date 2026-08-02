export default function CardRecado({
  texto,
  autor,
  data,
}: {
  texto: string;
  autor: string;
  data: string;
}) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-slate-900">{texto}</p>
      <p className="mt-2 text-sm text-slate-500">
        {autor} · {data}
      </p>
    </article>
  );
}
