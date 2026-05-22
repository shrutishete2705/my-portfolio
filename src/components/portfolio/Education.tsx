import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "B.Tech in Information Technology",
    org: "M.S. Bidve Engineering College",
    year: "Expected 2026",
    score: "8.23 CGPA",
    desc: "Final year student focusing on full stack development, DBMS and software engineering.",
  },
  {
    icon: BookOpen,
    title: "Diploma in Information Technology",
    org: "Puranmal Lahoti Government Polytechnic",
    year: "Completed 2023",
    score: "85%",
    desc: "Built strong foundations in programming, web technologies and databases.",
  },
  {
    icon: School,
    title: "Schooling Completed",
    org: "Shri Deshikendra High School, Latur",
    year: "Completed 2020",
    score: "94.40%",
    desc: "Completed schooling with a strong interest in mathematics and computers.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-widest text-sm font-medium mb-3">Education</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Academic <span className="text-gradient">journey</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent md:-translate-x-1/2" />

          {items.map((it, i) => {
            const Icon = it.icon;
            const left = i % 2 === 0;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative mb-10 md:mb-14 flex flex-col md:flex-row items-start ${
                  left ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 pl-16 md:pl-0 md:px-8">
                  <div className="glass rounded-2xl p-6 hover:shadow-glow transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {it.year}
                      </span>
                      <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">
                        {it.score}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-xl mt-2">{it.title}</h3>
                    <p className="text-accent font-medium text-sm mt-1">{it.org}</p>
                    <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{it.desc}</p>
                  </div>
                </div>
                <div className="absolute left-6 md:left-1/2 top-4 md:-translate-x-1/2 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow ring-4 ring-background -translate-x-1/2">
                  <Icon className="text-primary-foreground" size={18} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
