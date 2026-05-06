import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  FileText,
  FolderOpen,
  Mail,
  Rocket,
  ShieldCheck,
  TableProperties,
  UsersRound,
  Workflow,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

type ResourceType =
  | "graph"
  | "deployment"
  | "outlook-guide"
  | "officejs-vsto"
  | "excel-guide"
  | "outlook-crm-case"
  | "excel-reporting-case";

const siteUrl = "https://officeaddindevelopment.com";

const resources = {
  graph: {
    path: "/microsoft-graph-integration",
    eyebrow: "Microsoft Graph Integration",
    title: "Microsoft Graph Integration for Office Add-ins",
    metaTitle: "Microsoft Graph Integration for Office Add-ins | NexaAI",
    description: "Microsoft Graph integration services for Outlook, Excel, Word, PowerPoint, Teams, SharePoint, calendar, files, users, and secure Office add-in workflows.",
    intro: "Connect Office add-ins with Microsoft 365 data using Microsoft Graph APIs, secure OAuth flows, permission planning, and tenant-ready architecture.",
    sections: [
      ["What Microsoft Graph can power", "Graph can connect add-ins to email, calendar, contacts, users, files, SharePoint, Teams, OneDrive, and business workflows across Microsoft 365."],
      ["Security and permissions", "A reliable Graph integration starts with least-privilege scopes, OAuth planning, admin consent review, token handling, and a clear data access model."],
      ["Common integrations", "Popular use cases include CRM sync, email automation, meeting workflows, document retrieval, SharePoint file operations, and user directory features."],
    ],
    bullets: ["OAuth 2.0 and Microsoft identity", "Mail, calendar, users, files, and Teams APIs", "Admin consent and permission planning", "Secure Office.js integration"],
  },
  deployment: {
    path: "/microsoft-365-add-in-deployment",
    eyebrow: "Microsoft 365 Deployment",
    title: "Microsoft 365 Add-in Deployment Support",
    metaTitle: "Microsoft 365 Add-in Deployment Support | NexaAI",
    description: "Microsoft 365 Office add-in deployment support for manifest preparation, tenant testing, centralized deployment, AppSource guidance, and enterprise rollout.",
    intro: "Prepare Office add-ins for Microsoft 365 Admin Center deployment, tenant validation, security review, and a smoother production rollout.",
    sections: [
      ["Deployment planning", "Deployment planning covers manifest readiness, supported Office hosts, domains, permissions, identity flows, and rollout requirements."],
      ["Tenant testing", "Before production release, add-ins should be tested with target users, supported clients, admin policies, and expected Microsoft 365 tenant settings."],
      ["Production rollout", "A production rollout may include centralized deployment guidance, versioning, documentation, support windows, and post-launch fixes."],
    ],
    bullets: ["Manifest review", "M365 Admin Center rollout", "Tenant-level validation", "Deployment documentation"],
  },
  "outlook-guide": {
    path: "/how-to-build-outlook-add-in",
    eyebrow: "Guide",
    title: "How to Build an Outlook Add-in",
    metaTitle: "How to Build an Outlook Add-in | NexaAI",
    description: "A practical guide to building Outlook add-ins with Office.js, Microsoft Graph, OAuth, React, TypeScript, testing, and Microsoft 365 deployment.",
    intro: "Building an Outlook add-in requires more than UI work. You need Office.js APIs, identity planning, Graph integration, testing, and deployment readiness.",
    sections: [
      ["Start with the workflow", "Define whether the add-in needs email reading, compose actions, attachment handling, CRM sync, calendar features, or task automation."],
      ["Choose the technical architecture", "Most modern Outlook add-ins use Office.js with React and TypeScript, plus a backend or Microsoft Graph where secure server-side work is needed."],
      ["Test and deploy", "Test across Outlook web, desktop, tenant settings, permissions, and deployment paths before releasing to business users."],
    ],
    bullets: ["Office.js manifest setup", "React task pane UI", "Graph API integration", "Microsoft 365 deployment"],
  },
  "officejs-vsto": {
    path: "/office-js-vs-vsto",
    eyebrow: "Guide",
    title: "Office.js vs VSTO for Office Add-ins",
    metaTitle: "Office.js vs VSTO for Office Add-ins | NexaAI",
    description: "Compare Office.js and VSTO for Office add-in development, including platform support, deployment, security, maintenance, and enterprise use cases.",
    intro: "Office.js and VSTO solve different problems. Choosing the right approach depends on platform needs, deployment model, security, and long-term maintenance.",
    sections: [
      ["When Office.js is a strong fit", "Office.js is usually best for modern Microsoft 365 add-ins that need web, Windows, Mac, and centralized deployment support."],
      ["When VSTO may still matter", "VSTO can be useful for Windows-only desktop automation where deep local Office or Windows integration is required."],
      ["Enterprise recommendation", "For most new Microsoft 365 add-ins, Office.js is the better default because it supports modern deployment and cross-platform Office clients."],
    ],
    bullets: ["Cross-platform support", "Deployment model", "Maintenance cost", "Enterprise security review"],
  },
  "excel-guide": {
    path: "/excel-add-in-development-guide",
    eyebrow: "Guide",
    title: "Excel Add-in Development Guide",
    metaTitle: "Excel Add-in Development Guide | NexaAI",
    description: "Guide to Excel add-in development for custom functions, API imports, reports, dashboards, business automation, React, TypeScript, and Office.js.",
    intro: "Excel add-ins can automate reporting, connect APIs, create custom functions, validate data, and reduce repeated spreadsheet work.",
    sections: [
      ["Define the spreadsheet workflow", "Start by identifying repeated tasks: data imports, formulas, approvals, validation, dashboard refreshes, or report generation."],
      ["Build with Office.js", "Office.js supports task panes, workbook automation, tables, ranges, events, custom functions, and web-based UI inside Excel."],
      ["Plan reliability", "Enterprise Excel add-ins need error handling, API retries, authentication, user guidance, and clear deployment instructions."],
    ],
    bullets: ["Custom functions", "API data import", "Report automation", "Cross-platform Excel support"],
  },
  "outlook-crm-case": {
    path: "/case-studies/outlook-crm-add-in",
    eyebrow: "Case Study",
    title: "Outlook CRM Add-in Case Study",
    metaTitle: "Outlook CRM Add-in Case Study | NexaAI",
    description: "Case study example for an Outlook CRM add-in that syncs emails, contacts, follow-ups, and Microsoft Graph workflows for business teams.",
    intro: "This case study shows how an Outlook add-in can reduce manual CRM updates by connecting email workflows directly to business systems.",
    sections: [
      ["Problem", "Sales and operations teams were manually copying email details into CRM records, causing delays, missed follow-ups, and inconsistent data."],
      ["Solution", "A custom Outlook add-in can detect email context, suggest CRM records, create follow-up tasks, and sync selected messages through secure APIs."],
      ["Result", "The workflow can reduce manual data entry, improve follow-up consistency, and give teams a cleaner CRM record from inside Outlook."],
    ],
    bullets: ["Outlook task pane", "CRM API sync", "Microsoft Graph mail APIs", "Follow-up automation"],
  },
  "excel-reporting-case": {
    path: "/case-studies/excel-reporting-automation",
    eyebrow: "Case Study",
    title: "Excel Reporting Automation Case Study",
    metaTitle: "Excel Reporting Automation Case Study | NexaAI",
    description: "Case study example for Excel reporting automation with API imports, data validation, dashboards, and repeatable business reporting workflows.",
    intro: "This case study shows how an Excel add-in can automate recurring reports and reduce manual spreadsheet operations.",
    sections: [
      ["Problem", "Teams were exporting data manually, cleaning spreadsheets, applying formulas, and rebuilding the same reports every week."],
      ["Solution", "A custom Excel add-in can import API data, validate rows, refresh dashboards, and generate report-ready outputs from one workflow."],
      ["Result", "The process can save time, reduce formula mistakes, improve reporting consistency, and make Excel workflows easier to maintain."],
    ],
    bullets: ["API imports", "Data validation", "Dashboard refresh", "Report generation"],
  },
} satisfies Record<ResourceType, {
  path: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  sections: [string, string][];
  bullets: string[];
}>;

