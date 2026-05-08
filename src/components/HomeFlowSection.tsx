import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, ClipboardList, Code2, LockKeyhole, Rocket } from "lucide-react";
import { useRef } from "react";

const flowSteps = [
  {
    icon: ClipboardList,
    eyebrow: "01",
    title: "Scope the exact workflow",
    text: "We define the Office surface, user roles, data sources, permission needs, and launch path before building.",
  },
  {
    icon: Code2,
    eyebrow: "02",
    title: "Design the add-in system",
    text: "Task panes, commands, Office.js actions, backend endpoints, and UI states are planned as one product flow.",
  },
  {
    icon: LockKeyhole,
    eyebrow: "03",
    title: "Connect securely",
    text: "OAuth, Microsoft Graph, CRM, ERP, document systems, and private APIs are integrated with validation and error handling.",
  },
  {
    icon: Rocket,
    eyebrow: "04",
    title: "Test, deploy, and hand over",
    text: "The add-in is prepared for Microsoft 365 rollout with testing notes, deployment support, and post-launch fixes.",
  },
];

const workflowPreviewImage = "/assets/Purple%20Gradient%20AI%20Development%20Youtube%20Thumbnail%20(2).png";

const HomeFlowSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 40%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} id="workflow" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(14,165,233,0.08)_42%,transparent_72%)] dark:bg-[linear-gradient(115deg,transparent_0%,rgba(255,209,61,0.06)_42%,transparent_72%)]" />

      <div className="section-container relative z-10">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.72fr,1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[29rem] text-left lg:sticky lg:top-28"
          >
            <span className="section-kicker">
              <CheckCircle2 className="h-4 w-4" />
              Delivery Flow
            </span>
            <h2 className="section-title mb-5">
              A cleaner path from idea to
              <span className="gradient-text-both block">production add-in.</span>
            </h2>
            <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              Every engagement is shaped around a practical delivery journey: scope, build, integration, deployment, proof, and support.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045]"
            >
              <img
                src={workflowPreviewImage}
                alt="Nexa AI office add-ins development preview"
                className="aspect-video w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-[46rem]">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-slate-200 dark:bg-white/10 sm:block" />
            <motion.div
              className="absolute left-5 top-0 hidden h-full w-px origin-top bg-gradient-to-b from-cyan-500 via-orange-400 to-pink-500 sm:block"
              style={{ scaleY: lineScale }}
            />

            <div className="grid gap-5">
              {flowSteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative grid gap-4 rounded-[1.5rem] border border-slate-200 bg-white/[0.84] p-5 text-left shadow-soft backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-orange-300/60 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-orange-300/25 dark:hover:bg-white/[0.065] sm:grid-cols-[auto,1fr] sm:p-6"
                >
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 shadow-soft transition-colors group-hover:border-orange-200 group-hover:bg-orange-50 group-hover:text-orange-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-orange-200 dark:group-hover:border-orange-300/20 dark:group-hover:bg-orange-300/10">
                    <step.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-200">{step.eyebrow}</p>
                    <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">{step.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFlowSection;
