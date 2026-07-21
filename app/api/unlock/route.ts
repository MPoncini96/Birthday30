import { NextResponse } from "next/server";

const ACCESS_COOKIE = "birthday30_access";
const ACCESS_VALUE = "granted";
const PASSWORD = "Sunview";

export async function POST(request: Request) {
  const formData = await request.formData();
  const password = String(formData.get("password") ?? "");
  const from = String(formData.get("from") ?? "/");
  const redirectPath = from.startsWith("/") ? from : "/";

  if (password !== PASSWORD) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("error", "1");

    if (redirectPath !== "/") {
      loginUrl.searchParams.set("from", redirectPath);
    }

    return NextResponse.redirect(loginUrl, { status: 303 });
  }

  const response = NextResponse.redirect(new URL(redirectPath, request.url), { status: 303 });

  response.cookies.set({
    name: ACCESS_COOKIE,
    value: ACCESS_VALUE,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30
  });

  return response;
}
