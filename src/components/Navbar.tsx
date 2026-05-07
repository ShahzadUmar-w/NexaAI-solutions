import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  BookOpen,
  CalendarCheck,
  ChevronDown,
  FileText,
  Mail,
  Menu,
  Presentation,
  Rocket,
  ShieldCheck,
  TableProperties,
  X,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { outlookBookingUrl } from "@/lib/booking";

const directEmailHref =
  "mailto:shahzad890.it@gmail.com?subject=Office%20Add-in%20Project%20Brief&body=Hi%20Shahzad%2C%0A%0AI%20would%20like%20to%20discuss%20an%20Office%20add-in%20project.%0A%0ACompany%3A%0AProject%20type%3A%0ATimeline%3A%0ARequirements%3A%0A%0AThanks.";

const sectionLinks = [
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Plans", href: "/plans" },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Contact", href: "/contact" },
];

const companyLinks = [
  { name: "About", href: "/about-us" },
  { name: "Products", href: "/products" },
  { name: "Security", href: "/enterprise-security" },
  { name: "Resources", href: "/microsoft-graph-integration" },
];

const solutionLinks = [
  {
    name: "Outlook Add-ins",
    href: "/outlook-add-in-development",
    description: "Email, calendar, CRM, AI, phishing report, and Graph workflows.",
    icon: Mail,
    accent: "text-blue-200 bg-blue-300/10 border-blue-300/15",
  },
  {
    name: "Excel Add-ins",
    href: "/excel-add-in-development",
    description: "Reports, custom functions, dashboards, APIs, and spreadsheet automation.",
    icon: TableProperties,
    accent: "text-emerald-200 bg-emerald-300/10 border-emerald-300/15",
  },
  {
    name: "Word Add-ins",
    href: "/word-add-in-development",
    description: "Document automation, AI writing, templates, PDF, and review flows.",
    icon: FileText,
    accent: "text-sky-200 bg-sky-300/10 border-sky-300/15",
  },
  {
    name: "PowerPoint Add-ins",
    href: "/powerpoint-add-in-development",
    description: "Slide libraries, proposal decks, templates, and brand workflows.",
    icon: Presentation,
    accent: "text-orange-200 bg-orange-300/10 border-orange-300/15",
  },
  {
    name: "Microsoft Graph",
    href: "/microsoft-graph-integration",
    description: "Mail, calendar, files, users, Teams, SharePoint, and secure OAuth.",
    icon: BarChart3,
    accent: "text-cyan-200 bg-cyan-300/10 border-cyan-300/15",
  },
  {
    name: "M365 Deployment",
    href: "/microsoft-365-add-in-deployment",
    description: "Manifest review, tenant testing, Admin Center rollout, and handoff.",
    icon: Rocket,
    accent: "text-purple-200 bg-purple-300/10 border-purple-300/15",
  },
];

const trustBadges = ["50+ projects", "24h reply"];

const isActiveHref = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

