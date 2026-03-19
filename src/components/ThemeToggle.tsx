"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button type="button" variant="ghost" size="icon" aria-label="Toggle theme" disabled>
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const current = (theme === "system" ? resolvedTheme : theme) ?? "dark";
  const next = current === "dark" ? "light" : "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(next)}
    >
      {current === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

