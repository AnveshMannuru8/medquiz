import type { AttemptId, AttemptSummary } from "../types";

const attemptStore: AttemptSummary[] = [
  {
    id: "attempt-demo",
    quizId: "quiz-demo",
    startedAt: new Date(Date.now() - 15 * 60_000).toISOString(),
    completedAt: new Date().toISOString(),
    score: 70,
  },
];

function createAttemptId(): AttemptId {
  return `attempt_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export async function listAttempts(): Promise<AttemptSummary[]> {
  return attemptStore;
}

export async function getAttempt(attemptId: string): Promise<AttemptSummary> {
  const a = attemptStore.find((x) => x.id === attemptId);
  if (!a) {
    return {
      id: attemptId,
      quizId: "quiz-demo",
      startedAt: new Date().toISOString(),
    };
  }
  return a;
}

export async function createAttempt(input: { quizId: string }): Promise<AttemptSummary> {
  const a: AttemptSummary = {
    id: createAttemptId(),
    quizId: input.quizId,
    startedAt: new Date().toISOString(),
  };
  attemptStore.unshift(a);
  return a;
}

