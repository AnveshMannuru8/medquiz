"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function NewQuestionPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [choices, setChoices] = useState([
        { id: "1", text: "", isCorrect: true },
        { id: "2", text: "", isCorrect: false },
        { id: "3", text: "", isCorrect: false },
        { id: "4", text: "", isCorrect: false },
    ])

    const [formData, setFormData] = useState({
        subject: "",
        topic: "",
        subtopic: "",
        difficulty: "MEDIUM",
        questionText: "",
        explanationText: "",
    })

    const [questionImage, setQuestionImage] = useState<File | null>(null)
    const [explanationImage, setExplanationImage] = useState<File | null>(null)

    const handleChoiceChange = (id: string, text: string) => {
        setChoices(choices.map(c => c.id === id ? { ...c, text } : c))
    }

    const handleCorrectChoiceChange = (id: string) => {
        setChoices(choices.map(c => ({ ...c, isCorrect: c.id === id })))
    }

    const handleImageUpload = async (file: File) => {
        const formData = new FormData()
        formData.append("file", file)

        const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        })

        if (!res.ok) throw new Error("Failed to upload image")
        const data = await res.json()
        return data.url
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            let questionImageUrl = null
            let explanationImageUrl = null

            if (questionImage) {
                questionImageUrl = await handleImageUpload(questionImage)
            }
            if (explanationImage) {
                explanationImageUrl = await handleImageUpload(explanationImage)
            }

            const res = await fetch("/api/admin/questions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    choices,
                    questionImageUrl,
                    explanationImageUrl,
                }),
            })

            if (!res.ok) throw new Error("Failed to create question")

            router.push("/admin/questions")
            router.refresh()
        } catch (error) {
            console.error("Error:", error)
            alert("Failed to create question")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-8">Create New Question</h1>

            <form onSubmit={handleSubmit} className="space-y-8 max-w-3xl">
                <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                            id="subject"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="topic">Topic</Label>
                        <Input
                            id="topic"
                            value={formData.topic}
                            onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="subtopic">Subtopic</Label>
                        <Input
                            id="subtopic"
                            value={formData.subtopic}
                            onChange={(e) => setFormData({ ...formData, subtopic: e.target.value })}
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="difficulty">Difficulty</Label>
                    <select
                        id="difficulty"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.difficulty}
                        onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                    >
                        <option value="EASY">Easy</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HARD">Hard</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="questionText">Question Text</Label>
                    <Textarea
                        id="questionText"
                        value={formData.questionText}
                        onChange={(e) => setFormData({ ...formData, questionText: e.target.value })}
                        required
                        className="min-h-[100px]"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="questionImage">Question Image (Optional)</Label>
                    <Input
                        id="questionImage"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setQuestionImage(e.target.files?.[0] || null)}
                    />
                </div>

                <div className="space-y-4">
                    <Label>Answer Choices</Label>
                    {choices.map((choice, index) => (
                        <div key={choice.id} className="flex items-center space-x-4">
                            <input
                                type="radio"
                                name="correctChoice"
                                checked={choice.isCorrect}
                                onChange={() => handleCorrectChoiceChange(choice.id)}
                                className="w-4 h-4"
                            />
                            <Input
                                value={choice.text}
                                onChange={(e) => handleChoiceChange(choice.id, e.target.value)}
                                placeholder={`Choice ${index + 1}`}
                                required
                            />
                        </div>
                    ))}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="explanationText">Explanation Text</Label>
                    <Textarea
                        id="explanationText"
                        value={formData.explanationText}
                        onChange={(e) => setFormData({ ...formData, explanationText: e.target.value })}
                        required
                        className="min-h-[150px]"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="explanationImage">Explanation Image (Optional)</Label>
                    <Input
                        id="explanationImage"
                        type="file"
                        accept="image/*"
                        onChange={(e) => setExplanationImage(e.target.files?.[0] || null)}
                    />
                </div>

                <Button type="submit" disabled={isLoading}>
                    {isLoading ? "Creating..." : "Create Question"}
                </Button>
            </form>
        </div>
    )
}
