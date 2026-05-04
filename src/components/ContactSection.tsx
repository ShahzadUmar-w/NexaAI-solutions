import { motion } from "framer-motion";
import { Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const directEmailHref =
  "mailto:shahzad890.it@gmail.com?subject=Office%20Add-in%20Project%20Inquiry&body=Hi%20Shahzad%2C%0A%0AI%20would%20like%20to%20discuss%20an%20Office%20add-in%20project.%0A%0ACompany%3A%0AProject%20type%3A%0ATimeline%3A%0ABudget%20range%3A%0ARequirements%3A%0A%0AThanks.";

const projectLabels: Record<string, string> = {
  outlook: "Outlook Add-in",
  excel: "Excel Add-in",
  word: "Word Add-in",
  powerpoint: "PowerPoint Add-in",
  multiple: "Multiple Add-ins",
  other: "Other",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "shahzad890.it@gmail.com",
    description: "Click to open your email client",
    href: directEmailHref,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const projectType = projectLabels[formData.project] || "Not selected";
    const subject = `Office Add-in Inquiry from ${formData.name}`;
    const body = [
      "Hi Shahzad,",
      "",
      "I would like to discuss an Office add-in project.",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Project type: ${projectType}`,
      "",
      "Project details:",
      formData.message,
      "",
      "Thanks.",
    ].join("\n");

    window.location.href = `mailto:shahzad890.it@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Opening your email client",
      description: "Your message has been prepared in your default email app.",
    });
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
            {contactInfo.map((info) => {
              const content = (
                <>
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
                </>
              );

              return info.href ? (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-xl glass-light border border-purple-500/10 hover:border-purple-500/30 hover:shadow-glow-purple transition-all duration-300"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={info.title}
                  className="flex items-start gap-4 p-4 rounded-xl glass-light border border-purple-500/10"
                >
                  {content}
                </div>
              );
            })}

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

              <Button variant="heroOutline" size="lg" className="mt-6 w-full" asChild>
                <a href={directEmailHref}>
                  Email Directly
                  <Mail className="w-4 h-4" />
                </a>
              </Button>
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
              <div className="rounded-2xl glass-orange p-4">
                <p className="text-sm font-semibold text-foreground">Working contact form</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Submit will open your email client with the project details already filled in.
                </p>
              </div>

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
                Open Email Client
                <ArrowRight className="w-5 h-5" />
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Prefer manual email? Write directly to{" "}
                <a href={directEmailHref} className="font-semibold text-purple-200 hover:text-purple-100">
                  shahzad890.it@gmail.com
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
