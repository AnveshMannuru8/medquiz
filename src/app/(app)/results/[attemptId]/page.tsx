import { getAttempt } from "@/features/results/server/attempts.service";

export default async function ResultDetailPage({
  params,
}: {
  params: { attemptId: string };
}) {
  const attempt = await getAttempt(params.attemptId);

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Attempt results</h1>
      <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">Attempt</dt>
          <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{attempt.id}</dd>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
          <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">Score</dt>
          <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">{attempt.score ?? "—"}</dd>
        </div>
      </dl>
    </div>
  );
}

