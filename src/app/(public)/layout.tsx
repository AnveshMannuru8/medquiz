import type { ReactNode } from "react";

export default function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <div className="min-h-dvh bg-slate-50 dark:bg-slate-950">{children}</div>;
}

