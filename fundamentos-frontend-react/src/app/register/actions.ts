"use server";

export type RegisterActionState = {
  status: "idle" | "error" | "success";
  message: string;
};

export const initialRegisterState: RegisterActionState = {
  status: "idle",
  message: "",
};

export async function registerAction(
  _previousState: RegisterActionState,
  formData: FormData,
): Promise<RegisterActionState> {
  const username = String(formData.get("username") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!username || !email || !password) {
    return { status: "error", message: "Preencha todos os campos para continuar." };
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return { status: "error", message: "Informe um e-mail válido." };
  }

  if (password.length < 6) {
    return { status: "error", message: "A senha deve ter pelo menos 6 caracteres." };
  }

  // A integração será feita quando uma API compatível estiver disponível.
  return { status: "success", message: `Cadastro validado para ${username}.` };
}
