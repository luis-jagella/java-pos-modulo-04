"use client";

import { type FormEvent, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!username || !email || !password) {
      setError("Preencha todos os campos para continuar.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Informe um e-mail válido.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setMessage(`Cadastro validado para ${username}. A integração com a API será adicionada nas próximas aulas.`);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="text-sm font-semibold text-blue-700">← Voltar</Link>
        <section className="mt-6 grid gap-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Projeto guiado</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-950">Cadastro</h1>
          </div>

          <form className="grid gap-4" noValidate onSubmit={handleSubmit}>
            <Input id="username" label="Usuário" value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" />
            <Input id="email" label="E-mail" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" />
            <Input id="password" label="Senha" type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="new-password" />
            <Button type="submit">Cadastrar</Button>
          </form>

          {error && <p className="rounded-lg border border-red-800 bg-red-700 p-3 text-sm font-bold text-white" role="alert">{error}</p>}
          {message && <p className="rounded-lg bg-blue-50 p-3 text-sm text-blue-950" role="status">{message}</p>}

          <p className="text-center text-sm text-slate-600">Já tem cadastro? <Link href="/login" className="font-semibold text-blue-700 underline">Entrar</Link></p>
        </section>
      </div>
    </main>
  );
}
