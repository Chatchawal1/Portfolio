import Link from "next/link";
import Section from "./Section";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <Section className="pt-10 sm:pt-16">
      <div className="grid gap-6 sm:gap-8">
        <div>
          <p className="text-sm uppercase tracking-wider text-foreground/60">สวัสดี ฉันคือ</p>
          <h1 className="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-foreground/80">{profile.role}</p>
        </div>
        <p className="max-w-2xl text-foreground/80">{profile.summary}</p>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="#work">ดูผลงาน</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#contact">ติดต่อฉัน</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
