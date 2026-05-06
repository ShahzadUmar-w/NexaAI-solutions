import { motion } from "framer-motion";
import {
  Boxes,
  Code2,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import type { CSSProperties, PointerEvent } from "react";

const processSteps = [
  {
    icon: Sparkles,
    title: "Plan the workflow",
    description: "We map the Office add-in around the exact task your team wants to automate.",
  },
  {
    icon: Code2,
    title: "Build clean UI",
    description: "React, TypeScript, Office.js, and practical UX for Outlook, Excel, Word, or PowerPoint.",
  },
  {
    icon: Workflow,
    title: "Connect systems",
    description: "Microsoft Graph, APIs, auth, webhooks, and business data integrations.",
  },
  {
    icon: Rocket,
    title: "Deploy safely",
    description: "Manifest setup, Microsoft 365 admin deployment support, testing, and handover.",
  },
];

const galleryApps = [
  {
    name: "Outlook",
    src: "/email.png",
    label: "Email workflow add-ins",
  },
  {
    name: "Excel",
    src: "/excel-icon.png",
    label: "Data and reporting tools",
  },
  {
    name: "Word",
    src: "/Microsoft_Office_Word_Logo_512px.png",
    label: "Document automation",
  },
  {
    name: "PowerPoint",
    src: "/ppt-icon.png",
    label: "Presentation workflows",
  },
  {
    name: "Office 365",
    src: "/icons8-microsoft-365-48.png",
    label: "Microsoft 365 deployment",
  },
];

const Interactive3DSection = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, mx: 50, my: 45 });

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setRotation({
      x: Number((-y * 12).toFixed(2)),
      y: Number((x * 14).toFixed(2)),
      mx: Number(((x + 0.5) * 100).toFixed(2)),
      my: Number(((y + 0.5) * 100).toFixed(2)),
    });
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0, mx: 50, my: 45 });
  };

  const sceneStyle = {
    "--rx": `${rotation.x}deg`,
    "--ry": `${rotation.y}deg`,
    "--mx": `${rotation.mx}%`,
    "--my": `${rotation.my}%`,
  } as CSSProperties;

  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0b1020]/80 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(255,209,61,0.1),transparent_24rem),radial-gradient(circle_at_80%_70%,rgba(225,29,143,0.08),transparent_26rem)]" />

      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr,1.18fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="section-kicker">
              <Boxes className="h-4 w-4" />
              Interactive Build System
            </span>

            <h2 className="section-title mb-5">
              From idea to a working
              <span className="gradient-text-both block">Office add-in experience.</span>
            </h2>

            <p className="mb-8 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              A clean visual of how your add-in comes together: interface, Office.js logic, Microsoft Graph,
              secure permissions, and deployment support in one connected delivery flow.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-300/15 bg-orange-300/10 text-orange-200">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{step.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative"
          >
            <div
              className="office-3d-scene relative mx-auto min-h-[620px] w-full max-w-[820px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-soft-lg"
              onPointerMove={handlePointerMove}
              onPointerLeave={resetRotation}
              style={sceneStyle}
            >
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_36%),radial-gradient(circle_at_50%_45%,rgba(255,209,61,0.14),transparent_18rem)]" />
              <div className="office-gallery-grid absolute inset-0" />
              <div className="absolute left-1/2 top-[45%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
              <div className="absolute left-1/2 top-[45%] h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/10" />
              <div className="absolute left-1/2 top-[45%] h-[38rem] w-[38rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,45%),rgba(255,255,255,0.08),transparent_16rem)]" />

              <div className="office-gallery-stage absolute inset-x-6 top-8 h-[470px]">
                <div className="office-gallery-platform" />
                <div className="office-gallery-connector office-gallery-connector-1" />
                <div className="office-gallery-connector office-gallery-connector-2" />
                <div className="office-gallery-connector office-gallery-connector-3" />
                <div className="office-gallery-connector office-gallery-connector-4" />
                <div className="office-gallery-connector office-gallery-connector-5" />

                <div className="office-gallery-hub">
                  <div className="office-gallery-hub-logo">
                    <img src="/Logo.png" alt="NexaAI Solutions" className="h-12 w-auto" />
                  </div>
                  <p>NexaAI Add-in Studio</p>
                  <span>Office.js + Microsoft Graph + Deployment</span>
                </div>

                <span className="office-gallery-pulse office-gallery-pulse-1" />
                <span className="office-gallery-pulse office-gallery-pulse-2" />
                <span className="office-gallery-pulse office-gallery-pulse-3" />

                {galleryApps.map((app, index) => (
                  <button
                    key={app.name}
                    type="button"
                    className={`office-gallery-card office-gallery-card-${index + 1}`}
                    aria-label={`${app.name} ${app.label}`}
                  >
                    <img src={app.src} alt={`${app.name} icon`} />
                    <span>{app.name}</span>
                    <small>{app.label}</small>
                  </button>
                ))}
              </div>

              <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#11182c]/80 p-4 backdrop-blur-xl">
                  <div className="mb-2 flex items-center gap-2 text-sm font-bold text-white">
                    <ShieldCheck className="h-4 w-4 text-orange-200" />
                    Secure by design
                  </div>
                  <p className="text-xs leading-5 text-slate-400">Auth, permissions, and Microsoft 365 deployment support.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#11182c]/80 p-4 backdrop-blur-xl">
                  <div className="mb-2 flex items-center gap-2 text-sm font-bold text-white">
                    <Rocket className="h-4 w-4 text-orange-200" />
                    Built to launch
                  </div>
                  <p className="text-xs leading-5 text-slate-400">Production-ready UI, testing, fixes, and handover.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Interactive3DSection;
