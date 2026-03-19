import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Question } from "../types";

export function QuestionCard({ question }: { question: Question }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">
          <Link href={`/questions/${encodeURIComponent(question.id)}`} className="hover:underline">
            {question.id}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-600 dark:text-slate-400">{question.prompt}</CardContent>
    </Card>
  );
}

