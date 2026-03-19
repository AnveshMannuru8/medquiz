import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getQuestion } from "@/features/questions/server/questions.service";

export default async function QuestionDetailPage({
  params,
}: {
  params: { questionId: string };
}) {
  const question = await getQuestion(params.questionId);

  return (
    <div className="max-w-2xl">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Question</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">{question.prompt}</p>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/questions">Back</Link>
        </Button>
      </div>
      <ol className="mt-6 list-decimal space-y-2 pl-5 text-slate-700 dark:text-slate-300">
        {question.choices.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ol>
    </div>
  );
}

