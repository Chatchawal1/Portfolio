import Section from "./Section";
import { profile, skills } from "@/lib/data";

export default function About() {
  return (
    <Section id="about" title="เกี่ยวกับฉัน" className="mt-16">
      <div className="grid gap-6 sm:grid-cols-[2fr_1fr] sm:gap-10">
        <p className="text-foreground/80 leading-relaxed">
          {profile.summary}
        </p>
        <div>
          <h3 className="font-semibold tracking-tight">ทักษะ</h3>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {skills.map((s) => (
              <li key={s.name} className="rounded border border-foreground/15 px-2 py-1">
                {s.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
