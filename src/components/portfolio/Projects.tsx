import { motion } from "framer-motion";
import { Github, ExternalLink, Zap, Globe, BarChart3, GraduationCap } from "lucide-react";

const projects = [
  {
    icon: Zap,
    title: "Electricity Billing System",
    desc: "Desktop-based electricity billing application to manage customer billing records and payment details efficiently with backend logic and database integration.",
    tech: ["Java", "Swing", "MySQL"],
  },
  {
    icon: Globe,
    title: "Industrial Training Management Website",
    desc: "Responsive web application developed collaboratively with frontend, backend, and database integration.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Java"],
  },
  {
    icon: BarChart3,
    title: "Zomato Data Visualization",
    desc: "Performed data analysis and visualization on restaurant datasets to generate insights about ratings, cuisines, and pricing trends.",
    tech: ["Python", "Pandas", "Matplotlib"],
  },
  {
    icon: GraduationCap,
    title: "University Resource System",
    desc: "Desktop-based university management application for handling records and resources with efficient backend connectivity.",
    tech: ["Java", "Swing", "MySQL"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-widest text-sm font-medium mb-3">Projects</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Featured <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-strong rounded-3xl p-8 group relative overflow-hidden hover:shadow-glow transition-all duration-300"
              >
                <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-primary opacity-10 blur-3xl group-hover:opacity-25 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <Icon className="text-primary-foreground" size={24} />
                    </div>
                    <div className="flex gap-2">
                      <button aria-label="GitHub" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                        <Github size={16} />
                      </button>
                      <button aria-label="Live demo" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                        <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                  <h3 className="font-display font-semibold text-2xl mb-3 group-hover:text-gradient transition-all">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
