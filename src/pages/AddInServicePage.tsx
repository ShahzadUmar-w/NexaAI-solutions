import { Helmet } from "react-helmet-async";
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  DatabaseZap,
  FileText,
  Link2,
  Mail,
  Presentation,
  ShieldCheck,
  TableProperties,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type ServiceType = "outlook" | "excel" | "word" | "powerpoint";

const siteUrl = "https://officeaddindevelopment.com";

const serviceContent = {
  outlook: {
    icon: Mail,
    path: "/outlook-add-in-development",
    title: "Outlook Add-in Development Services",
    metaTitle: "Outlook Add-in Development Services | NexaAI",
    description:
      "Custom Outlook add-in development for AI email assistants, phishing report tools, Salesforce and HubSpot CRM sync, Asana task automation, Microsoft Graph integration, attachments, calendar workflows, and enterprise Microsoft 365 deployment.",
    h1: "Custom Outlook Add-in Development for Business Automation",
    intro:
      "Build secure Outlook add-ins that automate email workflows, connect Microsoft Graph, sync business systems, and improve team productivity inside Microsoft 365.",
    features: ["AI email assistant and smart replies", "Microsoft Graph mail and calendar APIs", "Salesforce, HubSpot, Asana, and CRM integrations", "Phishing report and security workflows", "Attachment, SharePoint, and OneDrive workflows", "OAuth, permissions, and Microsoft 365 deployment"],
    useCases: ["Automatically create tasks from emails", "Sync Outlook conversations with Salesforce or HubSpot records", "Generate AI-assisted replies, summaries, and follow-ups", "Report phishing emails to security teams", "Route attachments into SharePoint, OneDrive, or document workflows"],
  },
  excel: {
    icon: TableProperties,
    path: "/excel-add-in-development",
    title: "Excel Add-in Development Services",
    metaTitle: "Excel Add-in Development Services | NexaAI",
    description:
      "Custom Excel add-in development for business reporting, API imports, custom functions, dashboards, workflow automation, and secure Microsoft 365 deployment.",
    h1: "Custom Excel Add-in Development for Data Automation",
    intro:
      "Create Excel add-ins that connect APIs, automate reporting, add custom functions, clean data, and turn manual spreadsheet work into reliable business workflows.",
    features: ["Custom Excel functions", "API data imports and exports", "Automated reports and dashboards", "Power BI and business data workflows", "Cross-platform Excel web/desktop support", "Secure authentication and deployment"],
    useCases: ["Pull live business data into Excel", "Automate financial and operational reports", "Create reusable custom formulas", "Validate and clean spreadsheet data"],
  },
  word: {
    icon: FileText,
    path: "/word-add-in-development",
    title: "Word Add-in Development Services",
    metaTitle: "Word Add-in Development Services | NexaAI",
    description:
      "Custom Word add-in development for document automation, templates, contracts, proposals, content controls, PDF export, and Microsoft Graph integrations.",
    h1: "Custom Word Add-in Development for Document Automation",
    intro:
      "Build Word add-ins that generate contracts, proposals, reports, and branded documents from templates, structured data, and business systems.",
    features: ["Document templates and assembly", "Content controls and dynamic fields", "Contract and proposal generation", "PDF export workflows", "Microsoft Graph file integrations", "Enterprise-ready deployment"],
    useCases: ["Generate contracts from approved templates", "Create proposals from CRM data", "Insert approved clauses and content blocks", "Export branded documents to PDF"],
  },
  powerpoint: {
    icon: Presentation,
    path: "/powerpoint-add-in-development",
    title: "PowerPoint Add-in Development Services",
    metaTitle: "PowerPoint Add-in Development Services | NexaAI",
    description:
      "Custom PowerPoint add-in development for branded templates, proposal decks, slide automation, content libraries, CRM integrations, and enterprise deployment.",
    h1: "Custom PowerPoint Add-in Development for Presentation Automation",
    intro:
      "Create PowerPoint add-ins that help teams build branded decks faster, reuse approved slides, generate proposals, and keep presentations compliant.",
    features: ["Slide libraries and reusable assets", "Branded template automation", "CRM-driven proposal decks", "Brand compliance checks", "Export and review workflows", "Microsoft 365 deployment support"],
    useCases: ["Generate sales decks from CRM data", "Insert approved branded slides", "Standardize proposal presentations", "Automate recurring reporting decks"],
  },
} satisfies Record<ServiceType, {
  icon: typeof Mail;
  path: string;
  title: string;
  metaTitle: string;
  description: string;
  h1: string;
  intro: string;
  features: string[];
  useCases: string[];
}>;

