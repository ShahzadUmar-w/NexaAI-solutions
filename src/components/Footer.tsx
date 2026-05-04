import { ArrowRight, Github, Linkedin, Mail, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const directEmailHref =
  "mailto:shahzad890.it@gmail.com?subject=Enterprise%20Office%20Add-in%20Consultation&body=Hi%20Shahzad%2C%0A%0AI%20would%20like%20to%20discuss%20an%20enterprise%20Office%20add-in%20project.%0A%0ACompany%3A%0AProject%20type%3A%0ATimeline%3A%0ARequirements%3A%0A%0AThanks.";

const serviceLinks = [
  { label: "Office Add-ins", href: "#services" },
  { label: "Project Plans", href: "#plans" },
  { label: "Products", href: "#products" },
  { label: "Portfolio", href: "#portfolio" },
];

const trustLinks = [
  { label: "Enterprise Readiness", href: "#enterprise" },
  { label: "Companies", href: "#companies" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-orange-500/10 glass">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/10" />
      <div className="absolute -right-28 top-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -left-28 bottom-0 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="section-container relative z-10 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.25fr,0.75fr,0.75fr,1fr]">
          <div>
            <a href="#" className="mb-5 inline-flex items-center gap-3">
              <img src="/Logo.png" alt="Nexa AI Solutions logo" className="h-12 w-auto object-contain" />
              <span className="font-heading text-xl font-bold text-white">
                Nexa AI<span className="gradient-text-purple"> Solutions</span>
              </span>
            </a>

            <p className="mb-6 max-w-md text-sm leading-6 text-muted-foreground">
              Enterprise-grade Microsoft 365 add-ins, workflow automation, and secure product integrations built with Office.js, Microsoft Graph, React, and TypeScript.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full glass-light px-4 py-2 text-xs font-medium text-orange-100">
                <ShieldCheck className="h-3.5 w-3.5 text-orange-300" />
                Secure add-in delivery
              </span>
              <span className="inline-flex items-center gap-2 rounded-full glass-light px-4 py-2 text-xs font-medium text-purple-100">
                <Sparkles className="h-3.5 w-3.5 text-purple-300" />
                M365 deployment ready
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Services</h3>
            <div className="space-y-3">
              {serviceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground transition-colors hover:text-orange-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-foreground">Trust</h3>
            <div className="space-y-3">
              {trustLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-muted-foreground transition-colors hover:text-purple-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl glass-orange p-6">
            <h3 className="mb-2 text-lg font-bold text-foreground">Ready to discuss a project?</h3>
            <p className="mb-5 text-sm leading-6 text-muted-foreground">
              Send a short brief and I will respond with next steps for scope, security, and delivery.
            </p>

            <Button variant="hero" size="lg" className="mb-5 w-full group" asChild>
              <a href={directEmailHref}>
                Email Project Brief
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <div className="space-y-3 text-sm text-muted-foreground">
              <a href={directEmailHref} className="flex items-center gap-3 transition-colors hover:text-orange-100">
                <Mail className="h-4 w-4 text-orange-300" />
                shahzad890.it@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-purple-300" />
                Remote, worldwide delivery
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} NexaAI Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass-light text-muted-foreground transition-all hover:text-orange-300 hover:shadow-glow-orange"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass-light text-muted-foreground transition-all hover:text-purple-300 hover:shadow-glow-purple"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={directEmailHref}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass-light text-muted-foreground transition-all hover:text-orange-300 hover:shadow-glow-orange"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
