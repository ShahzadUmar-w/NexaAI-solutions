import { Helmet } from "react-helmet-async";
import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import { officeAddInFaqs } from "@/lib/seo-data";

const VideoSection = lazy(() => import("@/components/VideoSection"));
const Interactive3DSection = lazy(() => import("@/components/Interactive3DSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const CompaniesSection = lazy(() => import("@/components/CompaniesSection"));
const ResourcesSection = lazy(() => import("@/components/ResourcesSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const siteUrl = "https://officeaddindevelopment.com/";
const seoTitle = "Office Add-in Development | NexaAI Solutions";
const seoDescription =
  "Custom Microsoft Office add-in development for Outlook, Excel, Word, PowerPoint, and Teams. Office.js, Microsoft Graph, React, TypeScript, and M365 deployment support.";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "NexaAI Solutions",
  url: siteUrl,
  logo: `${siteUrl}Logo.png`,
  image: `${siteUrl}Logo.png`,
  description: seoDescription,
  email: "shahzad890.it@gmail.com",
  areaServed: "Worldwide",
  serviceType: [
    "Microsoft Office Add-in Development",
    "Outlook Add-in Development",
    "Excel Add-in Development",
    "Word Add-in Development",
    "PowerPoint Add-in Development",
    "Microsoft Graph Integration",
    "Microsoft 365 Deployment Support",
  ],
  knowsAbout: [
    "Office.js",
    "Microsoft Graph",
    "Microsoft 365",
    "React",
    "TypeScript",
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
          content="Microsoft Office add-in development, enterprise Office add-ins, Outlook add-in developer, Excel add-in developer, Word add-in developer, PowerPoint add-in developer, Office.js, Microsoft Graph, Microsoft 365 deployment, React TypeScript add-ins"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="NexaAI Solutions" />
        <link rel="canonical" href={siteUrl} />

        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="NexaAI Solutions" />
        <meta property="og:image" content={`${siteUrl}Logo.png`} />
        <meta property="og:image:alt" content="NexaAI Solutions logo" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`${siteUrl}Logo.png`} />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <Suspense fallback={null}>
            {/* <VideoSection /> */}
            <Interactive3DSection />
            <SkillsSection />
            <AboutSection />
            <CompaniesSection />
            <ResourcesSection />
            <TestimonialsSection />
            <ContactSection />
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

