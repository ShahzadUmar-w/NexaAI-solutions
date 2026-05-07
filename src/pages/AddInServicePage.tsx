import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  DatabaseZap,
  FileText,
  Link2,
  Mail,
  Presentation,
  ShieldCheck,
  Star,
  TableProperties,
  type LucideIcon,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import fiverrReviews from "@/data/fiverrReviews.json";

type ServiceType = "outlook" | "excel" | "word" | "powerpoint";

type ClientReview = {
  id: string;
  name: string;
  rating: number;
  review: string;
  category: string;
  platform: string;
  date: string;
  status: string;
};

const siteUrl = "https://officeaddindevelopment.com";

const appAccents = {
  outlook: {
    name: "Outlook blue",
    heroGlow: "bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.22),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.12),transparent_34%)]",
    sectionGlow: "bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.14),transparent_26rem),radial-gradient(circle_at_82%_12%,rgba(14,165,233,0.1),transparent_24rem)]",
    pill: "border-blue-300/20 bg-blue-300/10 text-blue-100",
    icon: "text-blue-200",
    card: "border-blue-300/15 bg-blue-300/10",
    cardText: "text-blue-100",
    iconBox: "border-blue-300/15 bg-blue-300/10 text-blue-200",
    check: "text-blue-300",
    hover: "hover:border-blue-300/25",
    gradientText: "from-blue-200 via-cyan-200 to-white",
  },
  excel: {
    name: "Excel green",
    heroGlow: "bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.18),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(20,184,166,0.1),transparent_34%)]",
    sectionGlow: "bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.12),transparent_26rem),radial-gradient(circle_at_82%_10%,rgba(16,185,129,0.1),transparent_24rem)]",
    pill: "border-emerald-300/20 bg-emerald-300/10 text-emerald-100",
    icon: "text-emerald-200",
    card: "border-emerald-300/15 bg-emerald-300/10",
    cardText: "text-emerald-100",
    iconBox: "border-emerald-300/15 bg-emerald-300/10 text-emerald-200",
    check: "text-emerald-300",
    hover: "hover:border-emerald-300/25",
    gradientText: "from-emerald-200 via-lime-200 to-white",
  },
  word: {
    name: "Word blue",
    heroGlow: "bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.18),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(96,165,250,0.1),transparent_34%)]",
    sectionGlow: "bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.13),transparent_26rem),radial-gradient(circle_at_82%_12%,rgba(96,165,250,0.08),transparent_24rem)]",
    pill: "border-sky-300/20 bg-sky-300/10 text-sky-100",
    icon: "text-sky-200",
    card: "border-sky-300/15 bg-sky-300/10",
    cardText: "text-sky-100",
    iconBox: "border-sky-300/15 bg-sky-300/10 text-sky-200",
    check: "text-sky-300",
    hover: "hover:border-sky-300/25",
    gradientText: "from-sky-200 via-blue-200 to-white",
  },
  powerpoint: {
    name: "PowerPoint warmth",
    heroGlow: "bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.2),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(239,68,68,0.1),transparent_34%)]",
    sectionGlow: "bg-[radial-gradient(circle_at_18%_20%,rgba(249,115,22,0.13),transparent_26rem),radial-gradient(circle_at_82%_12%,rgba(239,68,68,0.08),transparent_24rem)]",
    pill: "border-orange-300/20 bg-orange-300/10 text-orange-100",
    icon: "text-orange-200",
    card: "border-orange-300/15 bg-orange-300/10",
    cardText: "text-orange-100",
    iconBox: "border-orange-300/15 bg-orange-300/10 text-orange-200",
    check: "text-orange-300",
    hover: "hover:border-orange-300/25",
    gradientText: "from-orange-200 via-red-200 to-white",
  },
} satisfies Record<ServiceType, Record<string, string>>;

