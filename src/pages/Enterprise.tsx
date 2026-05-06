import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import EnterpriseReadinessSection from "@/components/EnterpriseReadinessSection";
import CompaniesSection from "@/components/CompaniesSection";

const Enterprise = () => {
  return (
    <>
      <Helmet>
        <title>Enterprise Office Add-in Readiness | NexaAI Solutions</title>
        <meta
          name="description"
          content="Enterprise readiness for Microsoft Office add-ins, including security, Microsoft 365 deployment, admin rollout, support, and scalable workflow automation."
        />
        <link rel="canonical" href="https://officeaddindevelopment.com/enterprise" />
      </Helmet>
      <PageShell>
        <EnterpriseReadinessSection />
        <CompaniesSection />
      </PageShell>
    </>
  );
};

export default Enterprise;

