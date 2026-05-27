"use server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const cookieStore = await cookies();
  const cookie = cookieStore.get("token")?.value;
  console.log(cookie);
  if (!cookie) {
    return new Response("Unauthorized", { status: 401 });
  }
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(cookie, secret);

    const project = await prisma.project.create({
      data: {
        description: body.description,
        title: body.title,
        url: body.url,
      },
    });
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    return new Response("Unauthorized", { status: 401 });
  }
}
