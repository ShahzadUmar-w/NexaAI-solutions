import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AddInServicePage = lazy(() => import("./pages/AddInServicePage"));
const CustomServicePage = lazy(() => import("./pages/CustomServicePage"));
const SEOResourcePage = lazy(() => import("./pages/SEOResourcePage"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const Plans = lazy(() => import("./pages/Plans"));
const Products = lazy(() => import("./pages/Products"));
const Integrations = lazy(() => import("./pages/Integrations"));
const IntegrationDetail = lazy(() => import("./pages/IntegrationDetail"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioDetail = lazy(() => import("./pages/PortfolioDetail"));
const Feedbacks = lazy(() => import("./pages/Feedbacks"));
const Enterprise = lazy(() => import("./pages/Enterprise"));
const EnterpriseSecurity = lazy(() => import("./pages/EnterpriseSecurity"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Admin = lazy(() => import("./pages/Admin"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
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
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/integrations/:slug" element={<IntegrationDetail />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
              <Route path="/feedbacks" element={<Feedbacks />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/enterprise-security" element={<EnterpriseSecurity />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/outlook-add-in-development" element={<AddInServicePage type="outlook" />} />
              <Route path="/excel-add-in-development" element={<AddInServicePage type="excel" />} />
              <Route path="/word-add-in-development" element={<AddInServicePage type="word" />} />
              <Route path="/powerpoint-add-in-development" element={<AddInServicePage type="powerpoint" />} />
              <Route path="/google-apps-script-development" element={<CustomServicePage type="google-apps-script" />} />
              <Route path="/desktop-app-development" element={<CustomServicePage type="desktop-app" />} />
              <Route path="/automation-development" element={<CustomServicePage type="automation" />} />
              <Route path="/mobile-app-development" element={<CustomServicePage type="mobile-app" />} />
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
    </ThemeProvider>
  </HelmetProvider>
);

export default App;

