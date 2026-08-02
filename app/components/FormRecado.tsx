import { criarRecado } from "@/lib/actions";

export default function FormRecado() {
  return (
    <form
      action={criarRecado}
      className="rounded-lg border border-slate-200 bg-white p-4"
    >
      <textarea
        name="texto"
        rows={2}
        required
        placeholder="escreva seu recado..."
        className="w-full resize-none rounded-md border border-slate-200 p-3 text-sm outline-none focus:border-emerald-500"
      />

      <div className="mt-3 flex items-center gap-3">
        <input
          type="text"
          name="autor"
          placeholder="seu nome"
          className="flex-1 rounded-md border border-slate-200 p-2 text-sm outline-none focus:border-emerald-500"
        />
        <button
          type="submit"
          className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-600"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
