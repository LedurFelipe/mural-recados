import type { Recado } from "./types";

// "Banco de dados" da oficina: um array na memória do servidor.
// Some quando você reinicia o `npm run dev` - e tudo bem, é só uma oficina.
let recados: Recado[] = [
  { id: 1, texto: "Boa sorte na prova de amanhã!", autor: "Ana", data: "02/08" },
  { id: 2, texto: "Alguém tem o link do repositório?", autor: "Léo", data: "02/08" },
  { id: 3, texto: "Consegui rodar aqui, valeu!", autor: "Marina", data: "02/08" },
];

let proximoId = 4;

export function listarRecados(): Recado[] {
  return recados;
}

export function buscarRecado(id: number): Recado | undefined {
  return recados.find((recado) => recado.id === id);
}

export function adicionarRecado(texto: string, autor: string): void {
  const hoje = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });

  recados = [{ id: proximoId++, texto, autor, data: hoje }, ...recados];
}

export function removerRecado(id: number): void {
  recados = recados.filter((recado) => recado.id !== id);
}
