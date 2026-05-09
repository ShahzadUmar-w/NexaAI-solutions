import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Eye,
  FileText,
  Images,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { portfolioProjectSlug, portfolioProjects } from "@/data/portfolioProjects";

const allCategory = "All Projects";

const proofPoints = [
  "Real screenshots from delivered add-in workflows, grouped by product and Office surface.",
  "Each case includes multiple screens so buyers can inspect the actual task pane, flow, and UI quality.",
  "Coverage across Outlook, PowerPoint, Word, Google Docs, Google Sheets, Microsoft Graph, and React-based add-ins.",
];

const categoryOrder = [
  allCategory,
  "Outlook Add-in",
  "PowerPoint Add-in",
  "Word Add-in",
  "Google Docs Add-on",
  "Google Sheets Add-on",
];

const projectsPerPage = 12;

const getProjectNarrative = (project: (typeof portfolioProjects)[number]) => {
  const title = project.title.toLowerCase();
  const category = project.category.toLowerCase();

  if (title.includes("attachment")) {
    return {
      summary: "Attachment-focused Outlook workflow for sorting, reviewing, saving, and routing mailbox files with fewer manual steps.",
      outcome: "Faster attachment handling with cleaner mailbox-to-business-system flow",
    };
  }

  if (title.includes("chatgpt") || title.includes("ai")) {
    return {
      summary: "AI-assisted Outlook add-in experience for reading email context, generating useful responses, and improving productivity inside the inbox.",
      outcome: "Smarter email handling with AI support inside the daily Outlook workflow",
    };
  }

  if (title.includes("dms") || title.includes("doc") || title.includes("gesdoc")) {
    return {
      summary: "Document management add-in workflow for filing emails, attachments, metadata, and business records from Outlook.",
      outcome: "More reliable document capture with traceable Outlook-to-DMS handoff",
    };
  }

  if (title.includes("email")) {
    return {
      summary: "Email automation add-in for saving, sorting, classifying, or routing Outlook messages with a guided task pane experience.",
      outcome: "Reduced repetitive email admin with a more consistent Outlook workflow",
    };
  }

  if (category.includes("powerpoint")) {
    return {
      summary: "PowerPoint add-in workflow for proposal generation, reusable slide content, visual automation, and branded presentation delivery.",
      outcome: "Faster deck production with reusable, governed presentation assets",
    };
  }

  if (category.includes("word")) {
    return {
      summary: "Word add-in workflow for document automation, drafting support, templates, review actions, and business content generation.",
      outcome: "Cleaner document production with guided actions inside Microsoft Word",
    };
  }

  if (category.includes("google")) {
    return {
      summary: "Google Workspace add-on workflow for business automation, data handling, document actions, and productivity improvements.",
      outcome: "More structured Google Workspace workflow with custom add-on support",
    };
  }

  return {
    summary: project.summary,
    outcome: project.outcome,
  };
};

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState(allCategory);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [visibleProjectCount, setVisibleProjectCount] = useState(projectsPerPage);

  const categories = useMemo(() => {
    const available = new Set(portfolioProjects.map((project) => project.category));
    return categoryOrder.filter((category) => category === allCategory || available.has(category));
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === allCategory) return portfolioProjects;
    return portfolioProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const selectedProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;
  const visibleProjects = filteredProjects.slice(0, visibleProjectCount);
  const hasMoreProjects = visibleProjectCount < filteredProjects.length;

  const openProject = (projectIndex: number) => {
    setSelectedProjectIndex(projectIndex);
    setSelectedImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProjectIndex(null);
    setSelectedImageIndex(0);
  };

  const changeCategory = (category: string) => {
    setActiveCategory(category);
    setVisibleProjectCount(projectsPerPage);
    closeProject();
  };

  const showPreviousImage = () => {
    if (!selectedProject) return;
    setSelectedImageIndex((current) => (current === 0 ? selectedProject.images.length - 1 : current - 1));
  };

  const showNextImage = () => {
    if (!selectedProject) return;
    setSelectedImageIndex((current) => (current === selectedProject.images.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="portfolio" className="relative overflow-hidden pb-24 pt-28 lg:pt-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/[0.035] to-transparent" />
      <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute -left-24 bottom-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="section-container relative z-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full glass-light px-4 py-2 text-xs font-semibold uppercase tracking-wider text-orange-700 dark:text-orange-100"
          >
            <BadgeCheck className="h-4 w-4 text-orange-300" />
            Portfolio Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-5 font-heading text-3xl font-bold md:text-5xl"
          >
            Real project screens grouped
            <span className="gradient-text-both"> by add-in workflow</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.16 }}
            className="text-muted-foreground"
          >
            Browse {portfolioProjects.length}+ real project galleries from Outlook, PowerPoint, Word, Google Docs, and Google Sheets add-on work.
          </motion.p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const count = category === allCategory ? portfolioProjects.length : portfolioProjects.filter((project) => project.category === category).length;
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => changeCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? "border-orange-300 bg-orange-50 text-orange-700 shadow-soft dark:border-orange-300/40 dark:bg-orange-300/15 dark:text-orange-100 dark:shadow-glow-orange"
                    : "border-slate-200 bg-white/[0.85] text-muted-foreground hover:border-orange-300 hover:text-slate-950 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-orange-300/25 dark:hover:text-orange-100"
                }`}
              >
                {category}
                <span className="ml-2 text-xs opacity-70">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="mb-10 grid gap-4 lg:grid-cols-3">
          {proofPoints.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white/80 p-5 text-sm leading-6 text-muted-foreground shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-white/[0.035] dark:shadow-none"
            >
              {point}
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => {
            const narrative = getProjectNarrative(project);

            return (
              <motion.article
                key={`${project.category}-${project.title}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(index * 0.035, 0.35) }}
                className="group relative flex h-full overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/45 hover:bg-white dark:border-white/10 dark:bg-[#070b16] dark:hover:border-orange-300/35 dark:hover:bg-[#0a1020]"
              >
                <div className="flex w-full flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-[#0f172a]">
                    <img
                      src={project.images[0]}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent dark:from-[#070b16] dark:via-[#070b16]/20" />
                    <div className="absolute left-4 top-4 flex max-w-[calc(100%-2rem)] flex-wrap gap-2">
                      <span className="rounded-full border border-white/60 bg-slate-950/55 px-3 py-1 text-xs font-semibold text-orange-100 backdrop-blur-md dark:border-white/10 dark:bg-black/45">
                        {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-white/60 bg-slate-950/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md dark:border-white/10 dark:bg-black/45">
                        <Images className="h-3.5 w-3.5" />
                        {project.images.length} screens
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 rounded-full border border-white/60 bg-slate-950/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md dark:border-white/10 dark:bg-black/45">
                      Preview gallery
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 text-left">
                    <div className="mb-4 flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-300/15 dark:bg-orange-300/10 dark:text-orange-200">
                        <FileText className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl font-bold leading-tight text-foreground">{project.title}</h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{project.category}</p>
                      </div>
                    </div>

                    <p className="mb-5 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">{narrative.summary}</p>

                    <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.035]">
                      <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-700 dark:text-orange-200">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Business value
                      </p>
                      <p className="text-sm font-semibold leading-6 text-foreground">{narrative.outcome}</p>
                    </div>

                    {/* <div className="mb-6 flex flex-wrap gap-2">
                      {visibleStack.map((item) => (
                        <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-muted-foreground dark:border-white/10 dark:bg-white/[0.045]">
                          {item}
                        </span>
                      ))}
                      {hiddenStackCount > 0 && (
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-muted-foreground dark:border-white/10 dark:bg-white/[0.045]">
                          +{hiddenStackCount}
                        </span>
                      )}
                    </div> */}

                    <div className="mt-auto grid grid-cols-2 gap-3">
                      <Button variant="heroOutline" size="sm" className="h-11 whitespace-nowrap rounded-xl px-3 text-sm" onClick={() => openProject(index)}>
                        <Eye className="mr-2 h-4 w-4" />
                        Preview
                      </Button>
                      <Button variant="hero" size="sm" className="h-11 whitespace-nowrap rounded-xl px-3 text-sm" asChild>
                        <a href={`/portfolio/${portfolioProjectSlug(project)}`} className="whitespace-nowrap">
                          Case details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {hasMoreProjects && (
          <div className="mt-10 flex justify-center">
            <Button
              type="button"
              variant="heroOutline"
              size="sm"
              className="h-11 whitespace-nowrap rounded-xl px-5 text-sm"
              onClick={() => setVisibleProjectCount((count) => Math.min(count + projectsPerPage, filteredProjects.length))}
            >
              Load more projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        <div className="mt-12 rounded-3xl border border-orange-400/15 bg-gradient-to-r from-orange-500/10 via-white/[0.03] to-purple-500/10 p-6 text-center md:p-8">
          <h3 className="mb-2 text-2xl font-bold text-foreground">Want a similar add-in for your team?</h3>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-6 text-muted-foreground">
            Share your workflow, target Office app, and deployment needs. I will help turn it into a realistic scope.
          </p>
          <Button variant="hero" size="sm" className="h-11 whitespace-nowrap rounded-xl px-5 text-sm" asChild>
            <a href="/contact" className="whitespace-nowrap">
              Discuss Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/78 p-4 backdrop-blur-xl" role="dialog" aria-modal="true">
          <div className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] shadow-soft-lg">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 p-4 md:p-5">
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">{selectedProject.category}</p>
                <h3 className="mt-1 text-xl font-bold text-white md:text-2xl">{selectedProject.title}</h3>
              </div>
              <button
                type="button"
                onClick={closeProject}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08]"
                aria-label="Close project gallery"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-0 lg:grid-cols-[1fr,0.32fr]">
              <div className="relative bg-black/25 p-4 md:p-6">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]">
                  <img
                    src={selectedProject.images[selectedImageIndex]}
                    alt={`${selectedProject.title} screen ${selectedImageIndex + 1}`}
                    decoding="async"
                    className="max-h-[62vh] w-full object-contain object-top"
                  />
                </div>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={showPreviousImage}
                      className="absolute left-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-black/70 md:left-8"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={showNextImage}
                      className="absolute right-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/45 text-white backdrop-blur-md transition-colors hover:bg-black/70 md:right-8"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              <aside className="border-t border-white/10 p-4 text-left lg:border-l lg:border-t-0 md:p-5">
                <p className="mb-4 text-sm leading-6 text-muted-foreground">{selectedProject.summary}</p>
                <div className="mb-5 rounded-2xl border border-orange-400/15 bg-orange-400/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange-200">Outcome</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{selectedProject.outcome}</p>
                </div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {selectedProject.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Project screens</p>
                <div className="grid grid-cols-3 gap-2 lg:grid-cols-2">
                  {selectedProject.images.map((image, imageIndex) => (
                    <button
                      key={image}
                      type="button"
                      onClick={() => setSelectedImageIndex(imageIndex)}
                      className={`overflow-hidden rounded-xl border bg-[#0f172a] transition-all ${
                        selectedImageIndex === imageIndex ? "border-orange-300 ring-2 ring-orange-300/20" : "border-white/10 hover:border-orange-300/35"
                      }`}
                    >
                      <img src={image} alt={`${selectedProject.title} thumbnail ${imageIndex + 1}`} loading="lazy" decoding="async" className="aspect-video h-full w-full object-cover object-top" />
                    </button>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
