import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { GenerateQbankClient } from "./GenerateQbankClient"

export default async function Page() {
    const session = await auth()

    if (!session) {
        redirect("/login")
    }

    return <GenerateQbankClient />
}
