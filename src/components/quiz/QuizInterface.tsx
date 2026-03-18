"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Option {
    id: string
    text: string
    isCorrect?: boolean
}

interface Question {
    id: string
    text: string
    options: Option[]
    explanation?: string
}

interface QuizInterfaceProps {
    questions: Question[]
    onComplete?: (score: number) => void
}

export function QuizInterface({ questions, onComplete }: QuizInterfaceProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [score, setScore] = useState(0)

    if (!questions || questions.length === 0) {
        return <div>No questions available.</div>
    }

    const currentQuestion = questions[currentIndex]
    const progress = ((currentIndex + 1) / questions.length) * 100

    const handleSelect = (optionId: string) => {
        if (isSubmitted) return
        setSelectedOption(optionId)
    }

    const handleSubmit = () => {
        if (!selectedOption) return

        const isCorrect = currentQuestion.options.find(o => o.id === selectedOption)?.isCorrect
        if (isCorrect) {
            setScore(prev => prev + 1)
        }
        setIsSubmitted(true)
    }

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(prev => prev + 1)
            setSelectedOption(null)
            setIsSubmitted(false)
        } else {
            onComplete?.(score)
        }
    }

    const getOptionLetter = (index: number) => String.fromCharCode(65 + index)

    return (
        <div className="max-w-3xl mx-auto w-full">
            {/* Header / Progress */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Question {currentIndex + 1} of {questions.length}
                    </span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        Score: {score}
                    </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5">
                    <div
                        className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Question Card */}
            <Card className="p-6 md:p-8 border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900 rounded-2xl mb-6">
                <h2 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-8 leading-relaxed">
                    {currentQuestion.text}
                </h2>

                <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedOption === option.id
                        const showCorrect = isSubmitted && option.isCorrect
                        const showIncorrect = isSubmitted && isSelected && !option.isCorrect

                        let optionClasses = "flex items-center p-4 rounded-xl border-2 transition-all cursor-pointer "

                        if (!isSubmitted) {
                            optionClasses += isSelected
                                ? "border-primary bg-primary/5 "
                                : "border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:bg-slate-50 dark:hover:bg-slate-800/50 "
                        } else {
                            if (showCorrect) {
                                optionClasses += "border-green-500 bg-green-500/10 "
                            } else if (showIncorrect) {
                                optionClasses += "border-red-500 bg-red-500/10 "
                            } else {
                                optionClasses += "border-slate-200 dark:border-slate-800 opacity-50 "
                            }
                        }

                        return (
                            <div
                                key={option.id}
                                onClick={() => handleSelect(option.id)}
                                className={optionClasses}
                            >
                                <div className={`
                                    flex items-center justify-center w-8 h-8 rounded-lg mr-4 font-semibold text-sm shrink-0
                                    ${isSelected && !isSubmitted ? 'bg-primary text-white' : ''}
                                    ${showCorrect ? 'bg-green-500 text-white' : ''}
                                    ${showIncorrect ? 'bg-red-500 text-white' : ''}
                                    ${!isSelected && !showCorrect && !showIncorrect ? 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400' : ''}
                                `}>
                                    {getOptionLetter(index)}
                                </div>
                                <span className={`text-base ${isSelected || showCorrect || showIncorrect ? 'text-slate-900 dark:text-white font-medium' : 'text-slate-700 dark:text-slate-300'}`}>
                                    {option.text}
                                </span>

                                {showCorrect && (
                                    <svg className="w-6 h-6 text-green-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                )}
                                {showIncorrect && (
                                    <svg className="w-6 h-6 text-red-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                )}
                            </div>
                        )
                    })}
                </div>
            </Card>

            {/* Explanation */}
            {isSubmitted && currentQuestion.explanation && (
                <div className="mb-6 p-6 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/50 animate-in fade-in slide-in-from-bottom-4">
                    <h3 className="flex items-center text-blue-800 dark:text-blue-300 font-semibold mb-2">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Explanation
                    </h3>
                    <p className="text-blue-900/80 dark:text-blue-200/80 leading-relaxed">
                        {currentQuestion.explanation}
                    </p>
                </div>
            )}

            {/* Actions */}
            <div className="flex justify-end">
                {!isSubmitted ? (
                    <Button
                        onClick={handleSubmit}
                        disabled={!selectedOption}
                        size="lg"
                        className="px-8 rounded-xl h-12 text-base font-medium"
                    >
                        Submit Answer
                    </Button>
                ) : (
                    <Button
                        onClick={handleNext}
                        size="lg"
                        className="px-8 rounded-xl h-12 text-base font-medium bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                    >
                        {currentIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </Button>
                )}
            </div>
        </div>
    )
}