const serviceContent = {
  outlook: {
    icon: Mail,
    brandIcon: "/email.png",
    brandAlt: "Outlook add-in icon",
    path: "/outlook-add-in-development",
    title: "Outlook Add-in Development Services",
    metaTitle: "Outlook Add-in Development Services | NexaAI",
    description:
      "Custom Outlook add-in development for AI email assistants, phishing report tools, Salesforce and HubSpot CRM sync, Asana task automation, Microsoft Graph integration, attachments, calendar workflows, and enterprise Microsoft 365 deployment.",
    h1: "Custom Outlook Add-in Development for Business Automation",
    intro:
      "Build secure Outlook add-ins that automate email workflows, connect Microsoft Graph, sync business systems, and improve team productivity inside Microsoft 365.",
    features: ["AI email assistant and smart replies", "Microsoft Graph mail and calendar APIs", "Salesforce, HubSpot, Asana, and CRM integrations", "Phishing report and security workflows", "Attachment, SharePoint, and OneDrive workflows", "OAuth, permissions, and Microsoft 365 deployment"],
    useCases: ["Automatically create tasks from emails", "Sync Outlook conversations with Salesforce or HubSpot records", "Generate AI-assisted replies, summaries, and follow-ups", "Report phishing emails to security teams", "Route attachments into SharePoint, OneDrive, or document workflows"],
    faqs: [
      ["Can you build Outlook add-ins for web and desktop?", "Yes. Outlook add-ins can be built with Office.js for Outlook on the web and supported desktop clients, with testing across real Microsoft 365 workflows."],
      ["Can an Outlook add-in connect with Salesforce, HubSpot, or Asana?", "Yes. Outlook add-ins can connect to CRMs, task tools, custom APIs, and Microsoft Graph through secure authentication and backend integration where needed."],
      ["Can you build a phishing report Outlook add-in?", "Yes. A report button can capture suspicious email context, sender details, headers, and route the report to a security mailbox or internal security workflow."],
      ["Do Outlook add-ins need Microsoft Graph?", "Not always. Office.js handles in-client add-in behavior, while Microsoft Graph is useful for mail, calendar, files, users, permissions, and tenant-level data workflows."],
    ],
  },
  excel: {
    icon: TableProperties,
    brandIcon: "/excel-icon.png",
    brandAlt: "Excel add-in icon",
    path: "/excel-add-in-development",
    title: "Excel Add-in Development Services",
    metaTitle: "Excel Add-in Development Services | NexaAI",
    description:
      "Custom Excel add-in development for business reporting, API imports, custom functions, dashboards, workflow automation, and secure Microsoft 365 deployment.",
    h1: "Custom Excel Add-in Development for Data Automation",
    intro:
      "Create Excel add-ins that connect APIs, automate reporting, add custom functions, clean data, and turn manual spreadsheet work into reliable business workflows.",
    features: ["Custom Excel functions", "API data imports and exports", "Automated reports and dashboards", "Power BI and business data workflows", "Cross-platform Excel web/desktop support", "Secure authentication and deployment"],
    useCases: ["Pull live business data into Excel", "Automate financial and operational reports", "Create reusable custom formulas", "Validate and clean spreadsheet data"],
    faqs: [
      ["Can you build custom Excel functions?", "Yes. Excel add-ins can include custom functions, task panes, API actions, reporting helpers, and automation workflows."],
      ["Can Excel connect with external APIs?", "Yes. Excel add-ins can import, refresh, validate, and export data through secure API integrations."],
      ["Can you build dashboards inside Excel?", "Yes. Excel workflows can include report refresh, KPI views, formatted tables, templates, and business dashboard actions."],
      ["Will the Excel add-in work in Microsoft 365?", "Excel add-ins can be prepared for Microsoft 365 deployment with Office.js, authentication planning, and tenant testing."],
    ],
  },
  word: {
    icon: FileText,
    brandIcon: "/Microsoft_Office_Word_Logo_512px.png",
    brandAlt: "Word add-in icon",
    path: "/word-add-in-development",
    title: "Word Add-in Development Services",
    metaTitle: "Word Add-in Development Services | NexaAI",
    description:
      "Custom Word add-in development for document automation, templates, contracts, proposals, content controls, PDF export, and Microsoft Graph integrations.",
    h1: "Custom Word Add-in Development for Document Automation",
    intro:
      "Build Word add-ins that generate contracts, proposals, reports, and branded documents from templates, structured data, and business systems.",
    features: ["Document templates and assembly", "Content controls and dynamic fields", "Contract and proposal generation", "PDF export workflows", "Microsoft Graph file integrations", "Enterprise-ready deployment"],
    useCases: ["Generate contracts from approved templates", "Create proposals from CRM data", "Insert approved clauses and content blocks", "Export branded documents to PDF"],
    faqs: [
      ["Can you automate Word documents from templates?", "Yes. Word add-ins can generate contracts, proposals, reports, and documents using approved templates, fields, and business data."],
      ["Can Word add-ins include AI writing features?", "Yes. AI can be added for drafting, rewriting, summarizing, comments, clause suggestions, and review support."],
      ["Can Word add-ins export to PDF?", "Yes. Depending on the workflow, a Word add-in can support PDF export, file storage, and document routing."],
      ["Can a Word add-in connect with CRM or databases?", "Yes. Word add-ins can pull approved data from APIs, CRMs, databases, SharePoint, or Microsoft Graph-backed file workflows."],
    ],
  },
  powerpoint: {
    icon: Presentation,
    brandIcon: "/ppt-icon.png",
    brandAlt: "PowerPoint add-in icon",
    path: "/powerpoint-add-in-development",
    title: "PowerPoint Add-in Development Services",
    metaTitle: "PowerPoint Add-in Development Services | NexaAI",
    description:
      "Custom PowerPoint add-in development for branded templates, proposal decks, slide automation, content libraries, CRM integrations, and enterprise deployment.",
    h1: "Custom PowerPoint Add-in Development for Presentation Automation",
    intro:
      "Create PowerPoint add-ins that help teams build branded decks faster, reuse approved slides, generate proposals, and keep presentations compliant.",
    features: ["Slide libraries and reusable assets", "Branded template automation", "CRM-driven proposal decks", "Brand compliance checks", "Export and review workflows", "Microsoft 365 deployment support"],
    useCases: ["Generate sales decks from CRM data", "Insert approved branded slides", "Standardize proposal presentations", "Automate recurring reporting decks"],
    faqs: [
      ["Can you build PowerPoint add-ins for branded slide libraries?", "Yes. PowerPoint add-ins can provide approved slide libraries, templates, reusable assets, and brand-compliant content insertion."],
      ["Can PowerPoint decks be generated from CRM data?", "Yes. Proposal or reporting decks can be generated from CRM records, APIs, spreadsheets, or internal systems."],
      ["Can a PowerPoint add-in enforce brand rules?", "Yes. Add-ins can help insert approved slides, validate layouts, manage assets, and reduce off-brand presentations."],
      ["Can PowerPoint add-ins be deployed in Microsoft 365?", "Yes. PowerPoint add-ins can be packaged and prepared for Microsoft 365 tenant deployment and testing."],
    ],
  },
} satisfies Record<ServiceType, {
  icon: typeof Mail;
  brandIcon: string;
  brandAlt: string;
  path: string;
  title: string;
  metaTitle: string;
  description: string;
  h1: string;
  intro: string;
  features: string[];
  useCases: string[];
  faqs: string[][];
}>;

