import { Helmet } from "react-helmet-async";
import { CheckCircle2, FileText, MessagesSquare, ShieldCheck } from "lucide-react";
import PageShell from "@/components/PageShell";
import ContactSection from "@/components/ContactSection";

const siteUrl = "https://officeaddindevelopment.com";
const defaultOgImage = `${siteUrl}/og-office-addin-development.png`;

const briefItems = [
  "Which Office app you want to extend: Outlook, Excel, Word, PowerPoint, Teams, or multiple apps.",
  "The workflow users repeat today and what should become automated inside the add-in.",
  "Any APIs, CRMs, databases, SharePoint, OneDrive, Microsoft Graph, or AI services involved.",
  "Deployment expectations, such as internal testing, Microsoft 365 Admin Center rollout, or tenant review.",
  "Timeline, budget range, screenshots, sample files, and must-have features for the first version.",
];

const responseSteps = [
  {
    title: "Scope questions",
    text: "You receive practical questions about the workflow, users, Office platform, permissions, and deployment needs.",
  },
  {
    title: "Technical direction",
    text: "We outline the likely Office.js, Microsoft Graph, backend, hosting, and testing approach.",
  },
  {
    title: "Next-step proposal",
    text: "If the project is a fit, you get a focused plan for MVP, production build, or enterprise workflow delivery.",
  },
];

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Office Add-in Developer | NexaAI Solutions</title>
        <meta
          name="description"
          content="Contact NexaAI Solutions for Outlook, Excel, Word, PowerPoint, Office.js, Microsoft Graph, and enterprise Office add-in development."
        />
        <link rel="canonical" href={`${siteUrl}/contact`} />
        <meta property="og:title" content="Contact Office Add-in Developer | NexaAI Solutions" />
        <meta property="og:description" content="Send a project brief for Outlook, Excel, Word, PowerPoint, Office.js, Microsoft Graph, and enterprise add-in development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/contact`} />
        <meta property="og:image" content={defaultOgImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={defaultOgImage} />
      </Helmet>
      <PageShell>
        <ContactSection />

        <section className="relative overflow-hidden border-y border-white/10 bg-white/[0.018] py-20">
          <div className="section-container">
            <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
              <div className="text-left">
                <span className="section-kicker">
                  <FileText className="h-4 w-4" />
                  Better Brief
                </span>
                <h2 className="section-title mb-5">What to include in your project message.</h2>
                <p className="text-base leading-8 text-muted-foreground md:text-lg">
                  A clear brief helps us estimate the workflow, identify permission risks, and suggest the right delivery plan faster.
                </p>
              </div>

              <div className="grid gap-3">
                {briefItems.map((item) => (
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
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="section-kicker">
                <MessagesSquare className="h-4 w-4" />
                After You Send
              </span>
              <h2 className="section-title mb-4">How the first conversation usually works.</h2>
              <p className="text-muted-foreground">
                The goal is to move from idea to a realistic implementation path without making the project feel vague.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {responseSteps.map((step, index) => (
                <article key={step.title} className="enterprise-card p-6 text-left">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-orange-300/15 bg-orange-300/10 text-orange-200">
                    {index + 1}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{step.text}</p>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-orange-300/15 bg-orange-300/10 p-6 text-center sm:p-8">
              <ShieldCheck className="mx-auto mb-4 h-8 w-8 text-orange-200" />
              <h2 className="mb-3 text-2xl font-bold text-foreground">Need NDA or security review first?</h2>
              <p className="text-sm leading-6 text-muted-foreground">
                Mention it in the message. We can discuss permissions, data handling, deployment, and review expectations before implementation starts.
              </p>
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default Contact;
