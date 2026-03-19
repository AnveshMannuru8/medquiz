export type AttemptId = string;
export type QuizId = string;

export type AttemptSummary = {
  id: AttemptId;
  quizId: QuizId;
  startedAt: string;
  completedAt?: string;
  score?: number;
};

