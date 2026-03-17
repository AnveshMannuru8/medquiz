import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { auth } from "@/lib/auth"

export async function middleware(request: NextRequest) {
    const session = await auth()
    const { pathname } = request.nextUrl

    // Protect dashboard routes
    if (pathname.startsWith("/dashboard")) {
        if (!session) {
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }

    // Protect admin routes
    if (pathname.startsWith("/admin")) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (!session || !session.user || (session.user as any).role !== "ADMIN") {
            return NextResponse.redirect(new URL("/login", request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard/:path*", "/admin/:path*"],
}