import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { AlertTriangle, ArrowLeft, ArrowRight, CheckCircle2, ClipboardCheck, FileText, LayoutDashboard, LockKeyhole, Network, ShieldCheck, UsersRound, Workflow } from "lucide-react";
import { useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { findIntegrationBySlug, getIntegrationBrand, integrationSystems, type IntegrationCategoryId, type IntegrationSystem } from "@/data/integrations";

const siteUrl = "https://officeaddindevelopment.com";

const relatedSystemsFor = (slug: string, categoryId: string) =>
  integrationSystems.filter((system) => system.categoryId === categoryId && system.slug !== slug).slice(0, 5);

const categoryDetails: Record<IntegrationCategoryId, {
  value: string;
  dataObjects: string[];
  architecture: string[];
  bestFor: string[];
  challenges: string[];
  discoveryInputs: string[];
}> = {
  crm: {
    value: "Sales and account teams can work from Outlook, Excel, Word, and PowerPoint while keeping CRM data accurate, searchable, and connected to the customer journey.",
    dataObjects: ["Leads, contacts, accounts, and companies", "Deals, opportunities, stages, and activities", "Notes, tasks, attachments, and timeline updates"],
    architecture: ["CRM API authentication and tenant-aware access", "Field mapping for accounts, contacts, deals, and notes", "Duplicate checks, activity logging, and error recovery"],
    bestFor: ["Sales teams managing email-heavy follow-ups", "Account managers creating proposals and updates", "Leadership teams needing pipeline reporting in Excel"],
    challenges: ["Duplicate contacts and inconsistent account matching", "Role-based access for sensitive customer data", "Keeping CRM activity logs accurate without slowing users down"],
    discoveryInputs: ["CRM fields and objects that matter most", "Sample email, proposal, and reporting workflows", "User roles, permission rules, and pilot team list"],
  },
  erp: {
    value: "Finance and operations teams can bring ERP data into Office workflows for reporting, approvals, exports, and controlled updates without relying on manual copy-paste.",
    dataObjects: ["Customers, vendors, invoices, orders, and payments", "Inventory, finance, procurement, and operational records", "Reports, exports, approval states, and audit logs"],
    architecture: ["Secure API access for finance and operational data", "Validation rules before spreadsheet data is written back", "Rate-limit planning, retry handling, and audit trails"],
    bestFor: ["Finance teams refreshing Excel reports", "Operations teams preparing approvals and exports", "Managers who need controlled updates from spreadsheets"],
    challenges: ["Strict validation before financial records are changed", "API limits, batch operations, and long-running exports", "Audit logs for approvals, edits, and failed sync attempts"],
    discoveryInputs: ["ERP objects, report templates, and update rules", "Approval steps and spreadsheet validation logic", "Sandbox access, API documentation, and test records"],
  },
  documents: {
    value: "Document-heavy teams can generate, store, route, approve, and track files from Office while keeping permissions, metadata, and records in the right system.",
    dataObjects: ["Documents, folders, libraries, templates, and metadata", "Attachments, generated PDFs, contracts, and signatures", "Approvals, routing rules, versions, and permissions"],
    architecture: ["Document storage permissions and folder routing", "Template generation, metadata mapping, and version control", "Signature, approval, and retention workflow planning"],
    bestFor: ["Legal, HR, and operations teams generating documents", "Teams saving Outlook attachments to controlled libraries", "Organizations with approval, signature, or retention rules"],
    challenges: ["Folder permissions, metadata quality, and file naming rules", "Version control across drafts, approvals, and signed documents", "Large attachments and reliable upload/retry handling"],
    discoveryInputs: ["Template files, metadata fields, and folder structure", "Approval or signature rules for each document type", "Retention, naming, and access-control requirements"],
  },
  operations: {
    value: "Operations and project teams can turn emails, spreadsheets, meetings, and documents into structured tasks without losing context between Office and delivery tools.",
    dataObjects: ["Tasks, issues, projects, boards, comments, and owners", "Due dates, priorities, statuses, attachments, and approvals", "Meeting notes, document feedback, and spreadsheet rows"],
    architecture: ["Workflow triggers from Outlook, Excel, Word, and meetings", "Status sync, ownership mapping, and comment history", "Permission-aware task creation and update handling"],
    bestFor: ["Project teams turning emails into tasks", "Operations teams converting spreadsheets into work items", "Managers tracking approvals, deadlines, and ownership"],
    challenges: ["Mapping Office context to the right project, board, or queue", "Preventing noisy task creation and duplicate work items", "Keeping status, comments, and ownership synchronized"],
    discoveryInputs: ["Project templates, board structure, and status rules", "Examples of emails, rows, or notes that become tasks", "Owner mapping, priority rules, and notification preferences"],
  },
  support: {
    value: "Support and service teams can convert customer conversations into tickets, summaries, replies, and internal updates while preserving context across channels.",
    dataObjects: ["Tickets, contacts, organizations, conversations, and comments", "Priorities, SLAs, attachments, tags, and support queues", "Notifications, summaries, internal notes, and escalations"],
    architecture: ["Ticket creation from Outlook and Office context", "Customer matching, thread summaries, and attachment handling", "Queue routing, SLA context, and secure notification flows"],
    bestFor: ["Support teams handling requests from Outlook", "Service teams creating tickets with full customer context", "Managers needing support summaries and reporting exports"],
    challenges: ["Matching customers and organizations correctly", "Preserving conversation context, attachments, and internal notes", "Routing by queue, SLA, priority, and escalation rules"],
    discoveryInputs: ["Ticket fields, queues, tags, and SLA rules", "Sample customer emails and support response workflows", "Escalation paths, notification channels, and test agents"],
  },
  data: {
    value: "Internal platform teams can connect Office add-ins with private databases, APIs, AI services, and backend workflows designed around the company’s own process.",
    dataObjects: ["Custom records, database tables, API resources, and files", "User roles, validation rules, workflow states, and logs", "Reports, dashboards, generated documents, and AI outputs"],
    architecture: ["Custom backend API design for Office add-ins", "Authentication, role checks, validation, and observability", "Database schema mapping, queues, and secure error handling"],
    bestFor: ["Companies with private APIs or internal tools", "Teams building custom Excel, Outlook, or document workflows", "Product teams connecting AI and business data securely"],
    challenges: ["Designing stable APIs around changing internal processes", "Authentication, user roles, validation, and logging", "Handling data quality, background jobs, and error recovery"],
    discoveryInputs: ["API documentation, database schema, and sample payloads", "User roles, security expectations, and hosting preferences", "Workflow examples, edge cases, and reporting needs"],
  },
};

const officeSurfaces = (integration: IntegrationSystem) => [
  {
    title: "Outlook add-in",
    text: `Show ${integration.name} context beside emails, create records from threads, save attachments, and trigger follow-up workflows without leaving the inbox.`,
  },
  {
    title: "Excel add-in",
    text: `Import ${integration.name} data into controlled sheets, validate rows, refresh reports, and push approved updates back through secure APIs.`,
  },
  {
    title: "Word add-in",
    text: `Generate proposals, contracts, reports, letters, and templates using approved ${integration.name} fields and business rules.`,
  },
  {
    title: "PowerPoint add-in",
    text: `Build sales decks, status packs, executive summaries, and client presentations from live or approved ${integration.name} data.`,
  },
];

const implementationSteps = (name: string) => [
  `Map the exact ${name} objects, fields, permissions, and user roles the Office add-in needs.`,
  "Design the Office.js user experience for Outlook, Excel, Word, or PowerPoint with clear error states.",
  "Build secure API services for authentication, validation, logging, retries, and rate-limit handling.",
  "Test with real users, deploy through Microsoft 365 admin channels, and document support ownership.",
];

const faqItemsFor = (integration: IntegrationSystem) => [
  {
    question: `Can you build a custom ${integration.name} Outlook add-in?`,
    answer: `Yes. A custom Outlook add-in can read selected email context, show ${integration.name} records, create notes or tasks, save attachments, and trigger approved workflows through secure APIs.`,
  },
  {
    question: `Can ${integration.name} work with Excel, Word, and PowerPoint add-ins too?`,
    answer: `Yes. The same integration can support Excel reporting, Word document generation, PowerPoint deck automation, and Outlook workflows depending on the business process.`,
  },
  {
    question: `What security planning is needed for ${integration.name} Office add-in development?`,
    answer: `A production build should define OAuth or API authentication, Microsoft 365 permissions, user roles, logging, validation rules, retry behavior, and support processes before rollout.`,
  },
  {
    question: `Can a ${integration.name} Office add-in sync data both ways?`,
    answer: `Yes, when the API and permissions allow it. A two-way sync can pull ${integration.name} data into Office and send approved updates back after validation, duplicate checks, and error handling.`,
  },
  {
    question: `How long does a ${integration.name} Office add-in integration take?`,
    answer: `A focused integration can often start with a discovery and prototype phase, then move into production build, testing, and Microsoft 365 deployment. The final timeline depends on API complexity, approval workflows, security reviews, and the number of Office apps involved.`,
  },
  {
    question: `Can ${integration.name} be connected with AI inside Office add-ins?`,
    answer: `Yes. AI can help summarize emails, classify requests, draft documents, extract fields, prepare reports, or generate workflow suggestions while ${integration.name} remains the system of record for approved business data.`,
  },
  {
    question: `How is a ${integration.name} add-in deployed to company users?`,
    answer: `Most enterprise deployments use Microsoft 365 admin deployment, controlled user groups, staged testing, and documented permissions. The add-in can be rolled out first to pilot users before wider release.`,
  },
  {
    question: `Can you maintain and improve the ${integration.name} integration after launch?`,
    answer: `Yes. Ongoing support can include API updates, bug fixes, monitoring, performance improvements, new workflow features, user feedback changes, and compatibility checks for Microsoft 365 updates.`,
  },
];

const LogoMark = ({ system, large = false }: { system: IntegrationSystem; large?: boolean }) => {
  const [failed, setFailed] = useState(false);
  const brand = getIntegrationBrand(system.name);
  const sizeClass = large ? "h-20 w-20 rounded-3xl" : "h-10 w-10 rounded-xl";

  return (
    <span className={`flex ${sizeClass} shrink-0 items-center justify-center overflow-hidden border border-white/10 bg-white shadow-soft`}>
      {brand?.logoUrl && !failed ? (
        <img
          src={brand.logoUrl}
          alt={`${system.name} logo`}
          className="h-full w-full object-contain p-2"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${system.color} ${large ? "text-xl" : "text-xs"} font-black text-white`}>
          {system.short}
        </span>
      )}
    </span>
  );
};

const IntegrationDetail = () => {
  const { slug = "" } = useParams();
  const integration = findIntegrationBySlug(slug) || integrationSystems[0];
  const brand = getIntegrationBrand(integration.name);
  const relatedSystems = relatedSystemsFor(integration.slug, integration.categoryId);
  const detail = categoryDetails[integration.categoryId];
  const surfaces = officeSurfaces(integration);
  const steps = implementationSteps(integration.name);
  const faqs = faqItemsFor(integration);
  const canonicalUrl = `${siteUrl}/integrations/${integration.slug}`;
  const title = `${integration.name} Office Add-in Integration | NexaAI Solutions`;
  const description = `${integration.description} Build secure Outlook, Excel, Word, PowerPoint, Office.js, Microsoft Graph, AI, and Microsoft 365 workflows with ${integration.name}.`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: `${integration.name} Office Add-in Integration`,
        description,
        provider: {
          "@type": "Organization",
          name: "NexaAI Solutions",
          url: siteUrl,
        },
        areaServed: "Worldwide",
        serviceType: "Office add-in integration development",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Integrations", item: `${siteUrl}/integrations` },
          { "@type": "ListItem", position: 3, name: integration.name, item: canonicalUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${integration.name} integration, ${integration.name} Office add-in, ${integration.name} Outlook add-in, ${integration.name} Excel add-in, Office.js integration, Microsoft Graph integration`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <PageShell>
        <section className="relative overflow-hidden pb-16 pt-28">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,209,61,0.13),transparent_28rem),radial-gradient(circle_at_84%_16%,rgba(225,29,143,0.1),transparent_28rem)]" />
          <div className="section-container relative z-10">
            <Button variant="heroOutline" asChild className="mb-8">
              <a href="/integrations">
                <ArrowLeft className="h-4 w-4" />
                All integrations
              </a>
            </Button>

            <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
              <div className="text-left">
                <span className="section-kicker">
                  <Network className="h-4 w-4" />
                  {integration.category}
                </span>
                <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
                  {integration.name} Office add-in integration.
                </h1>
                <p className="mb-8 text-lg leading-8 text-muted-foreground">{integration.description}</p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="hero" size="lg" asChild>
                    <a href="/contact">
                      Discuss {integration.name} integration
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  {brand?.websiteUrl && (
                    <Button variant="heroOutline" size="lg" asChild>
                      <a href={brand.websiteUrl} target="_blank" rel="noreferrer">
                        Official website
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-left shadow-soft-lg">
                <div className="mb-6">
                  <LogoMark system={integration} large />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground">What can be built with {integration.name}</h2>
                <div className="grid gap-3">
                  {integration.useCases.map((item) => (
                    <p key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-300" />
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="section-container">
            <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr]">
              <div className="text-left">
                <span className="section-kicker">
                  <Workflow className="h-4 w-4" />
                  Workflow Examples
                </span>
                <h2 className="section-title mb-5">Practical {integration.name} automation ideas.</h2>
                <p className="text-base leading-8 text-muted-foreground md:text-lg">
                  These examples can be adapted for Outlook, Excel, Word, PowerPoint, Microsoft Graph, AI, and custom backend workflows.
                </p>
              </div>
              <div className="grid gap-3">
                {integration.workflows.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left">
                    <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.018] py-16">
          <div className="section-container">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <span className="section-kicker">
                <Network className="h-4 w-4" />
                Sample Workflow
              </span>
              <h2 className="section-title mb-4">How a {integration.name} Office add-in connects the workflow.</h2>
            </div>

            <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-[1fr,auto,1fr,auto,1fr] md:items-center">
              <article className="enterprise-card p-6 text-left">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-sm font-bold text-orange-700 dark:border-orange-300/15 dark:bg-orange-300/10 dark:text-orange-100">1</span>
                <h3 className="mb-3 text-xl font-bold text-foreground">Office app</h3>
                <p className="text-sm leading-6 text-muted-foreground">Outlook, Excel, Word, or PowerPoint captures the user action and business context.</p>
              </article>
              <ArrowRight className="hidden h-6 w-6 text-orange-300 md:block" />
              <article className="enterprise-card p-6 text-left">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-sm font-bold text-orange-700 dark:border-orange-300/15 dark:bg-orange-300/10 dark:text-orange-100">2</span>
                <h3 className="mb-3 text-xl font-bold text-foreground">Secure API layer</h3>
                <p className="text-sm leading-6 text-muted-foreground">Authentication, validation, logging, retries, and permission checks happen before sync.</p>
              </article>
              <ArrowRight className="hidden h-6 w-6 text-orange-300 md:block" />
              <article className="enterprise-card p-6 text-left">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-sm font-bold text-orange-700 dark:border-orange-300/15 dark:bg-orange-300/10 dark:text-orange-100">3</span>
                <h3 className="mb-3 text-xl font-bold text-foreground">{integration.name}</h3>
                <p className="text-sm leading-6 text-muted-foreground">{integration.name} receives approved data, returns records, and stays the source of truth.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.018] py-20">
          <div className="section-container">
            <div className="grid gap-10 lg:grid-cols-[0.88fr,1.12fr] lg:items-start">
              <div className="text-left">
                <span className="section-kicker">
                  <LayoutDashboard className="h-4 w-4" />
                  Microsoft 365 Fit
                </span>
                <h2 className="section-title mb-5">Where {integration.name} fits inside Office workflows.</h2>
                <p className="text-base leading-8 text-muted-foreground md:text-lg">{detail.value}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {surfaces.map((surface) => (
                  <article key={surface.title} className="rounded-3xl border border-white/10 bg-[#070b16] p-5 text-left shadow-soft">
                    <h3 className="mb-3 text-lg font-bold text-foreground">{surface.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{surface.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="section-container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="section-kicker">
                <FileText className="h-4 w-4" />
                Integration Scope
              </span>
              <h2 className="section-title mb-4">Useful {integration.name} integration content for planning.</h2>
              <p className="text-muted-foreground">
                A good add-in page should explain the business value, Office entry points, data objects, security model, and delivery steps before asking users to book a call.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              <article className="enterprise-card p-6 text-left">
                <h3 className="mb-5 text-xl font-bold text-foreground">Common data objects</h3>
                <div className="grid gap-4">
                  {detail.dataObjects.map((item) => (
                    <p key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      {item}
                    </p>
                  ))}
                </div>
              </article>

              <article className="enterprise-card p-6 text-left">
                <h3 className="mb-5 text-xl font-bold text-foreground">Architecture notes</h3>
                <div className="grid gap-4">
                  {detail.architecture.map((item) => (
                    <p key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <LockKeyhole className="mt-1 h-4 w-4 shrink-0 text-orange-300" />
                      {item}
                    </p>
                  ))}
                </div>
              </article>

              <article className="enterprise-card p-6 text-left">
                <h3 className="mb-5 text-xl font-bold text-foreground">Delivery roadmap</h3>
                <div className="grid gap-4">
                  {steps.map((item, index) => (
                    <p key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-bold text-orange-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-orange-200">
                        {index + 1}
                      </span>
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.018] py-20">
          <div className="section-container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="section-kicker">
                <ClipboardCheck className="h-4 w-4" />
                Buyer Planning
              </span>
              <h2 className="section-title mb-4">Before building a {integration.name} Office add-in.</h2>
              <p className="text-muted-foreground">
                These planning details help enterprise teams understand fit, risk, and the inputs needed before development starts.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              <article className="enterprise-card p-6 text-left">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-300/15 dark:bg-cyan-300/10 dark:text-cyan-200">
                    <UsersRound className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Best for</h3>
                </div>
                <div className="grid gap-4">
                  {detail.bestFor.map((item) => (
                    <p key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                      {item}
                    </p>
                  ))}
                </div>
              </article>

              <article className="enterprise-card p-6 text-left">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-300/15 dark:bg-orange-300/10 dark:text-orange-200">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Common challenges</h3>
                </div>
                <div className="grid gap-4">
                  {detail.challenges.map((item) => (
                    <p key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <AlertTriangle className="mt-1 h-4 w-4 shrink-0 text-orange-300" />
                      {item}
                    </p>
                  ))}
                </div>
              </article>

              <article className="enterprise-card p-6 text-left">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-orange-700 dark:border-white/10 dark:bg-white/[0.06] dark:text-orange-100">
                    <ClipboardCheck className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">What we need</h3>
                </div>
                <div className="grid gap-4">
                  {detail.discoveryInputs.map((item) => (
                    <p key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-300" />
                      {item}
                    </p>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.018] py-20">
          <div className="section-container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="section-kicker">
                <ShieldCheck className="h-4 w-4" />
                Secure Delivery
              </span>
              <h2 className="section-title mb-4">Integration planning for enterprise teams.</h2>
              <p className="text-muted-foreground">
                A production integration should define authentication, permissions, API limits, error handling, logging, deployment, and support before users depend on it.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {["OAuth and API authentication", "Office.js and Microsoft Graph permissions", "Testing, deployment, and support handoff"].map((item) => (
                <article key={item} className="enterprise-card p-6 text-left">
                  <CheckCircle2 className="mb-4 h-6 w-6 text-orange-300" />
                  <h3 className="text-lg font-bold text-foreground">{item}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="section-container">
            <div className="mx-auto max-w-4xl">
              <div className="mb-10 text-center">
                <h2 className="section-title mb-4">{integration.name} Office add-in FAQs.</h2>
                <p className="text-muted-foreground">Short answers for buyers comparing Office add-in integration options.</p>
              </div>
              <div className="grid gap-4">
                {faqs.map((item) => (
                  <article key={item.question} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-left">
                    <h3 className="mb-3 text-lg font-bold text-foreground">{item.question}</h3>
                    <p className="text-sm leading-7 text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {relatedSystems.length > 0 && (
          <section className="relative overflow-hidden py-20">
            <div className="section-container">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <h2 className="section-title mb-4">Related {integration.category} integrations.</h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {relatedSystems.map((system) => (
                  <a key={system.slug} href={`/integrations/${system.slug}`} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left transition-colors hover:border-orange-300/25 hover:bg-white/[0.065]">
                    <span className="mb-3 block">
                      <LogoMark system={system} />
                    </span>
                    <span className="block text-sm font-semibold text-foreground transition-colors group-hover:text-slate-950 dark:group-hover:text-orange-100">{system.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </PageShell>
    </>
  );
};

export default IntegrationDetail;
