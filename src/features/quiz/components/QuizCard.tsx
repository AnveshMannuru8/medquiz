import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { QuizSummary } from "../types";

export function QuizCard({ quiz }: { quiz: QuizSummary }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">
          <Link href={`/api/v1/quizzes/${encodeURIComponent(quiz.id)}`} className="hover:underline">
            {quiz.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-600 dark:text-slate-400">Questions: {quiz.questionCount}</CardContent>
    </Card>
  );
}

