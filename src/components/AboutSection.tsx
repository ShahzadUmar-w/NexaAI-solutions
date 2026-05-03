import { motion } from "framer-motion";
import { Code2, Layers, Shield, Zap } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Office.js Mastery",
    description: "Deep expertise in the Office JavaScript API for building robust add-ins",
  },
  {
    icon: Layers,
    title: "Microsoft Graph",
    description: "Seamless integration with Microsoft 365 services and data",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Security-first approach with proper authentication and authorization",
  },
  {
    icon: Zap,
    title: "Cross-Platform",
    description: "Add-ins that work flawlessly on Desktop, Web, and Mac",
  },
];

const technologies = [
  "Office.js",
  "Microsoft Graph",
  "TypeScript",
  "React",
  "Azure AD",
  "Node.js",
  "REST APIs",
  "VSTO",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text-orange font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Building Add-ins That
              <br />
              <span className="gradient-text-both">Actually Work</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 5 years of specialized experience, I focus exclusively on
              Microsoft Office Add-in development. I don't just build demos – I create
              production-ready solutions that solve real productivity problems for
              businesses worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I understand the edge cases of Office Desktop, Web, and Mac environments.
              My add-ins are designed to be stable, secure, and easy to maintain. When
              you work with me, you get a solution that works reliably in real business
              environments.
            </p>

            {/* Technology Tags */}
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg glass-light text-orange-300 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass card-hover p-6 border border-orange-500/10 hover:border-orange-500/30 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-orange/10 flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 bg-gradient-orange bg-clip-text text-transparent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
