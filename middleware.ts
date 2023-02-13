import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const session: any = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const requestedPage = req.nextUrl.pathname;

  if (!session) {
    switch (requestedPage) {
      case "/api/admin/dashboard":
      case "/api/admin/users":
        return new Response(JSON.stringify({ message: "No autorizado" }), {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        });
      default:
        const url = req.nextUrl.clone();
        url.pathname = `/auth/login`;
        url.search = `p=${requestedPage}`;
        return NextResponse.redirect(url);
    }
  }

  if (requestedPage === "/admin" || requestedPage === "/admin/users") {
    const { origin } = req.nextUrl;

    const validRoles = ["admin", "super-user", "SEO"];
    if (!validRoles.some((element) => session.user.role.includes(element))) {
      return NextResponse.redirect(origin);
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/checkout/address",
    "/checkout/summary",
    "/admin",
    "/admin/users",
    "/api/admin/dashboard",
    "/api/admin/users",
  ],
};
