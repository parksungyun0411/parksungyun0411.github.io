import Masthead from "@/components/Masthead";
import SiteNav from "@/components/SiteNav";
import Experience from "@/components/Experience";
import FeaturedProject from "@/components/FeaturedProject";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div id="top">
      <Masthead />
      <SiteNav />
      <main className="mx-auto max-w-6xl space-y-24 px-6 pb-24 pt-16 lg:space-y-32 lg:px-10 lg:pt-20">
        <Experience />
        <FeaturedProject />
        <Projects />
        <Skills />
        <Credentials />
        <Contact />
      </main>
    </div>
  );
}
