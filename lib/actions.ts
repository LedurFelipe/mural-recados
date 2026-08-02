"use server";

import { revalidatePath } from "next/cache";
import { adicionarRecado, removerRecado } from "./dados";

// Uma Server Action: voce chama do formulario, mas ela roda no servidor.
// Sem criar rota de API, sem fetch, sem JSON.
export async function criarRecado(formData: FormData) {
  // formData.get() devolve string | File | null,
  // por isso o `as string`. E o TypeScript sendo chato — aceite e siga.
  const texto = (formData.get("texto") as string)?.trim();
  const autor = (formData.get("autor") as string)?.trim();

  if (!texto) {
    return;
  }

  adicionarRecado(texto, autor || "Anônimo");

  // Sem isso o recado e salvo, mas a tela continua mostrando a lista antiga.
  revalidatePath("/");
}

// DESAFIO RESOLVIDO
// Mesma ideia da funcao acima: roda no servidor e avisa o Next no final.
export async function excluirRecado(id: number) {
  removerRecado(id);

  revalidatePath("/");
}
