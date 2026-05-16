// import { motion } from "framer-motion";
// import { ArrowRight, Eye, Star, X } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import fiverrReviews from "@/data/fiverrReviews.json";

// type FiverrReview = {
//   id: string;
//   name: string;
//   country: string;
//   countryCode: string;
//   rating: number;
//   review: string;
//   price: string;
//   duration: string;
//   category: string;
//   platform: string;
//   date: string;
//   repeatClient: boolean;
//   status: string;
//   avatarUrl?: string;
//   imageUrl?: string;
// };

// const completedReviews = (fiverrReviews as FiverrReview[]).filter((review) => review.status === "completed");
// const averageRating =
//   completedReviews.reduce((total, review) => total + review.rating, 0) / completedReviews.length;
// const repeatClients = completedReviews.filter((review) => review.repeatClient).length;

// const renderStars = (rating: number) =>
//   Array.from({ length: 5 }).map((_, index) => (
//     <Star
//       key={index}
//       className={`h-4 w-4 ${
//         index < Math.round(rating) ? "fill-orange-400 text-orange-400" : "text-muted-foreground/30"
//       }`}
//     />
//   ));

// type TestimonialsSectionProps = {
//   limit?: number;
//   showFeedbacksLink?: boolean;
// };

// const TestimonialsSection = ({ limit, showFeedbacksLink = false }: TestimonialsSectionProps) => {
//   const [activeScreenshot, setActiveScreenshot] = useState<FiverrReview | null>(null);
//   const visibleReviews = typeof limit === "number" ? completedReviews.slice(0, limit) : completedReviews;

//   return (
//     <section id="testimonials" className="relative overflow-hidden py-24">
//       <div className="section-container relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="mx-auto mb-12 max-w-3xl text-center"
//         >
//           <span className="section-kicker">Fiverr & Upwork Reviews</span>
//           <h2 className="section-title mb-4">
//             Client feedback from
//             <span className="gradient-text-both block">add-in and automation work</span>
//           </h2>
//           <p className="text-muted-foreground">
//             Selected public reviews from completed Office add-in, plugin, desktop app, and automation projects.
//           </p>
//         </motion.div>

//         <div className="mx-auto mb-10 grid max-w-4xl gap-4 sm:grid-cols-3">
//           <div className="enterprise-card p-5 text-center">
//             <p className="text-3xl font-bold text-orange-700 dark:text-orange-200">{completedReviews.length}+</p>
//             <p className="text-sm text-muted-foreground">Public reviews</p>
//           </div>
//           <div className="enterprise-card p-5 text-center">
//             <p className="text-3xl font-bold text-orange-700 dark:text-orange-200">{averageRating.toFixed(1)}</p>
//             <p className="text-sm text-muted-foreground">Average rating</p>
//           </div>
//           <div className="enterprise-card p-5 text-center">
//             <p className="text-3xl font-bold text-orange-700 dark:text-orange-200">{repeatClients}+</p>
//             <p className="text-sm text-muted-foreground">Repeat clients</p>
//           </div>
//         </div>

//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           {visibleReviews.map((testimonial, index) => (
//             <motion.article
//               key={testimonial.id}
//               initial={{ opacity: 0, y: 22 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.5) }}
//               className="enterprise-card flex h-full flex-col p-6"
//             >
//               {testimonial.imageUrl && (
//                 <button
//                   type="button"
//                   onClick={() => setActiveScreenshot(testimonial)}
//                   className="group relative mb-5 block overflow-hidden rounded-2xl border border-border bg-slate-100 dark:border-white/10 dark:bg-[#0f172a]"
//                 >
//                   <img
//                     src={testimonial.imageUrl}
//                     alt={`${testimonial.name} ${testimonial.platform} review screenshot`}
//                     className="h-40 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                   <span className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity group-hover:opacity-100">
//                     <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
//                       <Eye className="h-4 w-4" />
//                       View screenshot
//                     </span>
//                   </span>
//                 </button>
//               )}

//               <div className="mb-5 flex items-start justify-between gap-4">
//                 <span className="rounded-full glass-light px-3 py-1 text-xs font-semibold text-orange-700 dark:text-orange-200">
//                   {testimonial.platform}
//                 </span>
//               </div>

//               <p className="mb-6 flex-1 text-sm leading-6 text-muted-foreground">
//                 "{testimonial.review}"
//               </p>

//               <div className="mb-4 flex items-center gap-1">
//                 {renderStars(testimonial.rating)}
//                 <span className="ml-2 text-sm font-semibold text-foreground">{testimonial.rating}</span>
//               </div>

//               <div className="mb-5 flex flex-wrap gap-2 text-xs">
//                 <span className="rounded-full border border-border bg-white/70 px-3 py-1 font-semibold text-muted-foreground dark:border-white/10 dark:bg-white/[0.04]">
//                   {testimonial.category}
//                 </span>
//                 <span className="rounded-full border border-border bg-white/70 px-3 py-1 font-semibold text-muted-foreground dark:border-white/10 dark:bg-white/[0.04]">
//                   {testimonial.duration}
//                 </span>
//               </div>

