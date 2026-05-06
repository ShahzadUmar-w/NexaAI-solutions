import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import AboutContent from "@/components/AboutContent";

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="section-container relative z-10">
        <AboutContent />

        <div className="mt-10 text-center">
          <Button variant="heroOutline" size="lg" asChild className="group rounded-2xl">
            <a href="/about-us">
              View Full About Us Page
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

