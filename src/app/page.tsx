import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import CursorGlow from "@/components/CursorGlow";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <CursorGlow />
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Education />
      <Contact />
    </main>
  );
}