//               <div className="flex items-center gap-3 border-t border-border pt-4 dark:border-white/10">
//                 <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-orange/15">
//                   {testimonial.avatarUrl ? (
//                     <img
//                       src={testimonial.avatarUrl}
//                       alt={`${testimonial.name} avatar`}
//                       className="h-full w-full object-cover"
//                       loading="lazy"
//                     />
//                   ) : (
//                     <span className="text-sm font-bold text-orange-300">
//                       {testimonial.name.charAt(0).toUpperCase()}
//                     </span>
//                   )}
//                 </div>
//                 <div className="min-w-0 text-left">
//                   <div className="flex flex-wrap items-center gap-2">
//                     <p className="truncate text-sm font-semibold text-foreground">{testimonial.name}</p>
//                     {testimonial.repeatClient && (
//                       <span className="rounded-full bg-orange-500/15 px-2 py-0.5 text-[10px] font-semibold text-orange-300">
//                         Repeat Client
//                       </span>
//                     )}
//                   </div>
//                   <p className="text-xs text-muted-foreground">
//                     {testimonial.countryCode} | {testimonial.country} | {testimonial.date}
//                   </p>
//                 </div>
//               </div>
//             </motion.article>
//           ))}
//         </div>

//         {showFeedbacksLink && completedReviews.length > visibleReviews.length && (
//           <div className="mt-10 flex justify-center">
//             <Link
//               to="/feedbacks"
//               className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-orange-50 px-5 py-3 text-sm font-semibold text-orange-700 transition-colors hover:bg-orange-100 dark:border-orange-300/25 dark:bg-orange-400/10 dark:text-orange-100 dark:hover:bg-orange-400/15"
//             >
//               View all client feedbacks
//               <ArrowRight className="h-4 w-4" />
//             </Link>
//           </div>
//         )}
//       </div>

//       {activeScreenshot?.imageUrl && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl" role="dialog" aria-modal="true">
//           <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] shadow-soft-lg">
//             <div className="flex items-center justify-between gap-4 border-b border-white/10 p-4">
//               <div className="text-left">
//                 <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-700 dark:text-orange-200">
//                   {activeScreenshot.platform} Feedback
//                 </p>
//                 <h3 className="mt-1 text-lg font-bold text-white">{activeScreenshot.name}</h3>
//               </div>
//               <button
//                 type="button"
//                 onClick={() => setActiveScreenshot(null)}
//                 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08]"
//                 aria-label="Close feedback screenshot"
//               >
//                 <X className="h-5 w-5" />
//               </button>
//             </div>

//             <div className="max-h-[78vh] overflow-auto bg-black/25 p-4">
//               <img
//                 src={activeScreenshot.imageUrl}
//                 alt={`${activeScreenshot.name} ${activeScreenshot.platform} full feedback screenshot`}
//                 className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default TestimonialsSection;


