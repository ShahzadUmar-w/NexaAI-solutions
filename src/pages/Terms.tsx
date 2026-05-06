import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";

const siteUrl = "https://officeaddindevelopment.com";

const sections = [
  {
    title: "Service Scope",
    text: "Project scope, timeline, deliverables, pricing, and support terms are agreed before development begins. Any additional requirements may require a separate estimate or milestone.",
  },
  {
    title: "Client Responsibilities",
    text: "Clients are responsible for providing accurate requirements, test accounts, API access, Microsoft 365 tenant access where needed, feedback, and approval for deployment steps.",
  },
  {
    title: "Third-party Platforms",
    text: "Microsoft 365, Outlook, Excel, Word, PowerPoint, Microsoft Graph, Google Workspace, CRMs, and other platforms may change their APIs, policies, or approval requirements. These external changes can affect timelines and release paths.",
  },
  {
    title: "Payments and Milestones",
    text: "Payment terms are defined per proposal or platform order. Work may be split into discovery, design, development, testing, deployment, and support milestones.",
  },
  {
    title: "Intellectual Property",
    text: "Ownership of final custom project deliverables is handled according to the agreed project terms. Reusable internal tools, patterns, and general development knowledge remain available for future work.",
  },
  {
    title: "Limitations",
    text: "The website content is provided for general service information and does not guarantee specific ranking, platform approval, revenue, or business outcome.",
  },
];

const Terms = () => (
  <>
    <Helmet>
      <title>Terms of Service | NexaAI Solutions</title>
      <meta name="description" content="Terms of service for NexaAI Solutions Office add-in development, Microsoft 365 integration, project delivery, and support." />
      <link rel="canonical" href={`${siteUrl}/terms`} />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <PageShell>
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(142,45,226,0.12),transparent_28rem)]" />
        <div className="section-container relative z-10">
          <div className="mx-auto max-w-4xl text-left">
            <span className="section-kicker">Legal</span>
            <h1 className="mb-6 font-heading text-4xl font-bold md:text-6xl">Terms of Service</h1>
            <p className="mb-10 text-lg leading-8 text-muted-foreground">
              These terms outline the basic conditions for using this website and discussing Office add-in development services with NexaAI Solutions.
            </p>

            <div className="space-y-5">
              {sections.map((section) => (
                <article key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                  <h2 className="mb-3 text-xl font-bold text-foreground">{section.title}</h2>
                  <p className="leading-7 text-muted-foreground">{section.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  </>
);

export default Terms;
