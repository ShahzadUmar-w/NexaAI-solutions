import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Network, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  getIntegrationBrand,
  integrationSystems,
  type IntegrationSystem,
} from "@/data/integrations";

const featuredSystemNames = [
  "Salesforce",
  "HubSpot",
  "QuickBooks",
  "NetSuite",
  "SharePoint",
  "DocuSign",
  "Jira",
  "Zendesk",
  "Teams",
  "SQL Server",
];

const featuredSystems = featuredSystemNames
  .map((name) => integrationSystems.find((system) => system.name === name))
  .filter(Boolean) as IntegrationSystem[];

const enterprisePoints = [
  "Microsoft 365 add-ins connected to CRM, ERP, DMS, support, and private APIs.",
  "OAuth, SSO, tenant-aware permissions, audit-friendly workflows, and API validation.",
  "Dedicated integration pages for deeper SEO coverage and buyer research.",
];

const capabilityCards = [
  {
    title: "Office Surfaces",
    text: "Outlook, Excel, Word, and PowerPoint add-ins designed around real team workflows.",
  },
  {
    title: "Secure API Layer",
    text: "Authentication, rate limits, validation, retry behavior, logging, and deployment planning.",
  },
  {
    title: "Business Systems",
    text: "CRM, ERP, document management, ticketing, databases, and custom backend systems.",
  },
];

const LogoMark = ({ system }: { system: IntegrationSystem }) => {
  const brand = getIntegrationBrand(system.name);

  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white shadow-soft">
      {brand?.logoUrl ? (
        <img
          src={brand.logoUrl}
          alt={`${system.name} logo`}
          className="h-full w-full object-contain p-1.5"
          loading="lazy"
        />
      ) : (
        <span className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${system.color} text-xs font-black text-white`}>
          {system.short}
        </span>
      )}
    </span>
  );
};

const IntegrationEcosystemSection = () => {
  return (
    <section id="integrations" className="relative overflow-hidden border-y border-white/10 bg-[#020617] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(34,211,238,0.08),transparent_26rem),radial-gradient(circle_at_86%_10%,rgba(255,209,61,0.07),transparent_24rem)]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr] lg:items-stretch"
        >
          <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/[0.025] p-5 text-left ring-1 ring-black/50 sm:p-6">
            <div>
              <span className="section-kicker">
                <Network className="h-4 w-4" />
                Add-in Integrations
              </span>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground md:text-4xl">
                Enterprise Office add-ins connected to the systems your team already uses
              </h2>
              <p className="mt-5 max-w-2xl text-base font-normal leading-8 text-muted-foreground md:text-lg">
                We build Microsoft 365 add-ins that connect Outlook, Excel, Word, and PowerPoint with business data securely, without turning the home page into a long directory.
              </p>

              <div className="mt-7 grid gap-3">
                {enterprisePoints.map((point) => (
                  <p key={point} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-300" />
                    {point}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Button variant="hero" size="lg" className="w-full justify-center" asChild>
                <a href="/integrations">
                  Integration directory
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full justify-center" asChild>
                <a href="/enterprise-security">
                  Security practices
                  <ShieldCheck className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 text-left shadow-soft-lg ring-1 ring-black/50 sm:p-6">
            <p className="text-xs font-black uppercase tracking-widest text-cyan-100/80">Integration Coverage</p>

            <div className="mt-5 grid items-stretch gap-4 md:grid-cols-3">
              {capabilityCards.map((card) => (
                <div key={card.title} className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#020617]/70 p-4 ring-1 ring-black/40">
                  <h3 className="text-base font-black text-white">{card.title}</h3>
                  <p className="mt-2 text-sm font-normal leading-6 text-slate-400">{card.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-white/10 pt-5">
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">Featured Systems</p>
                  <p className="mt-1 text-sm text-slate-400">A short preview. Full list is on the integrations page.</p>
                </div>
                <span className="hidden text-sm font-bold text-cyan-100 sm:inline">{integrationSystems.length}+ systems</span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-2">
                {featuredSystems.map((system) => (
                  <a
                    key={system.slug}
                    href={`/integrations/${system.slug}`}
                    className="group flex min-h-[4.25rem] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-3 transition-colors hover:border-cyan-300/35 hover:bg-white/[0.065]"
                  >
                    <LogoMark system={system} />
                    <span className="min-w-0">
                      <span className="block text-sm font-bold leading-5 text-white group-hover:text-cyan-100">
                        {system.name}
                      </span>
                      <span className="block text-xs leading-4 text-slate-400">
                        {system.category}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationEcosystemSection;
