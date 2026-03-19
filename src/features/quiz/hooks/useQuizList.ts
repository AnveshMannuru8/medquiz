"use client";

import { useEffect, useState } from "react";

import type { QuizSummary } from "../types";

export function useQuizList() {
  const [data, setData] = useState<QuizSummary[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetch("/api/v1/quizzes")
      .then(async (r) => {
        const body = (await r.json()) as { ok: boolean; data?: unknown; error?: { message?: string } };
        if (!r.ok || !body.ok) {
          throw new Error(body.error?.message ?? "Request failed");
        }
        return body.data as QuizSummary[];
      })
      .then((quizzes) => {
        if (!mounted) return;
        setData(quizzes);
        setError(null);
      })
      .catch((e: unknown) => {
        if (!mounted) return;
        setError(e instanceof Error ? e.message : "Unknown error");
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { data, error, loading };
}

