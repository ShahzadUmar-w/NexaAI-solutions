import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";
import { Button } from "@/components/ui/button";

const siteUrl = "https://officeaddindevelopment.com";
const defaultOgImage = `${siteUrl}/og-office-addin-development.png`;
const title = "About NexaAI Solutions | Office Add-in Development";
const description =
  "Learn about NexaAI Solutions, a specialist Office add-in development company building secure Microsoft 365 automation with Office.js, Microsoft Graph, React, and TypeScript.";

const AboutUs = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NexaAI Solutions",
    url: siteUrl,
    logo: `${siteUrl}/Logo.png`,
    email: "shahzad890.it@gmail.com",
    description,
    areaServed: "Worldwide",
    knowsAbout: ["Office.js", "Microsoft Graph", "Microsoft 365", "React", "TypeScript", "Office Add-in Development"],
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteUrl}/about-us`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/about-us`} />
        <meta property="og:image" content={defaultOgImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={defaultOgImage} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <section className="relative overflow-hidden pb-14 pt-32">
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,122,24,0.18),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(142,45,226,0.14),transparent_32%)]" />
            <div className="section-container relative z-10 text-center">
              <span className="mb-6 inline-flex rounded-full glass-orange px-4 py-2 text-sm font-semibold text-orange-700 dark:text-orange-100">
                About NexaAI Solutions
              </span>
              <h1 className="mx-auto mb-6 max-w-4xl font-heading text-4xl font-bold leading-tight md:text-6xl">
                Specialist Office add-in development company for Microsoft 365 teams.
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-muted-foreground">
                We build secure, production-ready Office add-ins, Microsoft Graph integrations, automation workflows, and deployment-ready products for teams that depend on Microsoft 365.
              </p>
            </div>
          </section>

          <section className="relative overflow-hidden py-20">
            <div className="section-container">
              <AboutContent fullPage />

              <div className="mx-auto mt-14 max-w-3xl rounded-3xl glass-orange p-5 text-center sm:p-8">
                <h2 className="mb-3 text-3xl font-bold text-foreground">Want to work with us?</h2>
                <p className="mb-6 text-muted-foreground">
                  Send a short brief and we will help define scope, security, architecture, and deployment path for your Office add-in project.
                </p>
                <Button variant="hero" size="xl" asChild className="group w-full rounded-full sm:w-auto">
                  <a href="/contact">
                    <span>Contact NexaAI Solutions</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;



