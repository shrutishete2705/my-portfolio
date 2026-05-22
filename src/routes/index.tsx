import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Services } from "@/components/portfolio/Services";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shruti Mahesh Ishwarshete — Java Full Stack Developer" },
      {
        name: "description",
        content:
          "Portfolio of Shruti Mahesh Ishwarshete, aspiring Java Full Stack Developer building modern web applications with Java, Spring Boot, React and MySQL.",
      },
      { property: "og:title", content: "Shruti Mahesh Ishwarshete — Java Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Modern portfolio showcasing full stack projects, skills and services by Shruti Mahesh Ishwarshete.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
