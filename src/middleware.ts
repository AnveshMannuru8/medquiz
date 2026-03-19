import { NextResponse } from "next/server"

import { auth } from "@/lib/auth"

export default auth((req) => {
    const { pathname } = req.nextUrl
    const isAuthed = Boolean(req.auth)

    if (!isAuthed) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    if (pathname.startsWith("/admin")) {
        const role = req.auth?.user?.role
        if (role !== "ADMIN") {
            return NextResponse.redirect(new URL("/dashboard", req.url))
        }
    }

    return NextResponse.next()
})

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/admin/:path*",
        "/quiz/:path*",
        "/questions/:path*",
        "/results/:path*",
        "/settings/:path*",
        "/qbank/:path*",
    ],
}
