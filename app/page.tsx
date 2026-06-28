import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// page.tsx
export default function Home() {
  return (
    <div className="@container flex min-h-full w-full min-w-0 flex-1 flex-col">
      <div className="flex min-w-0 flex-1 flex-col gap-12 @[48rem]:flex-row @[48rem]:items-start @[48rem]:justify-between @[48rem]:gap-16 xl:gap-24">
        <div className="min-w-0 flex-1">
          <Hero />
        </div>
        <div className="mx-auto mt-10 w-full min-w-0 flex-1 sm:mt-14 @[48rem]:mt-20">
          <Projects />
        </div>
      </div>
      <Contact />
    </div>
  );
}
