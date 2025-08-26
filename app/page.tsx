import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="grid gap-16">
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
