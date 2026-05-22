import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="border-t border-border/50 py-8 px-6 text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Shruti Mahesh Ishwarshete · Crafted with{" "}
          <span className="text-gradient font-semibold">passion</span> & clean code.
        </p>
      </footer>

      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform animate-[fade-up_0.3s_ease-out]"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
}
