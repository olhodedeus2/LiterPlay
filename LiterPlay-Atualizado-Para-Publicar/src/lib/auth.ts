import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { db } from "./db";

function getSecret() {
  const value = process.env.AUTH_SECRET;
  if (!value || value.length < 32) {
    throw new Error("AUTH_SECRET precisa estar configurada com pelo menos 32 caracteres.");
  }
  return new TextEncoder().encode(value);
}

export async function createSession(userId: number) {
  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getSecret());

  (await cookies()).set("literplay_session", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function getUser() {
  const token = (await cookies()).get("literplay_session")?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret());
    const id = Number(payload.userId);
    if (!Number.isInteger(id) || id <= 0) return null;
    return await db.user.findUnique({
      where: { id },
      select: { id: true, name: true, email: true, role: true, className: true, xp: true },
    });
  } catch {
    return null;
  }
}

export async function clearSession() {
  (await cookies()).set("literplay_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}
