import { Sidebar } from "@/components/dashboard/sidebar"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Settings, User } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const session = await auth()

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="flex h-screen overflow-hidden bg-background text-foreground">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <header className="flex h-16 items-center justify-between border-b border-border bg-background/80 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <h1 className="text-xl font-semibold">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <ModeToggle />
                        <button className="text-muted-foreground hover:text-foreground">
                            <Settings className="h-5 w-5" />
                        </button>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">
                                {session.user?.name || session.user?.email?.split('@')[0] || "User"}
                            </span>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                                <User className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}
