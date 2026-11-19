"use server";
import { db } from "@/lib/db";
import { createSession } from "@/lib/auth";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function register(form: FormData) {
  const name = String(form.get("name") || "").trim().replace(/\\s+/g, " ");
  const email = String(form.get("email") || "").trim().toLowerCase();
  const password = String(form.get("password") || "");
  const className = String(form.get("className") || "").trim().slice(0, 60);

  const validEmail = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email);
  if (name.length < 2 || name.length > 100 || !validEmail || email.length > 190 || password.length < 8 || password.length > 72) {
    redirect("/cadastro?erro=dados");
  }
  if (await db.user.findUnique({ where: { email } })) redirect("/cadastro?erro=email");

  const passwordHash = await bcrypt.hash(password, 12);
  const user = await db.user.create({
    data: { name, email, passwordHash, className: className || null },
  });
  await createSession(user.id);
  redirect("/painel");
}
