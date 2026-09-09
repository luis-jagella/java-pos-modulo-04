"use client";

import { useGlobalCounter } from "@/context/GlobalCounterContext";

export function GlobalCounterValue() {
  const { count } = useGlobalCounter();

  return (
    <aside className="mt-6 rounded-xl border border-blue-200 bg-blue-50 p-4 text-blue-950">
      <p className="text-sm font-semibold">Segundo consumidor do Context</p>
      <p className="mt-1 text-sm">Este valor vem do mesmo estado global: <strong>{count}</strong>.</p>
    </aside>
  );
}
