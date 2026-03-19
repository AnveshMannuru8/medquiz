export default function QuizAttemptPage({
  params,
}: {
  params: { attemptId: string };
}) {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Attempt</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">Attempt id: {params.attemptId}</p>
    </div>
  );
}

