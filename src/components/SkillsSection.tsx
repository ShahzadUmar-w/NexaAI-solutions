import { motion } from "framer-motion";
import {
  Bot,
  Braces,
  Code2,
  Database,
  FileCode2,
  Layers3,
  Network,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Interfaces for add-ins, dashboards, portals, and workflow tools.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Office UI", "Responsive UI"],
  },
  {
    icon: ServerCog,
    title: "Backend",
    description: "APIs, authentication, permissions, business logic, and integration services.",
    tools: ["Node.js", "REST APIs", "Express", "OAuth", "Webhooks"],
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Email, document, reporting, CRM, and repetitive operations automation.",
    tools: ["Make.com", "n8n", "Power Automate", "Google Apps Script", "Zapier"],
  },
  {
    icon: Database,
    title: "Database",
    description: "Data storage, reporting flows, imports, validation, and data processing.",
    tools: ["PostgreSQL", "SQL Server", "MongoDB", "Firebase", "Excel Data"],
  },
  {
    icon: FileCode2,
    title: "Office Add-ins",
    description: "Office.js development for Microsoft 365 apps and admin deployment.",
    tools: ["Outlook", "Excel", "Word", "PowerPoint", "Microsoft Graph"],
  },
  {
    icon: Bot,
    title: "AI & APIs",
    description: "AI features, document workflows, Graph API, CRM APIs, and custom integrations.",
    tools: ["AI APIs", "OpenAI", "Graph API", "CRM APIs", "Custom Integrations"],
  },
];

const highlights = [
  { icon: ShieldCheck, label: "Secure architecture" },
  { icon: Braces, label: "Clean code delivery" },
  { icon: Network, label: "API-first workflows" },
  { icon: Layers3, label: "Scalable components" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative overflow-hidden border-y border-slate-200/80 bg-white/65 py-24 dark:border-white/10 dark:bg-white/[0.018]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent" />

      <div className="section-container relative z-10">
        <div
          // initial={{ opacity: 0, y: 24 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="section-kicker">
            <ShieldCheck className="h-4 w-4" />
            Technical Skills
          </span>
          <h2 className="section-title mb-5">
            Skills used on real
            <span className="gradient-text-both block">client delivery work.</span>
          </h2>
          <p className="text-muted-foreground">
            A practical mix of frontend, backend, automation, database, add-in, and integration work used across client projects.
          </p>
        </div>

        <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="enterprise-card flex items-center gap-3 p-4 text-left"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-soft dark:border-orange-300/15 dark:bg-orange-300/10 dark:text-orange-200">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 xl:grid-cols-3 dark:border-white/10 dark:bg-white/10">
          {skillGroups.map((skill, index) => (
            <motion.article
              key={skill.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group relative overflow-hidden bg-card/90 p-6 text-left backdrop-blur-xl transition-colors hover:bg-white dark:bg-background/80 dark:hover:bg-white/[0.045]"
            >
              <div className="relative z-10">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/[0.045] dark:text-orange-200">
                  <skill.icon className="h-6 w-6" />
                </div>

                <h3 className="mb-3 text-lg font-bold text-foreground">{skill.title}</h3>
                <p className="mb-5 text-sm leading-6 text-muted-foreground">{skill.description}</p>

                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.045] dark:text-orange-100"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
