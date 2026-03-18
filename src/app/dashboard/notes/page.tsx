import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export default async function Page() {
    const session = await auth()

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="rounded-xl border bg-white p-6 shadow-sm">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">My Notes</h1>
                <p className="text-gray-600">
                    This page is currently under construction. Check back later for updates!
                </p>
            </div>
        </div>
    )
}
