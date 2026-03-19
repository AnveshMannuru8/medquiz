import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
    const sessionToken = request.cookies.get("authjs.session-token")?.value || request.cookies.get("__Secure-authjs.session-token")?.value;
    const { pathname } = request.nextUrl

    // Protect dashboard routes
    if (pathname.startsWith("/dashboard")) {
        if (!sessionToken) {
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }

    // Protect admin routes
    if (pathname.startsWith("/admin")) {
        if (!sessionToken) {
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*"],
}