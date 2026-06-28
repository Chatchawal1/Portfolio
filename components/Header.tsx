"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark";

export default function Header() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: Theme =
      savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : prefersDark
          ? "dark"
          : "light";

    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <header className="py-4">
      <div className="mx-auto max-w-5xl px-4 flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">
          {profile.headerName}
        </h1>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-4 text-sm">
          <Link className="hover:underline underline-offset-4" href="#contact">
            ติดต่อ
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-label="เปลี่ยนธีม"
            onClick={toggleTheme}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </Button>
        </nav>
      </div>
    </header>
  );
}