const relatedServices = [
  { label: "Outlook Add-in Development", href: "/outlook-add-in-development" },
  { label: "Excel Add-in Development", href: "/excel-add-in-development" },
  { label: "Word Add-in Development", href: "/word-add-in-development" },
  { label: "PowerPoint Add-in Development", href: "/powerpoint-add-in-development" },
  { label: "Microsoft Graph Integration", href: "/microsoft-graph-integration" },
  { label: "M365 Add-in Deployment", href: "/microsoft-365-add-in-deployment" },
  { label: "Outlook Add-in Guide", href: "/how-to-build-outlook-add-in" },
  { label: "Excel Add-in Guide", href: "/excel-add-in-development-guide" },
];

const excelTrustStats = [
  { value: "API", label: "Live data imports" },
  { value: "Office.js", label: "Excel web and desktop" },
  { value: "M365", label: "Deployment support" },
];

const outlookTrustStats = [
  { value: "Graph", label: "Mail and calendar APIs" },
  { value: "OAuth", label: "Secure permissions" },
  { value: "M365", label: "Tenant deployment" },
];

const outlookCapabilityGroups = [
  {
    icon: Bot,
    title: "AI email assistant",
    description: "Add AI inside Outlook for summaries, smart replies, tone changes, translation, follow-up drafts, and email classification.",
    items: ["Summarize long email threads", "Generate reply drafts", "Extract action items", "Translate email content"],
  },
  {
    icon: BriefcaseBusiness,
    title: "CRM integration",
    description: "Connect Outlook with sales and support systems so teams do not copy email details manually.",
    items: ["Salesforce email sync", "HubSpot contact lookup", "Create CRM notes", "Attach emails to deals or tickets"],
  },
  {
    icon: Link2,
    title: "Third-party integrations",
    description: "Build Outlook workflows that connect with project management, support, storage, and internal business tools.",
    items: ["Asana task creation", "Jira or Trello tickets", "Slack or Teams alerts", "Custom API integrations"],
  },
  {
    icon: AlertTriangle,
    title: "Phishing report add-in",
    description: "Create a report button that sends suspicious emails to your security team or security platform with useful metadata.",
    items: ["Report phishing email", "Forward headers and sender data", "Send to security mailbox", "Add audit trail"],
  },
  {
    icon: CalendarDays,
    title: "Calendar and meeting workflows",
    description: "Use Microsoft Graph to create meetings, read calendar context, automate reminders, and prepare meeting follow-ups.",
    items: ["Create calendar events", "Meeting reminders", "Follow-up email drafts", "Prep notes from email context"],
  },
  {
    icon: DatabaseZap,
    title: "Attachment and file automation",
    description: "Move attachments and email files into SharePoint, OneDrive, document systems, or custom storage workflows.",
    items: ["Save attachments", "Sort files automatically", "Upload to SharePoint", "Connect document management systems"],
  },
];

const wordTrustStats = [
  { value: "Templates", label: "Document generation" },
  { value: "AI", label: "Writing assistance" },
  { value: "Graph", label: "File integrations" },
];

