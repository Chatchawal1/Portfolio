import Section from "./Section";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { SocialIcon } from "./ui/SocialIcon";

export default function Contact() {
    return (
        <Section id="contact" title="ติดต่อ" className="mt-16">
            <div className="grid gap-4 sm:flex sm:items-center sm:justify-between">
                <p className="text-foreground/80">{profile.location}</p>
                <div className="flex gap-3">
                    {profile.email ? (
                        <Button asChild size="icon" className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-orange-500/30
            bg-black/30
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-orange-400
            hover:shadow-[0_0_30px_rgba(249,115,22,.35)]
          ">
                            <a href={`mailto:${profile.email}`} className="flex items-center gap-2">
                                <SocialIcon label="Email" />
                            </a>
                        </Button>
                    ) : null}
                    {profile.socials?.map((s) => (
                        <Button key={s.label} asChild size="icon" className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-orange-500/30
            bg-black/30
            backdrop-blur-md
            transition-all
            duration-300
            hover:-translate-y-2
            hover:border-orange-400
            hover:shadow-[0_0_30px_rgba(249,115,22,.35)]
          ">
                            <a
                                href={s.href}
                                aria-label={s.label}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <SocialIcon label={s.label} />
                            </a>
                        </Button>
                    ))}
                </div>
            </div>
        </Section>
    );
}
