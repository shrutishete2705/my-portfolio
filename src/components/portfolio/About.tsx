import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Technologies Learned" },
  { value: 200, suffix: "+", label: "Problems Solved" },
  { value: 100, suffix: "%", label: "Team Collaboration" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1500;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      setN(Math.floor(p * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref} className="text-4xl md:text-5xl font-display font-bold text-gradient">
      {n}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-widest text-sm font-medium mb-3">About Me</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Crafting <span className="text-gradient">digital experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5 text-muted-foreground text-lg leading-relaxed"
          >
          <p>
  <span className="text-foreground font-semibold">Shruti Mahesh Ishwarshete</span> is a
  passionate and aspiring Java Full Stack Developer currently pursuing Final Year B.Tech
  in Information Technology at M.S. Bidve Engineering College, with an expected graduation
  year of 2026.
</p>

<p>
  I enjoy building responsive and scalable web applications using HTML, CSS, JavaScript,
  React.js, Java, and MySQL. With a strong interest in both frontend and backend development,
  I continuously enhance my skills through real-world projects, self-learning, and hands-on experience.
</p>

<p>
  My goal is to create impactful digital solutions that combine performance, functionality,
  and exceptional user experience while continuously growing as a developer in the tech industry.
</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-6 text-center hover:shadow-glow transition-all hover:-translate-y-1 duration-300"
              >
                <Counter value={s.value} suffix={s.suffix} />
                <p className="mt-2 text-sm text-muted-foreground font-medium">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
