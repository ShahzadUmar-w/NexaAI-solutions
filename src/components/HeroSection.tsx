import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  Presentation,
  ShieldCheck,
  TableProperties,
} from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { outlookBookingUrl } from "@/lib/booking";

const directEmailHref =
  "mailto:shahzad890.it@gmail.com?subject=Enterprise%20Office%20Add-in%20Consultation&body=Hi%20Shahzad%2C%0A%0AI%20would%20like%20to%20discuss%20an%20enterprise%20Office%20add-in%20project.%0A%0ACompany%3A%0AProject%20type%3A%0ATimeline%3A%0AKey%20requirements%3A%0A%0AThanks.";

const apps = [
  { icon: Mail, label: "Outlook" },
  { icon: TableProperties, label: "Excel" },
  { icon: FileText, label: "Word" },
  { icon: Presentation, label: "PowerPoint" },
];

const deliveryItems = [
  "Office.js add-in development",
  "Microsoft Graph and API integration",
  "Secure authentication and permissions",
  "Microsoft 365 deployment support",
];

const metrics = [
  { value: "50+", label: "Projects delivered" },
  { value: "5+", label: "Years experience" },
  { value: "24h", label: "Typical reply" },
];

const HeroSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden pt-28 lg:pt-32">
      <div className="absolute inset-0 bg-[#0b1020]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,209,61,0.12),transparent_24rem),radial-gradient(circle_at_86%_18%,rgba(225,29,143,0.08),transparent_26rem)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="section-container relative z-10">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-12 pb-16 lg:grid-cols-[1.02fr,0.98fr]">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-semibold text-orange-100"
            >
              <span className="h-2 w-2 rounded-full bg-orange-300" />
              Enterprise Microsoft Office Add-in Development
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mb-6 max-w-4xl font-heading text-4xl font-bold leading-[1.08] tracking-[-0.025em] text-white sm:text-5xl md:text-[3.45rem] xl:text-[4.25rem]"
            >
              Professional Office add-ins for Microsoft 365 teams.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.18 }}
              className="mb-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl"
            >
              Custom Outlook, Excel, Word, and PowerPoint add-ins built with clean UI, Office.js, Microsoft Graph, secure authentication, and Microsoft 365 deployment support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.28 }}
              className="mb-8 flex flex-col gap-3 sm:flex-row"
            >
              <Button variant="hero" size="sm" asChild className="group h-11 whitespace-nowrap rounded-xl px-5 text-sm">
                <a href={outlookBookingUrl} target="_blank" rel="noreferrer" className="whitespace-nowrap">
                  Book Outlook Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="heroOutline"
                size="sm"
                asChild
                className="group h-11 whitespace-nowrap rounded-xl border-white/15 bg-white/[0.045] px-5 text-sm text-white hover:bg-white/[0.08]"
              >
                <a href={directEmailHref} className="whitespace-nowrap">
                  Email Brief
                  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.52, delay: 0.38 }}
              className="grid max-w-2xl gap-4 border-t border-white/10 pt-7 sm:grid-cols-3"
            >
              {metrics.map((metric) => (
                <div key={metric.label} className="text-left">
                  <p className="text-3xl font-bold tracking-[-0.03em] text-white">{metric.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{metric.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] md:p-6">
              <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-orange-300/10 blur-3xl" />

              <div className="relative mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#11182c]">
                    <img src="/Logo.png" alt="NexaAI Solutions" className="h-9 w-auto" />
                  </div>
                  <div>
                    <p className="font-bold text-white">NexaAI Solutions</p>
                    <p className="text-xs text-slate-400">Office add-in development</p>
                  </div>
                </div>
                <span className="rounded-full border border-orange-300/20 bg-orange-300/10 px-3 py-1 text-xs font-semibold text-orange-100">
                  M365
                </span>
              </div>

              <div className="relative mb-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Add-ins we build
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {apps.map((app, index) => (
                    <motion.div
                      key={app.label}
                      initial={{ opacity: 0, y: 14 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.35, delay: 0.3 + index * 0.06 }}
                      className="flex min-h-[4.25rem] items-center gap-3 rounded-2xl border border-white/10 bg-[#11182c]/70 p-3"
                    >
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-orange-200">
                        <app.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-bold text-white">{app.label}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative rounded-2xl border border-white/10 bg-[#11182c]/75 p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">Delivery scope</p>
                    <h2 className="mt-1 text-xl font-bold text-white">What clients get</h2>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-orange-300" />
                </div>

                <div className="space-y-3">
                  {deliveryItems.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-300" />
                      <p className="text-sm text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-6 text-slate-400">
                  Built for maintainable code, secure permissions, and practical handover after launch.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

