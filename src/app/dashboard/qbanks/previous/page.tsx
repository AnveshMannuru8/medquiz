import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default async function Page() {
    const session = await auth()

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="flex flex-col gap-6">
            <Card className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h1 className="text-2xl font-bold">Previous Tests</h1>
                <p className="mt-2 text-sm text-muted-foreground">
                    Attempts history will appear here once attempts are persisted. For now, use the demo runner.
                </p>
                <div className="mt-6 flex gap-3">
                    <Button asChild>
                        <Link href="/dashboard/qbanks/generate">Generate a quiz</Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href="/qbank/session/demo">Open demo session</Link>
                    </Button>
                </div>
            </Card>
        </div>
    )
}
