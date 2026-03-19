import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Settings</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">Placeholder settings page.</p>
      <div className="mt-6 flex gap-3">
        <Button asChild variant="outline">
          <Link href="/dashboard">Go to dashboard</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/admin">Admin</Link>
        </Button>
      </div>
    </div>
  );
}

