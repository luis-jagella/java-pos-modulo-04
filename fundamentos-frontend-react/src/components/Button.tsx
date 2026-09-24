import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 font-bold text-white transition hover:bg-blue-900 disabled:cursor-not-allowed disabled:opacity-60 ${className}`}
    >
      {children}
    </button>
  );
}
