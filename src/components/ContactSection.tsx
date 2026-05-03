import { motion } from "framer-motion";
import { Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "shahzad890.it@gmail.com",
    description: "Drop me an email anytime",
  },
  {
    icon: MessageSquare,
    title: "Response Time",
    value: "Within 24 hours",
    description: "I reply to all inquiries quickly",
  },
  {
    icon: Clock,
    title: "Availability",
    value: "Mon - Fri",
    description: "9 AM - 6 PM EST",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "SERVICE_ID",
      "TEMPLATE_ID",
      formData,
      "PUBLIC_KEY"
    );

    toast({
      title: "Message Sent!",
      description: "I'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", project: "", message: "" });
  } catch {
    toast({
      title: "Failed to send",
      description: "Please try again later.",
      variant: "destructive",
    });
  }
};

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] glow-bg opacity-20" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="gradient-text-purple font-semibold text-sm uppercase tracking-wider mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Let's Build Your <span className="gradient-text-both">Add-in</span>
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind? Let's discuss how I can help you build a
            production-ready Office Add-in that solves real problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="flex items-start gap-4 p-4 rounded-xl glass-light border border-purple-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-purple/10 flex items-center justify-center shrink-0">
                  <info.icon className="w-5 h-5 bg-gradient-purple bg-clip-text text-transparent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{info.title}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="glass card-hover p-6 mt-8 border border-purple-500/10">
              <h3 className="font-semibold text-foreground mb-3">
                What to expect:
              </h3>
              <ul className="space-y-2">
                {[
                  "Free initial consultation",
                  "Detailed project proposal",
                  "Transparent pricing",
                  "Ongoing support options",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-purple" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass card-hover p-8 space-y-6 border border-purple-500/10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg glass-light border border-border/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 outline-none transition-colors text-foreground"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg glass-light border border-border/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 outline-none transition-colors text-foreground"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Project Type
                </label>
                <select
                  value={formData.project}
                  onChange={(e) =>
                    setFormData({ ...formData, project: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg glass-light border border-border/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 outline-none transition-colors text-foreground"
                >
                  <option value="">Select add-in type...</option>
                  <option value="outlook">Outlook Add-in</option>
                  <option value="excel">Excel Add-in</option>
                  <option value="word">Word Add-in</option>
                  <option value="powerpoint">PowerPoint Add-in</option>
                  <option value="multiple">Multiple Add-ins</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Project Details
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg glass-light border border-border/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 outline-none transition-colors text-foreground resize-none"
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                />
              </div>

              <Button type="submit" className="w-full btn-gradient-purple">
                Send Message
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
