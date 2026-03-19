import type { ReactNode } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function AppLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-dvh bg-slate-50 dark:bg-slate-950">
      <header className="border-b border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-slate-900 dark:text-white">
            MedQuiz
          </Link>
          <nav className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm">
              <Link href="/quiz">Quiz</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/questions">Questions</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/results">Results</Link>
            </Button>
            <Button asChild variant="ghost" size="sm">
              <Link href="/settings">Settings</Link>
            </Button>
          </nav>
        </div>
      </header>
      <main className="container py-8">{children}</main>
    </div>
  );
}

