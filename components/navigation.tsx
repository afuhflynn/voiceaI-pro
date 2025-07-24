"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="font-semibold text-lg bg-gradient-to-r from-chart-1 to-chart-2/80 bg-clip-text text-transparent"
        >
          VoiceAI&nbsp;<span className="font-normal">Pro</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          <li></li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Link href="/settings">
                <Button variant="ghost" size="sm">
                  Settings
                </Button>
              </Link>
              <Link href="/voice-agent">
                <Button size="sm">Dashboard</Button>
              </Link>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/90 backdrop-blur-md">
          <ul className="flex flex-col py-4 px-4 gap-2">
            <li></li>
            <li className="pt-2 space-y-2">
              {isAuthenticated ? (
                <>
                  <Link href="/settings" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full">
                      Settings
                    </Button>
                  </Link>
                  <Link href="/voice-agent" onClick={() => setOpen(false)}>
                    <Button className="w-full">Dashboard</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/sign-in" onClick={() => setOpen(false)}>
                    <Button variant="ghost" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up" onClick={() => setOpen(false)}>
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
