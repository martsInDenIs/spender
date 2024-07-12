import { NextURL } from "next/dist/server/web/next-url";
import { NextRequest, NextResponse } from "next/server";

export default function hasRoleMiddleware(req: NextRequest) {
  const hasRole = req.cookies.has("role");

  const url = req.nextUrl.clone();

  if (!hasRole) {
    if (req.nextUrl.pathname === "/login") {
      return;
    }

    url.pathname = "/login";
    return NextResponse.redirect(new NextURL("/login", req.nextUrl));
  }

  if (hasRole && req.nextUrl.pathname === "/login") {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  return;
}