const wordShowcaseImages = [
  {
    src: "/word/Ai%20add-in.png",
    title: "AI Word add-in",
    description: "AI-powered Word task pane for writing, editing, and document productivity.",
  },
  {
    src: "/word/AI%20sugestions.png",
    title: "AI suggestions",
    description: "Suggestion workflow for improving content directly inside Word.",
  },
  {
    src: "/word/Ai_DetectorPro_Login.png",
    title: "AI Detector Pro login",
    description: "Branded authentication experience for a Word add-in product.",
  },
  {
    src: "/word/chatgpt%2Bword_Bias_AI.png",
    title: "ChatGPT Word assistant",
    description: "Word assistant workflow for AI analysis, review, and content support.",
  },
  {
    src: "/word/DocGenious_word_addin.png",
    title: "DocGenious Word add-in",
    description: "Document generation and assistant panel built for Word workflows.",
  },
  {
    src: "/word/integration.png",
    title: "Integration workflow",
    description: "Word add-in connected with external systems and business data.",
  },
  {
    src: "/word/Nills_trac_changes.png",
    title: "Track changes workflow",
    description: "Review and editing add-in experience for document collaboration.",
  },
  {
    src: "/word/robrix_ai_comments.png",
    title: "AI comments",
    description: "AI-powered comments and document review features inside Word.",
  },
  {
    src: "/word/SiolCloud.png",
    title: "Cloud document tool",
    description: "Cloud-connected Word add-in for documents and team workflows.",
  },
  {
    src: "/word/Tracking.png",
    title: "Document tracking",
    description: "Tracking-focused Word add-in workflow for document status and review.",
  },
  {
    src: "/word/word%20addin.png",
    title: "Word add-in panel",
    description: "Custom task pane interface for Word automation and productivity.",
  },
  {
    src: "/word/Word_addin.png",
    title: "Branded Word add-in",
    description: "Professional Word add-in UI for business document workflows.",
  },
];

const outlookShowcaseImages = [
  {
    src: "/ooutlook/boligflow%20outlook%20add-in.png",
    title: "Boligflow Outlook add-in",
    description: "Custom Outlook task pane for email-driven business workflows.",
  },
  {
    src: "/ooutlook/Chatgpt%20outlook%20addin.png",
    title: "AI Outlook assistant",
    description: "ChatGPT-style Outlook add-in for email replies, summaries, and productivity.",
  },
  {
    src: "/ooutlook/Doccept%20outlook%20addin.png",
    title: "Doccept Outlook add-in",
    description: "Document and email workflow integration inside Outlook.",
  },
  {
    src: "/ooutlook/Files%20haven%20outlook%20add-in.png",
    title: "Files Haven add-in",
    description: "Attachment and file management workflow directly from Outlook.",
  },
  {
    src: "/ooutlook/lira%20docs%20outlook%20addin.png",
    title: "Lira Docs Outlook add-in",
    description: "Outlook add-in experience for document handling and client workflows.",
  },
  {
    src: "/ooutlook/Outlook%20add-in%20Attachment_sorter.png",
    title: "Attachment sorter",
    description: "Automated attachment sorting and processing for Outlook users.",
  },
  {
    src: "/ooutlook/outlook%20calender.png",
    title: "Calendar workflow",
    description: "Calendar-focused Outlook automation for scheduling and coordination.",
  },
  {
    src: "/ooutlook/Outlook%20email%20saver.png",
    title: "Email saver",
    description: "Save and organize emails into business systems or document flows.",
  },
  {
    src: "/ooutlook/transchat%20outlook%20addin.png",
    title: "Translation chat add-in",
    description: "Outlook communication workflow with translation and assistant features.",
  },
  {
    src: "/ooutlook/X1sync%20outlook%20plugin.png",
    title: "X1sync Outlook plugin",
    description: "Outlook synchronization plugin for business data and email workflows.",
  },
];

