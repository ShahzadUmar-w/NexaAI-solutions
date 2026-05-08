import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  Bot,
  Braces,
  CheckCircle2,
  Monitor,
  Rocket,
  ShieldCheck,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type CustomServiceType = "google-apps-script" | "desktop-app" | "automation" | "mobile-app";

type CustomServiceContent = {
  icon: LucideIcon;
  path: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  gradient: string;
  image?: string;
  highlights: string[];
  services: string[];
  useCases: string[];
  faqs: [string, string][];
  keywords: string;
};

const siteUrl = "https://officeaddindevelopment.com";
const defaultOgImage = `${siteUrl}/og-office-addin-development.png`;

const customServices: Record<CustomServiceType, CustomServiceContent> = {
  "google-apps-script": {
    icon: Braces,
    path: "/google-apps-script-development",
    eyebrow: "Google Workspace Automation",
    title: "Google Apps Script Development Services",
    metaTitle: "Google Apps Script Development Services | NexaAI",
    description:
      "Custom Google Apps Script development for Google Sheets, Docs, Gmail, Drive, Forms, Workspace add-ons, APIs, approvals, reporting, and business automation.",
    intro:
      "Build Google Workspace tools that automate Sheets, Docs, Gmail, Drive, Forms, approvals, reporting, and repeatable team workflows.",
    gradient: "from-emerald-300 via-cyan-300 to-sky-300",
    highlights: ["Sheets and Docs automation", "Gmail and Drive workflows", "Workspace add-ons and API integrations"],
    services: ["Google Sheets automation", "Google Docs document generation", "Gmail workflow automation", "Drive folder and file automation", "Forms and approval workflows", "Custom Workspace add-ons"],
    useCases: ["Generate reports from Sheets", "Send Gmail follow-ups from structured data", "Create Docs from templates", "Sync Workspace data with external APIs"],
    faqs: [
      ["Can you automate Google Sheets?", "Yes. Google Apps Script can automate Sheets reports, validations, imports, exports, dashboards, and scheduled workflows."],
      ["Can Apps Script connect with external APIs?", "Yes. Apps Script can connect with REST APIs, webhooks, CRMs, databases, and internal tools when permissions and security are planned correctly."],
      ["Can you build Google Workspace add-ons?", "Yes. We can build add-ons for Sheets, Docs, Gmail, Forms, and Workspace workflows using Google Apps Script and modern UI patterns."],
      ["Can Apps Script replace manual admin work?", "Often yes. It is useful for recurring reports, email notifications, approval flows, document generation, and file organization."],
    ],
    keywords: "Google Apps Script developer, Google Workspace automation, Google Sheets automation, Google Docs automation, Gmail automation, Workspace add-on development",
  },
  "desktop-app": {
    icon: Monitor,
    path: "/desktop-app-development",
    eyebrow: "Desktop Software",
    title: "Desktop App Development Services",
    metaTitle: "Desktop App Development Services | NexaAI",
    description:
      "Custom desktop app development with Electron, React, Node.js, Windows and macOS packaging, offline workflows, local files, APIs, and business automation tools.",
    intro:
      "Create polished desktop applications for internal teams, workflow tools, offline utilities, file processing, dashboards, and packaged business software.",
    gradient: "from-violet-300 via-fuchsia-300 to-pink-300",
    image: "/assets/app.png",
    highlights: ["Electron, React, and Node.js", "Windows and macOS packaging", "Local files, APIs, and workflow tools"],
    services: ["Electron desktop apps", "Windows desktop workflow tools", "macOS-compatible desktop apps", "Local file processing utilities", "API-connected desktop dashboards", "Installer and release packaging"],
    useCases: ["Build internal desktop tools", "Process local files and folders", "Package a web app as desktop software", "Connect desktop workflows with cloud APIs"],
    faqs: [
      ["Can you build Electron desktop apps?", "Yes. We build Electron apps with React and Node.js for Windows, macOS, and Linux workflows where appropriate."],
      ["Can desktop apps work with local files?", "Yes. Desktop apps are useful when a workflow needs local folders, file processing, offline data, native dialogs, or device-level access."],
      ["Can you package the app for users?", "Yes. We can prepare desktop builds, installers, update planning, and release assets depending on the project scope."],
      ["Can a desktop app connect to APIs?", "Yes. Desktop apps can connect to private APIs, CRMs, databases, authentication systems, and cloud services."],
    ],
    keywords: "desktop app development, Electron app developer, React desktop app, Node.js desktop app, Windows app development, macOS app development",
  },
  automation: {
    icon: Workflow,
    path: "/automation-development",
    eyebrow: "Business Automation",
    title: "Automation Development Services",
    metaTitle: "Automation Development Services | NexaAI",
    description:
      "Business automation development for n8n, Make, Zapier, Power Automate, APIs, AI agents, email workflows, CRM sync, reporting, and operations automation.",
    intro:
      "Automate repetitive business work with reliable workflows across email, documents, CRMs, spreadsheets, APIs, AI tools, and internal systems.",
    gradient: "from-orange-300 via-pink-300 to-rose-300",
    highlights: ["n8n, Make, Zapier, Power Automate", "API and webhook workflows", "AI agents and business process automation"],
    services: ["n8n workflow development", "Make.com scenario automation", "Zapier automations", "Power Automate flows", "API and webhook integrations", "AI agent workflows"],
    useCases: ["Sync CRM and spreadsheet records", "Route emails and attachments", "Generate reports automatically", "Connect AI tools with business systems"],
    faqs: [
      ["Which automation platforms do you work with?", "We work with n8n, Make, Zapier, Power Automate, custom APIs, webhooks, and code-based automation when needed."],
      ["Can automation connect multiple business systems?", "Yes. Automations can connect CRMs, ERPs, spreadsheets, email, document systems, databases, and AI services."],
      ["Can you add error handling?", "Yes. Reliable automations should include validation, retries, logging, alerts, and clear fallback behavior."],
      ["Can AI be part of automation?", "Yes. AI can summarize emails, classify requests, draft responses, extract structured data, and trigger downstream workflows."],
    ],
    keywords: "automation developer, n8n developer, Make.com automation, Zapier automation, Power Automate developer, AI automation, workflow automation",
  },
  "mobile-app": {
    icon: Smartphone,
    path: "/mobile-app-development",
    eyebrow: "Mobile Apps",
    title: "Mobile App Development Services",
    metaTitle: "Mobile App Development Services | NexaAI",
    description:
      "Custom mobile app development for iOS and Android interfaces, React Native apps, API-connected mobile products, business workflows, dashboards, and automation tools.",
    intro:
      "Design and build mobile apps for business workflows, dashboards, customer portals, internal teams, API-connected tools, and automation products.",
    gradient: "from-sky-300 via-blue-300 to-indigo-300",
    image: "/assets/app.png",
    highlights: ["iOS and Android app interfaces", "API-connected mobile workflows", "Business apps and dashboards"],
    services: ["React Native app development", "Business mobile apps", "Mobile dashboards and portals", "API-connected app features", "Authentication and user flows", "Mobile UI/UX implementation"],
    useCases: ["Create a client portal app", "Build internal team workflow apps", "Connect mobile users with backend APIs", "Turn business processes into mobile actions"],
    faqs: [
      ["Can you build both iOS and Android apps?", "Yes. We can build cross-platform mobile apps with shared logic and platform-aware UI where appropriate."],
      ["Can mobile apps connect with existing APIs?", "Yes. Mobile apps can connect with CRMs, databases, internal APIs, authentication systems, and automation workflows."],
      ["Can you design the app UI too?", "Yes. We can create clean mobile screens, user flows, forms, dashboards, and responsive interfaces for real business users."],
      ["Can mobile apps include AI features?", "Yes. AI can be added for chat, summaries, classification, smart forms, recommendations, or workflow assistance."],
    ],
    keywords: "mobile app development, React Native developer, iOS app development, Android app development, business mobile apps, API connected mobile app",
  },
};

