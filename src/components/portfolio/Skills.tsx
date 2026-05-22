import { motion } from "framer-motion";
import { Code2, Layout, Server, Database, Wrench, Brain, Sparkles } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    icon: Layout,
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 88 },
      { name: "React.js", level: 82 },
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    skills: [
      { name: "Spring Boot", level: 80 },
      { name: "REST APIs", level: 78 },
    ],
  },
  {
    icon: Database,
    title: "Database Management",
    skills: [{ name: "MySQL", level: 85 }],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Eclipse", level: 80 },
    ],
  },
  {
    icon: Brain,
    title: "Core Concepts",
    skills: [
      { name: "OOP", level: 90 },
      { name: "DBMS", level: 85 },
      { name: "Data Structures", level: 80 },
    ],
  },
  {
    icon: Sparkles,
    title: "Areas of Interest",
    skills: [
      { name: "Java Full Stack Development", level: 85 },
      { name: "Web Application Development", level: 88 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-widest text-sm font-medium mb-3">Skills</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            My <span className="text-gradient">technical toolkit</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, idx) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="gradient-border rounded-2xl p-6 hover:shadow-glow transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                    <Icon className="text-primary-foreground" size={20} />
                  </div>
                  <h3 className="font-display font-semibold text-lg">{c.title}</h3>
                </div>
                <div className="space-y-3">
                  {c.skills.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="font-medium">{s.name}</span>
                        <span className="text-muted-foreground">{s.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                          className="h-full bg-gradient-primary shadow-glow rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
