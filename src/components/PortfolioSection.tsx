import { motion, useInView } from "framer-motion";
import { ExternalLink, Mail, TableProperties, FileText, Sparkles, TrendingUp } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    icon: Mail,
    title: "Enterprise Email Workflow",
    category: "Outlook Add-in",
    description:
      "Automated email processing add-in for a Fortune 500 company. Handles 10,000+ emails daily with smart categorization and task creation.",
    technologies: ["Office.js", "React", "Azure Functions", "Microsoft Graph"],
    metrics: "10,000+ emails/day",
  },
  {
    icon: TableProperties,
    title: "Financial Data Analyzer",
    category: "Excel Add-in",
    description:
      "Custom Excel add-in for a financial services firm. Real-time data feeds, custom formulas, and automated reporting.",
    technologies: ["Office.js", "TypeScript", "REST APIs", "Custom Functions"],
    metrics: "500+ daily users",
  },
  {
    icon: FileText,
    title: "Legal Document Generator",
    category: "Word Add-in",
    description:
      "Document automation solution for a law firm. Generates contracts, NDAs, and legal documents from templates with dynamic content.",
    technologies: ["Office.js", "Node.js", "Document Templates", "Azure AD"],
    metrics: "5,000+ docs/month",
  },
  {
    icon: Mail,
    title: "CRM Integration Suite",
    category: "Outlook Add-in",
    description:
      "Seamless CRM integration add-in that syncs emails, contacts, and calendar events with Salesforce and HubSpot.",
    technologies: ["Office.js", "Microsoft Graph", "REST APIs", "OAuth 2.0"],
    metrics: "98% sync accuracy",
  },
  {
    icon: TableProperties,
    title: "Inventory Management Tool",
    category: "Excel Add-in",
    description:
      "Real-time inventory tracking add-in connected to warehouse management systems. Automatic stock updates and reorder alerts.",
    technologies: ["Office.js", "WebSockets", "SQL Server", "Power Automate"],
    metrics: "Real-time updates",
  },
  {
    icon: FileText,
    title: "Proposal Builder",
    category: "PowerPoint Add-in",
    description:
      "Sales proposal automation tool that pulls data from CRM to create customized presentations with brand-compliant templates.",
    technologies: ["Office.js", "React", "SharePoint", "Microsoft Graph"],
    metrics: "70% time saved",
  },
];

const PortfolioSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <motion.div 
        animate={{ 
          backgroundPosition: ["0% 0%", "100% 100%"],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
      />
      
      {/* Floating Background Elements */}
      <motion.div
        animate={{ 
          y: [-30, 30, -30],
          x: [-20, 20, -20],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-20 w-24 h-24 bg-orange-500/8 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          y: [30, -30, 30],
          x: [20, -20, 20],
          rotate: [0, -8, 8, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-40 left-20 w-32 h-32 bg-purple-500/6 rounded-full blur-xl"
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
            className="gradient-text-purple font-semibold text-sm uppercase tracking-wider mb-4 block relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1.5 }}
              className="inline-block mr-2"
            >
              <Sparkles className="w-4 h-4" />
            </motion.div>
            Portfolio
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Featured{" "}
            <motion.span 
              className="gradient-text-both relative"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
            >
              Projects
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-orange-500/20 blur-lg -z-10"
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
            A selection of production add-ins I've built for clients across various
            industries. Each project solved real business challenges.
          </motion.p>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                type: "spring",
                bounce: 0.3
              }}
              whileHover={{ 
                y: -12,
                scale: 1.03,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group glass card-hover overflow-hidden border border-purple-500/10 hover:border-purple-500/30 hover:shadow-glow-purple transition-all duration-500 relative"
            >
              {/* Card Background Glow */}
              <motion.div
                animate={{ opacity: [0, 0.15, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: index * 0.7 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-orange-500/10 rounded-lg"
              />

              {/* Header */}
              <div className="p-6 pb-0 relative z-10">
                <motion.div 
                  className="flex items-center justify-between mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-lg bg-gradient-purple/10 flex items-center justify-center group-hover:bg-gradient-purple/20 transition-all duration-300"
                    whileHover={{ 
                      rotate: [0, -15, 15, 0],
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.4 }}
                    >
                      <project.icon className="w-6 h-6 bg-gradient-purple bg-clip-text text-transparent" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.span 
                    className="text-xs font-medium gradient-text-purple bg-purple-500/10 px-3 py-1 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.span>
                </motion.div>
                
                <motion.h3 
                  className="text-lg font-semibold text-foreground mb-2 group-hover:text-purple-300 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-sm text-muted-foreground mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                >
                  {project.description}
                </motion.p>
              </div>

              {/* Technologies */}
              <motion.div 
                className="px-6 pb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.6 }}
              >
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.3, 
                        delay: index * 0.15 + 0.7 + techIndex * 0.1 
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(147, 51, 234, 0.15)"
                      }}
                      className="text-xs px-2 py-0.5 rounded glass-light text-purple-300 cursor-pointer transition-all duration-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Footer */}
              <motion.div 
                className="px-6 py-4 border-t border-border/50 bg-gradient-purple/5 relative overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.8 }}
              >
                {/* Footer Background Animation */}
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 8, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent"
                />

                <div className="flex items-center justify-between relative z-10">
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <TrendingUp className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium gradient-text-purple">
                      {project.metrics}
                    </span>
                  </motion.div>
                  
                  <motion.button 
                    className="p-2 rounded-lg hover:bg-purple-500/20 transition-all duration-300 group/btn"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/btn:text-purple-400 transition-colors" />
                    </motion.div>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