const relatedServices = [
  { label: "Outlook Add-ins", href: "/outlook-add-in-development" },
  { label: "Excel Add-ins", href: "/excel-add-in-development" },
  { label: "Google Apps Script", href: "/google-apps-script-development" },
  { label: "Desktop Apps", href: "/desktop-app-development" },
  { label: "Mobile Apps", href: "/mobile-app-development" },
  { label: "Automations", href: "/automation-development" },
];

const CustomServicePage = ({ type }: { type: CustomServiceType }) => {
  const content = customServices[type];
  const Icon = content.icon;
  const canonicalUrl = `${siteUrl}${content.path}`;
  const directEmailHref = `mailto:shahzad890.it@gmail.com?subject=${encodeURIComponent(content.title)}&body=${encodeURIComponent(
    `Hi Shahzad,\n\nI want to discuss ${content.title}.\n\nCompany:\nProject requirements:\nTimeline:\n\nThanks.`
  )}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    description: content.description,
    url: canonicalUrl,
    provider: {
      "@type": "ProfessionalService",
      name: "NexaAI Solutions",
      url: siteUrl,
      logo: `${siteUrl}/Logo.png`,
    },
    areaServed: "Worldwide",
    serviceType: content.title,
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.description} />
        <meta name="keywords" content={content.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={defaultOgImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.metaTitle} />
        <meta name="twitter:description" content={content.description} />
        <meta name="twitter:image" content={defaultOgImage} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <section className="relative overflow-hidden pb-16 pt-32">
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(249,115,22,0.12),transparent_26rem),radial-gradient(circle_at_82%_12%,rgba(14,165,233,0.1),transparent_26rem)]" />
            <div className="section-container relative z-10">
              <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
                <div className="text-left">
                  <span className="section-kicker">
                    <Icon className="h-4 w-4" />
                    {content.eyebrow}
                  </span>
                  <h1 className="mt-5 font-heading text-4xl font-bold leading-tight md:text-6xl">
                    {content.title}
                    <span className={`block bg-gradient-to-r ${content.gradient} bg-clip-text text-transparent`}>for real business workflows.</span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{content.intro}</p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Button variant="hero" size="lg" asChild className="group rounded-full">
                      <a href={directEmailHref}>
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                    <Button variant="heroOutline" size="lg" asChild className="rounded-full">
                      <a href="/portfolio">View Work</a>
                    </Button>
                  </div>
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 text-left shadow-soft-lg backdrop-blur-xl">
                  <div className={`mb-6 flex h-24 w-24 items-center justify-center rounded-[1.65rem] bg-gradient-to-br ${content.gradient} p-5 text-slate-950 shadow-soft`}>
                    {content.image ? <img src={content.image} alt="" className="h-full w-full object-contain" aria-hidden="true" /> : <Icon className="h-12 w-12" />}
                  </div>
                  <h2 className="mb-5 text-2xl font-bold text-foreground">What we build</h2>
                  <div className="grid gap-3">
                    {content.highlights.map((item) => (
                      <p key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-muted-foreground">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-300" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="section-container">
              <div className="mb-10 text-center">
                <span className="section-kicker">
                  <Rocket className="h-4 w-4" />
                  Services
                </span>
                <h2 className="section-title mt-4">Focused development support</h2>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {content.services.map((service) => (
                  <article key={service} className="enterprise-card p-6 text-left">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-300/15 dark:bg-orange-300/10 dark:text-orange-200">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{service}</h3>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden border-y border-border bg-white/65 py-20 dark:border-white/10 dark:bg-white/[0.018]">
            <div className="section-container">
              <div className="grid gap-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
                <div className="text-left">
                  <span className="section-kicker">
                    <Workflow className="h-4 w-4" />
                    Use Cases
                  </span>
                  <h2 className="section-title mt-4">Useful when your team needs less manual work.</h2>
                  <p className="mt-5 text-base leading-8 text-muted-foreground">
                    These services are best when the workflow is repeated often, depends on multiple systems, or needs a clean interface for non-technical users.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {content.useCases.map((useCase) => (
                    <div key={useCase} className="rounded-3xl border border-slate-200 bg-white/85 p-5 text-left shadow-soft dark:border-white/10 dark:bg-white/[0.04]">
                      <Bot className="mb-4 h-6 w-6 text-orange-500 dark:text-orange-300" />
                      <p className="font-semibold leading-6 text-foreground">{useCase}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="section-container">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <span className="section-kicker">
                  <ShieldCheck className="h-4 w-4" />
                  FAQ
                </span>
                <h2 className="section-title mt-4">Questions before starting</h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
                {content.faqs.map(([question, answer]) => (
                  <article key={question} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-left">
                    <h3 className="mb-3 text-lg font-bold text-foreground">{question}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{answer}</p>
                  </article>
                ))}
              </div>

              <div className="mt-12 rounded-3xl border border-orange-400/15 bg-gradient-to-r from-orange-500/10 via-white/[0.03] to-cyan-500/10 p-7 text-center">
                <h2 className="mb-3 text-2xl font-bold text-foreground">Ready to scope this project?</h2>
                <p className="mx-auto mb-6 max-w-2xl text-sm leading-6 text-muted-foreground">
                  Send the workflow, target users, systems involved, and timeline. We will map the build path and technical approach.
                </p>
                <Button variant="hero" size="lg" asChild className="group rounded-full">
                  <a href={directEmailHref}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
                {relatedServices.map((service) => (
                  <a key={service.href} href={service.href} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center text-sm font-semibold text-muted-foreground transition-colors hover:border-orange-300/25 hover:text-foreground">
                    {service.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CustomServicePage;
