"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function QuizPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight">Quiz</h1>
      <p className="mt-2 text-sm text-muted-foreground">Start a new demo attempt and open the runner.</p>

      {error ? (
        <div className="mt-6 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      <div className="mt-6 grid gap-3">
        <Card className="border border-border bg-card p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm font-medium">Demo quiz</div>
              <div className="mt-1 text-xs text-muted-foreground">Creates an attempt via `/api/v1/attempts`.</div>
            </div>
            <Button
              disabled={loading}
              onClick={async () => {
                setLoading(true);
                setError(null);
                try {
                  const res = await fetch("/api/v1/attempts", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ quizId: "quiz-demo" }),
                  });
                  const payload = await res.json().catch(() => null);
                  if (!res.ok) {
                    setError(payload?.message || payload?.error || "Failed to start attempt.");
                    return;
                  }
                  router.push(`/qbank/session/${payload.id}`);
                } catch {
                  setError("Failed to start attempt.");
                } finally {
                  setLoading(false);
                }
              }}
            >
              {loading ? "Starting…" : "Start"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

