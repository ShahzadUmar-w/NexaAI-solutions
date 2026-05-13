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
        <title>Office Add-in Portfolio | Word, Excel, Outlook Add-in Projects | Desktop & Mobile Apps</title>
        <meta
          name="description"
          content="Portfolio of Office add-in projects: Word add-in, Excel add-in, Outlook add-in, Office 365 plugin, and Office.js solutions. Also desktop app development, mobile apps with React Native, React, and Next.js work."
        />
        <link rel="canonical" href={`${siteUrl}/portfolio`} />
        <meta property="og:title" content="Office Add-in & App Development Portfolio | Word, Excel, Outlook" />
        <meta property="og:description" content="Real Office add-in project examples: Word add-in, Excel add-in, Outlook plugin, Office.js solutions, desktop apps, mobile apps built with React and React Native." />
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

