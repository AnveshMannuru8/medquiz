import { z } from "zod";

import { createQuestion, listQuestions } from "@/features/questions/server/questions.service";
import { jsonError, jsonOk } from "@/server/http/response";

export async function GET() {
  const questions = await listQuestions();
  return jsonOk(questions);
}

const createQuestionSchema = z.object({
  prompt: z.string().min(1),
  choices: z.array(z.string().min(1)).min(2),
});

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as unknown;
  const parsed = createQuestionSchema.safeParse(body);
  if (!parsed.success) {
    return jsonError("Invalid request body", 400, "BAD_REQUEST");
  }
  const q = await createQuestion(parsed.data);
  return jsonOk(q, { status: 201 });
}

