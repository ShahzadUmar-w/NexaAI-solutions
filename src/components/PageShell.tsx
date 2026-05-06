import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
};

const PageShell = ({ children }: PageShellProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16 lg:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default PageShell;

