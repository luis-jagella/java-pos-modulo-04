"use client";

import { FormEvent, useState } from "react";

type FormTasksProps = {
  onCreateTask: (title: string) => void;
};

export function FormTasks({ onCreateTask }: FormTasksProps) {
  const [task, setTask] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const title = task.trim();
    if (!title) return;

    onCreateTask(title);
    setTask("");
  }

  return (
    <form className="relative" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="task">Título da task</label>
      <input
        id="task"
        name="task"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Informe o título da task"
        className="w-full rounded-lg border border-slate-300 bg-white py-2 pl-3 pr-10 text-slate-950 shadow-lg outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
      />
      <button
        type="submit"
        aria-label="Cadastrar task"
        className="absolute top-0 right-0 bottom-0 rounded-r-lg bg-blue-600 px-3 font-bold text-white transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
    </form>
  );
}
