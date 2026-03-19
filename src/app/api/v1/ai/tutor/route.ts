import { z } from "zod";

import { auth } from "@/lib/auth";
import { jsonError, jsonOk } from "@/server/http/response";

const requestSchema = z.object({
  questionId: z.string().min(1).optional(),
  prompt: z.string().min(1),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session) {
    return jsonError("Unauthorized", 401, "UNAUTHORIZED");
  }

  const body = (await req.json().catch(() => null)) as unknown;
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError("Invalid request body", 400, "BAD_REQUEST");
  }

  if (!process.env.OPENAI_API_KEY) {
    return jsonError("AI is not configured. Set OPENAI_API_KEY.", 501, "AI_NOT_CONFIGURED");
  }

  return jsonOk({
    message: "AI tutor endpoint is wired. Streaming responses will be added once keys are configured.",
  });
}

