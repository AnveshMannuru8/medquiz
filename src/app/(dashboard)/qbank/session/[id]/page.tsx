"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronRight, ChevronLeft, Flag, MessageSquare, BookOpen } from "lucide-react"

// Mock data for demonstration
const mockQuestion = {
    id: "1",
    qid: "QID-1051",
    subject: "Pathology",
    topic: "Cardiovascular",
    subtopic: "Ischemic Heart Disease",
    difficulty: "HARD",
    questionText: "A 65-year-old man presents to the emergency department with crushing substernal chest pain that radiates to his left arm. The pain started 45 minutes ago while he was shoveling snow. He has a history of hypertension and hyperlipidemia. His blood pressure is 160/90 mm Hg, and his heart rate is 110/min. An ECG shows ST-segment elevation in leads II, III, and aVF. Which of the following is the most likely affected coronary artery?",
    questionImageUrl: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=800",
    choices: [
        { id: "A", text: "Left anterior descending artery", isCorrect: false },
        { id: "B", text: "Left circumflex artery", isCorrect: false },
        { id: "C", text: "Right coronary artery", isCorrect: true },
        { id: "D", text: "Left main coronary artery", isCorrect: false },
        { id: "E", text: "Posterior descending artery", isCorrect: false },
    ],
    explanationText: "The patient is experiencing an acute inferior myocardial infarction, as indicated by the ST-segment elevation in leads II, III, and aVF. The inferior wall of the left ventricle is most commonly supplied by the right coronary artery (RCA) in approximately 80-85% of individuals (right-dominant circulation). Therefore, occlusion of the RCA is the most likely cause of this patient's presentation.",
    explanationImageUrl: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
}

