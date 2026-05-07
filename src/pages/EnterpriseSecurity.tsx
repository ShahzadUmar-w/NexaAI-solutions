import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileCheck2,
  KeyRound,
  LifeBuoy,
  LockKeyhole,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { outlookBookingUrl } from "@/lib/booking";

const siteUrl = "https://officeaddindevelopment.com";
const defaultOgImage = `${siteUrl}/og-office-addin-development.png`;
const title = "Enterprise Security Practices for Office Add-ins | NexaAI Solutions";
const description =
  "Review NexaAI Solutions security practices for Microsoft Office add-in development, including OAuth, Microsoft Graph permissions, tenant deployment, data handling, testing, and support.";

const securityPractices = [
  {
    icon: KeyRound,
    title: "Identity and Access",
    text: "Office add-ins are planned around Microsoft identity, OAuth flows, role expectations, and least-privilege access instead of broad permissions.",
    points: ["Microsoft Entra ID planning", "OAuth scope review", "Role-aware user flows"],
  },
  {
    icon: ShieldCheck,
    title: "Permission Planning",
    text: "Microsoft Graph and Office.js permissions are mapped to the real workflow so admins can understand why each permission is needed.",
    points: ["Least-privilege Graph scopes", "Admin consent notes", "Permission-risk review"],
  },
  {
    icon: LockKeyhole,
    title: "Data Handling",
    text: "Sensitive document, mailbox, file, and workflow data is handled with clear boundaries between the add-in, backend, and third-party services.",
    points: ["No unnecessary data collection", "Environment-based secrets", "API boundary planning"],
  },
  {
    icon: ServerCog,
    title: "Deployment Readiness",
    text: "Add-ins are prepared for Microsoft 365 tenant validation, manifest review, centralized deployment, and production handoff.",
    points: ["Manifest validation", "HTTPS hosting checks", "Admin Center rollout support"],
  },
];

const deliveryControls = [
  "Discovery before development to clarify scope, risks, permissions, integrations, and production users.",
  "Separate development and production configuration for API URLs, keys, OAuth apps, and storage services.",
  "Cross-platform testing for the target Office clients, such as Outlook web, Windows, macOS, and Microsoft 365 tenants.",
  "Clear documentation for deployment steps, support contacts, known limitations, and future maintenance.",
  "Post-launch support options for bug fixes, API changes, Microsoft 365 updates, and workflow improvements.",
];

const reviewItems = [
  "Office.js API usage",
  "Microsoft Graph scopes",
  "OAuth and token flow",
  "Backend API endpoints",
  "Data storage requirements",
  "Tenant deployment path",
  "User roles and access",
  "Support and maintenance plan",
];

const EnterpriseSecurity = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: title,
        url: `${siteUrl}/enterprise-security`,
        description,
        isPartOf: {
          "@type": "WebSite",
          name: "NexaAI Solutions",
          url: siteUrl,
        },
        about: [
          "Office add-in security",
          "Microsoft Graph permissions",
          "Microsoft 365 deployment",
          "OAuth",
          "Enterprise add-in development",
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Enterprise Security",
            item: `${siteUrl}/enterprise-security`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteUrl}/enterprise-security`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/enterprise-security`} />
        <meta property="og:image" content={defaultOgImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={defaultOgImage} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <PageShell>
        <section className="relative overflow-hidden pb-16 pt-24 lg:pt-28">
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(255,209,61,0.14),transparent_30rem),radial-gradient(circle_at_82%_18%,rgba(225,29,143,0.1),transparent_28rem)]" />
          <div className="section-container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <span className="section-kicker">
                <ShieldCheck className="h-4 w-4" />
                Enterprise Security
              </span>
              <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
                Security-minded Office add-in development for Microsoft 365 teams.
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
                A practical trust overview for teams that need permission planning, Microsoft Graph review, tenant-ready deployment, and maintainable add-in delivery.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href={outlookBookingUrl} target="_blank" rel="noreferrer">
                    Book security discovery
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="/enterprise">Enterprise readiness</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="section-container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="section-kicker">
                <BadgeCheck className="h-4 w-4" />
                Trust Practices
              </span>
              <h2 className="section-title mb-4">What enterprise teams can review before rollout.</h2>
              <p className="text-muted-foreground">
                These practices help IT, operations, and product teams understand how the add-in will authenticate, access data, deploy, and receive support.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {securityPractices.map((item) => (
                <article key={item.title} className="enterprise-card p-6 text-left">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-300/15 bg-orange-300/10 text-orange-200">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mb-5 text-sm leading-6 text-muted-foreground">{item.text}</p>
                  <div className="grid gap-2">
                    {item.points.map((point) => (
                      <p key={point} className="flex items-start gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                        <span>{point}</span>
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.018] py-20">
          <div className="section-container">
            <div className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
              <div className="text-left">
                <span className="section-kicker">
                  <FileCheck2 className="h-4 w-4" />
                  Delivery Controls
                </span>
                <h2 className="section-title mb-5">A controlled path from scope to support.</h2>
                <p className="mb-8 text-base leading-8 text-muted-foreground md:text-lg">
                  Enterprise add-ins should be easy for business users and reviewable for technical teams. The delivery process focuses on clarity before code, careful permissions, practical testing, and a clean handoff.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="/contact">
                    Discuss your requirements
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="grid gap-3">
                {deliveryControls.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-300" />
                    <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="section-container">
            <div className="mx-auto max-w-4xl rounded-3xl border border-orange-300/15 bg-orange-300/10 p-6 text-center sm:p-8">
              <span className="section-kicker">
                <LifeBuoy className="h-4 w-4" />
                Review Checklist
              </span>
              <h2 className="mb-4 text-3xl font-bold text-foreground">Useful details to share before an enterprise add-in build.</h2>
              <p className="mx-auto mb-8 max-w-2xl text-sm leading-6 text-muted-foreground">
                If your team already knows these items, discovery becomes faster and the project can move into architecture with fewer surprises.
              </p>
              <div className="grid gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
                {reviewItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-background/30 p-4 text-sm font-semibold text-foreground/90">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default EnterpriseSecurity;
