import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { QuizDemo } from "@/components/quiz/QuizDemo"

export const metadata: Metadata = {
    title: "MedQuiz - AI-Powered USMLE Preparation",
    description: "Start fighting for USMLE success today with the most high-yield questions!",
}

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col bg-slate-50 dark:bg-slate-950">
            <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="font-bold text-white text-lg">M</span>
                            </div>
                            <span className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">MedQuiz</span>
                        </Link>
                        <nav className="hidden md:flex gap-6">
                            <Link href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Features</Link>
                            <Link href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">How it Works</Link>
                            <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Pricing</Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors">Log in</Link>
                        <Link href="/register">
                            <Button className="bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 rounded-full px-6">Sign Up</Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* HERO SECTION */}
                <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-primary/5 blur-3xl opacity-50" />
                        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-3xl opacity-50" />
                    </div>

                    <div className="container relative z-10 flex flex-col items-center text-center space-y-8">
                        <div className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-1 text-sm font-medium text-slate-600 dark:text-slate-300 shadow-sm">
                            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                            Introducing AI-Powered Study Plans
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl text-slate-900 dark:text-white leading-[1.1]">
                            Master the USMLE with <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Intelligent Practice</span>
                        </h1>

                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl font-light leading-relaxed">
                            Stop guessing. Start knowing. Our AI-driven Qbank adapts to your weaknesses, ensuring you crush the boards with confidence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                            <Link href="/register" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 rounded-full shadow-lg transition-transform hover:scale-105">
                                    Start Free Trial
                                </Button>
                            </Link>
                            <Link href="#demo" className="w-full sm:w-auto">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg font-semibold border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 rounded-full transition-all">
                                    Try a Quiz
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE DEMO SECTION */}
                <section id="demo" className="relative z-20 px-4 md:px-8 max-w-5xl mx-auto -mt-12 mb-24">
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden">
                        <div className="flex items-center px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="mx-auto text-xs font-medium text-slate-400">Interactive Demo</div>
                        </div>
                        <div className="p-0 sm:p-6 bg-slate-50/50 dark:bg-slate-950/50">
                            <QuizDemo />
                        </div>
                    </div>
                </section>

                {/* FEATURES GRID - LINEAR STYLE */}
                <section id="features" className="py-24 bg-white dark:bg-slate-950 relative border-t border-slate-200 dark:border-slate-800">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                                Everything you need to excel
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                A comprehensive suite of tools designed specifically for medical students preparing for the most important exams of their lives.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Feature 1 */}
                            <div className="group relative overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md">
                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white mb-6 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">High-Yield Qbank</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Thousands of carefully crafted questions that mirror the exact style and difficulty of the real USMLE exams.</p>
                            </div>

                            {/* Feature 2 */}
                            <div className="group relative overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md">
                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white mb-6 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">AI Explanations</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Get stuck? Our AI tutor provides detailed, step-by-step explanations for every answer choice, right or wrong.</p>
                            </div>

                            {/* Feature 3 */}
                            <div className="group relative overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 transition-all hover:shadow-md">
                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-900 dark:text-white mb-6 shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                                </div>
                                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Advanced Analytics</h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Track your performance across different systems and disciplines to identify exactly where you need to focus.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US - BENTO GRID */}
                <section className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                    <div className="container">
                        <div className="mb-16 max-w-3xl">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                                Built for modern medical students
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                {`We've reimagined medical exam prep from the ground up, combining cognitive science with cutting-edge AI.`}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
                            {/* Bento Item 1 - Large */}
                            <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col overflow-hidden relative group shadow-sm">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-transparent dark:from-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white mb-6 border border-slate-200 dark:border-slate-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">AI Study Plans</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
                                    Personalized schedules that adapt to your progress and target score. Our algorithm ensures you study the right topics at the right time.
                                </p>
                                <div className="mt-auto w-full h-56 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 relative overflow-hidden p-4 flex flex-col gap-3">
                                    {/* Mock UI for Study Plan */}
                                    <div className="h-8 w-1/3 bg-white dark:bg-slate-800 rounded-md shadow-sm border border-slate-100 dark:border-slate-700"></div>
                                    <div className="flex gap-3 h-full">
                                        <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-3 flex flex-col gap-2">
                                            <div className="h-3 w-1/2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-900 rounded mt-auto"></div>
                                        </div>
                                        <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-3 flex flex-col gap-2">
                                            <div className="h-3 w-2/3 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-900 rounded mt-auto"></div>
                                        </div>
                                        <div className="flex-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-100 dark:border-slate-700 p-3 flex flex-col gap-2 opacity-50">
                                            <div className="h-3 w-1/2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                                            <div className="h-2 w-full bg-slate-100 dark:bg-slate-900 rounded mt-auto"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bento Item 2 */}
                            <div className="md:col-span-2 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col relative overflow-hidden group shadow-sm">
                                <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white mb-6 border border-slate-200 dark:border-slate-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Performance Analytics</h3>
                                <p className="text-slate-600 dark:text-slate-400">Deep insights into your strengths and weaknesses by subject and system.</p>
                            </div>

                            {/* Bento Item 3 */}
                            <div className="md:col-span-2 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 flex flex-col relative overflow-hidden group shadow-sm">
                                <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-900 dark:text-white mb-6 border border-slate-200 dark:border-slate-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Medical Library</h3>
                                <p className="text-slate-600 dark:text-slate-400">Comprehensive reference materials linked directly to question explanations.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS - NOTION STYLE */}
                <section id="how-it-works" className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                    <div className="container max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                                A streamlined workflow
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                From identifying weaknesses to mastering concepts, our platform guides you every step of the way.
                            </p>
                        </div>

                        <div className="space-y-16">
                            {/* Step 1 */}
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-4">
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold mb-2">1</div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Take a Quiz</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                        Build custom quizzes targeting your weak areas or simulate full exams with our realistic testing interface.
                                    </p>
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 shadow-sm">
                                        <div className="space-y-4">
                                            <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                            <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                            <div className="pt-4 space-y-2">
                                                <div className="h-12 w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg"></div>
                                                <div className="h-12 w-full bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg"></div>
                                                <div className="h-12 w-full bg-slate-900 dark:bg-white rounded-lg opacity-10"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                                <div className="flex-1 space-y-4">
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold mb-2">2</div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Review with AI</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                        Get detailed explanations and ask our AI tutor follow-up questions to ensure you truly understand the underlying concepts.
                                    </p>
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 shadow-sm">
                                        <div className="space-y-4">
                                            <div className="flex gap-3">
                                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0"></div>
                                                <div className="flex-1 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl rounded-tl-none p-4">
                                                    <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
                                                    <div className="h-3 w-4/5 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                                </div>
                                            </div>
                                            <div className="flex gap-3 flex-row-reverse">
                                                <div className="w-8 h-8 rounded-full bg-slate-900 dark:bg-white shrink-0 opacity-20"></div>
                                                <div className="flex-1 bg-slate-900 dark:bg-white rounded-2xl rounded-tr-none p-4 opacity-10">
                                                    <div className="h-3 w-2/3 bg-white dark:bg-slate-900 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-4">
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold mb-2">3</div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Master Concepts</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                        Use smart flashcards and spaced repetition to lock in your knowledge for test day.
                                    </p>
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 shadow-sm flex items-center justify-center h-48">
                                        <div className="w-48 h-32 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-md transform rotate-3 flex items-center justify-center">
                                            <div className="h-4 w-1/2 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                        </div>
                                        <div className="w-48 h-32 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl shadow-lg absolute transform -rotate-3 flex items-center justify-center">
                                            <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING - STRIPE STYLE */}
                <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                                Simple, transparent pricing
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                Invest in your future with plans designed for every stage of your medical journey.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Plan 1 */}
                            <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm flex flex-col">
                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Annual Plan</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm">Perfect for dedicated Step 1 or Step 2 CK prep.</p>
                                </div>
                                <div className="mb-8 flex items-baseline text-slate-900 dark:text-white">
                                    <span className="text-5xl font-extrabold tracking-tight">$100</span>
                                    <span className="text-slate-500 dark:text-slate-400 ml-1 font-medium">/year</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1">
                                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                                        <svg className="h-5 w-5 text-slate-900 dark:text-white shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span>Access to one Step Qbank</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                                        <svg className="h-5 w-5 text-slate-900 dark:text-white shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span>AI Study Planner</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                                        <svg className="h-5 w-5 text-slate-900 dark:text-white shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span>Smart Flashcards</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                                        <svg className="h-5 w-5 text-slate-900 dark:text-white shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span>Performance Analytics</span>
                                    </li>
                                </ul>
                                <Link href="/register" className="w-full">
                                    <Button className="w-full h-12 text-base font-medium bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 rounded-xl">Get Started</Button>
                                </Link>
                            </div>

                            {/* Plan 2 */}
                            <div className="rounded-3xl bg-slate-900 dark:bg-white border border-slate-800 dark:border-slate-200 p-8 shadow-xl flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-white text-slate-900 dark:bg-slate-900 dark:text-white px-4 py-1 text-sm font-medium rounded-bl-xl">Popular</div>

                                <div className="mb-8 relative z-10">
                                    <h3 className="text-xl font-semibold text-white dark:text-slate-900 mb-2">Combo Plan</h3>
                                    <p className="text-slate-400 dark:text-slate-500 text-sm">The ultimate package for your entire USMLE journey.</p>
                                </div>
                                <div className="mb-8 flex items-baseline text-white dark:text-slate-900 relative z-10">
                                    <span className="text-5xl font-extrabold tracking-tight">$150</span>
                                    <span className="text-slate-400 dark:text-slate-500 ml-1 font-medium">/year</span>
                                </div>
                                <ul className="space-y-4 mb-8 flex-1 relative z-10">
                                    <li className="flex items-center gap-3 text-slate-300 dark:text-slate-600">
                                        <svg className="h-5 w-5 text-white dark:text-slate-900 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span>Access to ALL Qbanks (Step 1, 2CK, 3)</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-300 dark:text-slate-600">
                                        <svg className="h-5 w-5 text-white dark:text-slate-900 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span>Priority AI Support</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-300 dark:text-slate-600">
                                        <svg className="h-5 w-5 text-white dark:text-slate-900 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span>Unlimited Flashcards</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-slate-300 dark:text-slate-600">
                                        <svg className="h-5 w-5 text-white dark:text-slate-900 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                        <span>Advanced Analytics</span>
                                    </li>
                                </ul>
                                <Link href="/register" className="w-full relative z-10">
                                    <Button className="w-full h-12 text-base font-medium bg-white text-slate-900 hover:bg-slate-100 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 rounded-xl border-0">Get Started</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="py-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
                                Loved by medical students
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex gap-1 text-slate-900 dark:text-white mb-6">
                                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>)}
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                                    {`"The AI explanations are a game-changer. It's like having a tutor explain exactly why I got a question wrong. My practice scores jumped 20 points in a month."`}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold text-sm">SJ</div>
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm">Sarah J.</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Step 1 Score: 245</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex gap-1 text-slate-900 dark:text-white mb-6">
                                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>)}
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                                    {`"I loved the combo plan. Being able to seamlessly transition from Step 1 to Step 2 CK prep saved me so much money and kept all my analytics in one place."`}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold text-sm">MT</div>
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm">Michael T.</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Step 2 CK Score: 260</p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-slate-50 dark:bg-slate-900 p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <div className="flex gap-1 text-slate-900 dark:text-white mb-6">
                                    {[1, 2, 3, 4, 5].map(i => <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>)}
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                                    {`"The smart flashcards integrated with the Qbank made reviewing my incorrects incredibly efficient. The interface is so clean and fast compared to others."`}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 font-bold text-sm">ER</div>
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm">Emily R.</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">MS3</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-white dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
                <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-6 h-6 bg-slate-900 dark:bg-white rounded flex items-center justify-center">
                                <span className="font-bold text-white dark:text-slate-900 text-xs">M</span>
                            </div>
                            <span className="font-bold text-lg text-slate-900 dark:text-white">MedQuiz</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400">AI-Powered USMLE Preparation Platform.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</Link></li>
                            <li><Link href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Affiliate Program</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                            <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Refund Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </a>
                            <a href="#" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
