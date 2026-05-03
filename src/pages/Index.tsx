import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>OfficeDev | Microsoft Office Add-in Development Expert</title>
        <meta
          name="description"
          content="Specialized freelance developer building production-ready Microsoft Office Add-ins for Outlook, Excel, Word, and PowerPoint. Office.js & Microsoft Graph expert."
        />
        <meta
          name="keywords"
          content="Office Add-in, Outlook Add-in, Excel Add-in, Word Add-in, PowerPoint Add-in, Office.js, Microsoft Graph, freelance developer"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <VideoSection />
          <AboutSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
