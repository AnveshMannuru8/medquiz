"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function createSessionId() {
  return `s_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export function GenerateQbankClient() {
  const router = useRouter();
  const [questionCount, setQuestionCount] = useState("40");
  const [mode, setMode] = useState<"TUTOR" | "EXAM">("TUTOR");

  const parsedCount = useMemo(() => {
    const n = Number(questionCount);
    if (!Number.isFinite(n) || n <= 0) return null;
    return Math.min(Math.max(Math.floor(n), 1), 200);
  }, [questionCount]);

  return (
    <div className="flex flex-col gap-6">
      <Card className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h1 className="text-2xl font-bold">Generate Quiz</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Start a new session using the demo question runner. This will evolve into the full QBank generator.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="mode">Mode</Label>
            <div className="flex gap-2">
              <Button type="button" variant={mode === "TUTOR" ? "default" : "outline"} onClick={() => setMode("TUTOR")}>
                Tutor
              </Button>
              <Button type="button" variant={mode === "EXAM" ? "default" : "outline"} onClick={() => setMode("EXAM")}>
                Exam
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="count">Number of questions</Label>
            <Input
              id="count"
              inputMode="numeric"
              value={questionCount}
              onChange={(e) => setQuestionCount(e.target.value)}
            />
            <p className="text-xs text-muted-foreground">1–200 (demo currently shows one question UI)</p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            className="sm:w-auto"
            disabled={!parsedCount}
            onClick={() => {
              const sessionId = createSessionId();
              router.push(`/qbank/session/${sessionId}?mode=${mode}&n=${parsedCount ?? ""}`);
            }}
          >
            Start Session
          </Button>

          <Button
            type="button"
            variant="outline"
            className="sm:w-auto"
            onClick={() => router.push("/qbank/session/demo")}
          >
            Open Demo Session
          </Button>
        </div>
      </Card>
    </div>
  );
}

