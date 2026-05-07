import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileCheck2,
  KeyRound,
  LifeBuoy,
  LockKeyhole,
  Rocket,
  ServerCog,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { outlookBookingUrl } from "@/lib/booking";

const readinessCards = [
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description: "Built around OAuth, Microsoft identity, least-privilege access, and safe API handling from the first sprint.",
    points: ["OAuth 2.0 flows", "Microsoft Entra ID ready", "No plain credential storage"],
  },
  {
    icon: ServerCog,
    title: "Enterprise Deployment",
    description: "Add-ins are prepared for centralized Microsoft 365 rollout, tenant testing, and production release planning.",
    points: ["Admin Center deployment", "Tenant-level validation", "AppSource guidance"],
  },
  {
    icon: UsersRound,
    title: "Governance Friendly",
    description: "Designed to fit business roles, approval flows, audit expectations, and internal IT review processes.",
    points: ["Role-based features", "Permission review", "Scalable architecture"],
  },
  {
    icon: LifeBuoy,
    title: "Post-launch Support",
    description: "Support options for bug fixes, version updates, Microsoft platform changes, and future workflow improvements.",
    points: ["Priority fixes", "Maintenance options", "Roadmap improvements"],
  },
];

const processSteps = [
  { icon: Building2, label: "Discovery", text: "Understand teams, workflow, risks, and business goals." },
  { icon: FileCheck2, label: "Architecture", text: "Define scope, permissions, APIs, data flow, and release path." },
  { icon: LockKeyhole, label: "Build & Test", text: "Develop with security, QA, cross-platform checks, and feedback loops." },
  { icon: Rocket, label: "Deploy", text: "Support rollout, documentation, training notes, and post-launch fixes." },
];

const trustSignals = [
  "Microsoft Graph integration",
  "Office.js cross-platform support",
  "React + TypeScript frontends",
  "Azure-ready backend workflows",
  "Clear scope before development",
  "Documentation for handoff",
];

const EnterpriseReadinessSection = () => {
  return (
    <section id="enterprise" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-purple-500/5" />
      <motion.div
        animate={{ rotate: [0, 180, 360], opacity: [0.14, 0.28, 0.14] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute -right-40 top-12 h-[420px] w-[420px] rounded-full border border-orange-400/20 bg-orange-500/10 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.12, 1], y: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-28 bottom-12 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="gradient-text-orange mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
            <BadgeCheck className="h-4 w-4" />
            Enterprise Readiness
          </span>
          <h2 className="mb-5 font-heading text-3xl font-bold md:text-4xl">
            Built for teams that care about
            <span className="gradient-text-both"> security, rollout, and reliability</span>
          </h2>
          <p className="text-muted-foreground">
            Enterprise Office add-ins need more than a clean UI. They need permission planning, secure integrations, deployment support, and a maintenance path your IT team can trust.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-4">
          {readinessCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 36, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1, type: "spring", bounce: 0.25 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-orange-500/10 glass p-6 text-left transition-all duration-500 hover:border-orange-500/30 hover:shadow-glow-orange"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-orange/10 text-orange-300 group-hover:bg-gradient-orange/20">
                  <card.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground group-hover:text-orange-200">{card.title}</h3>
                <p className="mb-5 text-sm leading-6 text-muted-foreground">{card.description}</p>
                <ul className="space-y-3">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-foreground/85">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="rounded-3xl glass-orange p-7 text-left"
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background/30 text-orange-200">
                <KeyRound className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-200">Enterprise Process</p>
                <h3 className="text-xl font-bold text-foreground">A safer path from idea to deployment</h3>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl bg-background/25 p-4"
                >
                  <step.icon className="mb-3 h-6 w-6 text-orange-300" />
                  <h4 className="mb-2 font-semibold text-foreground">{step.label}</h4>
                  <p className="text-xs leading-5 text-muted-foreground">{step.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded-3xl border border-purple-500/10 glass p-7 text-left"
          >
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider gradient-text-purple">Trust Signals</p>
            <h3 className="mb-5 text-xl font-bold text-foreground">What your IT and operations teams can review</h3>
            <div className="space-y-3">
              {trustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-3 rounded-xl glass-light px-4 py-3 text-sm text-foreground/90">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-purple-300" />
                  {signal}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-12 max-w-4xl rounded-2xl glass-light p-6 text-center"
        >
          <h3 className="mb-2 text-xl font-bold text-foreground">Start with a technical discovery call</h3>
          <p className="mx-auto mb-5 max-w-2xl text-sm text-muted-foreground">
            Before development starts, we clarify scope, permissions, integrations, risks, timeline, and deployment requirements so your team knows exactly what will be built.
          </p>
          <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
            <a href={outlookBookingUrl} target="_blank" rel="noreferrer">
              <span>Request Enterprise Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseReadinessSection;

