import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Plans", href: "#plans" },
  { name: "Products", href: "#products" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Enterprise", href: "#enterprise" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between gap-4 lg:h-20">
          {/* Logo Section */}
          <a href="#" className="group flex min-w-0 items-center gap-2">
            {/* Logo Image - Add your logo here */}
            <img 
              src="/Logo.png" 
              alt="Logo" 
              className="h-9 w-auto shrink-0 object-contain md:h-12"
            />
            
            {/* Logo Text */}
            <span className="truncate font-heading text-base font-bold text-white transition-colors duration-300 group-hover:text-orange-200 sm:text-lg">
              Nexa AI<span className="gradient-text-purple"> Solutions</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-3 lg:flex xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-2.5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-white/5 hover:text-foreground xl:px-3"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden xl:block">
            <Button variant="hero" size="default" asChild>
              <a href="#contact">Book Call</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-foreground transition-colors hover:bg-white/5 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background lg:hidden"
          >
            <div className="section-container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-2" asChild>
                <a href="#contact">Book Call</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
