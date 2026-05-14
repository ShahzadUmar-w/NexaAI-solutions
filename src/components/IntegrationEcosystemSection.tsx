// import { motion } from "framer-motion";
// import { ArrowRight, CheckCircle2, Network, ShieldCheck } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   getIntegrationBrand,
//   integrationSystems,
//   type IntegrationSystem,
// } from "@/data/integrations";

// const featuredSystemNames = [
//   "Salesforce",
//   "HubSpot",
//   "QuickBooks",
//   "NetSuite",
//   "SharePoint",
//   "DocuSign",
//   "Jira",
//   "Zendesk",
//   "Teams",
//   "SQL Server",
// ];

// const featuredSystems = featuredSystemNames
//   .map((name) => integrationSystems.find((system) => system.name === name))
//   .filter(Boolean) as IntegrationSystem[];

// const enterprisePoints = [
//   "Microsoft 365 add-ins connected to CRM, ERP, DMS, support, and private APIs.",
//   "OAuth, SSO, tenant-aware permissions, audit-friendly workflows, and API validation.",
//   "Dedicated integration pages for deeper SEO coverage and buyer research.",
// ];

// const capabilityCards = [
//   {
//     title: "Office Surfaces",
//     text: "Outlook, Excel, Word, and PowerPoint add-ins designed around real team workflows.",
//   },
//   {
//     title: "Secure API Layer",
//     text: "Authentication, rate limits, validation, retry behavior, logging, and deployment planning.",
//   },
//   {
//     title: "Business Systems",
//     text: "CRM, ERP, document management, ticketing, databases, and custom backend systems.",
//   },
// ];

// const integrationBannerImage = "/assets/Black%20and%20Gray%20Minimalist%20Shapes%20Personal%20Profile%20LinkedIn%20Banner.png";

// const LogoMark = ({ system }: { system: IntegrationSystem }) => {
//   const brand = getIntegrationBrand(system.name);

//   return (
//     <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-white shadow-soft dark:border-white/10">
//       {brand?.logoUrl ? (
//         <img
//           src={brand.logoUrl}
//           alt={`${system.name} logo`}
//           className="h-full w-full object-contain p-1.5"
//           loading="lazy"
//         />
//       ) : (
//         <span className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${system.color} text-xs font-black text-white`}>
//           {system.short}
//         </span>
//       )}
//     </span>
//   );
// };

// const IntegrationEcosystemSection = () => {
//   return (
//     <section id="integrations" className="relative overflow-hidden border-y border-border bg-[#f8fafc] py-20 dark:border-white/10 dark:bg-[#020617]">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(14,165,233,0.055),transparent_26rem),radial-gradient(circle_at_86%_10%,rgba(249,115,22,0.055),transparent_24rem)] dark:bg-[radial-gradient(circle_at_18%_15%,rgba(34,211,238,0.08),transparent_26rem),radial-gradient(circle_at_86%_10%,rgba(255,209,61,0.07),transparent_24rem)]" />

//       <div className="section-container relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55 }}
//           className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr] lg:items-stretch"
//         >
//           <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-border bg-white/[0.85] p-5 text-left shadow-soft ring-1 ring-slate-900/5 dark:border-white/10 dark:bg-white/[0.025] dark:ring-black/50 sm:p-6">
//             <div>
//               <span className="section-kicker">
//                 <Network className="h-4 w-4" />
//                 Add-in Integrations
//               </span>
//               <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-normal text-foreground md:text-4xl">
//                 Enterprise Office add-ins connected to the systems your team already uses
//               </h2>
//               <p className="mt-5 max-w-2xl text-base font-normal leading-8 text-muted-foreground md:text-lg">
//                 We build Microsoft 365 add-ins that connect Outlook, Excel, Word, and PowerPoint with business data securely, without turning the home page into a long directory.
//               </p>

//               <div className="mt-7 grid gap-3">
//                 {enterprisePoints.map((point) => (
//                   <p key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground dark:text-slate-300">
//                     <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-600 dark:text-cyan-300" />
//                     {point}
//                   </p>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-8 grid gap-3 sm:grid-cols-2">
//               <Button variant="hero" size="lg" className="w-full justify-center" asChild>
//                 <a href="/integrations">
//                   Integration directory
//                   <ArrowRight className="h-4 w-4" />
//                 </a>
//               </Button>
//               <Button variant="heroOutline" size="lg" className="w-full justify-center" asChild>
//                 <a href="/enterprise-security">
//                   Security practices
//                   <ShieldCheck className="h-4 w-4" />
//                 </a>
//               </Button>
//             </div>
//           </div>

//           <div className="h-full rounded-[1.5rem] border border-border bg-white/[0.9] p-5 text-left shadow-soft-lg ring-1 ring-slate-900/5 dark:border-white/10 dark:bg-white/[0.035] dark:ring-black/50 sm:p-6">
//             <div className="mb-5 overflow-hidden rounded-2xl border border-border bg-white shadow-soft dark:border-white/10">
//               <img
//                 src={integrationBannerImage}
//                 alt="Nexa AI Office add-ins and Google add-ons development services"
//                 className="h-28 w-full object-cover object-center sm:h-32"
//                 loading="lazy"
//               />
//             </div>

//             <p className="text-xs font-black uppercase tracking-widest text-cyan-700 dark:text-cyan-100/80">Integration Coverage</p>

