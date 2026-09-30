"use server";

import { hasMinimumPasswordLength, isValidEmail } from "@/lib/validation";

export type RegisterActionState = { status: "idle" | "error" | "success"; message: string };
export const initialRegisterState: RegisterActionState = { status: "idle", message: "" };

export async function registerAction(_previousState: RegisterActionState, formData: FormData): Promise<RegisterActionState> {
  const username = String(formData.get("username") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!username || !email || !password) return { status: "error", message: "Preencha todos os campos para continuar." };
  if (!isValidEmail(email)) return { status: "error", message: "Informe um e-mail válido." };
  if (!hasMinimumPasswordLength(password)) return { status: "error", message: "A senha deve ter pelo menos 6 caracteres." };

  return { status: "success", message: `Cadastro validado para ${username}.` };
}
