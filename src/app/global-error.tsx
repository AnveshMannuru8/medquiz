"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function GlobalError({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container py-24">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900">App error</h1>
          <div className="mt-6 flex gap-3">
            <Button onClick={reset}>Try again</Button>
            <Button asChild variant="outline">
              <Link href="/">Back home</Link>
            </Button>
          </div>
        </div>
      </body>
    </html>
  );
}

