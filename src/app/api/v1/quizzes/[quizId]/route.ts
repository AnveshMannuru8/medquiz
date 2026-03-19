import { getQuiz } from "@/features/quiz/server/quizzes.service";
import { jsonOk } from "@/server/http/response";

export async function GET(
  _req: Request,
  { params }: { params: { quizId: string } }
) {
  const quiz = await getQuiz(params.quizId);
  return jsonOk(quiz);
}

