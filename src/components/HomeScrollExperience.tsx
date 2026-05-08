import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Workflow", href: "#workflow" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Integrations", href: "#integrations" },
  { label: "Contact", href: "#contact" },
];

const HomeScrollExperience = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[70] h-1 origin-left bg-gradient-to-r from-cyan-500 via-orange-400 to-pink-500"
        style={{ scaleX: progress }}
      />

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="home-ambient-plane" />
        <motion.div
          className="absolute left-0 top-20 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent dark:via-orange-300/15"
          style={{ scaleX: progress }}
        />
      </div>

      <motion.aside
        initial={{ opacity: 0, x: 18 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.55, delay: 0.35 }}
        className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
        aria-label="Home page sections"
      >
        <div className="rounded-full border border-slate-200 bg-white/[0.76] p-2 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-[#070b14]/70">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/[0.075] dark:hover:text-orange-100"
                aria-label={item.label}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current transition-transform group-hover:scale-150" />
                <span className="pointer-events-none absolute right-12 top-1/2 flex -translate-y-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-800 opacity-0 shadow-soft transition-all group-hover:right-11 group-hover:opacity-100 dark:border-white/10 dark:bg-[#070b14] dark:text-orange-100">
                  {item.label}
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default HomeScrollExperience;
