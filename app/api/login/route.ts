"use server";
import { NextResponse } from "next/server";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";

export async function POST(request: Request) {
  const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  const prismaclient = new PrismaClient({ adapter });

  const body = await request.json();
  if (!body.email.trim() || !body.password.trim()) {
    return NextResponse.json(
      { message: "Credenciales inválidas" },
      { status: 401 },
    );
  }

  try {
    const password = await bcrypt.hash(body.password, 10);
    console.log(password);
    const response = await prismaclient.user.findFirst({
      where: {
        email: body.email,
      },
    });
    if (!response) {
      return NextResponse.json(
        { message: "Credenciales inválidas" },
        { status: 401 },
      );
    }
    const passwordMatch = await bcrypt.compare(
      body.password,
      response.password,
    );
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Credenciales inválidas" },
        { status: 401 },
      );
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ email: response.email })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("48h")
      .sign(secret);

    const response_token = NextResponse.json(
      { message: "Inicio de sesión exitoso" },
      { status: 200 },
    );
    response_token.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 2,
      path: "/",
    });
    return response_token;
  } catch (error) {
    console.error("Prisma error:", error);
    return NextResponse.json(
      { message: "Error interno del servidor" },
      { status: 500 },
    );
  } finally {
    await pool.end();
  }
}
