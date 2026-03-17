import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
    title: "MedQuiz - AI-Powered USMLE Preparation",
    description: "Start fighting for USMLE success today with the most high-yield questions!",
}

export default function HomePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-primary-dark text-white">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="font-bold text-xl">MedQuiz</span>
                        </Link>
                        <nav className="hidden md:flex gap-6">
                            <Link href="/" className="text-sm font-medium hover:text-gray-300">Home</Link>
                            <Link href="/pricing" className="text-sm font-medium hover:text-gray-300">Pricing</Link>
                            <Link href="/contact" className="text-sm font-medium hover:text-gray-300">Contact</Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/login" className="text-sm font-medium hover:text-gray-300">Login</Link>
                        <Link href="/register">
                            <Button className="bg-primary hover:bg-primary/90 text-white">Sign Up</Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* HERO SECTION */}
                <section className="bg-primary-dark text-white py-20 md:py-32">
                    <div className="container flex flex-col items-center text-center space-y-8">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl">
                            Start fighting for USMLE success today with the most high-yield questions!
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                            AI-powered study plans, smart flashcards, and performance analytics to help you crush the boards.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/features">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                                    Explore Qbank Features
                                </Button>
                            </Link>
                            <Link href="/register">
                                <Button size="lg" variant="outline" className="text-primary-dark bg-white hover:bg-gray-100 w-full sm:w-auto">
                                    Try Free Trial
                                </Button>
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-5xl">
                            <Card className="bg-white/10 border-none text-white">
                                <CardHeader>
                                    <CardTitle className="text-lg">Tutor & Exam Modes</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-300">Practice under real exam conditions or learn as you go.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/10 border-none text-white">
                                <CardHeader>
                                    <CardTitle className="text-lg">AI Performance Analysis</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-300">Identify weak areas and get personalized study recommendations.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/10 border-none text-white">
                                <CardHeader>
                                    <CardTitle className="text-lg">Smart Flashcards</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-300">Spaced repetition system integrated directly with your Qbank.</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-white/10 border-none text-white">
                                <CardHeader>
                                    <CardTitle className="text-lg">Affordable Prices</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-300">Premium quality preparation without the premium price tag.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US */}
                <section className="py-20 bg-surface">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">Why Choose MedQuiz?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                                </div>
                                <h3 className="text-xl font-semibold">AI Study Plans</h3>
                                <p className="text-text-muted">Personalized schedules that adapt to your progress and target score.</p>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="20" y2="10" /><line x1="18" x2="18" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="16" /></svg>
                                </div>
                                <h3 className="text-xl font-semibold">Performance Analytics</h3>
                                <p className="text-text-muted">Deep insights into your strengths and weaknesses by subject and system.</p>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>
                                </div>
                                <h3 className="text-xl font-semibold">Medical Library</h3>
                                <p className="text-text-muted">Comprehensive reference materials linked directly to question explanations.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS */}
                <section className="py-20 bg-surface-alt">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">1</div>
                                <h3 className="text-xl font-semibold">Take a Quiz</h3>
                                <p className="text-text-muted">Build custom quizzes targeting your weak areas or simulate full exams.</p>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">2</div>
                                <h3 className="text-xl font-semibold">Review with AI</h3>
                                <p className="text-text-muted">Get detailed explanations and ask our AI tutor follow-up questions.</p>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-4">
                                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">3</div>
                                <h3 className="text-xl font-semibold">Master Concepts</h3>
                                <p className="text-text-muted">Use smart flashcards and spaced repetition to lock in your knowledge.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* PRICING */}
                <section className="py-20 bg-surface">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">Simple, Transparent Pricing</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            <Card className="flex flex-col">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Annual Plan</CardTitle>
                                    <CardDescription>Perfect for dedicated Step 1 or Step 2 CK prep.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="text-4xl font-bold mb-6">$100<span className="text-lg text-text-muted font-normal">/yr</span></div>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2"><svg className="text-primary h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Access to one Step Qbank</li>
                                        <li className="flex items-center gap-2"><svg className="text-primary h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> AI Study Planner</li>
                                        <li className="flex items-center gap-2"><svg className="text-primary h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Smart Flashcards</li>
                                        <li className="flex items-center gap-2"><svg className="text-primary h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Performance Analytics</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Link href="/register" className="w-full">
                                        <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                            <Card className="flex flex-col border-primary shadow-lg relative">
                                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">Popular</div>
                                <CardHeader>
                                    <CardTitle className="text-2xl">Combo Plan</CardTitle>
                                    <CardDescription>The ultimate package for your entire USMLE journey.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="text-4xl font-bold mb-6">$150<span className="text-lg text-text-muted font-normal">/yr</span></div>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-2"><svg className="text-primary h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Access to ALL Qbanks (Step 1, 2CK, 3)</li>
                                        <li className="flex items-center gap-2"><svg className="text-primary h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Priority AI Support</li>
                                        <li className="flex items-center gap-2"><svg className="text-primary h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Unlimited Flashcards</li>
                                        <li className="flex items-center gap-2"><svg className="text-primary h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> Advanced Analytics</li>
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Link href="/register" className="w-full">
                                        <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIALS */}
                <section className="py-20 bg-surface-alt overflow-hidden">
                    <div className="container">
                        <h2 className="text-3xl font-bold text-center mb-12 text-text-primary">What Our Students Say</h2>
                        <div className="flex overflow-x-auto pb-8 gap-6 snap-x">
                            <Card className="min-w-[300px] md:min-w-[400px] snap-center">
                                <CardContent className="pt-6">
                                    <p className="italic mb-4">&ldquo;The AI explanations are a game-changer. It&rsquo;s like having a tutor explain exactly why I got a question wrong.&rdquo;</p>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                                        <div>
                                            <p className="font-semibold">Sarah J.</p>
                                            <p className="text-sm text-text-muted">Step 1 Score: 245</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="min-w-[300px] md:min-w-[400px] snap-center">
                                <CardContent className="pt-6">
                                    <p className="italic mb-4">&ldquo;I loved the combo plan. Being able to seamlessly transition from Step 1 to Step 2 CK prep saved me so much money.&rdquo;</p>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                                        <div>
                                            <p className="font-semibold">Michael T.</p>
                                            <p className="text-sm text-text-muted">Step 2 CK Score: 260</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="min-w-[300px] md:min-w-[400px] snap-center">
                                <CardContent className="pt-6">
                                    <p className="italic mb-4">&ldquo;The smart flashcards integrated with the Qbank made reviewing my incorrects incredibly efficient.&rdquo;</p>
                                    <div className="flex items-center gap-4">
                                        <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                                        <div>
                                            <p className="font-semibold">Emily R.</p>
                                            <p className="text-sm text-text-muted">MS3</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-primary-dark text-white py-12 border-t border-white/10">
                <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">MedQuiz</h3>
                        <p className="text-sm text-gray-400">AI-Powered USMLE Preparation Platform.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/features" className="hover:text-white">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
                            <li><Link href="/affiliate" className="hover:text-white">Affiliate Program</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                            <li><Link href="/refund-policy" className="hover:text-white">Refund Policy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}