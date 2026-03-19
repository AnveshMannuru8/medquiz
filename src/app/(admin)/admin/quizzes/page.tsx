import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminQuizzesPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Admin quizzes</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-3">
        <Button asChild variant="outline">
          <Link href="/api/v1/quizzes">Preview API</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

