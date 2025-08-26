import Section from "./Section";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <Section id="contact" title="ติดต่อ" className="mt-16">
      <div className="grid gap-4 sm:flex sm:items-center sm:justify-between">
        <p className="text-foreground/80">พร้อมร่วมงานหรืออยากคุยโปรเจกต์ใหม่ ๆ ติดต่อฉันได้เลย</p>
        <div className="flex gap-3">
          {profile.email ? (
            <Button asChild>
              <a href={`mailto:${profile.email}`}>ส่งอีเมล</a>
            </Button>
          ) : null}
          {profile.socials?.map((s) => (
            <Button key={s.label} asChild>
              <a href={s.href} target="_blank" rel="noreferrer noopener">
                {s.label}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </Section>
  );
}
