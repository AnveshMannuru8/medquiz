"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    BookOpen,
    Library,
    GraduationCap,
    LineChart,
    ClipboardList,
    Zap,
    User,
    Users,
    LogOut,
    ChevronDown,
    ChevronRight,
    Stethoscope
} from "lucide-react"
import { useState } from "react"

const menuItems = [
    {
        title: "Welcome",
        icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        title: "Courses",
        icon: BookOpen,
        submenu: [
            { title: "My Courses", href: "/dashboard/courses" }
        ]
    },
    {
        title: "Qbanks",
        icon: Library,
        submenu: [
            { title: "Previous Test", href: "/dashboard/qbanks/previous" },
            { title: "Generate Quiz", href: "/dashboard/qbanks/generate" },
            { title: "Search", href: "/dashboard/qbanks/search" }
        ]
    },
    {
        title: "Self Assessments",
        icon: GraduationCap,
        submenu: [
            { title: "Assessments", href: "/dashboard/assessments" },
            { title: "Report", href: "/dashboard/assessments/report" },
            { title: "Score Predictor", href: "/dashboard/assessments/predictor" }
        ]
    },
    {
        title: "Performance",
        icon: LineChart,
        submenu: [
            { title: "Overall", href: "/dashboard/performance/overall" },
            { title: "Peer Ranking", href: "/dashboard/performance/ranking" },
            { title: "AI Test Analysis", href: "/dashboard/performance/ai-analysis" },
            { title: "Score Calculator", href: "/dashboard/performance/calculator" },
            { title: "Graphs", href: "/dashboard/performance/graphs" }
        ]
    },
    {
        title: "Notes and Study",
        icon: ClipboardList,
        submenu: [
            { title: "Notes", href: "/dashboard/notes" },
            { title: "My Notebook", href: "/dashboard/notebook" },
            { title: "Medical Library", href: "/dashboard/library" },
            { title: "Study Planner", href: "/dashboard/planner" }
        ]
    },
    {
        title: "Flashcards",
        icon: Zap,
        submenu: [
            { title: "My Decks", href: "/dashboard/flashcards/my-decks" },
            { title: "Ready Decks", href: "/dashboard/flashcards/ready-decks" },
            { title: "AI Decks", href: "/dashboard/flashcards/ai-decks" }
        ]
    },
    {
        title: "Account",
        icon: User,
        submenu: [
            { title: "Renewal", href: "/dashboard/account/renewal" },
            { title: "Reset", href: "/dashboard/account/reset" }
        ]
    },
    {
        title: "Referral Program",
        icon: Users,
        href: "/dashboard/referral",
    },
]

export function Sidebar() {
    const pathname = usePathname()
    const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
        "Courses": true,
    })

    const toggleMenu = (title: string) => {
        setOpenMenus(prev => ({ ...prev, [title]: !prev[title] }))
    }

    return (
        <div className="flex h-full w-64 flex-col bg-[#2A3042] text-white">
            <div className="flex h-20 items-center justify-center border-b border-white/10 px-6">
                <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl text-white">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Stethoscope className="h-6 w-6" />
                    </div>
                    <span className="tracking-wider">MEDQUIZ</span>
                </Link>
            </div>

            <div className="flex-1 overflow-y-auto py-4 custom-scrollbar">
                <nav className="space-y-1 px-3">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href || (item.submenu && item.submenu.some(sub => pathname === sub.href))
                        const isOpen = openMenus[item.title]

                        return (
                            <div key={item.title}>
                                {item.submenu ? (
                                    <button
                                        onClick={() => toggleMenu(item.title)}
                                        className={cn(
                                            "flex w-full items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                                            isActive ? "bg-white/10 text-white" : "text-gray-300 hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon className="h-5 w-5" />
                                            {item.title}
                                        </div>
                                        {isOpen ? (
                                            <ChevronDown className="h-4 w-4" />
                                        ) : (
                                            <ChevronRight className="h-4 w-4" />
                                        )}
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href!}
                                        className={cn(
                                            "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                                            pathname === item.href ? "bg-[#34C38F]/20 text-[#34C38F] border-l-4 border-[#34C38F]" : "text-gray-300 hover:bg-white/5 hover:text-white"
                                        )}
                                    >
                                        <item.icon className="h-5 w-5" />
                                        {item.title}
                                    </Link>
                                )}

                                {item.submenu && isOpen && (
                                    <div className="mt-1 space-y-1 pl-11 pr-3">
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                href={subItem.href}
                                                className={cn(
                                                    "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                                                    pathname === subItem.href
                                                        ? "bg-white/10 text-white"
                                                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                                                )}
                                            >
                                                {subItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )
                    })}

                    <form action="/api/auth/signout" method="POST" className="mt-2">
                        <button
                            type="submit"
                            className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
                        >
                            <LogOut className="h-5 w-5" />
                            Logout
                        </button>
                    </form>
                </nav>
            </div>

            <div className="border-t border-white/10 p-4 text-center">
                <div className="text-xs text-gray-400">USMLE Step 1 Qbank (Trial)</div>
                <div className="mt-1 font-semibold text-white">Expiration Date</div>
                <div className="text-sm text-gray-300">Mar 18, 2026</div>
            </div>
        </div>
    )
}