const relatedLinks = [
  { label: "Outlook Add-in Development", href: "/outlook-add-in-development" },
  { label: "Excel Add-in Development", href: "/excel-add-in-development" },
  { label: "Microsoft Graph Integration", href: "/microsoft-graph-integration" },
  { label: "M365 Add-in Deployment", href: "/microsoft-365-add-in-deployment" },
];

const getResourceAccent = (type: ResourceType) => {
  if (type === "graph") {
    return {
      heroGlow: "bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.16),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(168,85,247,0.12),transparent_30%)]",
      sectionGlow: "bg-[radial-gradient(circle_at_18%_12%,rgba(34,211,238,0.12),transparent_26rem),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.1),transparent_24rem)]",
      pill: "border-cyan-300/20 bg-cyan-300/10 text-cyan-100",
      icon: "text-cyan-200",
      card: "border-cyan-300/15 bg-cyan-300/10",
      check: "text-cyan-300",
      hover: "hover:border-cyan-300/25",
      gradientText: "from-cyan-200 via-blue-200 to-white",
    };
  }

  if (type === "excel-guide" || type === "excel-reporting-case") {
    return {
      heroGlow: "bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.15),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(20,184,166,0.1),transparent_30%)]",
      sectionGlow: "bg-[radial-gradient(circle_at_18%_12%,rgba(34,197,94,0.1),transparent_26rem),radial-gradient(circle_at_82%_18%,rgba(20,184,166,0.08),transparent_24rem)]",
      pill: "border-emerald-300/20 bg-emerald-300/10 text-emerald-100",
      icon: "text-emerald-200",
      card: "border-emerald-300/15 bg-emerald-300/10",
      check: "text-emerald-300",
      hover: "hover:border-emerald-300/25",
      gradientText: "from-emerald-200 via-lime-200 to-white",
    };
  }

  return {
    heroGlow: "bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.16),transparent_32%),radial-gradient(circle_at_78%_18%,rgba(255,122,24,0.1),transparent_30%)]",
    sectionGlow: "bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.1),transparent_26rem),radial-gradient(circle_at_82%_18%,rgba(255,122,24,0.08),transparent_24rem)]",
    pill: "border-blue-300/20 bg-blue-300/10 text-blue-100",
    icon: "text-blue-200",
    card: "border-blue-300/15 bg-blue-300/10",
    check: "text-blue-300",
    hover: "hover:border-blue-300/25",
    gradientText: "from-blue-200 via-orange-100 to-white",
  };
};

