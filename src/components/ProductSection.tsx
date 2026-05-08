import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CalendarCheck,
  FileText,
  MailCheck,
  PackageCheck,
  Sparkles,
  TableProperties,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: MailCheck,
    name: "Smart Outlook Assistant",
    category: "Outlook Add-in",
    description:
      "AI-powered email drafting, reply suggestions, follow-up reminders, and attachment workflow automation.",
    highlights: ["Email AI", "Follow-up Tasks", "Attachment Tools"],
    status: "Customizable",
  },
  {
    icon: TableProperties,
    name: "Excel Data Automation Kit",
    category: "Excel Add-in",
    description:
      "Import APIs, clean data, generate reports, and run repeatable business workflows directly inside Excel.",
    highlights: ["API Imports", "Reports", "Custom Functions"],
    status: "Ready Framework",
  },
  {
    icon: FileText,
    name: "Document Builder Pro",
    category: "Word Add-in",
    description:
      "Generate contracts, proposals, invoices, and branded documents from reusable templates and business data.",
    highlights: ["Templates", "PDF Export", "Dynamic Fields"],
    status: "Customizable",
  },
  {
    icon: CalendarCheck,
    name: "Meeting Workflow Add-in",
    category: "Microsoft 365",
    description:
      "Create agendas, capture notes, assign action items, and sync meeting follow-ups across Microsoft 365.",
    highlights: ["Agenda Builder", "Action Items", "Graph Sync"],
    status: "Prototype Ready",
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="relative overflow-hidden py-24">
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-orange-500/5 to-transparent"
      />
      <motion.div
        animate={{ rotate: [0, 8, -8, 0], y: [-18, 18, -18] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 top-20 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl"
      />
      <motion.div
        animate={{ rotate: [0, -8, 8, 0], y: [18, -18, 18] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 left-10 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="gradient-text-purple mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider">
            <PackageCheck className="h-4 w-4" />
            Products
          </span>
          <h2 className="mb-5 font-heading text-3xl font-bold md:text-4xl">
            Ready-made product foundations for
            <span className="gradient-text-both"> faster Office automation</span>
          </h2>
          <p className="text-muted-foreground">
            These are reusable add-in foundations that can be customized for your exact workflow, branding, APIs, and deployment requirements.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 42, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                type: "spring",
                bounce: 0.28,
              }}
              whileHover={{
                y: -10,
                scale: 1.015,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group relative overflow-hidden rounded-2xl border border-purple-500/10 glass p-7 text-left transition-all duration-500 hover:border-purple-500/30 hover:shadow-glow-purple"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <motion.div
                animate={{ x: ["-120%", "120%"] }}
                transition={{ duration: 8, repeat: Infinity, delay: index * 0.7 }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              />

              <div className="relative z-10">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.45 }}
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-purple/10 text-purple-300 group-hover:bg-gradient-purple/20"
                  >
                    <product.icon className="h-7 w-7" />
                  </motion.div>

                  <span className="rounded-full glass-light px-3 py-1 text-xs font-semibold text-orange-700 dark:text-orange-200">
                    {product.status}
                  </span>
                </div>

                <p className="mb-2 text-xs font-semibold uppercase tracking-wider gradient-text-purple">
                  {product.category}
                </p>
                <h3 className="mb-3 text-2xl font-bold text-foreground transition-colors group-hover:text-slate-950 dark:group-hover:text-purple-200">
                  {product.name}
                </h3>
                <p className="mb-6 text-sm leading-6 text-muted-foreground">{product.description}</p>

                <div className="mb-7 flex flex-wrap gap-2">
                  {product.highlights.map((highlight, highlightIndex) => (
                    <motion.span
                      key={highlight}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + highlightIndex * 0.08 }}
                      className="rounded-lg glass-light px-3 py-1.5 text-xs text-purple-700 dark:text-purple-200"
                    >
                      {highlight}
                    </motion.span>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button variant="hero" size="lg" className="group/btn flex-1" asChild>
                    <a href="/contact">
                      Customize Product
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="lg" className="flex-1" asChild>
                    <a href="/portfolio">View Examples</a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.25 }}
          className="mt-12 grid gap-4 rounded-2xl glass-orange p-6 md:grid-cols-[auto,1fr,auto] md:items-center"
        >
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background/30 text-orange-700 dark:text-orange-200">
            <Bot className="h-7 w-7" />
          </div>
          <div className="text-left">
            <h3 className="mb-1 text-lg font-bold text-foreground">Need a product that is not listed?</h3>
            <p className="text-sm text-muted-foreground">
              I can turn your repeated Office workflow into a custom product-style add-in with clean UI, API integrations, and deployment support.
            </p>
          </div>
          <Button variant="hero" size="lg" asChild>
            <a href="/contact">Request Product Idea</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;

