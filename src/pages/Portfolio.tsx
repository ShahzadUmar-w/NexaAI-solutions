import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Office Add-in Portfolio | NexaAI Solutions</title>
        <meta
          name="description"
          content="View anonymized Microsoft Office add-in portfolio examples for Outlook, Excel, Word, PowerPoint, Microsoft Graph, and enterprise automation."
        />
        <link rel="canonical" href="https://officeaddindevelopment.com/portfolio" />
      </Helmet>
      <PageShell>
        <PortfolioSection />
        <TestimonialsSection />
      </PageShell>
    </>
  );
};

export default Portfolio;

