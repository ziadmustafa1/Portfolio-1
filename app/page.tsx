import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section id="home" className="w-full flex justify-center">
        <Hero />
      </section>
      <section id="about" className="w-full flex justify-center">
        <About />
      </section>
      <section id="skills" className="w-full flex justify-center">
        <Skills />
      </section>
      <section id="projects" className="w-full flex justify-center">
        <Projects />
      </section>
      <section id="contact" className="w-full flex justify-center">
        <Contact />
      </section>
      
      <footer className="w-full py-8 text-center text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="container">
          <p>© {new Date().getFullYear()} Zeyad Mostafa. All rights reserved.</p>
          <p className="mt-1">Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion</p>
        </div>
      </footer>
    </div>
  );
}
