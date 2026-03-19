import { getQuestion } from "@/features/questions/server/questions.service";
import { auth } from "@/lib/auth";
import { jsonError, jsonOk } from "@/server/http/response";

export async function GET(
  _req: Request,
  { params }: { params: { questionId: string } }
) {
  const session = await auth();
  if (!session) {
    return jsonError("Unauthorized", 401, "UNAUTHORIZED");
  }
  const question = await getQuestion(params.questionId);
  return jsonOk(question);
}

