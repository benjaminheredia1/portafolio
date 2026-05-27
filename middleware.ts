import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get("token");

  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/proyectos", request.url));
  }
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    await jwtVerify(cookie.value, secret);

    return NextResponse.next();
  } catch (error) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("token");

    return response;
  }
}

export const config = {
  matcher: ["/proyectos/:path*", "/api/proyectos/:path*", "/login"],
};