const BookCallButton = ({ size = "default", className = "" }: { size?: "default" | "lg"; className?: string }) => (
  <Button
    variant="hero"
    size={size}
    className={`group relative isolate px-5 shadow-[0_18px_52px_rgba(249,115,22,0.28)] ${className}`}
    asChild
  >
    <a href={outlookBookingUrl} target="_blank" rel="noreferrer">
      <span className="absolute inset-0 overflow-hidden rounded-[0.65rem]">
        <span className="absolute inset-y-0 -left-1/2 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 transition-transform duration-1000 group-hover:translate-x-[320%]" />
      </span>
      <span className="relative flex items-center gap-2">
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-slate-950/10 bg-slate-950/15">
          <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
          <span className="absolute -inset-1 rounded-full border border-white/25 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <CalendarCheck className="relative h-4 w-4" />
        </span>
        Book Call
      </span>
    </a>
  </Button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsSolutionsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#070b14] shadow-[0_18px_60px_rgba(0,0,0,0.32)]">
      <div className="section-container">
        <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${isScrolled ? "h-16" : "h-16 lg:h-20"}`}>
          <a href="/" className="group flex min-w-0 flex-1 items-center gap-3 lg:w-[260px] lg:flex-none 2xl:w-[285px]">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] shadow-soft md:h-12 md:w-12">
              <img src="/Logo.png" alt="Nexa AI Solutions logo" className="h-9 w-auto object-contain md:h-10" />
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-pink-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <span className="min-w-0">
              <span className="block truncate whitespace-nowrap font-heading text-base font-bold text-white sm:text-lg">
                Nexa AI<span className="text-orange-200"> Solutions</span>
              </span>
              <span className="hidden whitespace-nowrap text-xs text-muted-foreground xl:block">Office Add-in Development</span>
            </span>
          </a>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex">
            {sectionLinks.map((link) => {
              const active = isActiveHref(location.pathname, link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition-all ${
                    active
                      ? "bg-white/[0.075] text-orange-100 ring-1 ring-orange-300/15"
                      : "text-muted-foreground hover:bg-white/[0.055] hover:text-foreground"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsSolutionsOpen((open) => !open)}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition-all ${
                  location.pathname.includes("add-in-development") || location.pathname.includes("microsoft-") || isSolutionsOpen
                    ? "bg-white/[0.075] text-orange-100 ring-1 ring-orange-300/15"
                    : "text-muted-foreground hover:bg-white/[0.055] hover:text-foreground"
                }`}
                aria-expanded={isSolutionsOpen}
              >
                Solutions
                <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isSolutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 10, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                    className="absolute right-0 top-full w-[300px]"
                  >
                    <div className="rounded-2xl border border-white/12 bg-[#070b14] p-2 shadow-[0_24px_70px_rgba(0,0,0,0.42)]">
                      <div className="mb-1.5 flex items-center gap-2 rounded-xl border border-orange-300/15 bg-orange-300/10 px-3 py-2 text-sm font-semibold text-orange-100">
                        <ShieldCheck className="h-4 w-4" />
                        Microsoft 365 Solutions
                      </div>

                      <div className="grid gap-1">
                        {solutionLinks.map((link) => {
                          const LinkIcon = link.icon;
                          const active = isActiveHref(location.pathname, link.href);
                          return (
                            <a
                              key={link.href}
                              href={link.href}
                              className={`group/card flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all hover:bg-white/[0.06] ${
                                active ? "bg-white/[0.075] text-orange-100" : "text-muted-foreground"
                              }`}
                            >
                              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${link.accent}`}>
                                <LinkIcon className="h-4 w-4" />
                              </span>
                              <span className="text-sm font-semibold text-foreground group-hover/card:text-orange-100">{link.name}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden shrink-0 items-center gap-2 xl:flex">
            {/* <div className="hidden items-center gap-2 min-[1900px]:flex">
              {trustBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                  {badge}
                </span>
              ))}
            </div> */}
            <Button variant="heroOutline" size="default" className="hidden rounded-full border-white/15 bg-white/[0.04] min-[1500px]:inline-flex" asChild>
              <a href={directEmailHref}>Email Brief</a>
            </Button>
            <BookCallButton />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-white/10 p-2 text-foreground transition-colors hover:bg-white/[0.055] lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-white/10 bg-[#070b14]/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="section-container flex max-h-[calc(100vh-4rem)] flex-col gap-3 overflow-y-auto py-4">
              <div className="grid gap-2 sm:grid-cols-2">
                {[...sectionLinks, ...companyLinks].map((link) => {
                  const active = isActiveHref(location.pathname, link.href);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className={`rounded-2xl px-4 py-3 font-medium transition-colors ${
                        active ? "bg-white/[0.075] text-orange-100" : "text-muted-foreground hover:bg-white/[0.055] hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>

              <div className="my-2 h-px bg-border/70" />
              <p className="px-1 text-xs font-semibold uppercase tracking-wider text-orange-200">Solutions</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {solutionLinks.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-2xl border border-white/10 bg-white/[0.025] p-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/[0.055] hover:text-orange-100"
                    >
                      <span className="flex items-center gap-3">
                        <span className={`flex h-9 w-9 items-center justify-center rounded-xl border ${link.accent}`}>
                          <LinkIcon className="h-4 w-4" />
                        </span>
                        {link.name}
                      </span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <Button variant="heroOutline" size="lg" className="rounded-full" asChild>
                  <a href={directEmailHref}>Email Brief</a>
                </Button>
                <BookCallButton size="lg" className="rounded-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
