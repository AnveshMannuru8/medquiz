import { getAttempt } from "@/features/results/server/attempts.service";
import { auth } from "@/lib/auth";
import { jsonError, jsonOk } from "@/server/http/response";

export async function GET(
  _req: Request,
  { params }: { params: { attemptId: string } }
) {
  const session = await auth();
  if (!session) {
    return jsonError("Unauthorized", 401, "UNAUTHORIZED");
  }
  const attempt = await getAttempt(params.attemptId);
  return jsonOk(attempt);
}

