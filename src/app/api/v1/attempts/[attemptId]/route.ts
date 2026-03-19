import { getAttempt } from "@/features/results/server/attempts.service";
import { jsonOk } from "@/server/http/response";

export async function GET(
  _req: Request,
  { params }: { params: { attemptId: string } }
) {
  const attempt = await getAttempt(params.attemptId);
  return jsonOk(attempt);
}

