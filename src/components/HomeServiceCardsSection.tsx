import { motion } from "framer-motion";
import {
  ArrowRight,
  Braces,
  Mail,
  Monitor,
  Presentation,
  Smartphone,
  TableProperties,
  Workflow,
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
    icon: Braces,
    color: "from-teal-400 to-cyan-600",
  },
  {
    title: "Desktop App Development",
    text: "Electron apps, packaged workflow tools, and Windows/macOS delivery.",
    href: "/desktop-app-development",
    image: "/services/desktop-application.png",
    icon: Monitor,
    color: "from-violet-400 to-fuchsia-600",
  },
  {
    title: "Mobile App Development",
    text: "iOS and Android business apps, dashboards, portals, and API workflows.",
    href: "/mobile-app-development",
    image: "/services/clipart2079198.png",
    icon: Smartphone,
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Automations",
    text: "n8n, Make, Zapier, Power Automate, APIs, and AI agents.",
    href: "/automation-development",
    image: "/services/workflow.png",
    icon: Workflow,
    color: "from-pink-400 to-rose-600",
  },
];

const eyebrowItems = ["Office add-ins", "Apps", "Automations", "Workspace tools"];

const HomeServiceCardsSection = () => {
  return (
    <section className="relative overflow-hidden border-y border-slate-200/80 bg-[#f3f7fa] py-20 dark:border-white/10 dark:bg-[#080d19]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(14,165,233,0.085),transparent_25rem),radial-gradient(circle_at_88%_28%,rgba(249,115,22,0.06),transparent_24rem)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(34,211,238,0.07),transparent_25rem),radial-gradient(circle_at_88%_28%,rgba(255,209,61,0.06),transparent_24rem)]" />
      <div className="absolute left-[-8%] right-[-8%] top-[43%] h-16 -rotate-3 rounded-[999px] border-y-[12px] border-sky-300/50 opacity-45 dark:border-cyan-300/16" />
      <div className="absolute left-[8%] right-[6%] top-[54%] h-20 rotate-2 rounded-[999px] border-y-[12px] border-slate-300/55 opacity-55 dark:border-white/10" />

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
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {eyebrowItems.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-bold text-slate-600 shadow-soft dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48, delay: Math.min(index * 0.06, 0.28) }}
                className="service-hover-card group relative flex h-[19rem] w-full flex-col items-center justify-center overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_46px_rgba(15,23,42,0.095)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_24px_62px_rgba(15,23,42,0.13)] dark:border-cyan-300/15 dark:bg-[#101827] dark:shadow-soft"
              >
                <div className="service-hover-card-content flex h-full w-full flex-col items-center justify-center">
                <div className={`mb-5 flex h-[4.6rem] w-[4.6rem] items-center justify-center rounded-[1.25rem] border border-slate-200 bg-slate-50 p-3.5 text-slate-950 shadow-[0_12px_28px_rgba(15,23,42,0.075)] ring-1 ring-white/70 transition-colors group-hover:border-orange-200 group-hover:bg-white dark:border-white/10 dark:bg-white/95`}>
                  {card.image ? (
                    <img src={card.image} alt="" className="max-h-full max-w-full object-contain" aria-hidden="true" loading="lazy" />
                  ) : Icon ? (
                    <Icon className="h-10 w-10" />
                  ) : null}
                </div>
                <div className="service-hover-card-reveal flex w-full flex-1 flex-col items-center justify-center">
                  <h3 className="text-[1.42rem] font-black leading-tight tracking-[-0.03em] text-slate-950 dark:text-white">{card.title}</h3>
                  <p className="mt-3 flex-1 text-sm font-semibold leading-6 text-slate-600 dark:text-cyan-50/82">{card.text}</p>
                  <a
                    href={card.href}
                    className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black text-slate-950 shadow-[0_10px_24px_rgba(15,23,42,0.07)] transition-colors hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 dark:border-white/15 dark:bg-white/95 dark:text-slate-950"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeServiceCardsSection;
