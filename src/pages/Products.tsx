import { Helmet } from "react-helmet-async";
import { ArrowRight, CheckCircle2, Layers3, Puzzle, ShieldCheck, Workflow } from "lucide-react";
import PageShell from "@/components/PageShell";
import ProductSection from "@/components/ProductSection";
import { Button } from "@/components/ui/button";

const implementationSteps = [
  {
    title: "Choose a foundation",
    text: "Start from a reusable Outlook, Excel, Word, PowerPoint, or Microsoft 365 workflow base instead of building every screen from scratch.",
  },
  {
    title: "Customize the workflow",
    text: "Adapt UI, Office.js actions, Microsoft Graph permissions, backend APIs, branding, and user roles to your business process.",
  },
  {
    title: "Test with real users",
    text: "Validate the add-in in the Office clients, tenants, documents, spreadsheets, mailboxes, and user roles your team actually uses.",
  },
  {
    title: "Deploy and support",
    text: "Prepare hosting, manifest validation, Admin Center rollout, documentation, and post-launch fixes for production teams.",
  },
];

const productUseCases = [
  "Email triage, AI replies, attachment saving, and CRM updates inside Outlook.",
  "Excel dashboards, custom functions, API imports, and report generation.",
  "Word document generation, clause libraries, AI review, and PDF workflows.",
  "PowerPoint proposal decks, branded slide libraries, and sales enablement tools.",
  "Microsoft Graph workflows across mail, calendar, files, users, SharePoint, and Teams.",
  "Internal automation products for agencies, SaaS teams, legal teams, and operations teams.",
];

const productFaqs = [
  ["Are these fixed products?", "No. They are reusable foundations that reduce build time while still being customized for your workflow, brand, APIs, and deployment path."],
  ["Can a product foundation include AI?", "Yes. AI can be added for summaries, drafting, document review, email replies, data cleanup, or guided user workflows."],
  ["Can it work with our internal APIs?", "Yes. The add-in can connect with CRMs, ERPs, private APIs, databases, SharePoint, OneDrive, Microsoft Graph, and other systems."],
  ["Is this ready for enterprise deployment?", "The foundation can be prepared for Microsoft 365 Admin Center deployment with manifest validation, HTTPS hosting, and handoff documentation."],
];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Office Add-in Product Foundations | NexaAI Solutions</title>
        <meta
          name="description"
          content="Explore reusable Office add-in product foundations for Outlook, Excel, Word, PowerPoint, Microsoft Graph, AI workflows, and enterprise automation."
        />
        <link rel="canonical" href="https://officeaddindevelopment.com/products" />
      </Helmet>
      <PageShell>
        <ProductSection />

        <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.018] py-20">
          <div className="section-container">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="section-kicker">
                <Layers3 className="h-4 w-4" />
                Product Path
              </span>
              <h2 className="section-title mb-4">Reusable foundations, customized for your business.</h2>
              <p className="text-muted-foreground">
                Product-style add-ins are useful when you want a faster start, but still need secure integrations, real workflow logic, and Microsoft 365 deployment support.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {implementationSteps.map((step, index) => (
                <article key={step.title} className="enterprise-card p-6 text-left">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-300/15 dark:bg-orange-300/10 dark:text-orange-200">
                    {index + 1}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{step.text}</p>
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
                  <Puzzle className="h-4 w-4" />
                  Use Cases
                </span>
                <h2 className="section-title mb-5">Where product foundations save the most time.</h2>
                <p className="mb-8 text-base leading-8 text-muted-foreground md:text-lg">
                  These foundations are best for repeated workflows where users need the same reliable actions inside Office every day.
                </p>
                <Button variant="hero" size="lg" asChild>
                  <a href="/contact">
                    Discuss a product idea
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="grid gap-3">
                {productUseCases.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-left">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-orange-300" />
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
                <ShieldCheck className="h-4 w-4" />
                Product FAQ
              </span>
              <h2 className="section-title mb-4">Common questions before using a foundation.</h2>
            </div>

            <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
              {productFaqs.map(([question, answer]) => (
                <article key={question} className="enterprise-card p-6 text-left">
                  <h3 className="mb-3 text-lg font-bold text-foreground">{question}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{answer}</p>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-orange-300/15 bg-orange-300/10 p-6 text-center sm:p-8">
              <Workflow className="mx-auto mb-4 h-8 w-8 text-orange-700 dark:text-orange-200" />
              <h2 className="mb-3 text-2xl font-bold text-foreground">Need a private internal product?</h2>
              <p className="mb-6 text-sm leading-6 text-muted-foreground">
                Share the workflow your team repeats every week and we can shape it into a focused Office add-in product.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="/contact">Start product discovery</a>
              </Button>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default Products;
