import { getSessionInfo } from "@/features/auth/server/session.service";
import { jsonOk } from "@/server/http/response";

export async function GET() {
  const session = await getSessionInfo();
  return jsonOk(session);
}

