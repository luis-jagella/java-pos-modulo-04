import type { MouseEventHandler, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg border border-blue-600 bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-900"
    >
      {children}
    </button>
  );
}
