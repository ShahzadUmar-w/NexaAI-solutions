import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ArrowRight, Building2, CheckCircle2, Network, ShieldCheck } from "lucide-react";
import PageShell from "@/components/PageShell";
import { getIntegrationBrand, integrationCategories, type IntegrationSystem } from "@/data/integrations";

const siteUrl = "https://officeaddindevelopment.com";

const comparisonRows = [
  ["CRM", "Salesforce, HubSpot, Dynamics 365", "Email capture, CRM notes, proposals, pipeline reports"],
  ["ERP", "QuickBooks, Xero, NetSuite, SAP", "Invoices, finance reports, approvals, validated Excel updates"],
  ["DMS / CMS", "SharePoint, OneDrive, DocuSign, Box", "Document generation, storage, signatures, metadata workflows"],
  ["Support", "Zendesk, Freshdesk, Teams, ServiceNow", "Ticket creation, customer summaries, attachments, notifications"],
  ["Custom APIs", "SQL Server, PostgreSQL, REST, GraphQL", "Private dashboards, backend workflows, AI-connected Office tools"],
];

const choosingPoints = [
  "Start with the Office app where users already spend the most time: Outlook for email, Excel for data, Word for documents, PowerPoint for proposals.",
  "Choose the system of record first, then decide which fields can be read, edited, generated, or approved from the add-in.",
  "Plan authentication, permissions, API limits, validation rules, and support ownership before the add-in reaches real users.",
];

const topIntegrationLinks = [
  ["Salesforce", "/integrations/salesforce-office-add-in-integration"],
  ["QuickBooks", "/integrations/quickbooks-office-add-in-integration"],
  ["SharePoint", "/integrations/sharepoint-office-add-in-integration"],
  ["Jira", "/integrations/jira-office-add-in-integration"],
  ["Zendesk", "/integrations/zendesk-office-add-in-integration"],
  ["SQL Server", "/integrations/sql-server-office-add-in-integration"],
];

const LogoMark = ({ system }: { system: IntegrationSystem }) => {
  const [failed, setFailed] = useState(false);
  const brand = getIntegrationBrand(system.name);

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white shadow-soft">
      {brand?.logoUrl && !failed ? (
        <img
          src={brand.logoUrl}
          alt={`${system.name} logo`}
          className="h-full w-full object-contain p-1.5"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${system.color} text-xs font-black text-white`}>
          {system.short}
        </span>
      )}
    </span>
  );
};

const Integrations = () => {
  return (
    <>
      <Helmet>
        <title>Office Add-in Integrations | CRM, ERP, DMS, CMS, AI Systems</title>
        <meta
          name="description"
          content="Explore Office add-in integration pages for Salesforce, QuickBooks, HubSpot, Xero, SharePoint, DocuSign, Jira, Zendesk, databases, AI workflows, and custom APIs."
        />
        <link rel="canonical" href={`${siteUrl}/integrations`} />
      </Helmet>
      <PageShell>
        <section className="relative overflow-hidden pb-16 pt-28">
          <div className="absolute inset-0 hero-gradient" />
          <div className="section-container relative z-10">
            <div className="mx-auto max-w-4xl text-center">
              <span className="section-kicker">
                <Network className="h-4 w-4" />
                Integration Pages
              </span>
              <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
                Office add-in integrations for business systems and AI workflows.
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
                Dedicated integration pages for CRM, ERP, accounting, DMS, CMS, support, project management, databases, custom APIs, and Microsoft 365 automation.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="section-container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="section-kicker">
                <ShieldCheck className="h-4 w-4" />
                Compare Integration Types
              </span>
              <h2 className="section-title mb-4">CRM vs ERP vs DMS vs support vs custom APIs.</h2>
              <p className="text-muted-foreground">
                Different integration categories need different security, data mapping, and Office app workflows.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] text-left">
              <div className="hidden grid-cols-[0.7fr,1fr,1.3fr] border-b border-white/10 bg-white/[0.045] px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground md:grid">
                <span>Type</span>
                <span>Examples</span>
                <span>Best workflow fit</span>
              </div>
              {comparisonRows.map(([type, examples, fit]) => (
                <div key={type} className="grid gap-3 border-b border-white/10 px-6 py-5 last:border-b-0 md:grid-cols-[0.7fr,1fr,1.3fr] md:items-center">
                  <h3 className="text-lg font-bold text-foreground">{type}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{examples}</p>
                  <p className="text-sm leading-6 text-muted-foreground">{fit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.018] py-20">
          <div className="section-container">
            <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
              <div className="text-left">
                <span className="section-kicker">
                  <CheckCircle2 className="h-4 w-4" />
                  Selection Guide
                </span>
                <h2 className="section-title mb-5">How to choose the right Office add-in integration.</h2>
                <p className="text-base leading-8 text-muted-foreground md:text-lg">
                  The right integration is usually the one that removes a daily manual step while protecting the system of record.
                </p>
              </div>
              <div className="grid gap-4">
                {choosingPoints.map((point) => (
                  <article key={point} className="rounded-3xl border border-white/10 bg-[#070b16] p-5 text-left">
                    <p className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-orange-300" />
                      {point}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-left">
              <h3 className="mb-5 text-xl font-bold text-foreground">Top integration pages</h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {topIntegrationLinks.map(([label, href]) => (
                  <a key={href} href={href} className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-semibold text-foreground transition-colors hover:border-orange-300/25 hover:bg-white/[0.065]">
                    {label}
                    <ArrowRight className="h-4 w-4 text-orange-300 transition-transform group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="section-container">
            <div className="grid gap-6 lg:grid-cols-2">
              {integrationCategories.map((category) => (
                <article key={category.id} className="enterprise-card p-6 text-left">
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-300/15 dark:bg-orange-300/10 dark:text-orange-200">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {category.systems.map((system) => (
                      <a
                        key={system.slug}
                        href={`/integrations/${system.slug}`}
                        className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-orange-300/25 hover:bg-white/[0.065]"
                      >
                        <LogoMark system={system} />
                        <span className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground transition-colors group-hover:text-slate-950 dark:group-hover:text-orange-100">
                          {system.name}
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 text-orange-300 transition-transform group-hover:translate-x-1" />
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default Integrations;
