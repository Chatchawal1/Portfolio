import { Collapse } from 'antd';
import Section from './Section';
import { profile } from '@/lib/data';

export default function Hero() {
  return (
    <Section className="pt-10 sm:pt-16 flex-1">
      <div className="grid gap-6 sm:gap-8">
        <div>
          <h1 className="mt-2 text-3xl sm:text-5xl font-semibold tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-foreground/80">{profile.role}</p>
        </div>
        <p className="max-w-2xl text-foreground/80">{profile.summary}</p>
      </div>
    </Section>
  );
}