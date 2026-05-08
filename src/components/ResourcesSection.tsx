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
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="section-kicker">
            Resources
          </span>
          <h2 className="section-title mb-5">
            Helpful pages before
            <span className="gradient-text-both block">starting an add-in project</span>
          </h2>
          <p className="text-muted-foreground">
            Short guides for teams researching Office add-ins, Microsoft Graph, deployment, and enterprise automation.
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
              className="group enterprise-card p-6 text-left"
            >
              <resource.icon className="mb-4 h-7 w-7 text-orange-300" />
              <h3 className="mb-3 text-lg font-bold text-foreground">{resource.label}</h3>
              <p className="mb-5 text-sm leading-6 text-muted-foreground">{resource.description}</p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-700 dark:text-orange-200">
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
