import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { ArrowRight, CalendarPlus, Clock, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { outlookBookingUrl } from "@/lib/booking";

const contactEmail = "shahzad890.it@gmail.com";

const directEmailHref =
  "mailto:shahzad890.it@gmail.com?subject=Office%20Add-in%20Project%20Inquiry&body=Hi%20Shahzad%2C%0A%0AI%20would%20like%20to%20discuss%20an%20Office%20add-in%20project.%0A%0ACompany%3A%0AProject%20type%3A%0ATimeline%3A%0ABudget%20range%3A%0ARequirements%3A%0A%0AThanks.";

const emailJsConfig = {
  serviceId:"service_qetr82n",
  templateId: "template_jeg9vhk",
  publicKey: "g_IN9TXrMN3JT10cf",
};

const formSubmitEndpoint = `https://formsubmit.co/ajax/${contactEmail}`;

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
    value: contactEmail,
    description: "Project briefs are sent to the business inbox.",
    href: directEmailHref,
  },
  {
    icon: MessageSquare,
    title: "Response Time",
    value: "Within 24 hours",
    description: "Clear next steps after the initial message.",
  },
  {
    icon: Clock,
    title: "Availability",
    value: "Remote worldwide",
    description: "Flexible async delivery for client teams.",
  },
];

const expectations = [
  "Free initial consultation",
  "Clear scope and milestone proposal",
  "Transparent pricing before work starts",
  "Support options after launch",
];

const trustSignals = [
  "50+ Office add-ins delivered",
  "Outlook, Excel, Word, PowerPoint",
  "24h response",
];

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const openEmailFallback = (subject: string, body: string) => {
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const buildEmailContent = () => {
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

    return { projectType, subject, body };
  };

  const sendWithEmailJs = async (projectType: string, subject: string) => {
    await emailjs.send(
      emailJsConfig.serviceId,
      emailJsConfig.templateId,
      {
        to_email: contactEmail,
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        project_type: projectType,
        subject,
        message: formData.message,
        submitted_at: new Date().toLocaleString(),
      },
      {
        publicKey: emailJsConfig.publicKey,
      },
    );
  };

  const sendWithFormSubmit = async (projectType: string, subject: string, body: string) => {
    const response = await fetch(formSubmitEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: subject,
        _template: "table",
        _captcha: "false",
        name: formData.name,
        email: formData.email,
        reply_to: formData.email,
        project_type: projectType,
        message: formData.message,
        full_brief: body,
      }),
    });

    if (!response.ok) {
      throw new Error(`FormSubmit failed with status ${response.status}`);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      project: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { projectType, subject, body } = buildEmailContent();
    const hasEmailJsConfig = Boolean(
      emailJsConfig.serviceId && emailJsConfig.templateId && emailJsConfig.publicKey,
    );

    setIsSubmitting(true);

    try {
      if (hasEmailJsConfig) {
        await sendWithEmailJs(projectType, subject);
      } else {
        await sendWithFormSubmit(projectType, subject, body);
      }

      toast({
        title: "Project brief sent",
        description: hasEmailJsConfig
          ? "Your message was sent successfully using EmailJS."
          : "Your message was submitted using the backup email endpoint.",
      });

      resetForm();
    } catch (error) {
      console.error("Contact form send failed:", error);
      openEmailFallback(subject, body);
      toast({
        title: "Web send failed",
        description: "Your email client opened as a backup so the message can still be sent.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.035] to-transparent" />
      <div className="absolute left-1/2 top-12 h-80 w-[760px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <span className="section-kicker">
            <ShieldCheck className="h-4 w-4" />
            Contact
          </span>
          <h2 className="section-title mb-5">
            Tell us what you want to build
            <span className="gradient-text-both block">and get a practical next step.</span>
          </h2>
          <p className="text-muted-foreground">
            Send a short project brief and I will reply with practical next steps, scope questions, and delivery options.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {trustSignals.map((signal) => (
              <span key={signal} className="rounded-full border border-orange-300/15 bg-orange-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-orange-100">
                {signal}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr,1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex h-full flex-col gap-5 text-left"
          >
            {contactInfo.map((info) => {
              const content = (
                <>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-orange-300/15 bg-orange-300/10 text-orange-200">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{info.title}</p>
                    <p className="mt-1 font-semibold text-foreground">{info.value}</p>
                    <p className="mt-1 text-sm leading-5 text-muted-foreground">{info.description}</p>
                  </div>
                </>
              );

              return info.href ? (
                <a key={info.title} href={info.href} className="enterprise-card flex items-start gap-4 p-5">
                  {content}
                </a>
              ) : (
                <div key={info.title} className="enterprise-card flex items-start gap-4 p-5">
                  {content}
                </div>
              );
            })}

            <div className="enterprise-card overflow-hidden p-6">
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-orange-300/15 bg-orange-300/10 text-orange-200">
                  <CalendarPlus className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Book a Call</p>
                  <h3 className="mt-1 text-lg font-bold text-foreground">Create an Outlook meeting invite</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Opens Outlook Calendar with the discovery call details prefilled and my email added as an attendee.
                  </p>
                </div>
              </div>

              <Button variant="hero" size="lg" className="w-full" asChild>
                <a href={outlookBookingUrl} target="_blank" rel="noreferrer">
                  Schedule in Outlook
                  <CalendarPlus className="h-4 w-4" />
                </a>
              </Button>

              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                Client can adjust the time in Outlook and send the invite so it appears on both calendars.
              </p>
            </div>

            <div className="enterprise-card p-6">
              <h3 className="mb-4 text-lg font-bold text-foreground">What to expect</h3>
              <div className="space-y-3">
                {expectations.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
                    {item}
                  </div>
                ))}
              </div>

              <Button variant="heroOutline" size="lg" className="mt-6 w-full" asChild>
                <a href={directEmailHref}>
                  Email Directly
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <form onSubmit={handleSubmit} className="enterprise-card flex h-full flex-col gap-6 p-6 text-left md:p-8">
              <div className="rounded-2xl border border-orange-300/15 bg-orange-300/10 p-4">
                <p className="text-sm font-semibold text-foreground">Project inquiry</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Share the workflow, target Office app, timeline, and any APIs or deployment requirements.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-orange-300/45"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-foreground">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-orange-300/45"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">Project Type</label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-slate-950/50 px-4 py-3 text-foreground outline-none transition-colors focus:border-orange-300/45"
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

              <div className="flex flex-1 flex-col">
                <label className="mb-2 block text-sm font-medium text-foreground">Project Details</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[220px] flex-1 resize-none rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-orange-300/45 lg:min-h-[280px]"
                  placeholder="Tell me about your workflow, users, Office app, APIs, timeline, and deployment needs..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Project Brief"}
                <ArrowRight className="h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
