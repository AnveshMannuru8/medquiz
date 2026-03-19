import { getQuiz } from "@/features/quiz/server/quizzes.service";
import { auth } from "@/lib/auth";
import { jsonError, jsonOk } from "@/server/http/response";

export async function GET(
  _req: Request,
  { params }: { params: { quizId: string } }
) {
  const session = await auth();
  if (!session) {
    return jsonError("Unauthorized", 401, "UNAUTHORIZED");
  }
  const quiz = await getQuiz(params.quizId);
  return jsonOk(quiz);
}

