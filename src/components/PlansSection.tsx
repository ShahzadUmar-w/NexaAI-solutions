import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, PlaneTakeoff, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "MVP Add-in",
    price: "Starting at $499",
    tagline: "Small automation or MVP add-in",
    description: "Best for validating one focused Office add-in workflow before expanding.",
    cta: "Start MVP",
    features: [
      "1 Office app add-in",
      "Basic Office.js integration",
      "Simple UI screens",
      "Deployment guidance",
    ],
  },
  {
    name: "Business Automation",
    price: "From $1,499",
    tagline: "Production-ready business solution",
    description: "A polished add-in with real workflow logic, APIs, and user-ready experience.",
    cta: "Build Production Add-in",
    features: [
      "Advanced Office.js features",
      "Microsoft Graph/API integration",
      "Responsive React UI",
      "Testing and bug fixing",
      "1 month support",
    ],
    popular: true,
  },
  {
    name: "Enterprise Workflow",
    price: "Custom Quote",
    tagline: "Complex automation and long-term builds",
    description: "For multi-app add-ins, AI workflows, admin controls, and ongoing product work.",
    cta: "Request Custom Quote",
    features: [
      "Multi-platform add-ins",
      "AI and automation workflows",
      "Role-based features",
      "Publishing support",
      "Ongoing maintenance",
    ],
  },
];

const trustBadges = [
  { label: "Office.js Expert", icon: Code2 },
  { label: "Microsoft Graph", icon: Workflow },
  { label: "React + TypeScript", icon: Sparkles },
  { label: "Post-launch Support", icon: ShieldCheck },
];

const PlansSection = () => {
  return (
    <section id="plans" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.035] to-transparent" />
      <div className="absolute inset-x-0 top-10 mx-auto h-80 max-w-5xl rounded-full bg-orange-500/10 blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="section-kicker">
            <PlaneTakeoff className="h-4 w-4" />
            Plans
          </span>
          <h2 className="section-title mb-5">
            Choose a project plan that fits your
            <span className="gradient-text-both block">Office add-in goals</span>
          </h2>
          <p className="text-muted-foreground">
            Start lean, build production-ready, or scale into a complete automation product. Every plan can be adjusted after we review your workflow.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {trustBadges.map((badge, index) => (
              <motion.span
                key={badge.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.08 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/[0.85] px-4 py-2 text-xs font-medium text-slate-700 shadow-soft dark:border-white/10 dark:bg-white/[0.045] dark:text-orange-100"
              >
                <badge.icon className="h-3.5 w-3.5 text-orange-300" />
                {badge.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.article
              key={plan.name}
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                type: "spring",
                bounce: 0.25,
              }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl p-8 text-left transition-all duration-500 ${
                plan.popular
                  ? "border border-orange-300/25 bg-orange-300/10 shadow-soft-lg lg:-mt-6"
                  : "enterprise-card"
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-gradient-orange px-3 py-1 text-xs font-bold text-slate-950 shadow-glow-orange"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Popular
                </motion.div>
              )}

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-orange/10 text-orange-300 group-hover:bg-gradient-orange/20">
                  {plan.popular ? <ShieldCheck className="h-7 w-7" /> : <PlaneTakeoff className="h-7 w-7" />}
                </div>

                <h3 className="mb-2 text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{plan.tagline}</p>

                <div className="mb-6 flex items-end gap-2">
                  <span className="gradient-text-both text-3xl font-bold md:text-4xl">{plan.price}</span>
                  {plan.price !== "Custom Quote" && <span className="pb-1 text-sm text-muted-foreground">/ project</span>}
                </div>

                <p className="mb-7 min-h-12 text-sm leading-6 text-muted-foreground">{plan.description}</p>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant={plan.popular ? "hero" : "heroOutline"} size="lg" className="w-full group/btn" asChild>
                  <a href="/contact">
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl glass-light p-5 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Not sure which plan fits? Share your workflow and I will help you choose the right scope before you commit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;


