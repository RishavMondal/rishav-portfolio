import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <SmoothScroll />

      <Navbar />

      <Hero />

      <div className="h-px bg-white/10 mx-8 md:mx-20" />

      <About />

      <div className="h-px bg-white/10 mx-8 md:mx-20" />

      <Projects />

      <div className="h-px bg-white/10 mx-8 md:mx-20" />

      <Contact />

    </main>
  );
}