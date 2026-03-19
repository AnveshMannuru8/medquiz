import { getAttempt } from "@/features/results/server/attempts.service";
import { Card } from "@/components/ui/card";

export default async function ResultDetailPage({
  params,
}: {
  params: { attemptId: string };
}) {
  const attempt = await getAttempt(params.attemptId);

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight">Attempt results</h1>
      <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Card className="border border-border bg-card p-4">
          <dt className="text-xs font-medium text-muted-foreground">Attempt</dt>
          <dd className="mt-1 text-sm font-semibold">{attempt.id}</dd>
        </Card>
        <Card className="border border-border bg-card p-4">
          <dt className="text-xs font-medium text-muted-foreground">Score</dt>
          <dd className="mt-1 text-sm font-semibold">{attempt.score ?? "—"}</dd>
        </Card>
        <Card className="border border-border bg-card p-4">
          <dt className="text-xs font-medium text-muted-foreground">Started</dt>
          <dd className="mt-1 text-sm font-semibold">{new Date(attempt.startedAt).toLocaleString()}</dd>
        </Card>
        <Card className="border border-border bg-card p-4">
          <dt className="text-xs font-medium text-muted-foreground">Completed</dt>
          <dd className="mt-1 text-sm font-semibold">{attempt.completedAt ? new Date(attempt.completedAt).toLocaleString() : "—"}</dd>
        </Card>
      </dl>
    </div>
  );
}

