import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  const hasRole = req.cookies.has("role");

  const url = req.nextUrl.clone();

  if (!hasRole) {
    if (req.nextUrl.pathname === "/login") {
      return NextResponse.next();
    }

    url.pathname = "/login";
    return NextResponse.redirect(new NextURL('/login',req.nextUrl));
  }

  if (hasRole && req.nextUrl.pathname === "/login") {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}