const excelShowcaseImages = [
  {
    src: "/excel/chatgpt%20for%20excel.png",
    title: "AI assistant inside Excel",
    description: "ChatGPT-style Excel workflow for formulas, summaries, and productivity tasks.",
  },
  {
    src: "/excel/Clouder%20express%20excel%20addin.png",
    title: "Business add-in workspace",
    description: "Custom Excel add-in UI designed for real operational workflows.",
  },
  {
    src: "/excel/clouders%20express.png",
    title: "Cloud workflow integration",
    description: "Excel connected with cloud data and internal business processes.",
  },
  {
    src: "/excel/CSP%20excel%20addin.png",
    title: "CSP Excel add-in",
    description: "Purpose-built plugin experience for repeatable spreadsheet work.",
  },
  {
    src: "/excel/Doccept%20excel%20addin.png",
    title: "Document data add-in",
    description: "Excel interface connected with document and data management workflows.",
  },
  {
    src: "/excel/ericson%20excel%20addin.png",
    title: "Enterprise-style Excel tool",
    description: "Branded Excel add-in UI for professional internal teams.",
  },
  {
    src: "/excel/Excel%20dashbord.png",
    title: "Excel dashboard",
    description: "Dashboard-style spreadsheet experience for reporting and visibility.",
  },
  {
    src: "/excel/EXCEL%20PLUGIN.png",
    title: "Excel plugin interface",
    description: "Custom plugin panel for actions, automation, and data handling.",
  },
  {
    src: "/excel/KPI%20dashbord%20excel.png",
    title: "KPI dashboard",
    description: "Performance dashboard layout for business reporting inside Excel.",
  },
];