const relatedServices = [
  { label: "Outlook Add-in Development", href: "/outlook-add-in-development" },
  { label: "Excel Add-in Development", href: "/excel-add-in-development" },
  { label: "Word Add-in Development", href: "/word-add-in-development" },
  { label: "PowerPoint Add-in Development", href: "/powerpoint-add-in-development" },
  { label: "Microsoft Graph Integration", href: "/microsoft-graph-integration" },
  { label: "M365 Add-in Deployment", href: "/microsoft-365-add-in-deployment" },
  { label: "Outlook Add-in Guide", href: "/how-to-build-outlook-add-in" },
  { label: "Excel Add-in Guide", href: "/excel-add-in-development-guide" },
];

const integrationCtas = [
  { label: "Need Salesforce integration?", href: "/integrations/salesforce-office-add-in-integration" },
  { label: "Need QuickBooks integration?", href: "/integrations/quickbooks-office-add-in-integration" },
  { label: "Need SharePoint integration?", href: "/integrations/sharepoint-office-add-in-integration" },
];

const officeAppCoverage: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Outlook", text: "Email context, CRM activity, tickets, attachments, AI summaries, and follow-ups.", icon: Mail },
  { title: "Excel", text: "Reports, dashboards, custom functions, validation, imports, and controlled data sync.", icon: TableProperties },
  { title: "Word", text: "Templates, document generation, approvals, signatures, metadata, and review workflows.", icon: FileText },
  { title: "PowerPoint", text: "Proposal decks, reusable slide libraries, charts, sales assets, and branded summaries.", icon: Presentation },
];

const excelTrustStats = [
  { value: "API", label: "Live data imports" },
  { value: "Office.js", label: "Excel web and desktop" },
  { value: "M365", label: "Deployment support" },
];

const outlookTrustStats = [
  { value: "Graph", label: "Mail and calendar APIs" },
  { value: "OAuth", label: "Secure permissions" },
  { value: "M365", label: "Tenant deployment" },
];

const outlookCapabilityGroups = [
  {
    icon: Bot,
    title: "AI email assistant",
    description: "Add AI inside Outlook for summaries, smart replies, tone changes, translation, follow-up drafts, and email classification.",
    items: ["Summarize long email threads", "Generate reply drafts", "Extract action items", "Translate email content"],
  },
  {
    icon: BriefcaseBusiness,
    title: "CRM integration",
    description: "Connect Outlook with sales and support systems so teams do not copy email details manually.",
    items: ["Salesforce email sync", "HubSpot contact lookup", "Create CRM notes", "Attach emails to deals or tickets"],
  },
  {
    icon: Link2,
    title: "Third-party integrations",
    description: "Build Outlook workflows that connect with project management, support, storage, and internal business tools.",
    items: ["Asana task creation", "Jira or Trello tickets", "Slack or Teams alerts", "Custom API integrations"],
  },
  {
    icon: AlertTriangle,
    title: "Phishing report add-in",
    description: "Create a report button that sends suspicious emails to your security team or security platform with useful metadata.",
    items: ["Report phishing email", "Forward headers and sender data", "Send to security mailbox", "Add audit trail"],
  },
  {
    icon: CalendarDays,
    title: "Calendar and meeting workflows",
    description: "Use Microsoft Graph to create meetings, read calendar context, automate reminders, and prepare meeting follow-ups.",
    items: ["Create calendar events", "Meeting reminders", "Follow-up email drafts", "Prep notes from email context"],
  },
  {
    icon: DatabaseZap,
    title: "Attachment and file automation",
    description: "Move attachments and email files into SharePoint, OneDrive, document systems, or custom storage workflows.",
    items: ["Save attachments", "Sort files automatically", "Upload to SharePoint", "Connect document management systems"],
  },
];

const wordTrustStats = [
  { value: "Templates", label: "Document generation" },
  { value: "AI", label: "Writing assistance" },
  { value: "Graph", label: "File integrations" },
];

const wordShowcaseImages = [
  {
    src: "/word/Ai%20add-in.png",
    title: "AI Word add-in",
    description: "AI-powered Word task pane for writing, editing, and document productivity.",
  },
  {
    src: "/word/AI%20sugestions.png",
    title: "AI suggestions",
    description: "Suggestion workflow for improving content directly inside Word.",
  },
  {
    src: "/word/Ai_DetectorPro_Login.png",
    title: "AI Detector Pro login",
    description: "Branded authentication experience for a Word add-in product.",
  },
  {
    src: "/word/chatgpt%2Bword_Bias_AI.png",
    title: "ChatGPT Word assistant",
    description: "Word assistant workflow for AI analysis, review, and content support.",
  },
  {
    src: "/word/DocGenious_word_addin.png",
    title: "DocGenious Word add-in",
    description: "Document generation and assistant panel built for Word workflows.",
  },
  {
    src: "/word/integration.png",
    title: "Integration workflow",
    description: "Word add-in connected with external systems and business data.",
  },
  {
    src: "/word/Nills_trac_changes.png",
    title: "Track changes workflow",
    description: "Review and editing add-in experience for document collaboration.",
  },
  {
    src: "/word/robrix_ai_comments.png",
    title: "AI comments",
    description: "AI-powered comments and document review features inside Word.",
  },
  {
    src: "/word/SiolCloud.png",
    title: "Cloud document tool",
    description: "Cloud-connected Word add-in for documents and team workflows.",
  },
  {
    src: "/word/Tracking.png",
    title: "Document tracking",
    description: "Tracking-focused Word add-in workflow for document status and review.",
  },
  {
    src: "/word/word%20addin.png",
    title: "Word add-in panel",
    description: "Custom task pane interface for Word automation and productivity.",
  },
  {
    src: "/word/Word_addin.png",
    title: "Branded Word add-in",
    description: "Professional Word add-in UI for business document workflows.",
  },
];

