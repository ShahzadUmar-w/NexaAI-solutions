import { motion } from "framer-motion";
import { Building2, CheckCircle2, Globe2, Sparkles } from "lucide-react";

const companies = [
  "DataHive",
  "LegalTech Firm",
  "Healthcare SaaS",
  "Real Estate CRM",
  "Education Platform",
  "Retail Operations",
  "Consulting Agency",
  "Logistics Company",
];

const industries = [
  "Microsoft 365",
  "Office.js",
  "Electron Apps",
  "Google Workspace",
  "Automation",
  "AI Workflows",
];

const marqueeItems = [...companies, ...companies];

const CompaniesSection = () => {
  return (
    <section id="companies" className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-purple-500/10 to-orange-500/5" />
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-72 w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-500/15 to-purple-500/15 blur-3xl"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="gradient-text-orange mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
            <Building2 className="h-4 w-4" />
            Companies
          </span>
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
            Companies and teams
            <span className="gradient-text-both"> we have worked with</span>
          </h2>
          <p className="text-muted-foreground">
            A moving snapshot of client industries and product teams supported through add-ins, desktop apps, and workflow automation.
          </p>
        </motion.div>

        <div className="relative overflow-hidden rounded-3xl border border-orange-500/10 glass py-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-28 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-28 bg-gradient-to-l from-background to-transparent" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-5 px-5"
          >
            {marqueeItems.map((company, index) => (
              <motion.div
                key={`${company}-${index}`}
                whileHover={{ y: -6, scale: 1.04 }}
                className="group flex min-w-[230px] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md transition-all duration-300 hover:border-orange-400/30 hover:bg-orange-500/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-orange/10 text-orange-300 group-hover:bg-gradient-orange/20">
                  <Globe2 className="h-6 w-6" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">{company}</p>
                  <p className="text-xs text-muted-foreground">Automation Partner</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {industries.map((industry, index) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="inline-flex items-center gap-2 rounded-full glass-light px-4 py-2 text-xs font-medium text-orange-100"
            >
              {index % 2 === 0 ? (
                <CheckCircle2 className="h-3.5 w-3.5 text-orange-300" />
              ) : (
                <Sparkles className="h-3.5 w-3.5 text-purple-300" />
              )}
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompaniesSection;
