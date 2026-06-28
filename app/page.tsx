import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="grid gap-16">
      <div className="grid grid-cols-2 gap-16 items-center">
        <Hero />
        <Projects />
      </div>
      <Contact />
    </div>
  );
}
