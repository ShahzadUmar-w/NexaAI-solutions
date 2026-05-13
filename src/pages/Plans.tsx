import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, ClipboardCheck, HelpCircle, ShieldCheck, TimerReset } from "lucide-react";
import PageShell from "@/components/PageShell";
import PlansSection from "@/components/PlansSection";
import { Button } from "@/components/ui/button";

const scopeDetails = [
  {
    title: "MVP scope",
    text: "Best for one focused add-in workflow, a proof of concept, or a small internal tool that needs fast validation.",
    points: ["Single app focus", "Basic task pane UI", "Core Office.js action", "Light deployment guidance"],
  },
  {
    title: "Production scope",
    text: "Best for real business users who need polished UI, API integrations, better testing, and launch support.",
    points: ["Office.js + APIs", "Responsive React UI", "Error handling", "Testing and fixes"],
  },
  {
    title: "Enterprise scope",
    text: "Best for Microsoft 365 teams that need Graph, role-aware workflows, tenant rollout, documentation, and support.",
    points: ["Graph permissions", "Admin deployment", "Security review", "Maintenance options"],
  },
];

const milestoneSteps = [
  "Discovery: clarify users, workflow, Office app, permissions, files, data, and deployment path.",
  "Architecture: define Office.js APIs, Microsoft Graph scopes, backend services, hosting, and handoff needs.",
  "Build: implement the add-in UI, Office actions, integrations, authentication, and core automation.",
  "Testing: validate edge cases, Office clients, tenant behavior, file formats, and user feedback.",
  "Launch: prepare manifest, deployment steps, documentation, support notes, and post-launch fixes.",
];

const planFaqs = [
  ["Can the price change after discovery?", "Yes, if the final scope includes more apps, complex Graph permissions, custom backend work, AI features, or enterprise deployment requirements."],
  ["Do you provide support after launch?", "Yes. Support can include bug fixes, Microsoft 365 platform changes, API updates, user feedback improvements, and maintenance planning."],
  ["Can we start small and expand later?", "Yes. Many projects start as a focused MVP and later expand into a production or enterprise workflow after user validation."],
  ["What do you need for an accurate quote?", "A workflow description, target Office app, screenshots or sample files, required APIs, user roles, deployment needs, and timeline."],
];

const Plans = () => {
  return (
    <>
      <Helmet>
        <title>Office Add-in Development Plans | Word, Excel, Outlook Add-in Pricing | MVP to Enterprise</title>
        <meta
          name="description"
          content="Flexible Office add-in development plans: MVP scope for Word add-in, Excel add-in, Outlook add-in. Production and enterprise scope for Office 365 plugins with Microsoft Graph, React, and deployment support."
        />
        <link rel="canonical" href="https://officeaddindevelopment.com/plans" />
      </Helmet>
      <PageShell>
        <PlansSection />

        <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.018] py-20">
          <div className="section-container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="section-kicker">
                <ClipboardCheck className="h-4 w-4" />
                Scope Guide
              </span>
              <h2 className="section-title mb-4">What each plan usually includes.</h2>
              <p className="text-muted-foreground">
                The final quote depends on technical scope, but this guide helps you understand which plan fits your current stage.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {scopeDetails.map((item) => (
                <article key={item.title} className="enterprise-card p-6 text-left">
                  <ShieldCheck className="mb-5 h-7 w-7 text-orange-300" />
                  <h3 className="mb-3 text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mb-6 text-sm leading-6 text-muted-foreground">{item.text}</p>
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

        <section className="relative overflow-hidden py-20">
          <div className="section-container">
            <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
              <div className="text-left">
                <span className="section-kicker">
                  <TimerReset className="h-4 w-4" />
                  Milestones
                </span>
                <h2 className="section-title mb-5">A clear delivery path before development starts.</h2>
                <p className="mb-8 text-base leading-8 text-muted-foreground md:text-lg">
                  Enterprise and business add-ins work best when scope, permissions, testing, and deployment are planned before implementation begins.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="/contact">
                    Request a scoped quote
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="grid gap-3">
                {milestoneSteps.map((item, index) => (
                  <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-orange-200 bg-orange-50 text-sm font-bold text-orange-700 dark:border-orange-300/15 dark:bg-orange-300/10 dark:text-orange-200">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/10 bg-white/[0.018] py-20">
          <div className="section-container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="section-kicker">
                <HelpCircle className="h-4 w-4" />
                Plan FAQ
              </span>
              <h2 className="section-title mb-4">Questions clients ask before choosing a plan.</h2>
            </div>

            <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
              {planFaqs.map(([question, answer]) => (
                <article key={question} className="enterprise-card p-6 text-left">
                  <h3 className="mb-3 text-lg font-bold text-foreground">{question}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default Plans;
