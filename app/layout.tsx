import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mural da turma",
  description: "Oficina de introdução ao Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-2xl items-center gap-6 px-6 py-4">
            <Link href="/" className="text-lg font-bold">
              Mural da turma
            </Link>
            <Link href="/sobre" className="text-sm text-slate-600 hover:text-slate-900">
              Sobre
            </Link>
          </div>
        </header>

        <main className="mx-auto max-w-2xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
