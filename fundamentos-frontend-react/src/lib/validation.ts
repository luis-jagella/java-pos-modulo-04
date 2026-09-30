export function isValidEmail(email: string) {
  return /^\S+@\S+\.\S+$/.test(email);
}

export function hasMinimumPasswordLength(password: string) {
  return password.length >= 6;
}
