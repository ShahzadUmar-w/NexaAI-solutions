import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AddInServicePage = lazy(() => import("./pages/AddInServicePage"));
const SEOResourcePage = lazy(() => import("./pages/SEOResourcePage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const Plans = lazy(() => import("./pages/Plans"));
const Products = lazy(() => import("./pages/Products"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioDetail = lazy(() => import("./pages/PortfolioDetail"));
const Enterprise = lazy(() => import("./pages/Enterprise"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/products" element={<Products />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/outlook-add-in-development" element={<AddInServicePage type="outlook" />} />
              <Route path="/excel-add-in-development" element={<AddInServicePage type="excel" />} />
              <Route path="/word-add-in-development" element={<AddInServicePage type="word" />} />
              <Route path="/powerpoint-add-in-development" element={<AddInServicePage type="powerpoint" />} />
              <Route path="/microsoft-graph-integration" element={<SEOResourcePage type="graph" />} />
              <Route path="/microsoft-365-add-in-deployment" element={<SEOResourcePage type="deployment" />} />
              <Route path="/how-to-build-outlook-add-in" element={<SEOResourcePage type="outlook-guide" />} />
              <Route path="/office-js-vs-vsto" element={<SEOResourcePage type="officejs-vsto" />} />
              <Route path="/excel-add-in-development-guide" element={<SEOResourcePage type="excel-guide" />} />
              <Route path="/case-studies/outlook-crm-add-in" element={<SEOResourcePage type="outlook-crm-case" />} />
              <Route path="/case-studies/excel-reporting-automation" element={<SEOResourcePage type="excel-reporting-case" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