const outlookShowcaseImages = [
  {
    src: "/ooutlook/boligflow%20outlook%20add-in.png",
    title: "Boligflow Outlook add-in",
    description: "Custom Outlook task pane for email-driven business workflows.",
  },
  {
    src: "/ooutlook/Chatgpt%20outlook%20addin.png",
    title: "AI Outlook assistant",
    description: "ChatGPT-style Outlook add-in for email replies, summaries, and productivity.",
  },
  {
    src: "/ooutlook/Doccept%20outlook%20addin.png",
    title: "Doccept Outlook add-in",
    description: "Document and email workflow integration inside Outlook.",
  },
  {
    src: "/ooutlook/Files%20haven%20outlook%20add-in.png",
    title: "Files Haven add-in",
    description: "Attachment and file management workflow directly from Outlook.",
  },
  {
    src: "/ooutlook/lira%20docs%20outlook%20addin.png",
    title: "Lira Docs Outlook add-in",
    description: "Outlook add-in experience for document handling and client workflows.",
  },
  {
    src: "/ooutlook/Outlook%20add-in%20Attachment_sorter.png",
    title: "Attachment sorter",
    description: "Automated attachment sorting and processing for Outlook users.",
  },
  {
    src: "/ooutlook/outlook%20calender.png",
    title: "Calendar workflow",
    description: "Calendar-focused Outlook automation for scheduling and coordination.",
  },
  {
    src: "/ooutlook/Outlook%20email%20saver.png",
    title: "Email saver",
    description: "Save and organize emails into business systems or document flows.",
  },
  {
    src: "/ooutlook/transchat%20outlook%20addin.png",
    title: "Translation chat add-in",
    description: "Outlook communication workflow with translation and assistant features.",
  },
  {
    src: "/ooutlook/X1sync%20outlook%20plugin.png",
    title: "X1sync Outlook plugin",
    description: "Outlook synchronization plugin for business data and email workflows.",
  },
];

const excelShowcaseImages = [
  {
    src: "/excel/chatgpt%20for%20excel.png",
    title: "AI assistant inside Excel",
    description: "ChatGPT-style Excel workflow for formulas, summaries, and productivity tasks.",
  },
  {
    src: "/excel/Clouder%20express%20excel%20addin.png",
    title: "Business add-in workspace",
    description: "Custom Excel add-in UI designed for real operational workflows.",
  },
  {
    src: "/excel/clouders%20express.png",
    title: "Cloud workflow integration",
    description: "Excel connected with cloud data and internal business processes.",
  },
  {
    src: "/excel/CSP%20excel%20addin.png",
    title: "CSP Excel add-in",
    description: "Purpose-built plugin experience for repeatable spreadsheet work.",
  },
  {
    src: "/excel/Doccept%20excel%20addin.png",
    title: "Document data add-in",
    description: "Excel interface connected with document and data management workflows.",
  },
  {
    src: "/excel/ericson%20excel%20addin.png",
    title: "Enterprise-style Excel tool",
    description: "Branded Excel add-in UI for professional internal teams.",
  },
  {
    src: "/excel/Excel%20dashbord.png",
    title: "Excel dashboard",
    description: "Dashboard-style spreadsheet experience for reporting and visibility.",
  },
  {
    src: "/excel/EXCEL%20PLUGIN.png",
    title: "Excel plugin interface",
    description: "Custom plugin panel for actions, automation, and data handling.",
  },
  {
    src: "/excel/KPI%20dashbord%20excel.png",
    title: "KPI dashboard",
    description: "Performance dashboard layout for business reporting inside Excel.",
  },
];

const deliveryProcess = [
  ["Discovery", "Review workflow, users, Office host, integrations, permissions, and expected business outcome."],
  ["Prototype", "Design a clean task pane experience so the add-in feels simple before development becomes complex."],
  ["Build", "Implement Office.js, React UI, API/Graph integration, authentication, and error-handled workflows."],
  ["Deploy", "Prepare manifest, test Microsoft 365 clients, support tenant rollout, and document the handoff."],
];

