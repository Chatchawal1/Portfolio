import Image from "next/image";
import Section from "./Section";
import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  return (
    <Section id="work" title="ผลงาน">
      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden group hover:shadow-md transition-shadow">
            {project.image ? (
              <div className="relative aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ) : null}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 text-sm">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {project.demoUrl ? (
                  <a className="text-sm underline underline-offset-4 hover:no-underline" href={project.demoUrl} target="_blank" rel="noreferrer noopener">
                    Demo
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a className="text-sm underline underline-offset-4 hover:no-underline" href={project.repoUrl} target="_blank" rel="noreferrer noopener">
                    Code
                  </a>
                ) : null}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
