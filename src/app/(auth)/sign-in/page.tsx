import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Sign in - MedQuiz",
  description: "Sign in to MedQuiz",
};

export default function SignInPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign in</CardTitle>
        <CardDescription>Use your existing account to continue.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button asChild>
          <Link href="/login">Continue to login</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/sign-up">Create an account</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

