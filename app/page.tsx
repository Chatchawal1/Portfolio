import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

// page.tsx
export default function Home() {
  return (
    <div className="grid gap-16">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <Hero />  {/* flex-1 อยู่ใน Section แล้ว */}
        <div className="flex-1 w-full">
          <Projects />
        </div>
      </div>
      <Contact />
    </div>
  );
}
