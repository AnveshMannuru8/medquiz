import type { QuizDetail, QuizId, QuizSummary } from "../types";

type QuizStoreItem = QuizDetail;

const quizStore: QuizStoreItem[] = [
  {
    id: "quiz-demo",
    title: "Demo quiz",
    questionCount: 10,
    description: "Placeholder quiz returned by the feature service.",
  },
];

function createQuizId(): QuizId {
  return `quiz_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

export async function listQuizzes(): Promise<QuizSummary[]> {
  return quizStore.map(({ id, title, questionCount }) => ({ id, title, questionCount }));
}

export async function getQuiz(quizId: string): Promise<QuizDetail> {
  const quiz = quizStore.find((q) => q.id === quizId);
  if (!quiz) {
    return {
      id: quizId,
      title: "Unknown quiz",
      questionCount: 0,
      description: "Not found in placeholder store.",
    };
  }
  return quiz;
}

export async function createQuiz(input: { title: string; questionCount?: number }): Promise<QuizDetail> {
  const quiz: QuizDetail = {
    id: createQuizId(),
    title: input.title,
    questionCount: input.questionCount ?? 0,
    description: "Created in placeholder store.",
  };
  quizStore.unshift(quiz);
  return quiz;
}

