import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "fajerhs",
    country: "Kuwait",
    content:
      "I really enjoyed working with him. His language fluency made communication very easy and clear. He always respected the delivery time and finished his work on schedule. He showed a deep understanding of the tasks and always did his best. In many situations, he went above and beyond expectations.",
    rating: 5,
    isRepeatClient: true,
  },
  {
    name: "poppy_lane1",
    country: "Germany",
    content:
      "Excellent Electron JS developer. Built a smooth desktop application and handled the Microsoft Store publishing process professionally. Highly recommended!",
    rating: 5,
    isRepeatClient: false,
  },
  {
    name: "jameswragg340",
    country: "United Kingdom",
    content:
      "Great work, even though we had to go through numerous versions due to my expectations he kept going and didn't get frustrated! Excellent work, would definitely recommend!",
    rating: 5,
    isRepeatClient: false,
  },
  {
    name: "dvmoore",
    country: "United States",
    content:
      "Even though we ran into issues with the Electron app being rejected by MSFT Store several times, working closely with Shahzad, we were able to get it resolved and published.",
    rating: 4.3,
    isRepeatClient: false,
  },
  {
    name: "upwork_consultation",
    country: "United States",
    content:
      "Shahzad is great! He is super knowledgeable and knows his stuff!",
    rating: 5,
    isRepeatClient: false,
  },
  {
    name: "outlook_calendar",
    country: "United States",
    content:
      "Shahzad is a skilled and professional developer with strong technical knowledge around Outlook / Office.js add-ins. He communicated clearly throughout the project, raised concerns, and delivered a polished solution.",
    rating: 5,
    isRepeatClient: false,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="gradient-text-orange font-semibold text-sm uppercase tracking-wider mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            What Clients <span className="gradient-text-both">Say</span>
          </h2>
          <p className="text-muted-foreground">
            Top-rated feedback from Upwork and Fiverr clients on Office add-ins, Electron apps, Google Workspace automation, and desktop publishing.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass card-hover p-6 border border-orange-500/10 hover:border-orange-500/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 bg-gradient-orange bg-clip-text text-transparent mb-4" />

              {/* Content */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: Math.floor(testimonial.rating) }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-orange/20 flex items-center justify-center">
                  <span className="text-sm font-semibold text-orange-400">
                    {testimonial.name.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    {testimonial.isRepeatClient && (
                      <span className="text-[10px] px-1.5 py-0.5 bg-orange-500/20 text-orange-300 rounded-full">
                        Repeat Client
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{testimonial.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
