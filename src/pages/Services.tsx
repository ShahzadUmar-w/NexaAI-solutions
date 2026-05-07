import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, FileText, Mail, Presentation, TableProperties, type LucideIcon } from "lucide-react";
import PageShell from "@/components/PageShell";
import ServicesSection from "@/components/ServicesSection";
import IntegrationEcosystemSection from "@/components/IntegrationEcosystemSection";
import ResourcesSection from "@/components/ResourcesSection";
import SEOContentSection from "@/components/SEOContentSection";

const siteUrl = "https://officeaddindevelopment.com";
const defaultOgImage = `${siteUrl}/og-office-addin-development.png`;

const integrationCtas = [
  ["Need Salesforce integration?", "/integrations/salesforce-office-add-in-integration"],
  ["Need QuickBooks integration?", "/integrations/quickbooks-office-add-in-integration"],
  ["Need SharePoint integration?", "/integrations/sharepoint-office-add-in-integration"],
];

const officeCoverage: [string, string, LucideIcon][] = [
  ["Outlook", "Email workflows, CRM notes, tickets, attachments, AI summaries, and calendar context.", Mail],
  ["Excel", "Reports, dashboards, validation, custom functions, and business system sync.", TableProperties],
  ["Word", "Document generation, templates, approvals, signatures, and contract workflows.", FileText],
  ["PowerPoint", "Proposal decks, slide libraries, charts, summaries, and branded sales assets.", Presentation],
];

const serviceFaqs = [
  [
    "Which Microsoft Office apps can you build add-ins for?",
    "We build custom add-ins for Outlook, Excel, Word, and PowerPoint, including Office.js task panes, commands, Microsoft Graph integrations, authentication, and deployment support.",
  ],
  [
    "Can Office add-ins connect with CRMs, ERPs, or internal APIs?",
    "Yes. Office add-ins can connect with Salesforce, HubSpot, QuickBooks, SharePoint, databases, custom APIs, and other business systems through secure backend and OAuth workflows.",
  ],
  [
    "Do you help with Microsoft 365 deployment?",
    "Yes. We can prepare the manifest, test supported Office clients, review permissions, support Microsoft 365 Admin Center deployment, and provide handoff documentation.",
  ],
  [
    "Can you improve or maintain an existing Office add-in?",
    "Yes. We can audit existing Office.js add-ins, fix bugs, improve UI, update manifests, add integrations, and support ongoing maintenance after launch.",
  ],
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: serviceFaqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Office Add-in Development Services | NexaAI Solutions</title>
        <meta
          name="description"
          content="Microsoft Office add-in development services for Outlook, Excel, Word, PowerPoint, Office.js, Microsoft Graph, AI, Salesforce, QuickBooks, CRM, ERP, DMS, CMS, and business system integrations."
        />
        <link rel="canonical" href={`${siteUrl}/services`} />
        <meta property="og:title" content="Office Add-in Development Services | NexaAI Solutions" />
        <meta property="og:description" content="Custom Outlook, Excel, Word, and PowerPoint add-ins with Office.js, Microsoft Graph, secure integrations, and Microsoft 365 deployment support." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/services`} />
        <meta property="og:image" content={defaultOgImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={defaultOgImage} />
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>
      <PageShell>
        <ServicesSection />

        <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.018] py-20">
          <div className="section-container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="section-kicker">
                <CheckCircle2 className="h-4 w-4" />
                Integration Ready
              </span>
              <h2 className="section-title mb-4">Office add-in services for the systems your team already uses.</h2>
              <p className="text-muted-foreground">
                Start with the Office app, then connect the workflow to CRM, ERP, DMS, support tools, databases, or private APIs.
              </p>
            </div>

            <div className="mb-10 grid gap-4 md:grid-cols-3">
              {integrationCtas.map(([label, href]) => (
                <a key={href} href={href} className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left text-lg font-bold text-foreground transition-colors hover:border-orange-300/25 hover:bg-white/[0.065]">
                  {label}
                  <ArrowRight className="h-5 w-5 text-orange-300 transition-transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {officeCoverage.map(([title, text, Icon]) => (
                <article key={title} className="enterprise-card p-6 text-left">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-300/15 bg-orange-300/10 text-orange-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {serviceFaqs.map(([question, answer]) => (
                <article key={question} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-left">
                  <h3 className="mb-3 text-lg font-bold text-foreground">{question}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <IntegrationEcosystemSection />
        <ResourcesSection />
        <SEOContentSection />
      </PageShell>
    </>
  );
};

export default Services;
