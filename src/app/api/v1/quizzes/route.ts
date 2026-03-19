import { z } from "zod";

import { createQuiz, listQuizzes } from "@/features/quiz/server/quizzes.service";
import { jsonError, jsonOk } from "@/server/http/response";

export async function GET() {
  const quizzes = await listQuizzes();
  return jsonOk(quizzes);
}

const createQuizSchema = z.object({
  title: z.string().min(1),
  questionCount: z.number().int().nonnegative().optional(),
});

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as unknown;
  const parsed = createQuizSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError("Invalid request body", 400, "BAD_REQUEST");
  }
  const quiz = await createQuiz(parsed.data);
  return jsonOk(quiz, { status: 201 });
}