const AddInServicePage = ({ type }: { type: ServiceType }) => {
  const content = serviceContent[type];
  const Icon = content.icon;
  const canonicalUrl = `${siteUrl}${content.path}`;
  const directEmailHref = `mailto:shahzad890.it@gmail.com?subject=${encodeURIComponent(content.title)}&body=${encodeURIComponent(
    `Hi Shahzad,\n\nI would like to discuss ${content.title}.\n\nCompany:\nTimeline:\nRequirements:\n\nThanks.`
  )}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    url: canonicalUrl,
    description: content.description,
    provider: {
      "@type": "ProfessionalService",
      name: "NexaAI Solutions",
      url: siteUrl,
      email: "shahzad890.it@gmail.com",
    },
    areaServed: "Worldwide",
    serviceType: content.title,
  };

  return (
    <>
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}/Logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.metaTitle} />
        <meta name="twitter:description" content={content.description} />
        <meta name="twitter:image" content={`${siteUrl}/Logo.png`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <section className="relative overflow-hidden pt-32 pb-20">
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,24,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(142,45,226,0.14),transparent_32%)]" />

            <div className="section-container relative z-10">
              <div className="mx-auto max-w-4xl text-center">
                <span className="mb-6 inline-flex items-center gap-2 rounded-full glass-orange px-4 py-2 text-sm font-semibold text-orange-100">
                  <Icon className="h-4 w-4 text-orange-300" />
                  {content.title}
                </span>
                <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
                  {content.h1}
                </h1>
                <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {content.intro}
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <Button variant="hero" size="xl" asChild className="group rounded-2xl">
                    <a href="#contact-page">
                      Discuss This Project
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="xl" asChild className="rounded-2xl">
                    <a href={directEmailHref}>Email Project Brief</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-20">
            <div className="section-container">
              <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr]">
                <div className="rounded-3xl glass p-8 text-left">
                  <h2 className="mb-6 text-3xl font-bold text-foreground">What this service includes</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {content.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 rounded-2xl glass-light p-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                        <p className="text-sm text-foreground/90">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-3xl glass-orange p-8 text-left">
                  <h2 className="mb-6 text-3xl font-bold text-foreground">Common use cases</h2>
                  <div className="space-y-4">
                    {content.useCases.map((useCase) => (
                      <p key={useCase} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                        <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-300" />
                        {useCase}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {type === "excel" && (
            <section className="relative overflow-hidden py-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,209,61,0.1),transparent_26rem),radial-gradient(circle_at_82%_10%,rgba(34,197,94,0.08),transparent_24rem)]" />

              <div className="section-container relative z-10">
                <div className="mb-10 grid items-end gap-8 lg:grid-cols-[1fr,0.85fr]">
                  <div className="text-left">
                    <span className="section-kicker">
                      <TableProperties className="h-4 w-4" />
                      Excel Add-in Proof
                    </span>
                    <h2 className="section-title mb-5">
                      Real Excel add-in screens
                      <span className="gradient-text-both block">to build client trust.</span>
                    </h2>
                    <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                      Add-in screenshots help visitors understand that the work is practical, visual, and production-focused. These examples show Excel task panes, dashboards, AI tools, and business workflow interfaces.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {excelTrustStats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left">
                        <p className="text-xl font-bold text-white">{stat.value}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {excelShowcaseImages.map((item) => (
                    <article
                      key={item.src}
                      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/25 hover:bg-white/[0.06]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#0f172a]">
                        <img
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/70 via-transparent to-transparent opacity-70" />
                      </div>
                      <div className="p-5">
                        <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                        <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-orange-300/15 bg-orange-300/10 p-6 text-left">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-foreground">Want to add more Excel screenshots?</h3>
                      <p className="text-sm leading-6 text-muted-foreground">
                        Put new images in <span className="font-semibold text-orange-100">public/excel</span>, then add them to the gallery list so every project can improve trust and conversion.
                      </p>
                    </div>
                    <Button variant="hero" asChild className="shrink-0 rounded-2xl">
                      <a href={directEmailHref}>Discuss Excel Add-in</a>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {type === "outlook" && (
            <>
              <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.1),transparent_26rem),radial-gradient(circle_at_82%_12%,rgba(255,209,61,0.08),transparent_24rem)]" />

                <div className="section-container relative z-10">
                  <div className="mx-auto mb-12 max-w-4xl text-center">
                    <span className="section-kicker">
                      <Mail className="h-4 w-4" />
                      Outlook Add-in Capabilities
                    </span>
                    <h2 className="section-title mb-5">
                      What we can build
                      <span className="gradient-text-both block">inside Microsoft Outlook.</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                      Outlook add-ins can do much more than show a task pane. We can connect email context with AI, CRMs, project tools, security reporting, files, calendars, and custom business systems.
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {outlookCapabilityGroups.map((group) => (
                      <article
                        key={group.title}
                        className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/25 hover:bg-white/[0.06]"
                      >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-300/15 bg-orange-300/10 text-orange-200">
                          <group.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-foreground">{group.title}</h3>
                        <p className="mb-5 text-sm leading-6 text-muted-foreground">{group.description}</p>
                        <div className="space-y-3">
                          {group.items.map((item) => (
                            <p key={item} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-300" />
                              {item}
                            </p>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="mt-8 rounded-3xl border border-orange-300/15 bg-orange-300/10 p-6 text-left">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-foreground">Need Salesforce, HubSpot, Asana, or a custom API connected?</h3>
                        <p className="text-sm leading-6 text-muted-foreground">
                          We can design the Outlook add-in workflow, OAuth permissions, backend API bridge, Microsoft Graph access, and secure deployment path.
                        </p>
                      </div>
                      <Button variant="hero" asChild className="shrink-0 rounded-2xl">
                        <a href={directEmailHref}>Discuss Integration</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="relative overflow-hidden py-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.1),transparent_26rem),radial-gradient(circle_at_82%_12%,rgba(255,209,61,0.08),transparent_24rem)]" />

                <div className="section-container relative z-10">
                  <div className="mb-10 grid items-end gap-8 lg:grid-cols-[1fr,0.85fr]">
                    <div>
                      <span className="section-kicker">
                        <Mail className="h-4 w-4" />
                        Outlook Add-in Proof
                      </span>
                      <h2 className="section-title mb-5">
                        Real Outlook add-in screens
                        <span className="gradient-text-both block">that make the service credible.</span>
                      </h2>
                      <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                        Outlook add-in screenshots show visitors the kind of real task panes, email tools, attachment workflows, AI assistants, and Microsoft 365 integrations that can be delivered for business teams.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {outlookTrustStats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left">
                          <p className="text-xl font-bold text-white">{stat.value}</p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {outlookShowcaseImages.map((item) => (
                      <article
                        key={item.src}
                        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/25 hover:bg-white/[0.06]"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#0f172a]">
                          <img
                            src={item.src}
                            alt={item.title}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/70 via-transparent to-transparent opacity-70" />
                        </div>
                        <div className="p-5">
                          <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                          <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className="mt-8 rounded-3xl border border-orange-300/15 bg-orange-300/10 p-6 text-left">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-foreground">Want to add more Outlook screenshots?</h3>
                        <p className="text-sm leading-6 text-muted-foreground">
                          Put new images in <span className="font-semibold text-orange-100">public/ooutlook</span>, then add them to the gallery list so every Outlook project builds more trust.
                        </p>
                      </div>
                      <Button variant="hero" asChild className="shrink-0 rounded-2xl">
                        <a href={directEmailHref}>Discuss Outlook Add-in</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {type === "word" && (
            <section className="relative overflow-hidden py-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.1),transparent_26rem),radial-gradient(circle_at_82%_12%,rgba(255,209,61,0.08),transparent_24rem)]" />

              <div className="section-container relative z-10">
                <div className="mb-10 grid items-end gap-8 lg:grid-cols-[1fr,0.85fr]">
                  <div className="text-left">
                    <span className="section-kicker">
                      <FileText className="h-4 w-4" />
                      Word Add-in Proof
                    </span>
                    <h2 className="section-title mb-5">
                      Real Word add-in screens
                      <span className="gradient-text-both block">for document automation trust.</span>
                    </h2>
                    <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                      Word add-in screenshots make the service easier to trust by showing real task panes, AI writing tools, document generation flows, comments, tracking, and business integrations.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {wordTrustStats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left">
                        <p className="text-xl font-bold text-white">{stat.value}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {wordShowcaseImages.map((item) => (
                    <article
                      key={item.src}
                      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/25 hover:bg-white/[0.06]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#0f172a]">
                        <img
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/70 via-transparent to-transparent opacity-70" />
                      </div>
                      <div className="p-5">
                        <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                        <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-orange-300/15 bg-orange-300/10 p-6 text-left">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-foreground">Want to add more Word screenshots?</h3>
                      <p className="text-sm leading-6 text-muted-foreground">
                        Put new images in <span className="font-semibold text-orange-100">public/word</span>, then add them to the gallery list so every Word add-in project builds more trust.
                      </p>
                    </div>
                    <Button variant="hero" asChild className="shrink-0 rounded-2xl">
                      <a href={directEmailHref}>Discuss Word Add-in</a>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="py-20">
            <div className="section-container">
              <div className="rounded-3xl border border-purple-500/10 glass p-8">
                <h2 className="mb-6 text-center text-3xl font-bold text-foreground">Related Office add-in services</h2>
                <div className="grid gap-4 md:grid-cols-4">
                  {relatedServices.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="rounded-2xl glass-light p-4 text-center text-sm font-semibold text-muted-foreground transition-all hover:text-orange-200 hover:shadow-glow-orange"
                    >
                      {service.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="contact-page" className="pb-24">
            <div className="section-container">
              <div className="mx-auto max-w-3xl rounded-3xl glass-orange p-8 text-center">
                <h2 className="mb-3 text-3xl font-bold text-foreground">Ready to build your add-in?</h2>
                <p className="mb-6 text-muted-foreground">
                  Send a short brief and I will help define scope, technical approach, security requirements, and deployment path.
                </p>
                <Button variant="hero" size="xl" asChild className="group rounded-2xl">
                  <a href={directEmailHref}>
                    Email Project Brief
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AddInServicePage;


