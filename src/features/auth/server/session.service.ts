import { auth } from "@/lib/auth";
import type { SessionInfo } from "../types";

export async function getSessionInfo(): Promise<SessionInfo> {
  const session = await auth();
  if (!session?.user) {
    return { authenticated: false };
  }

  return {
    authenticated: true,
    user: {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
      role: session.user.role ?? null,
    },
  };
}

