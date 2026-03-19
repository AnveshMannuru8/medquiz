import { NextResponse } from "next/server"
import { mkdir, writeFile } from "fs/promises"
import { join } from "path"
import { auth } from "@/lib/auth"

export async function POST(req: Request) {
    try {
        const session = await auth()

        if (!session || session.user.role !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const formData = await req.formData()
        const file = formData.get("file") as File

        if (!file) {
            return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
        }

        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)

        // Generate unique filename
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`
        const filename = `${uniqueSuffix}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '')}`

        const uploadDir = join(process.cwd(), "public", "uploads")
        const filepath = join(uploadDir, filename)

        await mkdir(uploadDir, { recursive: true })
        await writeFile(filepath, buffer)

        // Return public URL
        const url = `/uploads/${filename}`

        return NextResponse.json({ url })
    } catch (error) {
        console.error("Error uploading file:", error)
        return NextResponse.json(
            { error: "Failed to upload file" },
            { status: 500 }
        )
    }
}
