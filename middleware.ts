import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ACCESS_COOKIE = "birthday30_access";
const ACCESS_VALUE = "granted";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api/unlock") ||
    pathname.startsWith("/BackgroundTrees") ||
    pathname.startsWith("/gifs") ||
    pathname.startsWith("/hero-slideshow") ||
    pathname.startsWith("/hikes") ||
    pathname.startsWith("/slideshow") ||
    pathname.startsWith("/videos") ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const hasAccess = request.cookies.get(ACCESS_COOKIE)?.value === ACCESS_VALUE;

  if (pathname === "/login") {
    if (hasAccess) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.next();
  }

  if (hasAccess) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("from", pathname);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!.*\\..*).*)", "/"]
};
