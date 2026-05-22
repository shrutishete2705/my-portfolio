import { motion } from "framer-motion";
import { Monitor, Layers, Server, Database, Smartphone, Palette } from "lucide-react";

const services = [
  { icon: Monitor, title: "Frontend Web Development", desc: "Building responsive, accessible interfaces with React, HTML and modern CSS." },
  { icon: Layers, title: "Java Full Stack Development", desc: "End-to-end web apps with Spring Boot, REST APIs, and React frontends." },
  { icon: Server, title: "Backend Development", desc: "Robust server-side logic, clean architecture and scalable REST APIs." },
  { icon: Database, title: "Database Management", desc: "Designing efficient MySQL schemas, queries, and data integrations." },
  { icon: Smartphone, title: "Responsive Web Design", desc: "Pixel-perfect layouts that look great on desktop, tablet, and mobile." },
  { icon: Palette, title: "Basic UI Design", desc: "Clean, modern interfaces with attention to spacing, color and hierarchy." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-widest text-sm font-medium mb-3">Services</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            What I <span className="text-gradient">can do</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-7 group hover:shadow-glow transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow mb-5 group-hover:rotate-6 transition-transform">
                    <Icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
