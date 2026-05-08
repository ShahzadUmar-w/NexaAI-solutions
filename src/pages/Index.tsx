import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import HomeScrollExperience from "@/components/HomeScrollExperience";
import { officeAddInFaqs } from "@/lib/seo-data";

const HomeFlowSection = lazy(() => import("@/components/HomeFlowSection"));
const HomeServiceCardsSection = lazy(() => import("@/components/HomeServiceCardsSection"));
const Interactive3DSection = lazy(() => import("@/components/Interactive3DSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const CompaniesSection = lazy(() => import("@/components/CompaniesSection"));
const IntegrationEcosystemSection = lazy(() => import("@/components/IntegrationEcosystemSection"));
const ResourcesSection = lazy(() => import("@/components/ResourcesSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const siteUrl = "https://officeaddindevelopment.com/";
const defaultOgImage = `${siteUrl}og-office-addin-development.png`;
const seoTitle = "Office Add-ins, Apps & Automations | NexaAI Solutions";
const seoDescription =
  "Custom software development for Outlook, Excel, Word, PowerPoint, Google Apps Script, desktop apps, mobile apps, automations, Office.js, Microsoft Graph, AI, and business integrations.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NexaAI Solutions",
  url: siteUrl,
  logo: `${siteUrl}Logo.png`,
  image: defaultOgImage,
  description: seoDescription,
  email: "shahzad890.it@gmail.com",
  areaServed: "Worldwide",
  serviceType: [
    "Microsoft Office Add-in Development",
    "Outlook Add-in Development",
    "Excel Add-in Development",
    "Word Add-in Development",
    "PowerPoint Add-in Development",
    "Google Apps Script Development",
    "Desktop App Development",
    "Mobile App Development",
    "Automation Development",
    "Microsoft Graph Integration",
    "Microsoft 365 Deployment Support",
  ],
  knowsAbout: [
    "Office.js",
    "Microsoft Graph",
    "Microsoft 365",
    "React",
    "TypeScript",
    "Google Apps Script",
    "Electron",
    "React Native",
    "n8n",
    "Make.com",
    "Zapier",
    "Enterprise Workflow Automation",
  ],
  offers: {
    "@type": "OfferCatalog",
    name: "Office Add-in Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Enterprise Office Add-in Development",
      },
      {
        "@type": "Offer",
        name: "Microsoft Graph Integration",
      },
      {
        "@type": "Offer",
        name: "Microsoft 365 Admin Deployment Support",
      },
      {
        "@type": "Offer",
        name: "Google Apps Script Development",
      },
      {
        "@type": "Offer",
        name: "Desktop App Development",
      },
      {
        "@type": "Offer",
        name: "Mobile App Development",
      },
      {
        "@type": "Offer",
        name: "Business Automation Development",
      },
    ],
  },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: officeAddInFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const Index = () => {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{seoTitle}</title>
        <meta
          name="description"
          content={seoDescription}
        />
        <meta
          name="keywords"
          content="Microsoft Office add-in development, enterprise Office add-ins, Outlook add-in developer, Excel add-in developer, Word add-in developer, PowerPoint add-in developer, Google Apps Script developer, desktop app development, mobile app development, automation developer, n8n developer, Make.com automation, Zapier automation, Office.js, Microsoft Graph, Salesforce integration, QuickBooks integration, CRM integration, ERP integration, DMS integration, CMS integration, AI Office add-ins, Microsoft 365 deployment, React TypeScript add-ins"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="NexaAI Solutions" />
        <link rel="canonical" href={siteUrl} />

        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="NexaAI Solutions" />
        <meta property="og:image" content={defaultOgImage} />
        <meta property="og:image:alt" content="Office Add-in Development by NexaAI Solutions" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={defaultOgImage} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <div className="home-page-shell min-h-screen bg-background">
        <HomeScrollExperience />
        <Navbar />
        <main className="relative z-10">
          <HeroSection />
          <Suspense fallback={null}>
            <HomeServiceCardsSection />
            <HomeFlowSection />
            <Interactive3DSection />
            <SkillsSection />
            <AboutSection />
            <CompaniesSection />
            <IntegrationEcosystemSection />
            <ResourcesSection />
            <TestimonialsSection limit={6} showFeedbacksLink />
            <ContactSection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

