import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, FileText, Mail, Presentation, ShieldCheck, TableProperties } from "lucide-react";
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
      "Custom Outlook add-in development for email automation, CRM sync, Microsoft Graph integration, attachments, calendar workflows, and enterprise Microsoft 365 deployment.",
    h1: "Custom Outlook Add-in Development for Business Automation",
    intro:
      "Build secure Outlook add-ins that automate email workflows, connect Microsoft Graph, sync business systems, and improve team productivity inside Microsoft 365.",
    features: ["Email automation and smart replies", "Microsoft Graph mail and calendar APIs", "CRM and helpdesk integrations", "Attachment and PDF workflows", "OAuth and tenant permission planning", "Microsoft 365 Admin Center deployment"],
    useCases: ["Automatically create tasks from emails", "Sync Outlook conversations with CRM records", "Generate AI-assisted replies and summaries", "Route attachments into document workflows"],
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
                <h1 className="mb-6 font-heading text-4xl font-extrabold leading-tight md:text-6xl">
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
