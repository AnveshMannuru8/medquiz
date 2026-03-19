import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function QuizPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">Quiz</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        This route is a placeholder for starting or resuming a quiz attempt.
      </p>
      <div className="mt-6 flex gap-3">
        <Button asChild>
          <Link href="/api/v1/quizzes">Fetch quizzes</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/quiz/demo-attempt">Open example attempt</Link>
        </Button>
      </div>
    </div>
  );
}