const graphCapabilities = [
  {
    icon: Mail,
    title: "Outlook email workflows",
    items: ["Read selected email context", "Create drafts and replies", "Save messages to CRM", "Process attachments", "Sync conversations"],
  },
  {
    icon: CalendarDays,
    title: "Calendar and meetings",
    items: ["Read calendar events", "Create meetings", "Find available time", "Sync meeting notes", "Automate follow-ups"],
  },
  {
    icon: FolderOpen,
    title: "OneDrive and SharePoint files",
    items: ["Upload and download files", "Create folders", "Attach documents", "Read file metadata", "Connect document libraries"],
  },
  {
    icon: UsersRound,
    title: "Users and organization data",
    items: ["Read user profiles", "Find team members", "Use directory data", "Map managers and departments", "Support tenant users"],
  },
  {
    icon: Workflow,
    title: "Teams and collaboration",
    items: ["Send Teams notifications", "Connect channels", "Create workflow updates", "Link Office add-ins with Teams", "Support internal collaboration"],
  },
  {
    icon: TableProperties,
    title: "Excel and reporting data",
    items: ["Read workbook files", "Sync report data", "Connect Excel with APIs", "Refresh datasets", "Move data between M365 tools"],
  },
  {
    icon: ShieldCheck,
    title: "Security and permissions",
    items: ["OAuth login", "Admin consent planning", "Least-privilege scopes", "Token handling", "Tenant security review"],
  },
  {
    icon: Rocket,
    title: "Business system integrations",
    items: ["CRM sync", "Helpdesk workflows", "Document automation", "Approval flows", "Custom API bridges"],
  },
];

