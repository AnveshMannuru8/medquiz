import { jsonOk } from "@/server/http/response";

export async function GET() {
  return jsonOk({ status: "ok", ts: new Date().toISOString() });
}