const serviceEnhancements = {
  outlook: {
    compatibility: ["Outlook Web", "Outlook Desktop", "Microsoft 365", "Office.js", "Microsoft Graph", "Admin Center deployment"],
    before: ["Copy email details into CRM manually", "Save attachments one by one", "Create follow-up tasks outside Outlook", "No standard phishing report workflow"],
    after: ["One-click CRM/task sync", "Automated attachment routing", "AI summaries and reply drafts", "Secure reporting and audit-ready workflows"],
    pricing: "Most Outlook add-in builds start from $500-$1,500 depending on Graph, CRM, security, and deployment scope.",
    caseStudies: [
      { title: "Outlook CRM workflow", image: "/Outlook/outlook-crm/screen2.png", summary: "Sync email context with CRM records and reduce manual updates." },
      { title: "Attachment sorter", image: "/Outlook/Attachment/AttachmentSorter2.png", summary: "Sort and move Outlook attachments into cleaner business flows." },
      { title: "Calendar add-in", image: "/Outlook/Prep_reminder_outlook%20calender/outlook%20calender.png", summary: "Calendar and reminder workflow built around Outlook users." },
    ],
    reviewTerms: ["outlook", "office.js", "add-in", "addin"],
  },
  excel: {
    compatibility: ["Excel Web", "Excel Desktop", "Excel Mac", "Office.js", "Custom functions", "API integrations"],
    before: ["Manual exports and imports", "Repeated formula setup", "Reports rebuilt every week", "Spreadsheet validation handled by hand"],
    after: ["Live API data refresh", "Reusable custom functions", "Automated dashboards", "Cleaner validation and reporting flow"],
    pricing: "Most Excel add-in builds start from $500-$1,500 depending on custom functions, dashboards, APIs, and deployment scope.",
    caseStudies: [
      { title: "Excel KPI dashboard", image: "/excel/KPI%20dashbord%20excel.png", summary: "Dashboard experience for business reporting and visibility." },
      { title: "Office.js React demo", image: "/excel/EXCEL%20PLUGIN.png", summary: "Fast Excel add-in workflow using Office.js, React, and task pane UI." },
      { title: "AI assistant in Excel", image: "/excel/chatgpt%20for%20excel.png", summary: "AI support for spreadsheet productivity, formulas, and summaries." },
    ],
    reviewTerms: ["excel", "office.js", "charting", "react"],
  },
  word: {
    compatibility: ["Word Web", "Word Desktop", "Microsoft 365", "Office.js", "PDF workflows", "AI document tools"],
    before: ["Documents assembled manually", "Clauses copied from old files", "Review changes hard to track", "PDF/email workflows repeated by hand"],
    after: ["Template-driven document generation", "AI writing and clause assistance", "Versioning and memory workflows", "PDF export and email handoff"],
    pricing: "Most Word add-in builds start from $500-$1,500 depending on templates, AI features, PDF workflows, and integrations.",
    caseStudies: [
      { title: "AI Word add-in", image: "/word/AI%20sugestions.png", summary: "AI writing and suggestion workflow inside Microsoft Word." },
      { title: "Clause memory system", image: "/word/Caluses/Screenshot%202025-05-28%20005740.png", summary: "Clause and document workflow for repeatable legal/document work." },
      { title: "Word to PDF workflow", image: "/word/Word_document_to_PDF/Screenshot%202025-06-15%20180245.png", summary: "Convert, export, and route documents from a Word add-in." },
    ],
    reviewTerms: ["word", "pdf", "clause", "document"],
  },
  powerpoint: {
    compatibility: ["PowerPoint Web", "PowerPoint Desktop", "Microsoft 365", "Office.js", "Template workflows", "Brand assets"],
    before: ["Slides rebuilt manually", "Teams reuse outdated decks", "Brand consistency is hard to enforce", "Proposal decks take too long"],
    after: ["Approved slide libraries", "Reusable branded templates", "CRM or data-driven deck generation", "Faster proposal and reporting workflows"],
    pricing: "Most PowerPoint add-in builds start from $500-$1,500 depending on slide automation, branded assets, and data integrations.",
    caseStudies: [
      { title: "PowerPoint helper", image: "/powepoint/HelperForPowerpoint/HelperForPowerpoint.png", summary: "Productivity add-in for reusable PowerPoint actions and assets." },
      { title: "Presentation automation", image: "/powepoint/PowerpointImager/Product_Plugin%20(2).png", summary: "Automated slide and image workflow for presentation teams." },
      { title: "PPT package workflow", image: "/powepoint/PPT_TO_Sceom/PPT_to_ScromPackages%20(2).png", summary: "PowerPoint export and packaging workflow for repeat delivery." },
    ],
    reviewTerms: ["powerpoint", "presentation", "office", "add-in"],
  },
} satisfies Record<ServiceType, {
  compatibility: string[];
  before: string[];
  after: string[];
  pricing: string;
  caseStudies: { title: string; image: string; summary: string }[];
  reviewTerms: string[];
}>;

const renderStars = (rating: number) =>
  Array.from({ length: 5 }).map((_, index) => (
    <Star
      key={index}
      className={`h-4 w-4 ${index < Math.round(rating) ? "fill-current" : "text-muted-foreground/30"}`}
    />
  ));