const SEOResourcePage = ({ type }: { type: ResourceType }) => {
  const content = resources[type];
  const accent = getResourceAccent(type);
  const canonicalUrl = `${siteUrl}${content.path}`;
  const isCaseStudy = content.eyebrow === "Case Study";
  const directEmailHref = `mailto:shahzad890.it@gmail.com?subject=${encodeURIComponent(content.title)}&body=${encodeURIComponent(
    `Hi Shahzad,\n\nI read the ${content.title} page and would like to discuss a project.\n\nCompany:\nRequirements:\n\nThanks.`
  )}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": isCaseStudy ? "Article" : "TechArticle",
    headline: content.title,
    description: content.description,
    url: canonicalUrl,
    author: { "@type": "Organization", name: "NexaAI Solutions" },
    publisher: {
      "@type": "Organization",
      name: "NexaAI Solutions",
      logo: { "@type": "ImageObject", url: `${siteUrl}/Logo.png` },
    },
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
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}/Logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.metaTitle} />
        <meta name="twitter:description" content={content.description} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <section className="relative overflow-hidden pb-16 pt-32">
            <div className="absolute inset-0 hero-gradient" />
            <div className={`absolute inset-0 ${accent.heroGlow}`} />
            <div className="section-container relative z-10">
              <div className="mx-auto max-w-4xl text-center">
                <span className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-xl ${accent.pill}`}>
                  {isCaseStudy ? <FileText className="h-4 w-4" /> : <BookOpen className="h-4 w-4" />}
                  {content.eyebrow}
                </span>
                <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-6xl">{content.title}</h1>
                <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-muted-foreground">{content.intro}</p>
                <Button variant="hero" size="xl" asChild className="group rounded-full">
                  <a href={directEmailHref}>
                    Discuss This Topic
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="section-container">
              <div className="grid gap-8 lg:grid-cols-[1fr,0.85fr]">
                <article className="rounded-3xl glass p-8 text-left">
                  <div className="space-y-8">
                    {content.sections.map(([heading, body]) => (
                      <div key={heading}>
                        <h2 className="mb-3 text-2xl font-bold text-foreground">{heading}</h2>
                        <p className="leading-7 text-muted-foreground">{body}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <aside className={`rounded-3xl border p-8 text-left ${accent.card}`}>
                  <h2 className="mb-5 text-2xl font-bold text-foreground">Key points</h2>
                  <div className="space-y-4">
                    {content.bullets.map((bullet) => (
                      <p key={bullet} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${accent.check}`} />
                        {bullet}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl bg-background/25 p-5">
                    <Rocket className={`mb-3 h-6 w-6 ${accent.check}`} />
                    <p className="mb-2 font-semibold text-foreground">Need implementation help?</p>
                    <p className="mb-4 text-sm leading-6 text-muted-foreground">
                      I can help turn this topic into a secure Office add-in project with scope, architecture, and deployment support.
                    </p>
                    <Button variant="hero" size="lg" asChild>
                      <a href={directEmailHref}>Email Project Brief</a>
                    </Button>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          {type === "graph" && (
            <section className="relative overflow-hidden py-20">
              <div className={`absolute inset-0 ${accent.sectionGlow}`} />

              <div className="section-container relative z-10">
                <div className="mx-auto mb-12 max-w-4xl text-center">
                  <span className="section-kicker">
                    <Workflow className="h-4 w-4" />
                    What Graph Can Do
                  </span>
                  <h2 className="section-title mb-5">
                    Microsoft Graph can connect your add-in
                    <span className={`block bg-gradient-to-r ${accent.gradientText} bg-clip-text text-transparent`}>with the full Microsoft 365 workspace.</span>
                  </h2>
                  <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                    Graph is useful when an Office add-in needs access to Microsoft 365 data such as email, calendar, files, users, SharePoint, Teams, OneDrive, and business workflows with secure permissions.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                  {graphCapabilities.map((capability) => (
                    <article
                      key={capability.title}
                      className={`group rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 ${accent.hover} hover:bg-white/[0.06]`}
                    >
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border ${accent.card} ${accent.icon}`}>
                        <capability.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-4 text-lg font-bold text-foreground">{capability.title}</h3>
                      <div className="space-y-3">
                        {capability.items.map((item) => (
                          <p key={item} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                            <CheckCircle2 className={`mt-1 h-4 w-4 shrink-0 ${accent.check}`} />
                            {item}
                          </p>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-10 grid gap-5 lg:grid-cols-3">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left">
                    <h3 className="mb-3 text-xl font-bold text-foreground">For Outlook add-ins</h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      Graph can help read message context, fetch attachments, create drafts, sync emails to CRM, create calendar events, and trigger follow-up workflows.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left">
                    <h3 className="mb-3 text-xl font-bold text-foreground">For Excel and Word add-ins</h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      Graph can connect workbook and document workflows with OneDrive, SharePoint, user files, reports, templates, approvals, and external business systems.
                    </p>
                  </div>
                  <div className={`rounded-3xl border p-6 text-left ${accent.card}`}>
                    <h3 className="mb-3 text-xl font-bold text-foreground">Security comes first</h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      A good Graph integration uses least-privilege permissions, admin consent planning, token handling, and a clear explanation of what data the add-in needs.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="pb-24">
            <div className="section-container">
              <div className="rounded-3xl border border-purple-500/10 glass p-8">
                <div className="mb-5 flex items-center justify-center gap-3">
                  <Workflow className="h-6 w-6 text-purple-300" />
                  <h2 className="text-center text-3xl font-bold text-foreground">Related pages</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                  {relatedLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-2xl glass-light p-4 text-center text-sm font-semibold text-muted-foreground transition-all hover:text-orange-200 hover:shadow-glow-orange"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SEOResourcePage;



