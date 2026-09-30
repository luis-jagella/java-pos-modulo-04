"use server";

import { hasMinimumPasswordLength, isValidEmail } from "@/lib/validation";

export type LoginActionState = { status: "idle" | "error" | "success"; message: string };
export const initialLoginState: LoginActionState = { status: "idle", message: "" };

export async function loginAction(_previousState: LoginActionState, formData: FormData): Promise<LoginActionState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) return { status: "error", message: "Preencha e-mail e senha para continuar." };
  if (!isValidEmail(email)) return { status: "error", message: "Informe um e-mail válido." };
  if (!hasMinimumPasswordLength(password)) return { status: "error", message: "A senha deve ter pelo menos 6 caracteres." };

  return { status: "success", message: `Login validado para ${email}.` };
}
