import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, CheckCircle2, Images, ShieldCheck } from "lucide-react";
import { useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { findPortfolioProjectBySlug, portfolioProjectSlug, portfolioProjects } from "@/data/portfolioProjects";

const siteUrl = "https://officeaddindevelopment.com";

const categoryIntro: Record<string, string> = {
  "Outlook Add-in": "Outlook workflow built around email context, task panes, Office.js, Microsoft Graph, and business process automation.",
  "PowerPoint Add-in": "PowerPoint automation workflow for slide generation, reusable assets, branded decks, and presentation productivity.",
  "Word Add-in": "Word document automation workflow for templates, AI assistance, review processes, and structured document generation.",
  "Google Docs Add-on": "Google Docs add-on workflow for writing assistance, document automation, and Google Workspace productivity.",
  "Google Sheets Add-on": "Google Sheets add-on workflow for reporting, spreadsheet automation, dashboards, and operational data tasks.",
};

const PortfolioDetail = () => {
  const { slug = "" } = useParams();
  const project = findPortfolioProjectBySlug(slug) || portfolioProjects[0];
  const canonicalUrl = `${siteUrl}/portfolio/${portfolioProjectSlug(project)}`;
  const relatedProjects = portfolioProjects
    .filter((item) => item.category === project.category && portfolioProjectSlug(item) !== portfolioProjectSlug(project))
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.title} ${project.category} Portfolio`,
    url: canonicalUrl,
    description: project.summary,
    creator: {
      "@type": "Organization",
      name: "NexaAI Solutions",
      url: siteUrl,
    },
    image: project.images[0] ? `${siteUrl}${project.images[0]}` : `${siteUrl}/Logo.png`,
  };

  return (
    <>
      <Helmet>
        <title>{project.title} {project.category} Portfolio | NexaAI Solutions</title>
        <meta
          name="description"
          content={`${project.title} portfolio example for ${project.category}. ${project.summary}`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${project.title} ${project.category} Portfolio`} />
        <meta property="og:description" content={project.summary} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={project.images[0] ? `${siteUrl}${project.images[0]}` : `${siteUrl}/Logo.png`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <PageShell>
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,122,24,0.14),transparent_28rem),radial-gradient(circle_at_86%_16%,rgba(142,45,226,0.12),transparent_28rem)]" />

          <div className="section-container relative z-10">
            <Button variant="heroOutline" asChild className="mb-8 rounded-full">
              <a href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </a>
            </Button>

            <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
              <div className="text-left">
                <span className="section-kicker">
                  <Images className="h-4 w-4" />
                  {project.category} Case Detail
                </span>
                <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
                  {project.title}
                  <span className="gradient-text-both block">project gallery.</span>
                </h1>
                <p className="mb-6 text-lg leading-8 text-muted-foreground">
                  {categoryIntro[project.category] || project.summary}
                </p>

                <div className="mb-8 rounded-3xl border border-orange-300/15 bg-orange-300/10 p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">Outcome</p>
                  <p className="text-lg font-bold text-foreground">{project.outcome}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-soft-lg">
                <img
                  src={project.images[0]}
                  alt={`${project.title} main screenshot`}
                  className="aspect-[16/10] w-full rounded-[1.5rem] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="section-container">
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                ["Client problem", "Manual workflow steps were slowing down teams and creating repeated copy-paste work inside daily tools."],
                ["Solution approach", "A focused add-in interface was built around the user workflow, with clear actions, integrations, and reliable Office host behavior."],
                ["Trust factor", "Multiple real screens show that the project moved beyond concept into usable add-in UI and business workflow delivery."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-left">
                  <ShieldCheck className="mb-4 h-6 w-6 text-orange-300" />
                  <h2 className="mb-3 text-xl font-bold text-foreground">{title}</h2>
                  <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <div className="mb-6 flex flex-col justify-between gap-3 text-left md:flex-row md:items-end">
                <div>
                  <h2 className="text-3xl font-bold text-foreground">Project screenshots</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Screens from the same project folder, grouped so clients can review the actual workflow.</p>
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-orange-100">
                  {project.images.length} screens
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {project.images.map((image, index) => (
                  <div key={image} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-3">
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      loading="lazy"
                      className="aspect-[16/10] w-full rounded-2xl object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-3xl border border-orange-300/15 bg-orange-300/10 p-8 text-left">
              <div className="grid gap-8 lg:grid-cols-[1fr,0.5fr] lg:items-center">
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-foreground">Need a similar {project.category.toLowerCase()}?</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {["Workflow discovery", "Office.js implementation", "Secure integrations", "Deployment support"].map((item) => (
                      <p key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-orange-300" />
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <Button variant="hero" size="lg" asChild className="rounded-full">
                  <a href="/contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {relatedProjects.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-5 text-left text-2xl font-bold text-foreground">Related projects</h2>
                <div className="grid gap-5 md:grid-cols-3">
                  {relatedProjects.map((item) => (
                    <a
                      key={portfolioProjectSlug(item)}
                      href={`/portfolio/${portfolioProjectSlug(item)}`}
                      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] text-left transition-all hover:-translate-y-1 hover:border-orange-300/25"
                    >
                      <img src={item.images[0]} alt={item.title} loading="lazy" className="aspect-video w-full object-cover object-top transition-transform group-hover:scale-105" />
                      <div className="p-5">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-orange-200">{item.category}</p>
                        <h3 className="font-bold text-foreground">{item.title}</h3>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default PortfolioDetail;

