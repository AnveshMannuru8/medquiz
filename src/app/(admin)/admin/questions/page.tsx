import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminQuestionsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Admin questions</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center gap-3">
        <Button asChild>
          <Link href="/admin/questions/new">Create question</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/api/v1/questions">Preview API</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

