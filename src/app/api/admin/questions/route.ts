import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { auth } from "@/lib/auth"

export async function POST(req: Request) {
    try {
        const session = await auth()

        if (!session || session.user.role !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const body = await req.json()
        const {
            subject,
            topic,
            subtopic,
            difficulty,
            questionText,
            questionImageUrl,
            choices,
            explanationText,
            explanationImageUrl,
        } = body

        // Auto-generate QID
        const lastQuestion = await prisma.question.findFirst({
            orderBy: {
                qid: 'desc'
            }
        })

        let nextQidNumber = 1000
        if (lastQuestion && lastQuestion.qid) {
            const match = lastQuestion.qid.match(/QID-(\d+)/)
            if (match && match[1]) {
                nextQidNumber = parseInt(match[1], 10) + 1
            }
        }
        const qid = `QID-${nextQidNumber}`

        const question = await prisma.question.create({
            data: {
                qid,
                subject,
                topic,
                subtopic,
                difficulty,
                questionText,
                questionImageUrl,
                choices,
                explanationText,
                explanationImageUrl,
            },
        })

        return NextResponse.json(question)
    } catch (error) {
        console.error("Error creating question:", error)
        return NextResponse.json(
            { error: "Failed to create question" },
            { status: 500 }
        )
    }
}

export async function GET() {
    try {
        const session = await auth()

        if (!session || session.user.role !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
        }

        const questions = await prisma.question.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        })

        return NextResponse.json(questions)
    } catch (error) {
        console.error("Error fetching questions:", error)
        return NextResponse.json(
            { error: "Failed to fetch questions" },
            { status: 500 }
        )
    }
}
