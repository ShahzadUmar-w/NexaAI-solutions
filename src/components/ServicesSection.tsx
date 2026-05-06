import { motion } from "framer-motion";
import { Mail, TableProperties, FileText, Presentation, ArrowRight, Sparkles, Video } from "lucide-react";

const services = [
  {
    icon: Mail,
    title: "Outlook Add-ins",
    description:
      "Custom Outlook solutions for email automation, calendar extensions, attachment management, and workflow automation.",
    features: ["Office.js / VSTO Integration", "Email Automation", "Calendar/Task Sync", "Attachment & PDF Workflows"],
  },
  {
    icon: TableProperties,
    title: "Excel Add-ins",
    description:
      "Excel add-ins with advanced formulas, data automation, macOS support, and business intelligence dashboards.",
    features: ["Custom Functions", "Data Automation", "Power BI Integration", "Mac & Web Support"],
  },
  {
    icon: FileText,
    title: "Word Add-ins",
    description:
      "Document automation and template-driven Word add-ins for contracts, reports, legal workflows, and compliance.",
    features: ["Template Management", "Document Assembly", "Content Controls", "PDF Export Workflows"],
  },
  {
    icon: Presentation,
    title: "PowerPoint Add-ins",
    description:
      "Presentation tools for slide automation, branded templates, content generation, and export workflows.",
    features: ["Template Automation", "Slide Libraries", "Brand Compliance", "File Export"],
  },
  {
    icon: Sparkles,
    title: "Google Workspace Add-ons",
    description:
      "Custom Gmail, Sheets, Docs, and Slides add-ons for business automation and cloud workflow integration.",
    features: ["Gmail Automation", "Sheets Extensions", "Docs/Slides Add-ons", "Google API Integration"],
  },
  {
    icon: Video,
    title: "Electron Desktop Apps",
    description:
      "Cross-platform desktop applications built with Electron, React, Node.js and packaged for Windows, macOS and Linux.",
    features: ["Electron JS Apps", "MS Store Publishing", "Node.js Backend", "Desktop Workflow Tools"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.025] to-transparent" />
      <div className="absolute right-10 top-24 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.span
            className="section-kicker"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            Services
          </motion.span>
          
          <motion.h2 
            className="section-title mb-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Office 365, Google Workspace, and Electron
            <motion.span
              className="gradient-text-both block"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
            >
              Automation Solutions
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Senior Office 365 add-in developer with 5+ years of experience building Outlook, Excel, Word, PowerPoint, Teams, Google Workspace and Electron automation tools.
            I deliver reliable business workflows, document automation and AI-powered integrations.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="enterprise-card group relative overflow-hidden p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.045] to-pink-500/[0.025] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="flex items-start gap-4 relative z-10">
                <div
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-orange-300/15 bg-orange-300/10 transition-all duration-300 group-hover:bg-orange-300/15"
                >
                  <service.icon className="h-7 w-7 text-orange-200" />
                </div>
                
                <div className="flex-1">
                  <motion.h3
                    className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover:text-orange-100"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-muted-foreground text-sm mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.div
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.span
                        key={feature}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: index * 0.08 + featureIndex * 0.04 }}
                        className="rounded-md border border-white/10 bg-white/[0.045] px-2.5 py-1 text-xs text-orange-100 transition-all duration-200"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </div>
              
              <motion.div
                className="mt-6 pt-6 border-t border-border"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
              >
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-200 transition-all duration-300 hover:text-orange-100"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

