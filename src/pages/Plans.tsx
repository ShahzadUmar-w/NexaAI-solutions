import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import PlansSection from "@/components/PlansSection";

const Plans = () => {
  return (
    <>
      <Helmet>
        <title>Office Add-in Development Plans | NexaAI Solutions</title>
        <meta
          name="description"
          content="Compare Office add-in development plans for MVP add-ins, business automation, and enterprise Microsoft 365 workflows."
        />
        <link rel="canonical" href="https://officeaddindevelopment.com/plans" />
      </Helmet>
      <PageShell>
        <PlansSection />
      </PageShell>
    </>
  );
};

export default Plans;

