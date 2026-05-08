import { motion } from "framer-motion";
import { Building2, CheckCircle2 } from "lucide-react";

const trustAreas = [
  "Microsoft 365 teams",
  "Business automation",
  "Office.js add-ins",
  "Google Workspace add-ons",
  "Electron desktop apps",
  "API integrations",
];

const CompaniesSection = () => {
  return (
    <section id="companies" className="relative overflow-hidden border-y border-slate-200/80 bg-[#fbfcfe]/80 py-20 dark:border-white/10 dark:bg-white/[0.018]">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="section-kicker">
            <Building2 className="h-4 w-4" />
            Client Work
          </span>
          <h2 className="section-title mb-4">
            Built for teams that need
            <span className="gradient-text-both block">reliable business tools</span>
          </h2>
          <p className="text-muted-foreground">
            Client names are kept private unless approved, but the work spans add-ins, desktop apps, integrations, and automation systems.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trustAreas.map((area, index) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/80 px-5 py-4 text-left text-sm font-semibold text-foreground shadow-soft dark:border-white/10 dark:bg-white/[0.035]"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-300" />
              {area}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;
