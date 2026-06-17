import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-12">
      <div className="lg:flex lg:gap-16">
        <Sidebar />
        <main
          id="content"
          className="py-16 lg:w-7/12 lg:py-28 space-y-20 lg:space-y-28"
        >
          <About />
          <Experience />
          <FeaturedProject />
          <Projects />
          <Skills />
          <Credentials />
          <Contact />
          <footer className="pt-8 text-xs text-zinc-400">
            © 2026 박성윤 · Built with Next.js + Tailwind · Hosted on GitHub Pages
          </footer>
        </main>
      </div>
    </div>
  );
}
