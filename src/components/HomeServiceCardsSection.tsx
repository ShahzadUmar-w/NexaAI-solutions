import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Presentation,
  TableProperties,
  type LucideIcon,
} from "lucide-react";

type ServiceCard = {
  title: string;
  text: string;
  href: string;
  color: string;
  icon?: LucideIcon;
  image?: string;
};

const serviceCards: ServiceCard[] = [
  {
    title: "Outlook Add-ins",
    text: "Email, calendar, attachment, CRM, and Microsoft Graph workflows.",
    href: "/outlook-add-in-development",
    image: "/email.png",
    icon: Mail,
    color: "from-sky-400 to-blue-600",
  },
  {
    title: "Excel Add-ins",
    text: "Dashboards, reports, custom functions, API imports, and automation.",
    href: "/excel-add-in-development",
    image: "/excel-icon.png",
    icon: TableProperties,
    color: "from-emerald-400 to-green-600",
  },
  {
    title: "Word Add-ins",
    text: "Document generation, templates, AI review, clauses, and PDF flows.",
    href: "/word-add-in-development",
    image: "/Microsoft_Office_Word_Logo_512px.png",
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "PowerPoint Add-ins",
    text: "Proposal decks, slide libraries, brand controls, and content tools.",
    href: "/powerpoint-add-in-development",
    image: "/ppt-icon.png",
    icon: Presentation,
    color: "from-orange-400 to-red-500",
  },
  {
    title: "Google Apps Script",
    text: "Sheets, Docs, Gmail, Drive, and Workspace workflow automation.",
    href: "/google-apps-script-development",
    image: "/services/google-apps-script.png",
    color: "from-teal-400 to-cyan-600",
  },
  {
    title: "Desktop App Development",
    text: "Electron apps, packaged workflow tools, and Windows/macOS delivery.",
    href: "/desktop-app-development",
    image: "/services/desktop-application.png",
    color: "from-violet-400 to-fuchsia-600",
  },
  {
    title: "Mobile App Development",
    text: "iOS and Android business apps, dashboards, portals, and API workflows.",
    href: "/mobile-app-development",
    image: "/services/clipart2079198.png",
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Automations",
    text: "n8n, Make, Zapier, Power Automate, APIs, and AI agents.",
    href: "/automation-development",
    image: "/services/workflow.png",
    color: "from-pink-400 to-rose-600",
  },
];

const HomeServiceCardsSection = () => {
  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 bg-[#eef3f7] py-20 dark:border-white/10 dark:bg-[#080d19]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.1),transparent_25rem),radial-gradient(circle_at_88%_28%,rgba(249,115,22,0.08),transparent_24rem)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.07),transparent_25rem),radial-gradient(circle_at_88%_28%,rgba(255,209,61,0.06),transparent_24rem)]" />
      <div className="absolute left-[-8%] right-[-8%] top-[43%] h-20 -rotate-3 rounded-[999px] border-y-[18px] border-sky-400/65 opacity-50 dark:border-cyan-300/20" />
      <div className="absolute left-[8%] right-[6%] top-[53%] h-24 rotate-2 rounded-[999px] border-y-[18px] border-slate-300/70 opacity-60 dark:border-white/10" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="section-kicker">Choose Your Build</span>
          <h2 className="section-title mb-5">
            Start with the platform
            <span className="gradient-text-both block">your team already uses.</span>
          </h2>
          <p className="text-muted-foreground">
            Pick the surface you want to improve, then we shape the app, add-in, or automation around the real workflow.
          </p>
        </motion.div>

        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
          {serviceCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48, delay: Math.min(index * 0.06, 0.28) }}
                className="service-hover-card group relative flex min-h-[20rem] w-full max-w-[16rem] flex-col items-center overflow-hidden rounded-[1.35rem] border border-white bg-white p-6 text-center shadow-[0_26px_70px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 dark:border-white/10 dark:bg-[#101827] dark:shadow-soft"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className={`mb-5 flex h-20 w-20 items-center justify-center rounded-[1.45rem] bg-gradient-to-br ${card.color} p-4 text-white shadow-soft`}>
                  {card.image ? (
                    <img src={card.image} alt="" className="h-full w-full object-contain" aria-hidden="true" loading="lazy" />
                  ) : Icon ? (
                    <Icon className="h-10 w-10" />
                  ) : null}
                </div>
                <h3 className="text-xl font-black leading-tight text-slate-950 dark:text-white">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{card.text}</p>
                <a
                  href={card.href}
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black text-slate-900 transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 dark:border-white/10 dark:bg-white/[0.045] dark:text-orange-100 dark:hover:border-orange-300/30 dark:hover:bg-orange-300/10"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServiceCardsSection;
