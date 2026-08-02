# Mural da turma

Projeto da **Oficina de introdução ao desenvolvimento web com Next.js**
William Pilger · Felipe Ledur

Vamos construir um mural de recados: uma lista, uma página de detalhe e um
formulário que grava de verdade — usando Next.js 16, TypeScript e Tailwind.

---

## Antes da oficina

Faça isso **em casa**, não na sala. Assim a gente não perde 15 minutos com download.

| Você precisa de | Como conferir |
| --- | --- |
| Node.js 20.9 ou superior | `node -v` |
| Git | `git --version` |
| VS Code | — |

Depois, clone e instale:

```bash
git clone https://github.com/[usuario]/mural-recados
cd mural-recados
npm install
npm run dev
```

Abra <http://localhost:3000>. Se aparecer "Mural da turma", está tudo certo.

> **Clone, não baixe o ZIP.** O ZIP funciona, mas vem sem o histórico do Git —
> e aí o comando de resgate abaixo não existe pra você.

---

## Se você se perder durante a oficina

Cada bloco tem uma branch com o código pronto até aquele ponto. Se travar,
guarde o que você fez e pule para o trilho:

```bash
git stash          # guarda suas alterações
git checkout etapa-2-componentes
```

| Branch | Estado do projeto |
| --- | --- |
| `main` | ponto de partida — é onde a oficina começa |
| `etapa-1-rotas` | página `/sobre`, navegação e a lista de recados na tela |
| `etapa-2-componentes` | o componente `CardRecado` e o `.map()` |
| `etapa-3-rota-dinamica` | a página `/recado/[id]` |
| `etapa-4-server-actions` | o formulário que grava |
| `final` | tudo, incluindo o desafio resolvido |

Para voltar ao seu código: `git checkout -` e depois `git stash pop`.

---

## O que tem aqui

```
mural-recados/
├─ app/
│  ├─ layout.tsx        a moldura: cabeçalho e navegação
│  ├─ page.tsx          a página inicial
│  └─ globals.css       Tailwind
├─ lib/
│  ├─ types.ts          o tipo Recado (pronto)
│  └─ dados.ts          o "banco" em memória (pronto)
└─ package.json
```

`lib/types.ts` e `lib/dados.ts` já vêm prontos de propósito: são código de apoio,
não o assunto da oficina. Tudo que estiver em `app/` a gente escreve junto.

---

## Detalhes que valem saber

**Os dados somem quando o servidor reinicia.** O mural guarda os recados num
array na memória do processo, então salvar um arquivo (e disparar o hot reload)
pode zerar a lista. Num projeto de verdade isso seria um banco de dados.

**`params` é uma Promise.** No Next.js 16, páginas com rota dinâmica precisam de
`await params`. É estranho na primeira vez e você vai ver isso na `etapa-3`.

**Nenhum arquivo aqui usa `"use client"`.** Dá pra fazer um CRUD inteiro só com
Server Components e Server Actions — e essa é meio que a graça.

---

## Depois da oficina

O código é seu. Faça um fork, quebre à vontade, use como base pra outra coisa.

Dúvida? Chama a gente.
