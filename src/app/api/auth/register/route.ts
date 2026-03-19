import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import { adminDb } from "@/lib/firebase-admin"

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json()

        if (!name || !email || !password) {
            return new NextResponse("Missing fields", { status: 400 })
        }

        const usersRef = adminDb.collection("users");
        const snapshot = await usersRef.where("email", "==", email).get();

        if (!snapshot.empty) {
            return new NextResponse("Email already exists", { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newUserRef = usersRef.doc();
        const userData = {
            name,
            email,
            passwordHash: hashedPassword,
            role: "USER",
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        await newUserRef.set(userData);

        return NextResponse.json({ id: newUserRef.id, email, name })
    } catch (error) {
        console.error("REGISTRATION_ERROR", error)
        return new NextResponse("Internal Error", { status: 500 })
    }
}
