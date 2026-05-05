import { motion } from "framer-motion";
import { ArrowRight, BookOpen, FileText, Network, Rocket } from "lucide-react";

const resources = [
  {
    icon: Network,
    label: "Microsoft Graph Integration",
    description: "Graph API integrations for mail, calendar, files, users, Teams, and secure Microsoft 365 workflows.",
    href: "/microsoft-graph-integration",
  },
  {
    icon: Rocket,
    label: "M365 Add-in Deployment",
    description: "Manifest review, tenant validation, centralized deployment, and production rollout support.",
    href: "/microsoft-365-add-in-deployment",
  },
  {
    icon: BookOpen,
    label: "How to Build an Outlook Add-in",
    description: "A practical guide covering Office.js, Graph, OAuth, testing, and deployment readiness.",
    href: "/how-to-build-outlook-add-in",
  },
  {
    icon: FileText,
    label: "Office.js vs VSTO",
    description: "Compare platform support, deployment, maintenance, and enterprise use cases.",
    href: "/office-js-vs-vsto",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="gradient-text-purple mb-4 block text-sm font-semibold uppercase tracking-wider">
            Resources
          </span>
          <h2 className="mb-5 font-heading text-3xl font-bold md:text-4xl">
            Guides and pages that build
            <span className="gradient-text-both"> topical authority</span>
          </h2>
          <p className="text-muted-foreground">
            Helpful pages for teams researching Office add-ins, Microsoft Graph, deployment, and enterprise automation before hiring a developer.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <motion.a
              key={resource.href}
              href={resource.href}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group rounded-2xl border border-purple-500/10 glass p-6 text-left transition-all hover:border-purple-500/30 hover:shadow-glow-purple"
            >
              <resource.icon className="mb-4 h-7 w-7 text-purple-300" />
              <h3 className="mb-3 text-lg font-bold text-foreground group-hover:text-purple-200">{resource.label}</h3>
              <p className="mb-5 text-sm leading-6 text-muted-foreground">{resource.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-200">
                Read page
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
