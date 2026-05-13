import { Helmet } from "react-helmet-async";
import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from "react";
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

type DeferredSectionProps = {
  children: ReactNode;
  minHeight?: string;
};

const DeferredSection = ({ children, minHeight = "420px" }: DeferredSectionProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return;

    const current = ref.current;
    if (!current || typeof IntersectionObserver === "undefined") {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "720px 0px" }
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div ref={ref} style={{ minHeight: shouldRender ? undefined : minHeight }}>
      {shouldRender ? children : null}
    </div>
  );
};

const siteUrl = "https://officeaddindevelopment.com/";
const defaultOgImage = `${siteUrl}og-office-addin-development.png`;
const seoTitle = "Office Add-in & App Development Services | Word, Excel, Outlook | React, Next.js | Desktop & Mobile Apps";
const seoDescription =
  "Expert Office add-in developers: Word add-in, Excel add-in, Outlook add-in, Office plugins, Office 365 add-ins. Also building React, Next.js, desktop apps, React Native mobile apps, AI automation. Office.js, Microsoft Graph integration specialists.";

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
    "Office Add-in Development",
    "Word Add-in Development",
    "Excel Add-in Development",
    "Outlook Add-in Development",
    "Office 365 Add-ins",
    "Office Plugins",
    "Outlook Plugin Development",
    "Word Plugin Development",
    "Excel Plugin Development",
    "Microsoft Office Add-in Development",
    "PowerPoint Add-in Development",
    "Google Apps Script Development",
    "Desktop App Development",
    "Mobile App Development",
    "React Development",
    "React Native Development",
    "Next.js Development",
    "Automation Development",
    "Microsoft Graph Integration",
    "Microsoft 365 Deployment Support",
    "AI Office Automation",
    "AI Word Add-in Development",
    "AI Outlook Plugin Development",
  ],
  knowsAbout: [
    "Office.js",
    "Office JS",
    "Microsoft Graph",
    "Microsoft 365",
    "Office Add-ins",
    "Office Plugins",
    "Word Add-in",
    "Excel Add-in",
    "Outlook Add-in",
    "Office 365 Add-ins",
    "React",
    "React Native",
    "Next.js",
    "TypeScript",
    "Google Apps Script",
    "Electron",
    "Desktop App Development",
    "Mobile App Development",
    "n8n",
    "Make.com",
    "Zapier",
    "Enterprise Workflow Automation",
    "AI Integration",
    "Business Automation",
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
          content="desktop app developer, desktop app development, mobile app developer, mobile app development, react native developer, react native development, react developer, react development, next.js developer, nextjs developer, next js development, Office add-in, Office add-ins, Office addin, Office addins, Office 365 add-ins, Office plugins, Office plugin, Office.js, office js, Word add-in, Word addin, Word plugin, Word add-in plugins, AI based Word addin, Excel add-in, Excel addins, Excel plugin, Outlook add-in, Outlook addin, Outlook add-ins, Outlook plugin, Outlook addin with AI, office 365 add-in, office 365 addin"
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
          <DeferredSection minHeight="520px">
             <DeferredSection minHeight="560px">
            <Suspense fallback={null}>
              <HomeFlowSection />
            </Suspense>
          </DeferredSection>
            <Suspense fallback={null}>
              <HomeServiceCardsSection />
            </Suspense>
          </DeferredSection>
         
          <DeferredSection minHeight="680px">
            <Suspense fallback={null}>
              <Interactive3DSection />
            </Suspense>
          </DeferredSection>
          <DeferredSection>
            <Suspense fallback={null}>
              <SkillsSection />
            </Suspense>
          </DeferredSection>
          <DeferredSection>
            <Suspense fallback={null}>
              <AboutSection />
            </Suspense>
          </DeferredSection>
          <DeferredSection minHeight="260px">
            <Suspense fallback={null}>
              <CompaniesSection />
            </Suspense>
          </DeferredSection>
          <DeferredSection>
            <Suspense fallback={null}>
              <IntegrationEcosystemSection />
            </Suspense>
          </DeferredSection>
          <DeferredSection>
            <Suspense fallback={null}>
              <ResourcesSection />
            </Suspense>
          </DeferredSection>
          <DeferredSection>
            <Suspense fallback={null}>
              <TestimonialsSection limit={6} showFeedbacksLink />
            </Suspense>
          </DeferredSection>
          <DeferredSection>
            <Suspense fallback={null}>
              <ContactSection />
            </Suspense>
          </DeferredSection>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

