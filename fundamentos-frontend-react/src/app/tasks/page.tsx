"use client";

import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import { FormTasks } from "@/components/forms/FormTasks";

type TaskPreview = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TasksPage() {
  const [tasks, setTasks] = useState<TaskPreview[]>([]);

  function createTask(title: string) {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), title, completed: false },
    ]);
  }

  function completeTask(id: number) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task,
      ),
    );
  }

  function deleteTask(id: number) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <section className="mx-auto w-full max-w-xl">
        <Link href="/" className="text-sm font-semibold text-blue-700">← Voltar</Link>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Projeto guiado · Aulas 18 e 19</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Tasks</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Prévia local da lista. A próxima integração trocará esse estado pelas chamadas autenticadas à API.
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
                  <li
                    key={task.id}
                    className={classNames(
                      "grid grid-cols-[auto_1fr_auto] items-center gap-2 rounded-lg border border-slate-200 px-4 py-3 text-sm transition",
                      {
                        "opacity-50": task.completed,
                        "hover:border-blue-300": !task.completed,
                      },
                    )}
                  >
                    <input
                      id={`task-${task.id}`}
                      name="completed"
                      type="checkbox"
                      checked={task.completed}
                      disabled={task.completed}
                      onChange={() => completeTask(task.id)}
                      aria-label={`Concluir task: ${task.title}`}
                      className="size-4 accent-blue-600 disabled:cursor-default"
                    />
                    <label
                      htmlFor={`task-${task.id}`}
                      className={classNames("cursor-default", {
                        "line-through": task.completed,
                      })}
                    >
                      {task.title}
                    </label>
                    {!task.completed && (
                      <button
                        type="button"
                        onClick={() => deleteTask(task.id)}
                        aria-label={`Excluir task: ${task.title}`}
                        className="group cursor-pointer rounded p-1 focus:outline-none focus:ring-2 focus:ring-red-300"
                      >
                        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                          <path className="stroke-red-700 transition group-hover:stroke-red-500" d="M6 6l12 12M18 6 6 18" />
                        </svg>
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
