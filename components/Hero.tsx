import Section from './Section';
import { profile } from '@/lib/data';

export default function Hero() {
  return (
    <Section className="pt-6 sm:pt-10">
      <div className="grid gap-6 sm:gap-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight break-words sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-foreground/200 sm:text-xl">{profile.role}</p>
        </div>
        <p className="max-w-2xl text-foreground/80 xl:max-w-3xl">{profile.summary}</p>
      </div>
    </Section>
  );
}