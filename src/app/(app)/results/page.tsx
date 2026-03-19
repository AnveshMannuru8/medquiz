"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type AttemptSummary = {
  id: string;
  quizId: string;
  startedAt: string;
  completedAt?: string;
  score?: number;
};

function pickErrorMessage(payload: unknown): string | null {
  if (!payload || typeof payload !== "object") return null;
  const p = payload as Record<string, unknown>;
  const msg = p.message;
  if (typeof msg === "string" && msg.trim()) return msg;
  const err = p.error;
  if (typeof err === "string" && err.trim()) return err;
  return null;
}

export default function ResultsPage() {
  const [attempts, setAttempts] = useState<AttemptSummary[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/v1/attempts")
      .then(async (res) => {
        const payload = (await res.json().catch(() => null)) as unknown;
        if (!res.ok) {
          throw new Error(pickErrorMessage(payload) || "Failed to load attempts.");
        }
        return payload as AttemptSummary[];
      })
      .then((data) => {
        setAttempts(data);
      })
      .catch((e: unknown) => {
        setError(e instanceof Error ? e.message : "Failed to load attempts.");
        setAttempts([]);
      });
  }, []);

  return (
    <div className="max-w-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Results</h1>
          <p className="mt-2 text-sm text-muted-foreground">Review previous attempts (demo data for now).</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/quiz">Start a quiz</Link>
        </Button>
      </div>

      {error ? (
        <div className="mt-6 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </div>
      ) : null}

      <div className="mt-6 grid gap-3">
        {attempts === null ? (
          <Card className="border border-border bg-card p-4">
            <div className="text-sm text-muted-foreground">Loading…</div>
          </Card>
        ) : attempts.length === 0 ? (
          <Card className="border border-border bg-card p-4">
            <div className="text-sm text-muted-foreground">No attempts yet.</div>
          </Card>
        ) : (
          attempts.map((a) => (
            <Card key={a.id} className="border border-border bg-card p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-medium">Attempt {a.id}</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Quiz: {a.quizId} • Started: {new Date(a.startedAt).toLocaleString()}
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-sm font-semibold">{a.score ?? "—"}</div>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/results/${a.id}`}>View</Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}

