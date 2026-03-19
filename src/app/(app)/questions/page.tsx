import { QuestionCard } from "@/features/questions/components/QuestionCard";
import { listQuestions } from "@/features/questions/server/questions.service";

export default async function QuestionsPage() {
  const questions = await listQuestions();

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Questions</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">Server-rendered placeholder list from feature service.</p>
      <div className="mt-6 grid gap-4">
        {questions.map((q) => (
          <QuestionCard key={q.id} question={q} />
        ))}
      </div>
    </div>
  );
}

