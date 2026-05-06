import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";

const siteUrl = "https://officeaddindevelopment.com";

const sections = [
  {
    title: "Information We Collect",
    text: "When you submit a contact form, schedule a call, or email a project brief, we may collect your name, email address, company details, project requirements, timeline, and any files or notes you choose to share.",
  },
  {
    title: "How We Use Information",
    text: "Information is used to respond to inquiries, understand project scope, prepare proposals, schedule calls, deliver Office add-in development services, and provide support after launch.",
  },
  {
    title: "Email and Booking Tools",
    text: "The website may use email delivery or scheduling tools to send your project brief or open an Outlook meeting invite. These services process the information needed to deliver the message or create the meeting request.",
  },
  {
    title: "Confidentiality",
    text: "Client workflows, screenshots, requirements, and business data are treated as confidential. Portfolio examples are shown only as public or anonymized project material.",
  },
  {
    title: "Data Retention",
    text: "Project inquiry information may be retained as long as needed for communication, proposals, delivery, support, record keeping, or legal obligations.",
  },
  {
    title: "Contact",
    text: "For privacy questions or removal requests, contact shahzad890.it@gmail.com.",
  },
];

const PrivacyPolicy = () => (
  <>
    <Helmet>
      <title>Privacy Policy | NexaAI Solutions</title>
      <meta name="description" content="Privacy policy for NexaAI Solutions Office add-in development inquiries, project briefs, booking, and client communication." />
      <link rel="canonical" href={`${siteUrl}/privacy-policy`} />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <PageShell>
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,122,24,0.12),transparent_28rem)]" />
        <div className="section-container relative z-10">
          <div className="mx-auto max-w-4xl text-left">
            <span className="section-kicker">Legal</span>
            <h1 className="mb-6 font-heading text-4xl font-bold md:text-6xl">Privacy Policy</h1>
            <p className="mb-10 text-lg leading-8 text-muted-foreground">
              This policy explains how NexaAI Solutions handles information shared through this website, email, booking links, and project discussions.
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

export default PrivacyPolicy;
