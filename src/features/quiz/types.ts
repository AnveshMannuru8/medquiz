export type QuizId = string;

export type QuizSummary = {
  id: QuizId;
  title: string;
  questionCount: number;
};

export type QuizDetail = QuizSummary & {
  description?: string;
};

