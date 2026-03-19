import { getQuestion } from "@/features/questions/server/questions.service";
import { jsonOk } from "@/server/http/response";

export async function GET(
  _req: Request,
  { params }: { params: { questionId: string } }
) {
  const question = await getQuestion(params.questionId);
  return jsonOk(question);
}

