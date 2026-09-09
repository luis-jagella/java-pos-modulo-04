"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";

export function CounterPractice() {
  const [count, setCount] = useState(0);
  const [note, setNote] = useState("");

  useEffect(() => {
    document.title = `Contador: ${count}`;
  }, [count]);

  return (
    <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Prática da Aula 04</p>
      <h2 className="mt-2 text-2xl font-bold">Eventos e estado</h2>
      <p className="mt-2 text-slate-600">O contador usa atualizadores funcionais; o campo é um input controlado.</p>

      <p className="mt-6 text-4xl font-bold text-slate-950" aria-live="polite">{count}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Button onClick={() => setCount((current) => current - 3)}>-3</Button>
        <Button onClick={() => setCount((current) => current - 1)}>-1</Button>
        <Button onClick={() => setCount((current) => current + 1)}>+1</Button>
        <Button onClick={() => setCount((current) => current + 3)}>+3</Button>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="study-note">Anotação rápida</label>
        <input
          id="study-note"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="Digite uma anotação"
          className="min-w-0 flex-1 rounded-lg border border-slate-400 px-4 py-2 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
        />
        <Button onClick={() => setNote("")}>Limpar</Button>
      </div>
    </section>
  );
}
