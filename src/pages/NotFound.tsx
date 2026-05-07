import { Helmet } from "react-helmet-async";
import { ArrowRight, Home, SearchX } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";

const helpfulLinks = [
  {
    label: "View Services",
    href: "/services",
    text: "Outlook, Excel, Word, PowerPoint, Graph, and deployment support.",
  },
  {
    label: "Browse Portfolio",
    href: "/portfolio",
    text: "Real screenshots from delivered add-in and automation projects.",
  },
  {
    label: "Contact",
    href: "/contact",
    text: "Send the workflow you want to automate and get practical next steps.",
  },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | NexaAI Solutions</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <PageShell>
        <section className="relative overflow-hidden py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(249,115,22,0.15),transparent_28rem),radial-gradient(circle_at_84%_10%,rgba(96,165,250,0.12),transparent_26rem)]" />
          <div className="section-container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-kicker">
                <SearchX className="h-4 w-4" />
                404
              </span>
              <h1 className="mb-5 font-heading text-4xl font-bold leading-tight md:text-6xl">
                This page is not available.
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                The page may have moved, or the URL may be slightly off. These links should get you back to the useful parts of the site.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button variant="hero" size="lg" asChild className="rounded-full">
                  <a href="/">
                    <Home className="h-4 w-4" />
                    Home
                  </a>
                </Button>
                <Button variant="heroOutline" size="lg" asChild className="rounded-full">
                  <a href="/contact">
                    Discuss Project
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {helpfulLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-left transition-all hover:-translate-y-1 hover:border-orange-300/25 hover:bg-white/[0.055]"
                >
                  <h2 className="mb-3 flex items-center justify-between gap-3 text-xl font-bold text-foreground">
                    {link.label}
                    <ArrowRight className="h-5 w-5 text-orange-300 transition-transform group-hover:translate-x-1" />
                  </h2>
                  <p className="text-sm leading-6 text-muted-foreground">{link.text}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default NotFound;
