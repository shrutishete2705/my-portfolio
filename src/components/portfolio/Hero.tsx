import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import profile from "@/assets/profile.jpeg";

const roles = ["Java Developer", "Full Stack Developer", "React Developer", "Backend Developer"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[i];
    const speed = deleting ? 50 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setI((i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="inline-block w-[3px] h-[1em] align-middle bg-primary ml-1 animate-[blink_1s_step-end_infinite]" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 left-10 w-56 h-56 rounded-full opacity-25 blur-3xl animate-[float_10s_ease-in-out_infinite]"
             style={{ background: "radial-gradient(circle, oklch(0.65 0.22 250), transparent)" }} />
        <div className="absolute top-20 left-1/3 w-2 h-2 rounded-full bg-primary shadow-glow animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-32 right-1/3 w-3 h-3 rounded-full bg-accent shadow-glow-blue animate-[float_7s_ease-in-out_infinite]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">
            Hi There, I'm
          </p>
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-4">
            Shruti Mahesh<br />
            <span className="text-gradient">Ishwarshete</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-6 h-10">
            <Typewriter />
          </h2>
         <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-8">
  Passionate about building modern, scalable, and user-friendly web applications using
  Java, Spring Boot, React, and MySQL. Dedicated to transforming ideas into interactive
  digital experiences through clean code, innovative solutions, and seamless user experiences.
  Strong focus on creating efficient, responsive, and impactful applications that blend
  performance with modern design.
</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              <Mail size={18} />
              Contact Me
            </a>
           <a
  href="https://drive.google.com/file/d/1UnPc0BG28siKlrB8sT2oKnYEJq09-sJj/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-primary/40 text-foreground font-semibold hover:bg-primary/10 hover:border-primary transition-all"
>
  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
  Download Resume
</a>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 relative flex justify-center"
        >
          <div className="relative w-[320px] h-[420px] md:w-[420px] md:h-[520px]">
            <div className="absolute inset-0 rounded-[50%] bg-gradient-primary blur-3xl opacity-40 animate-[glow_4s_ease-in-out_infinite]" />
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute bottom-10 -left-8 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary shadow-glow-blue animate-[float_8s_ease-in-out_infinite]" />
            <div className="relative w-full h-full rounded-[40%_60%_55%_45%/55%_45%_60%_40%] overflow-hidden glass-strong shadow-glow">
              <img
                src={profile}
                alt="Shruti Mahesh Ishwarshete"
                width={420}
                height={520}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
