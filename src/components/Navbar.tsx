import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const sectionLinks = [
  { name: "About", href: "/about-us" },
  { name: "Services", href: "/#services" },
  { name: "Plans", href: "/#plans" },
  { name: "Products", href: "/#products" },
  { name: "Portfolio", href: "/#portfolio" },
  { name: "Enterprise", href: "/#enterprise" },
  { name: "Contact", href: "/#contact" },
];

const solutionLinks = [
  { name: "Outlook Add-ins", href: "/outlook-add-in-development" },
  { name: "Excel Add-ins", href: "/excel-add-in-development" },
  { name: "Word Add-ins", href: "/word-add-in-development" },
  { name: "PowerPoint Add-ins", href: "/powerpoint-add-in-development" },
  { name: "Microsoft Graph", href: "/microsoft-graph-integration" },
  { name: "M365 Deployment", href: "/microsoft-365-add-in-deployment" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-orange-500/10 bg-background/70 backdrop-blur-2xl">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          <a href="/" className="group flex min-w-0 items-center gap-3">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-orange-400/20 bg-white/[0.04] shadow-soft md:h-12 md:w-12">
              <img src="/Logo.png" alt="Nexa AI Solutions logo" className="h-9 w-auto object-contain md:h-10" />
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-heading text-base font-extrabold text-white sm:text-lg">
                Nexa AI<span className="gradient-text-purple"> Solutions</span>
              </span>
              <span className="hidden text-xs text-muted-foreground sm:block">Office Add-in Development</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {sectionLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-white/5 hover:text-foreground"
              >
                {link.name}
              </a>
            ))}

            <div className="group relative">
              <button className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-white/5 hover:text-foreground">
                Solutions
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="invisible absolute right-0 top-full w-72 translate-y-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-2 group-hover:opacity-100">
                <div className="rounded-3xl border border-orange-500/15 bg-background/95 p-3 shadow-soft-lg backdrop-blur-2xl">
                  <div className="mb-2 flex items-center gap-2 rounded-2xl glass-orange px-3 py-2 text-xs font-semibold text-orange-100">
                    <Sparkles className="h-3.5 w-3.5" />
                    SEO landing pages
                  </div>
                  <div className="grid gap-1">
                    {solutionLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="rounded-2xl px-3 py-2 text-sm text-muted-foreground transition-all hover:bg-orange-500/10 hover:text-orange-100"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden xl:block">
            <Button variant="hero" size="default" asChild>
              <a href="/#contact">Book Call</a>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-white/10 p-2 text-foreground transition-colors hover:bg-white/5 lg:hidden"
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
            className="border-b border-border bg-background lg:hidden"
          >
            <div className="section-container flex flex-col gap-2 py-4">
              {sectionLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-2 font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                >
                  {link.name}
                </a>
              ))}

              <div className="my-2 h-px bg-border/70" />
              <p className="px-3 text-xs font-semibold uppercase tracking-wider text-orange-200">Solutions</p>
              {solutionLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-orange-500/10 hover:text-orange-100"
                >
                  {link.name}
                </a>
              ))}

              <Button variant="hero" size="lg" className="mt-3" asChild>
                <a href="/#contact">Book Call</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
