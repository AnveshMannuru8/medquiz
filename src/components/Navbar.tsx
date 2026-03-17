"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { GraduationCap, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight">MedQuiz</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          {status === "authenticated" ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Hi, {session.user?.name?.split(' ')[0] || 'User'}
              </span>
              <Button variant="ghost" size="sm" onClick={() => signOut()}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 border-b bg-background px-4 py-4 space-y-4 shadow-lg animate-in slide-in-from-top-5">
          <Link 
            href="/pricing" 
            className="block text-lg font-medium py-2"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            href="/dashboard" 
            className="block text-lg font-medium py-2"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </Link>
          {status === "authenticated" ? (
            <div className="pt-4 border-t space-y-4">
              <p className="text-sm text-muted-foreground">
                Logged in as {session.user?.email}
              </p>
              <Button variant="outline" className="w-full" onClick={() => {
                signOut();
                setIsOpen(false);
              }}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="pt-4 border-t flex flex-col gap-2">
              <Button variant="outline" asChild onClick={() => setIsOpen(false)}>
                <Link href="/login">Log In</Link>
              </Button>
              <Button asChild onClick={() => setIsOpen(false)}>
                <Link href="/register">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
