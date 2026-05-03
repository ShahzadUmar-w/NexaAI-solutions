import { Linkedin, Github, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/30 glass">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-orange flex items-center justify-center">
               <img 
              src="/Logo.png" 
              alt="Logo" 
              className="h-10 w-auto md:h-12 object-contain"
            />
            </div>
            <span className="font-heading font-bold text-foreground">
              NexaAI<span className="gradient-text-purple">Solutions</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass-light flex items-center justify-center hover:shadow-glow-orange hover:text-orange-400 transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass-light flex items-center justify-center hover:shadow-glow-purple hover:text-purple-400 transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg glass-light flex items-center justify-center hover:shadow-glow-orange hover:text-orange-400 transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} NexaAI solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
