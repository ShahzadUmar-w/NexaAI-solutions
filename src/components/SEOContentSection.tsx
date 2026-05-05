import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, HelpCircle, SearchCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { officeAddInFaqs } from "@/lib/seo-data";

const serviceTopics = [
  {
    title: "Custom Outlook Add-in Development",
    href: "/outlook-add-in-development",
    text: "Build Outlook add-ins for email automation, CRM sync, meeting workflows, attachments, task creation, and Microsoft Graph-powered business processes.",
  },
  {
    title: "Excel Add-ins for Business Automation",
    href: "/excel-add-in-development",
    text: "Create Excel add-ins for API imports, reporting, custom functions, financial workflows, dashboards, and repeatable data operations.",
  },
  {
    title: "Word and PowerPoint Add-ins",
    href: "/word-add-in-development",
    text: "Automate document generation, proposal creation, templates, brand compliance, PDF export, and internal content workflows.",
  },
  {
    title: "Microsoft Graph Integration",
    href: "/#enterprise",
    text: "Connect Office add-ins with mail, calendar, files, users, Teams, SharePoint, and secure Microsoft 365 tenant data.",
  },
];

const SEOContentSection = () => {
  return (
    <section id="office-addin-development" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="gradient-text-orange mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
            <SearchCheck className="h-4 w-4" />
            Office Add-in Development
          </span>
          <h2 className="mb-5 font-heading text-3xl font-bold md:text-4xl">
            Custom Office add-in development services for
            <span className="gradient-text-both"> Microsoft 365 teams</span>
          </h2>
          <p className="text-muted-foreground">
            If you need to hire an Office add-in developer, this service is focused on secure business automation, Microsoft Graph integrations, and production-ready deployment.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-4">
          {serviceTopics.map((topic, index) => (
            <motion.article
              key={topic.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-orange-500/10 glass p-6 text-left transition-all duration-300 hover:border-orange-500/30 hover:shadow-glow-orange"
            >
              <BookOpen className="mb-4 h-6 w-6 text-orange-300" />
              <h3 className="mb-3 text-lg font-bold text-foreground">
                <a href={topic.href} className="transition-colors hover:text-orange-200">
                  {topic.title}
                </a>
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">{topic.text}</p>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl glass-orange p-7 text-left"
          >
            <h3 className="mb-4 text-2xl font-bold text-foreground">Best fit for search intent like:</h3>
            <div className="space-y-3">
              {[
                "hire Office add-in developer",
                "custom Outlook add-in development services",
                "Excel add-in developer for business automation",
                "Microsoft Graph integration developer",
              ].map((item) => (
                <p key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                  {item}
                </p>
              ))}
            </div>

            <Button variant="hero" size="lg" className="mt-7 group" asChild>
              <a href="#contact">
                Discuss Your Add-in
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-purple-500/10 glass p-7 text-left"
          >
            <div className="mb-5 flex items-center gap-3">
              <HelpCircle className="h-6 w-6 text-purple-300" />
              <h3 className="text-2xl font-bold text-foreground">Office Add-in Development FAQ</h3>
            </div>

            <div className="space-y-4">
              {officeAddInFaqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl glass-light p-4">
                  <h4 className="mb-2 font-semibold text-foreground">{faq.question}</h4>
                  <p className="text-sm leading-6 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SEOContentSection;
