import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  LockKeyhole,
  Mail,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const directEmailHref =
  "mailto:shahzad890.it@gmail.com?subject=Enterprise%20Office%20Add-in%20Consultation&body=Hi%20Shahzad%2C%0A%0AI%20would%20like%20to%20discuss%20an%20enterprise%20Office%20add-in%20project.%0A%0ACompany%3A%0AProject%20type%3A%0ATimeline%3A%0AKey%20requirements%3A%0A%0AThanks.";

const trustPoints = [
  "Office.js and Microsoft Graph",
  "Secure OAuth permission planning",
  "Microsoft 365 Admin deployment support",
];

const metrics = [
  { value: "50+", label: "Projects delivered" },
  { value: "5+", label: "Years experience" },
  { value: "24h", label: "Response time" },
];

const workflowSteps = [
  { label: "Discovery", status: "Scope locked" },
  { label: "Architecture", status: "Security reviewed" },
  { label: "Build", status: "TypeScript + Office.js" },
  { label: "Deploy", status: "M365 rollout ready" },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden pt-28 lg:pt-32">
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,24,0.18),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(142,45,226,0.16),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(255,179,71,0.09),transparent_34%)]" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />

      <motion.div
        animate={{ y: [-18, 18, -18], opacity: [0.35, 0.6, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8rem] top-24 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [18, -18, 18], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="section-container relative z-10">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-16 lg:grid-cols-[1.05fr,0.95fr]">
          <div className="max-w-3xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-100 backdrop-blur-xl"
            >
              <BadgeCheck className="h-4 w-4 text-orange-300" />
              Enterprise Microsoft 365 Add-in Development
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Build secure Office add-ins your
              <span className="gradient-text-both block">enterprise team can trust.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mx-auto mb-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl lg:mx-0"
            >
              Production-ready Outlook, Excel, Word, and PowerPoint add-ins with secure identity, Microsoft Graph integrations, admin rollout support, and clean technical handoff.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="mb-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start"
            >
              <Button variant="hero" size="xl" asChild className="group rounded-2xl px-8">
                <a href="#contact">
                  Book Enterprise Call
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                asChild
                className="group rounded-2xl border-orange-400/40 bg-white/[0.03] px-8 hover:bg-orange-500/10"
              >
                <a href={directEmailHref}>
                  Email Project Brief
                  <Mail className="ml-2 h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.46 }}
              className="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              {trustPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 rounded-xl glass-light px-3.5 py-2 text-sm text-foreground/90">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-300" />
                  {point}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.58 }}
              className="grid gap-3 sm:grid-cols-3"
            >
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                  <p className="gradient-text-both text-3xl font-extrabold">{metric.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.75, delay: 0.25, type: "spring", bounce: 0.18 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-orange-500/20 via-purple-500/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-orange-500/15 bg-slate-950/55 p-6 shadow-soft-lg backdrop-blur-2xl">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm font-semibold text-orange-200">Delivery Overview</p>
                  <h2 className="mt-1 text-2xl font-bold text-foreground">Enterprise Add-in Build</h2>
                </div>
                <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">
                  Ready
                </div>
              </div>

              <div className="mb-6 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl glass-light p-4">
                  <ShieldCheck className="mb-3 h-6 w-6 text-orange-300" />
                  <p className="text-sm font-semibold text-foreground">Secure</p>
                  <p className="mt-1 text-xs text-muted-foreground">OAuth + scopes</p>
                </div>
                <div className="rounded-2xl glass-light p-4">
                  <ServerCog className="mb-3 h-6 w-6 text-purple-300" />
                  <p className="text-sm font-semibold text-foreground">Deployable</p>
                  <p className="mt-1 text-xs text-muted-foreground">M365 Admin</p>
                </div>
                <div className="rounded-2xl glass-light p-4">
                  <LockKeyhole className="mb-3 h-6 w-6 text-orange-300" />
                  <p className="text-sm font-semibold text-foreground">Controlled</p>
                  <p className="mt-1 text-xs text-muted-foreground">IT review</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-orange/15 text-orange-300">
                    <Workflow className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Workflow Path</p>
                    <p className="text-xs text-muted-foreground">Clear process from idea to rollout</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {workflowSteps.map((step, index) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 18 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                      className="flex items-center gap-3 rounded-xl bg-background/35 p-3"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-500/15 text-xs font-bold text-orange-200">
                        0{index + 1}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground">{step.label}</p>
                        <p className="text-xs text-muted-foreground">{step.status}</p>
                      </div>
                      <CheckCircle2 className="h-4 w-4 text-orange-300" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Outlook", "Excel", "Word", "PowerPoint", "Teams"].map((app) => (
                  <span key={app} className="rounded-full border border-orange-400/15 bg-orange-500/10 px-3 py-1.5 text-xs font-medium text-orange-100">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
