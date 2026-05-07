import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const siteUrl = "https://officeaddindevelopment.com";
const defaultOgImage = `${siteUrl}/og-office-addin-development.png`;

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Office Add-in Portfolio | NexaAI Solutions</title>
        <meta
          name="description"
          content="View anonymized Microsoft Office add-in portfolio examples for Outlook, Excel, Word, PowerPoint, Microsoft Graph, and enterprise automation."
        />
        <link rel="canonical" href={`${siteUrl}/portfolio`} />
        <meta property="og:title" content="Office Add-in Portfolio | NexaAI Solutions" />
        <meta property="og:description" content="Real Outlook, Excel, Word, PowerPoint, Google Workspace, and Office.js add-in project screens." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/portfolio`} />
        <meta property="og:image" content={defaultOgImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={defaultOgImage} />
      </Helmet>
      <PageShell>
        <PortfolioSection />
        <TestimonialsSection />
      </PageShell>
    </>
  );
};

export default Portfolio;

