import { Helmet } from "react-helmet-async";
import PageShell from "@/components/PageShell";
import ProductSection from "@/components/ProductSection";

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Office Add-in Product Foundations | NexaAI Solutions</title>
        <meta
          name="description"
          content="Explore reusable Office add-in product foundations for Outlook, Excel, Word, PowerPoint, Microsoft Graph, AI workflows, and enterprise automation."
        />
        <link rel="canonical" href="https://officeaddindevelopment.com/products" />
      </Helmet>
      <PageShell>
        <ProductSection />
      </PageShell>
    </>
  );
};

export default Products;

