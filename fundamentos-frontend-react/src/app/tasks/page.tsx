"use client";

import Link from "next/link";
import { useState } from "react";
import { FormTasks } from "@/components/forms/FormTasks";

type TaskPreview = {
  id: number;
  title: string;
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<TaskPreview[]>([]);

  function createTask(title: string) {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), title },
    ]);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <section className="mx-auto w-full max-w-xl">
        <Link href="/" className="text-sm font-semibold text-blue-700">← Voltar</Link>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Projeto guiado · Aulas 18 e 19</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Tasks</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Primeira versão visual do formulário. As tasks abaixo são uma prévia local; a próxima integração trocará esse estado pelas chamadas autenticadas à API.
          </p>

          <div className="mt-6">
            <FormTasks onCreateTask={createTask} />
          </div>

          <section className="mt-8" aria-labelledby="tasks-title">
            <h2 id="tasks-title" className="text-lg font-bold">Tasks adicionadas nesta prévia</h2>
            {tasks.length === 0 ? (
              <p className="mt-3 rounded-lg bg-slate-100 p-4 text-sm text-slate-600">Cadastre uma task para testar o formulário.</p>
            ) : (
              <ul className="mt-3 grid gap-2">
                {tasks.map((task) => (
                  <li key={task.id} className="rounded-lg border border-slate-200 px-4 py-3 text-sm">{task.title}</li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
