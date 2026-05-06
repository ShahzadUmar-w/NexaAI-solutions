import { motion } from "framer-motion";
import { Eye, Star, X } from "lucide-react";
import { useState } from "react";
import fiverrReviews from "@/data/fiverrReviews.json";

type FiverrReview = {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  rating: number;
  review: string;
  price: string;
  duration: string;
  category: string;
  platform: string;
  date: string;
  repeatClient: boolean;
  status: string;
  avatarUrl?: string;
  imageUrl?: string;
};

const completedReviews = (fiverrReviews as FiverrReview[]).filter((review) => review.status === "completed");
const averageRating =
  completedReviews.reduce((total, review) => total + review.rating, 0) / completedReviews.length;
const repeatClients = completedReviews.filter((review) => review.repeatClient).length;

const renderStars = (rating: number) =>
  Array.from({ length: 5 }).map((_, index) => (
    <Star
      key={index}
      className={`h-4 w-4 ${
        index < Math.round(rating) ? "fill-orange-400 text-orange-400" : "text-muted-foreground/30"
      }`}
    />
  ));

const TestimonialsSection = () => {
  const [activeScreenshot, setActiveScreenshot] = useState<FiverrReview | null>(null);

  return (
    <section id="testimonials" className="relative overflow-hidden py-24">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="section-kicker">Fiverr & Upwork Reviews</span>
          <h2 className="section-title mb-4">
            Client feedback from
            <span className="gradient-text-both block">add-in and automation work</span>
          </h2>
          <p className="text-muted-foreground">
            Selected public reviews from completed Office add-in, plugin, desktop app, and automation projects.
          </p>
        </motion.div>

        <div className="mx-auto mb-10 grid max-w-4xl gap-4 sm:grid-cols-3">
          <div className="enterprise-card p-5 text-center">
            <p className="text-3xl font-bold text-orange-200">{completedReviews.length}+</p>
            <p className="text-sm text-muted-foreground">Public reviews</p>
          </div>
          <div className="enterprise-card p-5 text-center">
            <p className="text-3xl font-bold text-orange-200">{averageRating.toFixed(1)}</p>
            <p className="text-sm text-muted-foreground">Average rating</p>
          </div>
          <div className="enterprise-card p-5 text-center">
            <p className="text-3xl font-bold text-orange-200">{repeatClients}+</p>
            <p className="text-sm text-muted-foreground">Repeat clients</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {completedReviews.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.5) }}
              className="enterprise-card flex h-full flex-col p-6"
            >
              {testimonial.imageUrl && (
                <button
                  type="button"
                  onClick={() => setActiveScreenshot(testimonial)}
                  className="group relative mb-5 block overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]"
                >
                  <img
                    src={testimonial.imageUrl}
                    alt={`${testimonial.name} ${testimonial.platform} review screenshot`}
                    className="h-40 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/35 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                      <Eye className="h-4 w-4" />
                      View screenshot
                    </span>
                  </span>
                </button>
              )}

              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="rounded-full glass-light px-3 py-1 text-xs font-semibold text-orange-200">
                  {testimonial.platform}
                </span>
              </div>

              <p className="mb-6 flex-1 text-sm leading-6 text-muted-foreground">
                "{testimonial.review}"
              </p>

              <div className="mb-4 flex items-center gap-1">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm font-semibold text-foreground">{testimonial.rating}</span>
              </div>

              <div className="mb-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-semibold text-muted-foreground">
                  {testimonial.category}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-semibold text-muted-foreground">
                  {testimonial.duration}
                </span>
              </div>

              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-orange/15">
                  {testimonial.avatarUrl ? (
                    <img
                      src={testimonial.avatarUrl}
                      alt={`${testimonial.name} avatar`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-sm font-bold text-orange-300">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <div className="min-w-0 text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="truncate text-sm font-semibold text-foreground">{testimonial.name}</p>
                    {testimonial.repeatClient && (
                      <span className="rounded-full bg-orange-500/15 px-2 py-0.5 text-[10px] font-semibold text-orange-300">
                        Repeat Client
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.countryCode} | {testimonial.country} | {testimonial.date}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {activeScreenshot?.imageUrl && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl" role="dialog" aria-modal="true">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b1020] shadow-soft-lg">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 p-4">
              <div className="text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
                  {activeScreenshot.platform} Feedback
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">{activeScreenshot.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveScreenshot(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08]"
                aria-label="Close feedback screenshot"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[78vh] overflow-auto bg-black/25 p-4">
              <img
                src={activeScreenshot.imageUrl}
                alt={`${activeScreenshot.name} ${activeScreenshot.platform} full feedback screenshot`}
                className="mx-auto w-full max-w-4xl rounded-2xl border border-white/10 object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