import { ArrowLeft, ArrowRight, Eye, ExternalLink, Quote, Star, X } from "lucide-react";
import { useCallback, useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fiverrReviews from "@/data/fiverrReviews.json";

type FiverrReview = {
  id: string;
  name: string;
  country: string;
  rating: number;
  review: string;
  platform: string;
  category: string;
  repeatClient: boolean;
  avatarUrl?: string;
  imageUrl?: string;
};

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const [activeScreenshot, setActiveScreenshot] = useState<FiverrReview | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // For Auto-play pause

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const completedReviews = useMemo(
    () => (fiverrReviews as FiverrReview[]).filter((r) => r.rating === 5).slice(0, 10),
    []
  );

  const paginate = useCallback((dir: number) => {
    setIndex((prev) => (prev + dir + completedReviews.length) % completedReviews.length);
  }, [completedReviews.length]);

  // --- AUTO-PLAY LOGIC ---
  useEffect(() => {
    if (isPaused || activeScreenshot) return; // Don't scroll if hovered or modal open

    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // 5 seconds delay

    return () => clearInterval(interval);
  }, [isPaused, paginate, activeScreenshot]);

  return (
    <section 
      id="testimonials" 
      className="relative overflow-hidden border-y border-slate-200 dark:border-white/5 bg-white dark:bg-[#020617] py-20 transition-colors duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-0 h-[400px] w-[400px] rounded-full bg-orange-500/5 blur-[120px] dark:bg-orange-500/10" />
        <div className="absolute bottom-0 -right-20 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[120px] dark:bg-cyan-500/10" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 dark:border-orange-500/30 bg-orange-50 dark:bg-orange-500/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">
          <Star size={12} className="fill-current" /> Verified Feedback
        </div>
        <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white md:text-6xl">
          Trusted By Clients <br />
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Across The Globe.</span>
        </h2>

        {/* 3D Carousel Wrapper */}
        <div className="relative mt-20 flex min-h-[580px] items-center justify-center perspective-[1500px]">
            {[-1, 0, 1].map((offset) => {
              const cardIndex = (index + offset + completedReviews.length) % completedReviews.length;
              const item = completedReviews[cardIndex];
              const isCenter = offset === 0;

              if (isMobile && !isCenter) return null;

              return (
                <div
                  key={`${item.id}-${offset}`}
                  className={`absolute w-full max-w-[440px] px-4 cursor-pointer h-full transition-all duration-300 ${isCenter ? "translate-x-0 scale-100 opacity-100 z-30 blur-none" : offset === -1 ? "-translate-x-[420px] scale-[0.85] opacity-40 z-10 blur-sm" : "translate-x-[420px] scale-[0.85] opacity-40 z-10 blur-sm"}`}
                  onClick={() => !isCenter && paginate(offset)}
                >
                  <div className={`relative flex flex-col h-full min-h-[520px] overflow-hidden rounded-[2.5rem] border p-8 transition-all duration-500 backdrop-blur-sm text-left ${
                    isCenter 
                      ? "border-orange-500/20 bg-white dark:bg-slate-900 shadow-[0_20px_50px_rgba(249,115,22,0.12)]" 
                      : "border-slate-200 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]"
                  }`}>
                    
                    <Quote className="absolute right-6 top-6 h-16 w-16 text-orange-500/5" />

                    <div className="flex-1">
                      {isCenter && item.imageUrl && (
                        <div onClick={(e) => { e.stopPropagation(); setActiveScreenshot(item); }} className="group relative mb-6 h-44 w-full overflow-hidden rounded-3xl bg-slate-100 dark:bg-black/20">
                          <img src={item.imageUrl} loading="lazy" decoding="async" className="h-full w-full object-cover" alt="Review" />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                            <span className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-widest"><Eye size={14} /> Preview</span>
                          </div>
                        </div>
                      )}

                      <div className="mb-6">
                        <p className="text-[10px] font-black uppercase tracking-widest text-orange-500">{item.platform}</p>
                        <p className="mt-1 text-xs text-slate-400">{item.category}</p>
                      </div>

                      <p className={`text-base leading-relaxed text-slate-600 dark:text-slate-300 ${isCenter ? "line-clamp-none" : "line-clamp-4 text-sm"}`}>
                        “{item.review}”
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-4 border-t border-slate-100 dark:border-white/5 pt-6">
                      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-slate-800 bg-slate-100">
                        {item.avatarUrl ? <img src={item.avatarUrl} loading="lazy" decoding="async" className="h-full w-full object-cover" /> : <div className="flex h-full items-center justify-center font-bold text-orange-600">{item.name.charAt(0)}</div>}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-bold text-slate-900 dark:text-white">{item.name}</h4>
                        <p className="text-[10px] uppercase tracking-wider text-slate-400">{item.country}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Dots & Nav */}
        <div className="mt-12 flex flex-col items-center gap-8">
          <div className="flex items-center gap-6 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 px-6 py-3 shadow-sm backdrop-blur-md">
            <button onClick={() => { paginate(-1); setIsPaused(true); }} className="hover:text-orange-500 transition-colors"><ArrowLeft size={18} /></button>
            <div className="flex gap-2">
              {completedReviews.map((_, i) => (
                <button key={i} onClick={() => { setIndex(i); setIsPaused(true); }} className={`h-1.5 transition-all duration-500 rounded-full ${i === index ? "w-8 bg-orange-500" : "w-1.5 bg-slate-300 dark:bg-white/20"}`} />
              ))}
            </div>
            <button onClick={() => { paginate(1); setIsPaused(true); }} className="hover:text-orange-500 transition-colors"><ArrowRight size={18} /></button>
          </div>
          <Link to="/feedbacks" className="group inline-flex items-center gap-3 rounded-full bg-slate-900 dark:bg-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-white dark:text-slate-900 shadow-lg">
            Full Feedback Directory <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeScreenshot && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-6 backdrop-blur-md" onClick={() => setActiveScreenshot(null)}>
            <div onClick={e => e.stopPropagation()} className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 shadow-2xl">
              <div className="flex items-center justify-between p-6 border-b dark:border-white/10">
                <h3 className="font-bold">{activeScreenshot.name}'s Success</h3>
                <button onClick={() => setActiveScreenshot(null)}><X size={20} /></button>
              </div>
              <div className="max-h-[70vh] overflow-auto p-4"><img src={activeScreenshot.imageUrl} loading="lazy" decoding="async" className="w-full rounded-2xl" /></div>
            </div>
          </div>
        )}
    </section>
  );
};

export default TestimonialsSection;