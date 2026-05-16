import {
  ArrowRight,
  Braces,
  CheckCircle2,
  Code2,
  Mail,
  Monitor,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { outlookBookingUrl } from "@/lib/booking";

const directEmailHref =
  "mailto:shahzad890.it@gmail.com?subject=Software%20Development%20Project%20Consultation&body=Hi%20Shahzad%2C%0A%0AI%20would%20like%20to%20discuss%20a%20software%20development%20project.%0A%0ACompany%3A%0AProject%20type%3A%0ATimeline%3A%0AKey%20requirements%3A%0A%0AThanks.";

const serviceTracks = [
  {
    icon: Code2,
    image: "/assets/code.png",
    label: "Web Apps",
    detail: "React, Next.js dashboards, portals",
    position: "left-[5%] top-[11%]",
    accent: "from-white to-white-600",
  },
  {
    icon: Smartphone,
    image: "/assets/app.png",
    label: "Mobile Apps",
    detail: "React Native iOS and Android",
    position: "right-[4%] top-[20%]",
    accent: "from-white-400 to-white-600",
  },
  {
    icon: Monitor,
    label: "Desktop Apps",
    detail: "Electron workflow software",
    position: "left-[1%] top-[49%]",
    accent: "from-orange-300 to-orange-600",
  },
  {
    icon: Workflow,
    label: "Automations",
    detail: "n8n, Make, Zapier, Power Automate",
    position: "right-[5%] top-[55%]",
    accent: "from-rose-400 to-pink-600",
  },
  {
    icon: Braces,
    label: "Apps Script",
    detail: "Sheets, Docs, Gmail, Workspace",
    position: "left-[17%] bottom-[11%]",
    accent: "from-emerald-400 to-teal-600",
  },
  {
    icon: Mail,
    label: "Office Add-ins",
    detail: "Word, Excel, Outlook plugins",
    position: "right-[18%] bottom-[8%]",
    accent: "from-sky-400 to-indigo-600",
  },
];

const metrics = [
  { value: "50+", label: "Projects delivered" },
  { value: "5+", label: "Years experience" },
  { value: "24h", label: "Typical reply" },
];

const capabilityPills = ["React", "TypeScript", "Node.js", "Office.js", "Apps Script", "AI APIs", "Automation"];

const proofPoints = ["Custom apps for real business workflows", "AI and automation built around your process", "Clean handoff, deployment, and support"];

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-24 lg:pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fbfcfe] to-[#f4f7fb] dark:bg-none dark:bg-[#090d1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_13%_16%,rgba(249,115,22,0.09),transparent_24rem),radial-gradient(circle_at_83%_18%,rgba(14,165,233,0.08),transparent_28rem),linear-gradient(115deg,transparent_0%,rgba(15,23,42,0.028)_48%,transparent_74%)] dark:bg-[radial-gradient(circle_at_18%_12%,rgba(255,209,61,0.16),transparent_24rem),radial-gradient(circle_at_86%_18%,rgba(225,29,143,0.1),transparent_26rem),linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.035)_48%,transparent_76%)]" />
      <div className="absolute left-1/2 top-28 hidden h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-slate-200/70 dark:border-white/10 lg:block" />
      <div className="absolute left-1/2 top-40 hidden h-[22rem] w-[22rem] -translate-x-1/2 rounded-full border border-slate-200/60 dark:border-white/[0.07] lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border to-transparent dark:via-white/15" />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-8 pb-12 lg:min-h-[660px] lg:grid-cols-[0.92fr,1.08fr] xl:gap-12">
          <div className="text-left">
            <div
              // initial={{ opacity: 0, y: 16 }}
              // animate={isInView ? { opacity: 1, y: 0 } : {}}
              // transition={{ duration: 0.45 }}
              className="mb-6 inline-flex max-w-full items-center gap-3 rounded-full border border-slate-200 bg-white/[0.84] px-3 py-2 text-xs font-bold text-slate-700 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05] dark:text-orange-100 sm:px-4 sm:text-sm"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white dark:bg-orange-300 dark:text-slate-950">
                <Sparkles className="h-3.5 w-3.5" />
              </span>
              Software studio for apps, AI, add-ins, and automations
            </div>

            <h1 className="mb-6 max-w-4xl font-heading text-5xl font-black leading-[0.98] tracking-[-0.035em] text-foreground sm:text-6xl md:text-[4rem] xl:text-[5rem] dark:text-white">
              <span className="block">Nexa AI</span>
              <span className="gradient-text-both block pb-2">Solutions</span>
            </h1>

            <p className="mb-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg md:text-xl dark:text-slate-300">
              We design and build desktop apps, mobile apps, React and Next.js products, AI workflows, and custom Office add-ins for Word, Excel, Outlook, and Office 365.
            </p>

            <div
              // initial={{ opacity: 0, y: 18 }}
              // animate={isInView ? { opacity: 1, y: 0 } : {}}
              // transition={{ duration: 0.52, delay: 0.22 }}
              className="mb-7 grid max-w-2xl gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300 sm:grid-cols-3"
            >
              {proofPoints.map((point) => (
                <div key={point} className="flex min-w-0 items-start gap-2 rounded-2xl border border-slate-200/70 bg-white/60 p-3 shadow-[0_10px_30px_rgba(15,23,42,0.055)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500 dark:text-orange-300" />
                  <span className="leading-5">{point}</span>
                </div>
              ))}
            </div>

            <div className="mb-8 flex max-w-2xl flex-wrap gap-2">
              {capabilityPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-slate-200 bg-white/[0.82] px-3 py-1.5 text-xs font-bold text-slate-600 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045] dark:text-slate-300"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="lg" asChild className="group min-h-12 whitespace-nowrap rounded-xl px-6 text-sm sm:text-base">
                <a href={outlookBookingUrl} target="_blank" rel="noreferrer" className="whitespace-nowrap">
                  Book Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                variant="heroOutline"
                size="lg"
                asChild
                className="group min-h-12 whitespace-nowrap rounded-xl px-6 text-sm sm:text-base"
              >
                <a href={directEmailHref} className="whitespace-nowrap">
                  Email Brief
                  <Mail className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                </a>
              </Button>
            </div>

            <div
            
              className="grid max-w-2xl gap-4 border-t border-border pt-7 dark:border-white/10 sm:grid-cols-3"
            >
              {metrics.map((metric) => (
                <div key={metric.label} className="text-left">
                  <p className="text-3xl font-bold tracking-[-0.03em] text-foreground dark:text-white">{metric.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground dark:text-slate-400">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div
         
            className="relative mx-auto min-h-[390px] w-full max-w-[40rem] sm:min-h-[500px] lg:min-h-[560px]"
          >
            <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.1),transparent_58%)] blur-2xl dark:bg-[radial-gradient(circle,rgba(255,209,61,0.1),transparent_58%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(15,23,42,0.22)_1px,transparent_1.5px),radial-gradient(circle_at_72%_28%,rgba(15,23,42,0.16)_1px,transparent_1.5px),radial-gradient(circle_at_52%_76%,rgba(249,115,22,0.22)_1px,transparent_1.5px)] bg-[size:92px_92px,132px_132px,104px_104px] opacity-30 dark:bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.5)_1px,transparent_1.5px),radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.32)_1px,transparent_1.5px),radial-gradient(circle_at_52%_76%,rgba(255,209,61,0.38)_1px,transparent_1.5px)]" />

            {[30, 22, 14].map((size) => (
              // @ts-ignore - dynamic styles required for responsive sizing
              <div
                key={size}
                className="absolute left-[43%] top-[40%] rounded-full border border-slate-200/80 dark:border-white/[0.1]"
                style={{
                  width: `${size}rem`,
                  height: `${size}rem`,
                  marginLeft: `${size / -2}rem`,
                  marginTop: `${size / -2}rem`,
                }}
              />
            ))}
            <div className="absolute left-[43%] top-[40%] h-px w-[min(30rem,86vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent dark:via-white/10" />
            <div className="absolute left-[43%] top-[40%] h-[min(30rem,86vw)] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-slate-300/50 to-transparent dark:via-white/10" />

            <div
              className="absolute left-[43%] top-[40%] z-20 -ml-[5rem] -mt-[5rem] flex h-40 w-40 flex-col items-center justify-center rounded-full border border-slate-200 bg-white/[0.92] p-5 text-center shadow-[0_28px_75px_rgba(15,23,42,0.14)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#11182c]/90 sm:-ml-[5.5rem] sm:-mt-[5.5rem] sm:h-44 sm:w-44"
            >
              <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.95),transparent_24%),radial-gradient(circle,rgba(249,115,22,0.11),transparent_62%)] dark:bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.16),transparent_24%),radial-gradient(circle,rgba(249,115,22,0.12),transparent_62%)]" />
              <div className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-3xl border border-slate-200 bg-white shadow-soft dark:border-white/10 dark:bg-white/[0.06]">
                <img src="/Logo.png" alt="NexaAI Solutions" className="h-12 w-auto" />
              </div>
              <p className="relative text-base font-black text-foreground dark:text-white">NexaAI Studio</p>
              <p className="relative mt-1 max-w-28 text-[11px] font-semibold leading-4 text-muted-foreground dark:text-slate-400">
                Apps, automation and integrations
              </p>
            </div>

            {serviceTracks.map((track, index) => (
              <button
                key={track.label}
                type="button"
                className={`group absolute z-10 flex max-w-[10.5rem] items-center gap-2 rounded-2xl border border-slate-200 bg-white/[0.88] p-2 text-left shadow-[0_14px_34px_rgba(15,23,42,0.09)] backdrop-blur-xl outline-none transition-colors hover:border-orange-200 hover:bg-white focus-visible:ring-2 focus-visible:ring-orange-300 dark:border-white/10 dark:bg-[#11182c]/[0.8] dark:hover:border-orange-300/30 sm:max-w-[11rem] sm:gap-2.5 sm:p-2.5 ${track.position}`}
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${track.accent} text-white shadow-soft sm:h-10 sm:w-10`}>
                  {track.image ? (
                    <img src={track.image} alt="" className="h-5 w-5 object-contain sm:h-6 sm:w-6" aria-hidden="true" />
                  ) : (
                    <track.icon className="h-4 w-4" />
                  )}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-black leading-5 text-foreground dark:text-white">{track.label}</span>
                  <span className="block truncate text-[11px] font-semibold leading-4 text-muted-foreground dark:text-slate-400">
                    {track.detail}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
