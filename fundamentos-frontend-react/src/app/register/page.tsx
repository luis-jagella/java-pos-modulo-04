"use client";

import { useActionState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { initialRegisterState, registerAction } from "./actions";

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(registerAction, initialRegisterState);

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="text-sm font-semibold text-blue-700">← Voltar</Link>
        <section className="mt-6 grid gap-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Projeto guiado</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-950">Cadastro</h1>
          </div>

          <form className="grid gap-4" noValidate action={formAction}>
            <Input id="username" name="username" label="Usuário" autoComplete="username" />
            <Input id="email" name="email" label="E-mail" type="email" autoComplete="email" />
            <Input id="password" name="password" label="Senha" type="password" autoComplete="new-password" />
            <Button type="submit" disabled={isPending}>{isPending ? "Validando..." : "Cadastrar"}</Button>
          </form>

          {state.status === "error" && <p className="rounded-lg border border-red-800 bg-red-700 p-3 text-sm font-bold text-white" role="alert">{state.message}</p>}
          {state.status === "success" && <p className="rounded-lg bg-blue-50 p-3 text-sm text-blue-950" role="status">{state.message}</p>}

          <p className="text-center text-sm text-slate-600">Já tem cadastro? <Link href="/login" className="font-semibold text-blue-700 underline">Entrar</Link></p>
        </section>
      </div>
    </main>
  );
}