const AddInServicePage = ({ type }: { type: ServiceType }) => {
  const content = serviceContent[type];
  const accent = appAccents[type];
  const enhancements = serviceEnhancements[type];
  const Icon = content.icon;
  const canonicalUrl = `${siteUrl}${content.path}`;
  const directEmailHref = `mailto:shahzad890.it@gmail.com?subject=${encodeURIComponent(content.title)}&body=${encodeURIComponent(
    `Hi Shahzad,\n\nI would like to discuss ${content.title}.\n\nCompany:\nTimeline:\nRequirements:\n\nThanks.`
  )}`;
  const relevantReviews = (fiverrReviews as ClientReview[])
    .filter((review) => {
      if (review.status !== "completed") return false;
      const haystack = `${review.review} ${review.category}`.toLowerCase();
      return enhancements.reviewTerms.some((term) => haystack.includes(term));
    })
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.title,
    url: canonicalUrl,
    description: content.description,
    provider: {
      "@type": "ProfessionalService",
      name: "NexaAI Solutions",
      url: siteUrl,
      email: "shahzad890.it@gmail.com",
    },
    areaServed: "Worldwide",
    serviceType: content.title,
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{content.metaTitle}</title>
        <meta name="description" content={content.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={content.metaTitle} />
        <meta property="og:description" content={content.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={`${siteUrl}/Logo.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.metaTitle} />
        <meta name="twitter:description" content={content.description} />
        <meta name="twitter:image" content={`${siteUrl}/Logo.png`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqStructuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <section className="relative overflow-hidden pt-32 pb-20">
            <div className="absolute inset-0 hero-gradient" />
            <div className={`absolute inset-0 ${accent.heroGlow}`} />
            <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, 3, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[8%] top-36 hidden h-20 w-20 rounded-[1.65rem] border border-white/10 bg-white/[0.045] p-4 shadow-soft backdrop-blur-xl lg:block"
            >
              <img src={content.brandIcon} alt="" className="h-full w-full object-contain" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0], rotate: [0, -4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute right-[9%] top-44 hidden h-16 w-16 rounded-2xl border border-white/10 bg-white/[0.04] p-3 shadow-soft backdrop-blur-xl lg:block"
            >
              <Icon className={`h-full w-full ${accent.icon}`} />
            </motion.div>

            <div className="section-container relative z-10">
              <div className="mx-auto max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.55 }}
                  className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center md:h-32 md:w-32"
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className={`absolute inset-0 rounded-[2rem] border ${accent.card}`}
                  />
                  <motion.span
                    animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.65, 0.35] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute inset-3 rounded-[1.7rem] border ${accent.card}`}
                  />
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative flex h-20 w-20 items-center justify-center rounded-[1.65rem] border border-white/10 bg-white/[0.055] p-4 shadow-soft-lg backdrop-blur-xl md:h-24 md:w-24"
                  >
                    <img src={content.brandIcon} alt={content.brandAlt} className="h-full w-full object-contain" />
                  </motion.div>
                </motion.div>

                <span className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold backdrop-blur-xl ${accent.pill}`}>
                  <Icon className={`h-4 w-4 ${accent.icon}`} />
                  {content.title}
                </span>
                <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
                  {content.h1}
                </h1>
                <p className="mx-auto mb-8 max-w-3xl text-lg leading-8 text-muted-foreground">
                  {content.intro}
                </p>
                <div className="mx-auto mb-8 flex max-w-3xl flex-wrap justify-center gap-2">
                  {content.features.slice(0, 4).map((feature) => (
                    <span
                      key={feature}
                      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold backdrop-blur-xl ${accent.card}`}
                    >
                      <CheckCircle2 className={`h-3.5 w-3.5 ${accent.check}`} />
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <Button variant="hero" size="xl" asChild className="group rounded-full">
                    <a href="#contact-page">
                      Discuss This Project
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button variant="heroOutline" size="xl" asChild className="rounded-full">
                    <a href={directEmailHref}>Email Project Brief</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-20">
            <div className="section-container">
              <div className="grid gap-8 lg:grid-cols-[1fr,0.9fr]">
                <div className="rounded-3xl glass p-8 text-left">
                  <h2 className="mb-6 text-3xl font-bold text-foreground">What this service includes</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {content.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 rounded-2xl glass-light p-4">
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${accent.check}`} />
                        <p className="text-sm text-foreground/90">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`rounded-3xl border p-8 text-left ${accent.card}`}>
                  <h2 className="mb-6 text-3xl font-bold text-foreground">Common use cases</h2>
                  <div className="space-y-4">
                    {content.useCases.map((useCase) => (
                      <p key={useCase} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                        <ShieldCheck className={`mt-0.5 h-5 w-5 shrink-0 ${accent.check}`} />
                        {useCase}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden py-20">
            <div className={`absolute inset-0 ${accent.sectionGlow}`} />
            <div className="section-container relative z-10">
              <div className="mx-auto mb-12 max-w-3xl text-center">
                <span className="section-kicker">
                  <ShieldCheck className="h-4 w-4" />
                  Enterprise Fit
                </span>
                <h2 className="section-title mb-4">
                  Built for the tools your team
                  <span className={`block bg-gradient-to-r ${accent.gradientText} bg-clip-text text-transparent`}>already works in every day.</span>
                </h2>
                <p className="text-muted-foreground">
                  Clear compatibility, delivery process, and relevant proof help technical buyers understand what can be built before starting a project.
                </p>
              </div>

              <div className="mb-10 flex flex-wrap justify-center gap-3">
                {enhancements.compatibility.map((item) => (
                  <span key={item} className={`rounded-full border px-4 py-2 text-sm font-semibold ${accent.card}`}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 text-left">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Before</p>
                  <h3 className="mb-5 text-2xl font-bold text-foreground">Manual workflow friction</h3>
                  <div className="space-y-3">
                    {enhancements.before.map((item) => (
                      <p key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-300/80" />
                        {item}
                      </p>
                    ))}
                  </div>
                </article>

                <article className={`rounded-3xl border p-7 text-left ${accent.card}`}>
                  <p className={`mb-2 text-xs font-semibold uppercase tracking-[0.18em] ${accent.cardText}`}>After</p>
                  <h3 className="mb-5 text-2xl font-bold text-foreground">Custom add-in workflow</h3>
                  <div className="space-y-3">
                    {enhancements.after.map((item) => (
                      <p key={item} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${accent.check}`} />
                        {item}
                      </p>
                    ))}
                  </div>
                </article>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-4">
                {deliveryProcess.map(([title, text], index) => (
                  <article key={title} className="relative rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-left">
                    <span className={`mb-5 flex h-10 w-10 items-center justify-center rounded-2xl border text-sm font-bold ${accent.iconBox}`}>
                      {index + 1}
                    </span>
                    <h3 className="mb-3 text-lg font-bold text-foreground">{title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="section-container">
              <div className="mb-10 flex flex-col justify-between gap-4 text-left lg:flex-row lg:items-end">
                <div>
                  <span className="section-kicker">Proof</span>
                  <h2 className="section-title mb-4">
                    Relevant project examples
                    <span className={`block bg-gradient-to-r ${accent.gradientText} bg-clip-text text-transparent`}>for this service.</span>
                  </h2>
                  <p className="max-w-3xl text-muted-foreground">
                    Mini case cards give visitors a faster way to understand what can be delivered before they open the full portfolio.
                  </p>
                </div>
                <Button variant="heroOutline" asChild className="rounded-full">
                  <a href="/portfolio">View Full Portfolio</a>
                </Button>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {enhancements.caseStudies.map((item) => (
                  <article
                    key={item.title}
                    className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] text-left transition-all duration-300 hover:-translate-y-1 ${accent.hover}`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0f172a]">
                      <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/70 via-transparent to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm leading-6 text-muted-foreground">{item.summary}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className={`mt-8 rounded-3xl border p-6 text-left ${accent.card}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Typical starting range</p>
                <h3 className="mt-2 text-xl font-bold text-foreground">{enhancements.pricing}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Final quote depends on API access, authentication, Microsoft Graph permissions, UI complexity, testing, and deployment needs.
                </p>
              </div>
            </div>
          </section>

          {relevantReviews.length > 0 && (
            <section className="pb-20">
              <div className="section-container">
                <div className="mx-auto mb-10 max-w-3xl text-center">
                  <span className="section-kicker">Client Proof</span>
                  <h2 className="section-title mb-4">Relevant client feedback</h2>
                  <p className="text-muted-foreground">
                    Selected Fiverr and Upwork reviews related to this type of Office add-in work.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-3">
                  {relevantReviews.map((review) => (
                    <article key={review.id} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-left">
                      <div className={`mb-4 flex items-center gap-1 ${accent.check}`}>
                        {renderStars(review.rating)}
                        <span className="ml-2 text-sm font-bold text-foreground">{review.rating.toFixed(1)}</span>
                      </div>
                      <p className="mb-5 text-sm leading-6 text-muted-foreground">"{review.review}"</p>
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-sm font-bold text-foreground">{review.platform} Client</p>
                        <p className="mt-1 text-xs text-muted-foreground">{review.category} | {review.date}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {type === "excel" && (
            <section className="relative overflow-hidden py-20">
              <div className={`absolute inset-0 ${accent.sectionGlow}`} />

              <div className="section-container relative z-10">
                <div className="mb-10 grid items-end gap-8 lg:grid-cols-[1fr,0.85fr]">
                  <div className="text-left">
                    <span className="section-kicker">
                      <TableProperties className="h-4 w-4" />
                      Excel Add-in Proof
                    </span>
                    <h2 className="section-title mb-5">
                      Real Excel add-in screens
                      <span className={`block bg-gradient-to-r ${accent.gradientText} bg-clip-text text-transparent`}>to build client trust.</span>
                    </h2>
                    <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                      Add-in screenshots help visitors understand that the work is practical, visual, and production-focused. These examples show Excel task panes, dashboards, AI tools, and business workflow interfaces.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {excelTrustStats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left">
                        <p className="text-xl font-bold text-white">{stat.value}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {excelShowcaseImages.map((item) => (
                    <article
                      key={item.src}
                      className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] text-left shadow-soft transition-all duration-300 hover:-translate-y-1 ${accent.hover} hover:bg-white/[0.06]`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#0f172a]">
                        <img
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/70 via-transparent to-transparent opacity-70" />
                      </div>
                      <div className="p-5">
                        <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                        <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className={`mt-8 rounded-3xl border p-6 text-left ${accent.card}`}>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-foreground">Want to add more Excel screenshots?</h3>
                      <p className="text-sm leading-6 text-muted-foreground">
                        Put new images in <span className={`font-semibold ${accent.cardText}`}>public/excel</span>, then add them to the gallery list so every project can improve trust and conversion.
                      </p>
                    </div>
                    <Button variant="hero" asChild className="shrink-0 rounded-full">
                      <a href={directEmailHref}>Discuss Excel Add-in</a>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {type === "outlook" && (
            <>
              <section className="relative overflow-hidden py-20">
                <div className={`absolute inset-0 ${accent.sectionGlow}`} />

                <div className="section-container relative z-10">
                  <div className="mx-auto mb-12 max-w-4xl text-center">
                    <span className="section-kicker">
                      <Mail className="h-4 w-4" />
                      Outlook Add-in Capabilities
                    </span>
                    <h2 className="section-title mb-5">
                      What we can build
                      <span className={`block bg-gradient-to-r ${accent.gradientText} bg-clip-text text-transparent`}>inside Microsoft Outlook.</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                      Outlook add-ins can do much more than show a task pane. We can connect email context with AI, CRMs, project tools, security reporting, files, calendars, and custom business systems.
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {outlookCapabilityGroups.map((group) => (
                      <article
                        key={group.title}
                        className={`rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 ${accent.hover} hover:bg-white/[0.06]`}
                      >
                        <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border ${accent.iconBox}`}>
                          <group.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-foreground">{group.title}</h3>
                        <p className="mb-5 text-sm leading-6 text-muted-foreground">{group.description}</p>
                        <div className="space-y-3">
                          {group.items.map((item) => (
                            <p key={item} className="flex items-start gap-2 text-sm leading-6 text-muted-foreground">
                              <CheckCircle2 className={`mt-1 h-4 w-4 shrink-0 ${accent.check}`} />
                              {item}
                            </p>
                          ))}
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className={`mt-8 rounded-3xl border p-6 text-left ${accent.card}`}>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-foreground">Need Salesforce, HubSpot, Asana, or a custom API connected?</h3>
                        <p className="text-sm leading-6 text-muted-foreground">
                          We can design the Outlook add-in workflow, OAuth permissions, backend API bridge, Microsoft Graph access, and secure deployment path.
                        </p>
                      </div>
                      <Button variant="hero" asChild className="shrink-0 rounded-full">
                        <a href={directEmailHref}>Discuss Integration</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              <section className="relative overflow-hidden py-20">
                <div className={`absolute inset-0 ${accent.sectionGlow}`} />

                <div className="section-container relative z-10">
                  <div className="mb-10 grid items-end gap-8 lg:grid-cols-[1fr,0.85fr]">
                    <div>
                      <span className="section-kicker">
                        <Mail className="h-4 w-4" />
                        Outlook Add-in Proof
                      </span>
                      <h2 className="section-title mb-5">
                        Real Outlook add-in screens
                        <span className={`block bg-gradient-to-r ${accent.gradientText} bg-clip-text text-transparent`}>that make the service credible.</span>
                      </h2>
                      <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                        Outlook add-in screenshots show visitors the kind of real task panes, email tools, attachment workflows, AI assistants, and Microsoft 365 integrations that can be delivered for business teams.
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                      {outlookTrustStats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left">
                          <p className="text-xl font-bold text-white">{stat.value}</p>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {outlookShowcaseImages.map((item) => (
                      <article
                        key={item.src}
                        className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] text-left shadow-soft transition-all duration-300 hover:-translate-y-1 ${accent.hover} hover:bg-white/[0.06]`}
                      >
                        <div className="relative aspect-[16/10] overflow-hidden bg-[#0f172a]">
                          <img
                            src={item.src}
                            alt={item.title}
                            loading="lazy"
                            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/70 via-transparent to-transparent opacity-70" />
                        </div>
                        <div className="p-5">
                          <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                          <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                        </div>
                      </article>
                    ))}
                  </div>

                  <div className={`mt-8 rounded-3xl border p-6 text-left ${accent.card}`}>
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="mb-2 text-xl font-bold text-foreground">Want to add more Outlook screenshots?</h3>
                        <p className="text-sm leading-6 text-muted-foreground">
                          Put new images in <span className={`font-semibold ${accent.cardText}`}>public/ooutlook</span>, then add them to the gallery list so every Outlook project builds more trust.
                        </p>
                      </div>
                      <Button variant="hero" asChild className="shrink-0 rounded-full">
                        <a href={directEmailHref}>Discuss Outlook Add-in</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {type === "word" && (
            <section className="relative overflow-hidden py-20">
              <div className={`absolute inset-0 ${accent.sectionGlow}`} />

              <div className="section-container relative z-10">
                <div className="mb-10 grid items-end gap-8 lg:grid-cols-[1fr,0.85fr]">
                  <div className="text-left">
                    <span className="section-kicker">
                      <FileText className="h-4 w-4" />
                      Word Add-in Proof
                    </span>
                    <h2 className="section-title mb-5">
                      Real Word add-in screens
                      <span className={`block bg-gradient-to-r ${accent.gradientText} bg-clip-text text-transparent`}>for document automation trust.</span>
                    </h2>
                    <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                      Word add-in screenshots make the service easier to trust by showing real task panes, AI writing tools, document generation flows, comments, tracking, and business integrations.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    {wordTrustStats.map((stat) => (
                      <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left">
                        <p className="text-xl font-bold text-white">{stat.value}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {wordShowcaseImages.map((item) => (
                    <article
                      key={item.src}
                      className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] text-left shadow-soft transition-all duration-300 hover:-translate-y-1 ${accent.hover} hover:bg-white/[0.06]`}
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-[#0f172a]">
                        <img
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020]/70 via-transparent to-transparent opacity-70" />
                      </div>
                      <div className="p-5">
                        <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                        <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className={`mt-8 rounded-3xl border p-6 text-left ${accent.card}`}>
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="mb-2 text-xl font-bold text-foreground">Want to add more Word screenshots?</h3>
                      <p className="text-sm leading-6 text-muted-foreground">
                        Put new images in <span className={`font-semibold ${accent.cardText}`}>public/word</span>, then add them to the gallery list so every Word add-in project builds more trust.
                      </p>
                    </div>
                    <Button variant="hero" asChild className="shrink-0 rounded-full">
                      <a href={directEmailHref}>Discuss Word Add-in</a>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="py-20">
            <div className="section-container">
              <div className="mb-10 rounded-3xl border border-white/10 bg-white/[0.035] p-7 text-left">
                <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
                  <div>
                    <span className="section-kicker">
                      <Link2 className="h-4 w-4" />
                      Integration Options
                    </span>
                    <h2 className="mt-4 text-3xl font-bold text-foreground">Connect this add-in with business systems.</h2>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">
                      A service page should make it easy for buyers to jump from Office app development to the exact CRM, ERP, or document system integration they need.
                    </p>
                  </div>
                  <Button variant="heroOutline" asChild className="shrink-0 rounded-full">
                    <a href="/integrations">View all integrations</a>
                  </Button>
                </div>
                <div className="grid gap-3 md:grid-cols-3">
                  {integrationCtas.map((item) => (
                    <a key={item.href} href={item.href} className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-foreground transition-colors hover:border-orange-300/25 hover:bg-white/[0.065]">
                      {item.label}
                      <ArrowRight className="h-4 w-4 text-orange-300 transition-transform group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mb-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {officeAppCoverage.map((item) => (
                  <article key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 text-left">
                    <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border ${accent.iconBox}`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{item.text}</p>
                  </article>
                ))}
              </div>

              <div className="rounded-3xl border border-purple-500/10 glass p-8">
                <h2 className="mb-6 text-center text-3xl font-bold text-foreground">Related Office add-in services</h2>
                <div className="grid gap-4 md:grid-cols-4">
                  {relatedServices.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className={`rounded-2xl glass-light p-4 text-center text-sm font-semibold text-muted-foreground transition-all ${accent.hover} hover:text-foreground hover:shadow-soft`}
                    >
                      {service.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="pb-20">
            <div className="section-container">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <span className="section-kicker">FAQ</span>
                <h2 className="section-title mb-4">Questions clients ask before starting</h2>
                <p className="text-muted-foreground">
                  Clear answers help technical buyers understand scope, integrations, deployment, and what is possible before booking a call.
                </p>
              </div>

              <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
                {content.faqs.map(([question, answer]) => (
                  <article key={question} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-left">
                    <h3 className="mb-3 text-lg font-bold text-foreground">{question}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="contact-page" className="pb-24">
            <div className="section-container">
              <div className={`mx-auto max-w-3xl rounded-3xl border p-8 text-center ${accent.card}`}>
                <h2 className="mb-3 text-3xl font-bold text-foreground">Ready to build your add-in?</h2>
                <p className="mb-6 text-muted-foreground">
                  Send a short brief and I will help define scope, technical approach, security requirements, and deployment path.
                </p>
                <Button variant="hero" size="xl" asChild className="group rounded-full">
                  <a href={directEmailHref}>
                    Email Project Brief
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AddInServicePage;






