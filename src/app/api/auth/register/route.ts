import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { z } from "zod"

import { prisma } from "@/lib/prisma"

const registerSchema = z.object({
    name: z.string().min(1).max(80),
    email: z.string().email().max(255),
    password: z.string().min(8).max(200),
})

export async function POST(req: Request) {
    try {
        const body = (await req.json().catch(() => null)) as unknown
        const parsed = registerSchema.safeParse(body)
        if (!parsed.success) {
            return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
        }

        const { name, email, password } = parsed.data
        const normalizedEmail = email.trim().toLowerCase()

        const existing = await prisma.user.findUnique({ where: { email: normalizedEmail }, select: { id: true } })
        if (existing) {
            return NextResponse.json({ error: "Email already exists" }, { status: 400 })
        }

        const passwordHash = await bcrypt.hash(password, 10)
        const user = await prisma.user.create({
            data: {
                name,
                email: normalizedEmail,
                passwordHash,
                role: "STUDENT",
            },
            select: { id: true, email: true, name: true },
        })

        return NextResponse.json(user, { status: 201 })
    } catch {
        return NextResponse.json({ error: "Internal error" }, { status: 500 })
    }
}
