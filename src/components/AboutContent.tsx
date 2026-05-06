import { motion } from "framer-motion";
import { BadgeCheck, Code2, Globe2, Mail, MapPin, Network, ShieldCheck, UsersRound, Zap } from "lucide-react";

export const companyDetails = [
  { icon: Globe2, label: "Website", value: "officeaddindevelopment.com" },
  { icon: Mail, label: "Email", value: "shahzad890.it@gmail.com" },
  { icon: MapPin, label: "Delivery", value: "Remote, worldwide" },
  { icon: UsersRound, label: "Clients", value: "Startups, agencies, and enterprise teams" },
];

export const capabilities = [
  {
    icon: Code2,
    title: "Office.js Engineering",
    description: "Custom Outlook, Excel, Word, PowerPoint, and Teams add-ins built with modern React and TypeScript.",
  },
  {
    icon: Network,
    title: "Microsoft Graph Integration",
    description: "Secure integration with mail, calendar, files, users, SharePoint, Teams, and Microsoft 365 workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "OAuth, permission planning, tenant validation, and deployment-ready architecture for business teams.",
  },
  {
    icon: Zap,
    title: "Automation Products",
    description: "Reusable add-in foundations, workflow automation, document generation, reporting, and AI-assisted tools.",
  },
];

export const technologies = [
  "Office.js",
  "Microsoft Graph",
  "React",
  "TypeScript",
  "Microsoft 365",
  "Azure",
  "Node.js",
  "Electron",
  "Google Workspace",
];

const AboutContent = ({ fullPage = false }: { fullPage?: boolean }) => {
  return (
    <div className="grid items-center gap-14 lg:grid-cols-[0.95fr,1.05fr]">
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-transparent blur-2xl" />
        <div className="enterprise-card relative overflow-hidden p-8 text-left">
          <div className="mb-8 flex items-center gap-5">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-orange-400/20 bg-white/[0.04]">
              <img src="/Logo.png" alt="Nexa AI Solutions company logo" className="h-16 w-auto object-contain" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-orange-200">About Us</p>
              <h2 className="font-heading text-3xl font-bold text-foreground">Nexa AI Solutions</h2>
            </div>
          </div>

          <p className="mb-6 leading-7 text-muted-foreground">
            Nexa AI Solutions is a specialist Office add-in development company focused on secure Microsoft 365 automation, enterprise workflows, and production-ready add-ins for business teams.
          </p>
          <p className="mb-8 leading-7 text-muted-foreground">
            We help companies build custom Outlook, Excel, Word, PowerPoint, Teams, Google Workspace, and desktop automation solutions that are reliable, maintainable, and ready for real users.
          </p>

          <div className="grid gap-3">
            {companyDetails.map((detail) => (
              <div key={detail.label} className="flex items-center gap-4 rounded-2xl glass-light p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-orange/10 text-orange-300">
                  <detail.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{detail.label}</p>
                  <p className="font-semibold text-foreground">{detail.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
          <span className="section-kicker">
            <BadgeCheck className="h-4 w-4" />
            Company Profile
          </span>
        <h2 className="section-title mb-6">
          A focused team for
          <span className="gradient-text-both block">Office add-in development</span>
        </h2>
        <p className="mb-8 leading-7 text-muted-foreground">
          Instead of offering generic web development, our work is centered around Office.js, Microsoft Graph, Microsoft 365 deployment, automation workflows, and add-ins that solve daily operational problems.
        </p>

        {fullPage && (
          <p className="mb-8 leading-7 text-muted-foreground">
            Our delivery process covers discovery, architecture, secure implementation, testing, tenant validation, deployment guidance, and post-launch support. The goal is not only to ship an add-in, but to build a tool your team can trust and maintain.
          </p>
        )}

        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="enterprise-card p-5 text-left"
            >
              <item.icon className="mb-4 h-6 w-6 text-orange-300" />
              <h3 className="mb-2 font-bold text-foreground">{item.title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="rounded-lg border border-white/10 bg-white/[0.045] px-3 py-1.5 text-sm font-medium text-orange-100">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutContent;


