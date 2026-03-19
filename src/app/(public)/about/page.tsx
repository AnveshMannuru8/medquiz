import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About - MedQuiz",
  description: "About MedQuiz",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">About</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          MedQuiz is a USMLE prep platform focused on high-yield practice and fast review loops.
        </p>
        <div className="mt-8 flex gap-3">
          <Button asChild variant="outline">
            <Link href="/">Back home</Link>
          </Button>
          <Button asChild>
            <Link href="/pricing">View pricing</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

