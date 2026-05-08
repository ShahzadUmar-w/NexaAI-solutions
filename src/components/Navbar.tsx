import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  CalendarCheck,
  ChevronDown,
  Menu,
  Moon,
  Rocket,
  ShieldCheck,
  Sun,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useTheme } from "next-themes";
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

type SolutionLink = {
  name: string;
  href: string;
  description: string;
  accent: string;
  icon?: LucideIcon;
  brand?: "outlook";
  imageSrc?: string;
  imageClassName?: string;
};

const solutionLinks: SolutionLink[] = [
  {
    name: "Outlook Add-ins",
    href: "/outlook-add-in-development",
    description: "Email, calendar, CRM, AI, phishing report, and Graph workflows.",
    brand: "outlook",
    accent: "bg-blue-300/10 border-blue-300/15",
  },
  {
    name: "Excel Add-ins",
    href: "/excel-add-in-development",
    description: "Reports, custom functions, dashboards, APIs, and spreadsheet automation.",
    imageSrc: "/excel-icon.png",
    imageClassName: "h-6 w-6",
    accent: "bg-emerald-300/10 border-emerald-300/15",
  },
  {
    name: "Word Add-ins",
    href: "/word-add-in-development",
    description: "Document automation, AI writing, templates, PDF, and review flows.",
    imageSrc: "/Microsoft_Office_Word_Logo_512px.png",
    imageClassName: "h-6 w-7",
    accent: "bg-sky-300/10 border-sky-300/15",
  },
  {
    name: "PowerPoint Add-ins",
    href: "/powerpoint-add-in-development",
    description: "Slide libraries, proposal decks, templates, and brand workflows.",
    imageSrc: "/ppt-icon.png",
    imageClassName: "h-6 w-6",
    accent: "bg-orange-300/10 border-orange-300/15",
  },
  {
    name: "Microsoft Graph",
    href: "/microsoft-graph-integration",
    description: "Mail, calendar, files, users, Teams, SharePoint, and secure OAuth.",
    icon: BarChart3,
    accent: "text-cyan-700 bg-cyan-50 border-cyan-200 dark:text-cyan-200 dark:bg-cyan-300/10 dark:border-cyan-300/15",
  },
  {
    name: "M365 Deployment",
    href: "/microsoft-365-add-in-deployment",
    description: "Manifest review, tenant testing, Admin Center rollout, and handoff.",
    icon: Rocket,
    accent: "text-purple-700 bg-purple-50 border-purple-200 dark:text-purple-200 dark:bg-purple-300/10 dark:border-purple-300/15",
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
    className={`group relative isolate px-5 shadow-[0_18px_52px_rgba(249,115,22,0.2)] ${className}`}
    asChild
  >
    <a href={outlookBookingUrl} target="_blank" rel="noreferrer">
      <span className="relative flex items-center gap-2">
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-orange-900/10 bg-orange-950/10 dark:border-slate-950/10 dark:bg-slate-950/15">
          <CalendarCheck className="relative h-4 w-4" />
        </span>
        Book Call
      </span>
    </a>
  </Button>
);

const OutlookIcon = () => (
  <span className="relative block h-6 w-6">
    <span className="absolute bottom-0 right-0 h-[18px] w-[18px] rounded-[0.28rem] bg-[#0078d4]" />
    <span className="absolute right-0 top-1 h-3.5 w-[18px] rounded-[0.22rem] bg-[#28a8ea]" />
    <span className="absolute right-0 top-2.5 h-3 w-[18px] overflow-hidden rounded-b-[0.25rem] bg-[#106ebe]">
      <span className="absolute -top-1 left-0 h-3 w-3 rotate-45 bg-[#50b0f2]" />
      <span className="absolute -top-1 right-0 h-3 w-3 rotate-45 bg-[#005a9e]" />
    </span>
    <span className="absolute left-0 top-1.5 flex h-[18px] w-[18px] items-center justify-center rounded-[0.28rem] bg-[#0f6cbd] text-[0.62rem] font-bold leading-none text-white shadow-[3px_3px_8px_rgba(0,0,0,0.22)]">
      O
    </span>
  </span>
);

const SolutionIcon = ({ link }: { link: SolutionLink }) => {
  if (link.brand === "outlook") return <OutlookIcon />;

  if (link.imageSrc) {
    return <img src={link.imageSrc} alt="" aria-hidden="true" className={`${link.imageClassName ?? "h-6 w-6"} object-contain`} />;
  }

  if (link.icon) {
    const LinkIcon = link.icon;
    return <LinkIcon className="h-4 w-4" />;
  }

  return null;
};

const ThemeToggle = ({ className = "" }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white/[0.82] text-foreground shadow-soft transition-colors hover:border-slate-300 hover:bg-slate-100/80 dark:border-white/10 dark:bg-white/[0.045] dark:hover:bg-white/[0.08] ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <Sun className="h-4 w-4 text-orange-300" /> : <Moon className="h-4 w-4 text-slate-700" />}
    </button>
  );
};

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
    <nav className="site-navbar fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/[0.78] shadow-[0_18px_46px_rgba(15,23,42,0.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#070b14]/95 dark:shadow-[0_18px_60px_rgba(0,0,0,0.32)]">
      <div className="section-container">
        <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${isScrolled ? "h-16" : "h-16 lg:h-20"}`}>
          <a href="/" className="group flex min-w-0 flex-1 items-center gap-3 lg:w-[260px] lg:flex-none 2xl:w-[285px]">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft dark:border-white/10 dark:bg-white/[0.055] md:h-12 md:w-12">
              <img src="/Logo.png" alt="Nexa AI Solutions logo" className="h-9 w-auto object-contain md:h-10" />
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-pink-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <span className="min-w-0">
              <span className="block truncate whitespace-nowrap font-heading text-base font-bold text-foreground sm:text-lg">
                Nexa AI<span className="text-orange-600 dark:text-orange-200"> Solutions</span>
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
                      ? "bg-slate-950 text-white ring-1 ring-slate-950/10 dark:bg-white/[0.075] dark:text-orange-100 dark:ring-orange-300/15"
                      : "text-muted-foreground hover:bg-slate-100/80 hover:text-foreground dark:hover:bg-white/[0.055]"
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
                    ? "bg-slate-950 text-white ring-1 ring-slate-950/10 dark:bg-white/[0.075] dark:text-orange-100 dark:ring-orange-300/15"
                    : "text-muted-foreground hover:bg-slate-100/80 hover:text-foreground dark:hover:bg-white/[0.055]"
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
                    <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_24px_70px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:border-white/10 dark:bg-[#070b14] dark:shadow-[0_24px_70px_rgba(0,0,0,0.42)]">
                      <div className="mb-1.5 flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-800 dark:border-orange-300/15 dark:bg-orange-300/10 dark:text-orange-100">
                        <ShieldCheck className="h-4 w-4" />
                        Microsoft 365 Solutions
                      </div>

                      <div className="grid gap-1">
                        {solutionLinks.map((link) => {
                          const active = isActiveHref(location.pathname, link.href);
                          return (
                            <a
                              key={link.href}
                              href={link.href}
                              className={`group/card flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all hover:bg-slate-100/80 dark:hover:bg-white/[0.06] ${
                                active ? "bg-slate-100 text-slate-950 ring-1 ring-slate-200 dark:bg-white/[0.075] dark:text-orange-100 dark:ring-orange-300/15" : "text-muted-foreground"
                              }`}
                            >
                              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${link.accent}`}>
                                <SolutionIcon link={link} />
                              </span>
                              <span
                                className={`text-sm font-semibold transition-colors ${
                                  active
                                    ? "text-slate-950 dark:text-orange-100"
                                    : "text-foreground group-hover/card:text-slate-950 dark:group-hover/card:text-orange-100"
                                }`}
                              >
                                {link.name}
                              </span>
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
            <Button variant="heroOutline" size="default" className="hidden rounded-full min-[1500px]:inline-flex" asChild>
              <a href={directEmailHref}>Email Brief</a>
            </Button>
            <ThemeToggle />
            <BookCallButton />
          </div>

          <ThemeToggle className="hidden lg:inline-flex xl:hidden" />
          <ThemeToggle className="lg:hidden" />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-slate-200 bg-white/[0.75] p-2 text-foreground shadow-soft transition-colors hover:bg-slate-100/80 dark:border-white/10 dark:bg-white/[0.035] dark:hover:bg-white/[0.055] lg:hidden"
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
            className="border-b border-border bg-background/98 backdrop-blur-2xl dark:border-white/10 dark:bg-[#070b14]/98 lg:hidden"
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
                        active ? "bg-slate-950 text-white dark:bg-white/[0.075] dark:text-orange-100" : "text-muted-foreground hover:bg-slate-100/80 hover:text-foreground dark:hover:bg-white/[0.055]"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>

              <div className="my-2 h-px bg-border/70" />
              <p className="px-1 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-orange-200">Solutions</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {solutionLinks.map((link) => {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-2xl border border-slate-200 bg-white/[0.75] p-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-slate-100/80 hover:text-foreground dark:border-white/10 dark:bg-white/[0.025] dark:hover:bg-white/[0.055] dark:hover:text-orange-100"
                    >
                      <span className="flex items-center gap-3">
                        <span className={`flex h-9 w-9 items-center justify-center rounded-xl border ${link.accent}`}>
                          <SolutionIcon link={link} />
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
