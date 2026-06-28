type SectionProps = {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`w-full min-w-0 ${className ?? ""}`}>
      {title ? (
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6" aria-label={title}>
          {title}
        </h2>
      ) : null}
      {children}
    </section>
  );
}
