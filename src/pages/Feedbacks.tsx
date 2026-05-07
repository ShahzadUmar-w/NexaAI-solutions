import { Helmet } from "react-helmet-async";
import { ArrowRight, MessageSquareQuote } from "lucide-react";
import PageShell from "@/components/PageShell";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import fiverrReviews from "@/data/fiverrReviews.json";

type FiverrReview = {
  status: string;
};

const siteUrl = "https://officeaddindevelopment.com";
const completedReviews = (fiverrReviews as FiverrReview[]).filter((review) => review.status === "completed");

const Feedbacks = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Client Feedbacks",
        url: `${siteUrl}/feedbacks`,
        description:
          "Public Fiverr and Upwork client feedback for Office add-in, plugin, desktop app, and automation projects by NexaAI Solutions.",
        isPartOf: {
          "@type": "WebSite",
          name: "NexaAI Solutions",
          url: siteUrl,
        },
        about: [
          "Office add-in development",
          "Outlook add-ins",
          "Excel add-ins",
          "Word add-ins",
          "Microsoft Graph integration",
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
            name: "Client Feedbacks",
            item: `${siteUrl}/feedbacks`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>Client Feedbacks for Office Add-in Development | NexaAI Solutions</title>
        <meta
          name="description"
          content={`Read ${completedReviews.length}+ public Fiverr and Upwork client feedbacks for Office add-in, Outlook, Excel, Word, plugin, desktop app, and automation projects by NexaAI Solutions.`}
        />
        <link rel="canonical" href={`${siteUrl}/feedbacks`} />
        <meta property="og:title" content="Client Feedbacks for Office Add-in Development | NexaAI Solutions" />
        <meta
          property="og:description"
          content="Public client feedback for Office add-in, Microsoft 365, plugin, and automation projects."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/feedbacks`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <PageShell>
        <section className="relative overflow-hidden py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,209,61,0.14),transparent_28rem),radial-gradient(circle_at_82%_10%,rgba(225,29,143,0.1),transparent_26rem)]" />
          <div className="section-container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-kicker">
                <MessageSquareQuote className="h-4 w-4" />
                Client Feedbacks
              </span>
              <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
                Public feedback from Office add-in and automation clients.
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                Real Fiverr and Upwork feedback from completed Outlook, Excel, Word, Microsoft Graph, desktop app, and workflow automation projects.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href="/contact">
                    Discuss a project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="/portfolio">View portfolio</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <TestimonialsSection />
      </PageShell>
    </>
  );
};

export default Feedbacks;
