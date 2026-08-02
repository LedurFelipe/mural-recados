import CardRecado from "@/app/components/CardRecado";
import { listarRecados } from "@/lib/dados";

export default function Home() {
  const recados = listarRecados();

  return (
    <div>
      <h1 className="text-2xl font-bold">Recados</h1>

      <div className="mt-6 space-y-3">
        {recados.map((recado) => (
          <CardRecado
            key={recado.id}
            texto={recado.texto}
            autor={recado.autor}
            data={recado.data}
          />
        ))}
      </div>
    </div>
  );
}
