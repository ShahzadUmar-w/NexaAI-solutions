import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Eye,
  FileText,
  Images,
  Sparkles,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/data/portfolioProjects";

const allCategory = "All Projects";

const proofPoints = [
  "Projects are grouped from your real public folders, so clients can see multiple screens from the same delivery.",
  "Portfolio includes Outlook, PowerPoint, Word, Google Docs add-ons, and Google Sheets add-ons.",
  "To add more work, create a project folder and add 2-4 screenshots. Then regenerate or add it to portfolioProjects.",
];

const categoryOrder = [
  allCategory,
  "Outlook Add-in",
  "PowerPoint Add-in",
  "Word Add-in",
  "Google Docs Add-on",
  "Google Sheets Add-on",
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState(allCategory);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const categories = useMemo(() => {
    const available = new Set(portfolioProjects.map((project) => project.category));
    return categoryOrder.filter((category) => category === allCategory || available.has(category));
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === allCategory) return portfolioProjects;
    return portfolioProjects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const selectedProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

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
    <section id="portfolio" className="relative overflow-hidden py-24">
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
            className="mb-4 inline-flex items-center gap-2 rounded-full glass-light px-4 py-2 text-xs font-semibold uppercase tracking-wider text-orange-100"
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
                    ? "border-orange-300/40 bg-orange-300/15 text-orange-100 shadow-glow-orange"
                    : "border-white/10 bg-white/[0.035] text-muted-foreground hover:border-orange-300/25 hover:text-orange-100"
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
              className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm leading-6 text-muted-foreground"
            >
              {point}
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={`${project.category}-${project.title}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.035, 0.35) }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition-all duration-300 hover:-translate-y-1 hover:border-orange-400/30 hover:bg-white/[0.055]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0f172a]">
                <img
                  src={project.images[0]}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-[#0b1020]/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-semibold text-orange-100 backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    <Images className="h-3.5 w-3.5" />
                    {project.images.length} screens
                  </span>
                </div>
              </div>

              <div className="p-6 text-left">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
                    <FileText className="h-6 w-6" />
                  </div>
                  <Sparkles className="h-5 w-5 text-orange-200 opacity-70" />
                </div>

                <h3 className="mb-3 text-xl font-bold text-foreground">{project.title}</h3>
                <p className="mb-5 text-sm leading-6 text-muted-foreground">{project.summary}</p>

                <div className="mb-5 rounded-2xl border border-orange-400/15 bg-orange-400/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange-200">Outcome</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{project.outcome}</p>
                </div>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-white/[0.055] px-3 py-1 text-xs text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>

                <Button variant="heroOutline" size="lg" className="w-full rounded-2xl" onClick={() => openProject(index)}>
                  <Eye className="mr-2 h-4 w-4" />
                  View project screens
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-orange-400/15 bg-gradient-to-r from-orange-500/10 via-white/[0.03] to-purple-500/10 p-6 text-center md:p-8">
          <h3 className="mb-2 text-2xl font-bold text-foreground">Want a similar add-in for your team?</h3>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-6 text-muted-foreground">
            Share your workflow, target Office app, and deployment needs. I will help turn it into a realistic scope.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="/contact">
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
                      <img src={image} alt={`${selectedProject.title} thumbnail ${imageIndex + 1}`} className="aspect-video h-full w-full object-cover object-top" />
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