export default function QuizSessionPage() {
    const params = useParams<{ id: string }>()
    const sessionId = params.id
    const [selectedChoice, setSelectedChoice] = useState<string | null>(null)
    const [isAnswered, setIsAnswered] = useState(false)
    const [isFlagged, setIsFlagged] = useState(false)

    // In a real app, fetch question data based on params.id
    const question = mockQuestion

    const handleChoiceSelect = (choiceId: string) => {
        if (isAnswered) return
        setSelectedChoice(choiceId)
    }

    const handleSubmit = () => {
        if (!selectedChoice) return
        setIsAnswered(true)
    }

    const handleNext = () => {
        // Move to next question
        setSelectedChoice(null)
        setIsAnswered(false)
    }

    return (
        <div className="flex h-[calc(100vh-4rem)] bg-slate-950 text-slate-50">
            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Top Bar */}
                <div className="h-14 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900">
                    <div className="flex items-center space-x-4 text-sm text-slate-400">
                        <span>{question.subject}</span>
                        <ChevronRight className="w-4 h-4" />
                        <span>{question.topic}</span>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-slate-200">{question.subtopic}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="hidden sm:inline text-sm text-slate-400">Session: {sessionId}</span>
                        <span className="text-sm font-medium bg-slate-800 px-3 py-1 rounded-md">
                            QID: {question.qid}
                        </span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsFlagged(!isFlagged)}
                            className={isFlagged ? "text-yellow-500" : "text-slate-400"}
                        >
                            <Flag className="w-4 h-4 mr-2" />
                            Flag
                        </Button>
                    </div>
                </div>

                {/* Question Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-4xl mx-auto space-y-8">
                        {/* Question Text & Image */}
                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed">{question.questionText}</p>
                            {question.questionImageUrl && (
                                <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-900 p-2">
                                    <img
                                        src={question.questionImageUrl}
                                        alt="Question reference"
                                        className="max-w-full h-auto rounded-md mx-auto"
                                    />
                                </div>
                            )}
                        </div>

                        {/* Answer Choices */}
                        <div className="space-y-3">
                            {question.choices.map((choice) => {
                                const isSelected = selectedChoice === choice.id
                                const showCorrect = isAnswered && choice.isCorrect
                                const showIncorrect = isAnswered && isSelected && !choice.isCorrect

                                let cardClass = "cursor-pointer transition-colors border-slate-800 hover:border-slate-700 bg-slate-900"
                                if (isSelected && !isAnswered) cardClass = "border-blue-500 bg-blue-500/10"
                                if (showCorrect) cardClass = "border-green-500 bg-green-500/10"
                                if (showIncorrect) cardClass = "border-red-500 bg-red-500/10"

                                return (
                                    <Card
                                        key={choice.id}
                                        className={`p-4 ${cardClass}`}
                                        onClick={() => handleChoiceSelect(choice.id)}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className={`
                        w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5
                        ${isSelected && !isAnswered ? "border-blue-500 bg-blue-500 text-white" : "border-slate-600"}
                        ${showCorrect ? "border-green-500 bg-green-500 text-white" : ""}
                        ${showIncorrect ? "border-red-500 bg-red-500 text-white" : ""}
                      `}>
                                                <span className="text-xs font-medium">{choice.id}</span>
                                            </div>
                                            <p className="text-slate-200">{choice.text}</p>
                                        </div>
                                    </Card>
                                )
                            })}
                        </div>

                        {/* Explanation Section */}
                        {isAnswered && (
                            <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4">
                                <div className="p-6 rounded-lg border border-slate-800 bg-slate-900/50 space-y-6">
                                    <div className="flex items-center space-x-2 text-lg font-semibold">
                                        <BookOpen className="w-5 h-5 text-blue-400" />
                                        <span>Explanation</span>
                                    </div>

                                    <p className="text-slate-300 leading-relaxed">
                                        {question.explanationText}
                                    </p>

                                    {question.explanationImageUrl && (
                                        <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-900 p-2">
                                            <img
                                                src={question.explanationImageUrl}
                                                alt="Explanation reference"
                                                className="max-w-full h-auto rounded-md mx-auto"
                                            />
                                        </div>
                                    )}

                                    <div className="flex space-x-4 pt-4 border-t border-slate-800">
                                        <Button variant="outline" className="bg-slate-900 border-slate-700 hover:bg-slate-800">
                                            <MessageSquare className="w-4 h-4 mr-2" />
                                            Ask AI Tutor
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="h-16 border-t border-slate-800 bg-slate-900 flex items-center justify-between px-6">
                    <Button variant="ghost" className="text-slate-400 hover:text-slate-200">
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Previous
                    </Button>

                    {!isAnswered ? (
                        <Button
                            onClick={handleSubmit}
                            disabled={!selectedChoice}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                        >
                            Submit Answer
                        </Button>
                    ) : (
                        <Button
                            onClick={handleNext}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8"
                        >
                            Next Question
                            <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                    )}
                </div>
            </div>

            {/* Right Sidebar - Question Navigator */}
            <div className="w-64 border-l border-slate-800 bg-slate-900 flex flex-col">
                <div className="p-4 border-b border-slate-800">
                    <h3 className="font-medium text-slate-200">Question Navigator</h3>
                    <div className="mt-2 flex items-center justify-between text-sm text-slate-400">
                        <span>Block 1</span>
                        <span>1 of 40</span>
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto p-4">
                    <div className="grid grid-cols-5 gap-2">
                        {Array.from({ length: 40 }).map((_, i) => {
                            const num = i + 1
                            let btnClass = "h-8 w-8 rounded text-xs font-medium flex items-center justify-center border "

                            if (num === 1) {
                                btnClass += "border-blue-500 bg-blue-500/20 text-blue-400" // Current
                            } else if (num < 1) {
                                btnClass += "border-slate-700 bg-slate-800 text-slate-300" // Answered
                            } else {
                                btnClass += "border-slate-800 text-slate-500 hover:border-slate-600" // Unanswered
                            }

                            return (
                                <button key={num} className={btnClass}>
                                    {num}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
