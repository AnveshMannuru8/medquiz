import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ResultsPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Results</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">Placeholder results index.</p>
      <div className="mt-6">
        <Button asChild variant="outline">
          <Link href="/results/demo-attempt">Open example results</Link>
        </Button>
      </div>
    </div>
  );
}

