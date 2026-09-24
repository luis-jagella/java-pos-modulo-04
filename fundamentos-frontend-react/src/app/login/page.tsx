"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage(`Formulário enviado para ${email}. A integração com autenticação virá nas próximas aulas.`);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="text-sm font-semibold text-blue-700">← Voltar</Link>
        <section className="mt-6 grid gap-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Aula 09</p>
            <h1 className="mt-2 text-5xl font-bold tracking-tight text-slate-950">Login</h1>
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-1 text-sm font-medium text-slate-700" htmlFor="email">
              E-mail
              <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required className="w-full rounded border border-gray-900 p-2" placeholder="voce@exemplo.com" />
            </label>
            <label className="grid gap-1 text-sm font-medium text-slate-700" htmlFor="password">
              Senha
              <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required className="w-full rounded border border-gray-900 p-2" placeholder="••••••••" />
            </label>
            <Button type="submit">Entrar</Button>
          </form>

          {message && <p className="rounded-lg bg-blue-50 p-3 text-sm text-blue-950" role="status">{message}</p>}
        </section>
      </div>
    </main>
  );
}
