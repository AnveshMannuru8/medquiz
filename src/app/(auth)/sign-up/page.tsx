import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sign up - MedQuiz",
  description: "Create a MedQuiz account",
};

export default function SignUpPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create your account</CardTitle>
        <CardDescription>Start practicing and tracking your progress.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button asChild>
          <Link href="/register">Continue to registration</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/sign-in">I already have an account</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