//             <div className="mt-5 grid items-stretch gap-4 md:grid-cols-3">
//               {capabilityCards.map((card) => (
//                 <div key={card.title} className="flex h-full flex-col rounded-2xl border border-border bg-slate-50 p-4 ring-1 ring-slate-900/5 dark:border-white/10 dark:bg-[#020617]/70 dark:ring-black/40">
//                   <h3 className="text-base font-black text-foreground dark:text-white">{card.title}</h3>
//                   <p className="mt-2 text-sm font-normal leading-6 text-muted-foreground dark:text-slate-400">{card.text}</p>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 border-t border-border pt-5 dark:border-white/10">
//               <div className="mb-4 flex items-end justify-between gap-4">
//                 <div>
//                   <p className="text-xs font-black uppercase tracking-widest text-muted-foreground dark:text-slate-400">Featured Systems</p>
//                   <p className="mt-1 text-sm text-muted-foreground dark:text-slate-400">A short preview. Full list is on the integrations page.</p>
//                 </div>
//                 <span className="hidden text-sm font-bold text-cyan-700 dark:text-cyan-100 sm:inline">{integrationSystems.length}+ systems</span>
//               </div>

//               <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-2">
//                 {featuredSystems.map((system) => (
//                   <a
//                     key={system.slug}
//                     href={`/integrations/${system.slug}`}
//                     className="group flex min-h-[4.25rem] items-center gap-3 rounded-2xl border border-border bg-slate-50 p-3 transition-colors hover:border-cyan-400/45 hover:bg-white dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-cyan-300/35 dark:hover:bg-white/[0.065]"
//                   >
//                     <LogoMark system={system} />
//                     <span className="min-w-0">
//                       <span className="block text-sm font-bold leading-5 text-foreground group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-100">
//                         {system.name}
//                       </span>
//                       <span className="block text-xs leading-4 text-muted-foreground dark:text-slate-400">
//                         {system.category}
//                       </span>
//                     </span>
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default IntegrationEcosystemSection;

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Network, ShieldCheck, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getIntegrationBrand, integrationSystems, type IntegrationSystem } from "@/data/integrations";

const ENTERPRISE_POINTS = [
  "Microsoft 365 add-ins for CRM, ERP, and private APIs.",
  "OAuth, SSO, and tenant-aware security permissions.",
  "Audit-friendly workflows and API validation.",
];

const LogoMark = ({ system }: { system: IntegrationSystem }) => {
  const brand = getIntegrationBrand(system.name);
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800/50 p-2 ring-1 ring-slate-200 dark:ring-white/10 group-hover:ring-cyan-500/50 transition-all">
      {brand?.logoUrl ? (
        <img src={brand.logoUrl} alt={system.name} className="h-full w-full object-contain" />
      ) : (
        <span className="text-[10px] font-bold text-slate-600 dark:text-white">{system.short}</span>
      )}
    </div>
  );
};

const IntegrationEcosystemSection = () => {
  const marqueeSystems = [...integrationSystems, ...integrationSystems, ...integrationSystems];

  return (
    <section className="relative overflow-hidden border-y border-slate-200 dark:border-white/5 bg-white dark:bg-[#020617] py-16 md:py-24 text-left transition-colors duration-300">
      <div className="pointer-events-none absolute top-0 left-0 h-[300px] w-[300px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* CONTENT SIDE */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 dark:border-orange-500/30 bg-cyan-50 dark:bg-cyan-500/10 px-4 py-1.5 mb-6">
              <Network className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">Enterprise Integration</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Connect your Office <span className="text-cyan-600 dark:text-cyan-400">to every system.</span>
            </h2>
            <p className="mt-6 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">Secure Microsoft 365 add-ins that bridge the gap between documents and data silos.</p>
            <div className="mt-10 space-y-5">
              {ENTERPRISE_POINTS.map((point) => (
                <div key={point} className="flex items-start gap-4">
                  <div className="mt-1 rounded-full border border-cyan-200 dark:border-cyan-500/30 p-0.5"><CheckCircle2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400 fill-cyan-500/5" /></div>
                  <span className="text-base font-medium text-slate-700 dark:text-slate-200">{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-14 rounded-xl bg-orange-100 text-slate-900 hover:bg-orange-200 text-base font-bold w-full sm:w-auto" asChild><a href="/integrations" className="justify-center">Browse Directory <ArrowRight className="ml-2 h-4 w-4" /></a></Button>
              <Button variant="outline" size="lg" className="h-14 rounded-xl border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white w-full sm:w-auto" asChild><a href="/security" className="justify-center"><ShieldCheck className="mr-2 h-5 w-5" /> Security Specs</a></Button>
            </div>
          </motion.div>

          {/* AUTO-MARQUEE SIDE */}
          <div className="lg:col-span-7 -mx-6 lg:mx-0 overflow-hidden py-4">
             <motion.div
                animate={{ x: ["0%", "-33.33%"] }}
                transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                className="flex gap-4 px-6 items-stretch hover:[animation-play-state:paused] cursor-pointer"
              >
                {marqueeSystems.map((system, i) => (
                  <a key={`${system.slug}-${i}`} href={`/integrations/${system.slug}`} className="group flex min-w-[220px] h-[80px] items-center gap-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/40 p-4 transition-all hover:bg-white dark:hover:bg-slate-800/60 shadow-sm">
                    <LogoMark system={system} />
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-slate-800 dark:text-slate-200 text-sm whitespace-nowrap leading-tight">{system.name}</p>
                      <p className="text-[10px] mt-1 text-slate-400 dark:text-slate-500 uppercase tracking-tighter">Connector</p>
                    </div>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-40 transition-opacity text-slate-400" />
                  </a>
                ))}
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationEcosystemSection;