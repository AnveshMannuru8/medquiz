import { NextResponse } from "next/server";

export function jsonOk<T>(data: T, init?: ResponseInit) {
  return NextResponse.json({ ok: true, data }, init);
}

export function jsonError(
  message: string,
  status = 400,
  code?: string,
  init?: Omit<ResponseInit, "status">
) {
  return NextResponse.json(
    { ok: false, error: { message, code } },
    {
      status,
      ...init,
    }
  );
}

