import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
};

export default function Section({ id, title, children, className, titleClassName }: SectionProps) {
  return (
    <section id={id} className={cn("w-full min-w-0", className)}>
      {title ? (
        <h2
          className={cn(
            "mb-6 text-2xl font-semibold tracking-tight sm:text-3xl",
            titleClassName
          )}
          aria-label={title}
        >
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
