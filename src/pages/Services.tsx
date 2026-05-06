import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import ServicesSection from "@/components/ServicesSection";
import ResourcesSection from "@/components/ResourcesSection";
import SEOContentSection from "@/components/SEOContentSection";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Office Add-in Development Services | NexaAI Solutions</title>
        <meta
          name="description"
          content="Microsoft Office add-in development services for Outlook, Excel, Word, PowerPoint, Google Workspace, Electron apps, Office.js, and Microsoft Graph."
        />
        <link rel="canonical" href="https://officeaddindevelopment.com/services" />
      </Helmet>
      <PageShell>
        <ServicesSection />
        <ResourcesSection />
        <SEOContentSection />
      </PageShell>
    </>
  );
};

export default Services;

