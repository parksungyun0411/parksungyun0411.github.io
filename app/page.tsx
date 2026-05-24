import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <FeaturedProject />
      <Projects />
      <Skills />
      <Experience />
      <Credentials />
      <Contact />
      <footer className="text-center text-xs text-zinc-500 py-8 border-t border-zinc-200">
        © 2026 박성윤 · Built with Next.js + Tailwind · Hosted on GitHub Pages
      </footer>
    </main>
  );
}
