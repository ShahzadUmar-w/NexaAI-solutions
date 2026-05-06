import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Office Add-in Developer | NexaAI Solutions</title>
        <meta
          name="description"
          content="Contact NexaAI Solutions for Outlook, Excel, Word, PowerPoint, Office.js, Microsoft Graph, and enterprise Office add-in development."
        />
        <link rel="canonical" href="https://officeaddindevelopment.com/contact" />
      </Helmet>
      <PageShell>
        <ContactSection />
      </PageShell>
    </>
  );
};

export default Contact;

