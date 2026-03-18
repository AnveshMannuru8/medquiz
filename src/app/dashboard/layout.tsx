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
        <div className="flex h-screen overflow-hidden bg-[#F4F5F8]">
            <Sidebar />
            <div className="flex flex-1 flex-col overflow-hidden">
                <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
                    <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <ModeToggle />
                        <button className="text-gray-500 hover:text-gray-700">
                            <Settings className="h-5 w-5" />
                        </button>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-gray-700">
                                {session.user?.name || session.user?.email?.split('@')[0] || "User"}
                            </span>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-600">
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
