"use client";

import Link from "next/link";
import { useState } from "react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 dark:border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-5xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight hover:opacity-90">
          {profile.name}
        </Link>

        <nav aria-label="Main" className="hidden sm:flex items-center gap-6 text-sm">
          <Link className="hover:underline underline-offset-4 focus:outline-none focus-visible:ring rounded" href="#work">งาน</Link>
          <Link className="hover:underline underline-offset-4 focus:outline-none focus-visible:ring rounded" href="#about">เกี่ยวกับ</Link>
          <Button asChild size="sm">
            <Link href="#contact">ติดต่อ</Link>
          </Button>
        </nav>

        <div className="sm:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              {open ? (
                <path
                  fillRule="evenodd"
                  d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 1 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3.75 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="sm:hidden border-t border-black/10 dark:border-white/10">
          <div className="mx-auto max-w-5xl px-4 py-3 grid gap-3">
            <Link className="py-1 hover:underline underline-offset-4" href="#work" onClick={() => setOpen(false)}>
              งาน
            </Link>
            <Link className="py-1 hover:underline underline-offset-4" href="#about" onClick={() => setOpen(false)}>
              เกี่ยวกับ
            </Link>
            <Button asChild size="sm" onClick={() => setOpen(false)}>
              <Link href="#contact">ติดต่อ</Link>
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
