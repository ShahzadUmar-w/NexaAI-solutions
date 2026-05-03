import { motion, useInView } from "framer-motion";
import { Mail, TableProperties, FileText, Presentation, ArrowRight, Sparkles, Video } from "lucide-react";
import { useRef } from "react";

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
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-purple-500/5 to-transparent"
      />
      
      {/* Floating Background Elements */}
      <motion.div
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"
      />
      <motion.div
        animate={{ 
          y: [20, -20, 20],
          rotate: [0, -3, 3, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-20 left-10 w-40 h-40 bg-purple-500/8 rounded-full blur-2xl"
      />

      <div ref={containerRef} className="section-container relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span 
            className="gradient-text-orange font-semibold text-sm uppercase tracking-wider mb-4 block relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              className="inline-block mr-2"
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            Services
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Office 365, Google Workspace, and Electron
            <motion.span 
              className="gradient-text-both relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
            >
              Automation Solutions
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 blur-lg -z-10"
              />
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

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                bounce: 0.3
              }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group glass card-hover p-8 hover:shadow-glow-orange transition-all duration-500 border border-orange-500/10 hover:border-orange-500/30 relative overflow-hidden"
            >
              {/* Card Background Glow */}
              <motion.div
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-purple-500/10 rounded-lg"
              />

              <div className="flex items-start gap-4 relative z-10">
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gradient-orange/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-orange/20 transition-all duration-300"
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1,
                    transition: { duration: 0.5 }
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <service.icon className="w-7 h-7 bg-gradient-orange bg-clip-text text-transparent" />
                  </motion.div>
                </motion.div>
                
                <div className="flex-1">
                  <motion.h3 
                    className="text-xl font-semibold text-foreground mb-2 group-hover:text-orange-300 transition-colors"
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
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.15 + 0.5 + featureIndex * 0.1 
                        }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(255, 122, 24, 0.1)"
                        }}
                        className="text-xs px-2.5 py-1 rounded-md glass-light text-orange-300 cursor-pointer transition-all duration-200"
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
                  href="#contact"
                  className="inline-flex items-center gap-2 gradient-text-orange font-medium text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  >
                    Discuss Your Project
                  </motion.span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 + 0.5 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
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
