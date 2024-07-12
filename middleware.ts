import { NextRequest, NextResponse } from "next/server";
import hasRoleMiddleware from "@/lib/middlewares/role";

export function middleware(req: NextRequest) {
  const result = hasRoleMiddleware(req);

  if (result) {
    return result;
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
