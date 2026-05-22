import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const info = [
  { icon: Mail, label: "Email", value: "shrutiishwarshete2705@gmail.com", href: "mailto:shrutiishwarshete2705@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9096139775", href: "tel:+919096139775" },
  { icon: MapPin, label: "Location", value: "Pune, India", href: "#" },
];

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/shrutishete2705" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shruti-ishwarshete-21986227b" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-widest text-sm font-medium mb-3">Contact</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Let's <span className="text-gradient">build together</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {info.map((i) => {
            const Icon = i.icon;
            return (
              <a
                key={i.label}
                href={i.href}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:shadow-glow transition-all hover:-translate-y-1 duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0 group-hover:scale-110 transition-transform">
                  <Icon className="text-primary-foreground" size={20} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{i.label}</p>
                  <p className="font-medium truncate">{i.value}</p>
                </div>
              </a>
            );
          })}
          <div className="flex gap-3 pt-4 justify-center">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-glow transition-all"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
