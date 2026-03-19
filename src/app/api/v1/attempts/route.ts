import { z } from "zod";

import { createAttempt, listAttempts } from "@/features/results/server/attempts.service";
import { jsonError, jsonOk } from "@/server/http/response";

export async function GET() {
  const attempts = await listAttempts();
  return jsonOk(attempts);
}

const createAttemptSchema = z.object({
  quizId: z.string().min(1),
});

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as unknown;
  const parsed = createAttemptSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError("Invalid request body", 400, "BAD_REQUEST");
  }
  const attempt = await createAttempt(parsed.data);
  return jsonOk(attempt, { status: 201 });
}

