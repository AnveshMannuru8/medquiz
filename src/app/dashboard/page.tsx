import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, BarChart3 } from "lucide-react"
import Link from "next/link"

export default async function DashboardPage() {
    const session = await auth()

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-2">
                {/* Welcome Card */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-6 w-6"
                                >
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                                    <polyline points="9 22 9 12 15 12 15 22" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="text-xl font-bold">Welcome Back!</h2>
                                <p className="text-sm text-muted-foreground">{`Here's an overview of your learning progress`}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>Today, {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-muted p-4">
                            <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background">
                                    <span className="font-bold">%</span>
                                </div>
                                <span className="text-2xl font-bold text-foreground">0.0%</span>
                            </div>
                            <p className="text-sm font-medium text-muted-foreground">Total Correct</p>
                        </div>
                        <div className="rounded-lg bg-muted p-4">
                            <div className="flex items-center gap-2 text-muted-foreground mb-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background">
                                    <BarChart3 className="h-4 w-4" />
                                </div>
                                <span className="text-2xl font-bold text-foreground">0.0%</span>
                            </div>
                            <p className="text-sm font-medium text-muted-foreground">QBank Used</p>
                        </div>
                    </div>
                </div>

                {/* Study Progress Card */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Clock className="h-5 w-5" />
                        </div>
                        <h3 className="font-semibold">Study Progress</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center py-4">
                        <div className="text-center mb-4">
                            <span className="text-2xl font-bold">0</span>
                            <span className="text-muted-foreground"> / 0 days</span>
                            <span className="text-sm text-muted-foreground ml-2">(0 remaining)</span>
                        </div>

                        {/* Circular Progress Placeholder */}
                        <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-8 border-muted">
                            <div className="text-center">
                                <span className="text-xl font-bold">0%</span>
                                <p className="text-xs text-muted-foreground">Complete</p>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                                <span className="text-muted-foreground">Completed <span className="font-bold text-foreground">0</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                <span className="text-muted-foreground">Overdue <span className="font-bold text-foreground">0</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                                <span className="text-muted-foreground">Incomplete <span className="font-bold text-foreground">0</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Study Planner Card */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Study Planner</h3>
                            <p className="text-sm text-muted-foreground">Today, {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                    </div>
                    <Link href="/dashboard/planner">
                        <Button>
                            View Plan <span className="ml-2">→</span>
                        </Button>
                    </Link>
                </div>

                <div className="flex gap-2 mb-8">
                    <Button variant="default" className="rounded-full px-6">
                        Upcoming <span className="ml-2 rounded-full bg-white/20 px-2 py-0.5 text-xs">0</span>
                    </Button>
                    <Button variant="outline" className="rounded-full px-6">
                        Overdue <span className="ml-2 rounded-full bg-red-100 text-red-600 px-2 py-0.5 text-xs">0</span>
                    </Button>
                </div>

                <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Calendar className="h-8 w-8" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{`You're all caught up!`}</h4>
                    <p className="text-muted-foreground mb-6 max-w-md">
                        {`Take a break or load next week's tasks to continue studying.`}
                    </p>
                    <Link href="/dashboard/planner">
                        <Button>
                            Load More Tasks
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
