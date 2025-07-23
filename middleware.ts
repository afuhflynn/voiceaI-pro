import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";
import { auth } from "./lib/auth";
import { headers } from "next/headers";
import { getServerSession } from "./lib/actions/get-server-session";

export async function middleware(req: NextRequest) {
  const isValidSession = await getServerSession(req);
  const pathname = req.nextUrl.pathname;

  if (isValidSession && (pathname === "/sign-up" || pathname === "/sign-in")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Ensure that user is signed in before accessing home page
  if (!isValidSession && pathname === "/") {
    return NextResponse.redirect(new URL("/sign-in", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|Logo.png|sitemap.xml|robots.txt).*)",
  ],
};
