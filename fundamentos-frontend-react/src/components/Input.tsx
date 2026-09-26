import type { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
};

export function Input({ id, label, className = "", ...props }: InputProps) {
  return (
    <fieldset className="grid gap-2">
      <label htmlFor={id} className="text-sm font-semibold text-slate-800">{label}</label>
      <input
        id={id}
        className={`rounded-lg border border-slate-400 px-4 py-3 text-slate-900 shadow-sm outline-none transition hover:border-slate-900 focus:border-blue-700 focus:ring-2 focus:ring-blue-200 ${className}`}
        {...props}
      />
    </fieldset>
  );
}
