export type PortfolioProject = {
  title: string;
  category: string;
  summary: string;
  outcome: string;
  stack: string[];
  images: string[];
};

export const portfolioProjectSlug = (project: Pick<PortfolioProject, "title" | "category">) =>
  `${project.category}-${project.title}`
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const findPortfolioProjectBySlug = (slug: string) =>
  portfolioProjects.find((project) => portfolioProjectSlug(project) === slug);

export const portfolioProjects: PortfolioProject[] = [
    {
        "title":  "Attachment",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/Attachment/Attachment_6.png",
                       "/Outlook/Attachment/AttachmentSorter2.png",
                       "/Outlook/Attachment/Attachmentsorter3.png",
                       "/Outlook/Attachment/Attachmentsorter4.png"
                   ]
    },
    {
        "title":  "Boligflow",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/Boligflow/Screenshot%202025-05-25%20130828.png",
                       "/Outlook/Boligflow/Screenshot%202025-05-25%20130920.png",
                       "/Outlook/Boligflow/Screenshot%202025-05-25%20130959.png",
                       "/Outlook/Boligflow/Screenshot%202025-05-25%20131144.png"
                   ]
    },
    {
        "title":  "Canopy",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/canopy/Screenshot%202025-11-27%20153103.png",
                       "/Outlook/canopy/Screenshot%202025-11-27%20153159.png"
                   ]
    },
    {
        "title":  "Chatgpt",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/ChatGpt/AI_Plugin_Outlook_for_mail_readin.png",
                       "/Outlook/ChatGpt/Outlook_Plugin%26Chatgpt_integration.png",
                       "/Outlook/ChatGpt/Outlook_Plugin.png",
                       "/Outlook/ChatGpt/OutlookPlugin.png"
                   ]
    },
    {
        "title":  "Doccept Dms",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/Doccept_DMS/Doccept_DMS%20(3).png",
                       "/Outlook/Doccept_DMS/Doccept_DMS%20(5).png",
                       "/Outlook/Doccept_DMS/Doccept_DMS.png"
                   ]
    },
    {
        "title":  "Emailmanager",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/EmailManager/Outlook_EmailManager.png",
                       "/Outlook/EmailManager/OutlookEmailManager.png"
                   ]
    },
    {
        "title":  "Email Saver C Drive",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/Email-saver-c-drive/Screenshot%202025-06-11%20130736.png",
                       "/Outlook/Email-saver-c-drive/Screenshot%202025-06-11%20130804.png",
                       "/Outlook/Email-saver-c-drive/Screenshot%202025-06-11%20130832.png",
                       "/Outlook/Email-saver-c-drive/Screenshot%202025-06-11%20130904.png"
                   ]
    },
    {
        "title":  "Email Sorter",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/Email-sorter/Screenshot%202025-05-25%20131547.png",
                       "/Outlook/Email-sorter/Screenshot%202025-05-25%20131641.png",
                       "/Outlook/Email-sorter/Screenshot%202025-05-25%20131707.png",
                       "/Outlook/Email-sorter/Screenshot%202025-05-25%20131735.png"
                   ]
    },
    {
        "title":  "Fyendra Outlook Reply Addin",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/fyendra%20outlook%20reply%20addin/Screenshot%202025-12-17%20003212.png",
                       "/Outlook/fyendra%20outlook%20reply%20addin/Screenshot%202025-12-17%20003239.png",
                       "/Outlook/fyendra%20outlook%20reply%20addin/Screenshot%202025-12-17%20003357.png",
                       "/Outlook/fyendra%20outlook%20reply%20addin/Screenshot%202025-12-17%20003618.png"
                   ]
    },
    {
        "title":  "Gesdoc Outlook Addin",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/GesDoc_outlook%20addin/gesDoc.png",
                       "/Outlook/GesDoc_outlook%20addin/gesDoc1.png",
                       "/Outlook/GesDoc_outlook%20addin/gesdoc2.png",
                       "/Outlook/GesDoc_outlook%20addin/gesDoc3.png"
                   ]
    },
    {
        "title":  "Iclayn",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/Iclayn/image%20(30).png",
                       "/Outlook/Iclayn/login.png",
                       "/Outlook/Iclayn/Screenshot%202025-10-23%20080119.png",
                       "/Outlook/Iclayn/Screenshot%202025-10-23%20080148.png"
                   ]
    },
    {
        "title":  "Inbrief",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/Inbrief/Screenshot%202025-09-27%20132352.png",
                       "/Outlook/Inbrief/Screenshot%202025-09-27%20132742.png",
                       "/Outlook/Inbrief/Screenshot%202025-09-27%20132756.png",
                       "/Outlook/Inbrief/Screenshot%202025-09-27%20132822.png"
                   ]
    },
    {
        "title":  "Liradoc",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/LiraDoc/Screenshot%202025-05-25%20160107.png",
                       "/Outlook/LiraDoc/Screenshot%202025-05-25%20160140.png",
                       "/Outlook/LiraDoc/Screenshot%202025-05-25%20160200.png",
                       "/Outlook/LiraDoc/Screenshot%202025-05-25%20160220.png"
                   ]
    },
    {
        "title":  "Mailproven Outlook Addon",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/mailproven%20outlook%20addon/1.png",
                       "/Outlook/mailproven%20outlook%20addon/2.png",
                       "/Outlook/mailproven%20outlook%20addon/3.png",
                       "/Outlook/mailproven%20outlook%20addon/4.png"
                   ]
    },
    {
        "title":  "Meeting Manager",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/Meeting%20manager/Screenshot%202025-08-22%20084915.png",
                       "/Outlook/Meeting%20manager/Screenshot%202025-08-22%20085339.png"
                   ]
    },
    {
        "title":  "Onedrive",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/oneDrive/OneDriveIntegration%20(3).png",
                       "/Outlook/oneDrive/OneDriveIntegration%20(4).png"
                   ]
    },
    {
        "title":  "Outlook Acces File",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/Outlook%20acces%20file/Screenshot%202025-08-27%20133447.png",
                       "/Outlook/Outlook%20acces%20file/Screenshot%202025-08-27%20133504.png",
                       "/Outlook/Outlook%20acces%20file/Screenshot%202025-08-27%20133524.png",
                       "/Outlook/Outlook%20acces%20file/Screenshot%202025-08-27%20133542.png"
                   ]
    },
    {
        "title":  "Outlook Event Manager",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/Outlook%20event%20manager/Screenshot%202025-08-22%20084839.png",
                       "/Outlook/Outlook%20event%20manager/Screenshot%202025-08-22%20084915.png",
                       "/Outlook/Outlook%20event%20manager/Screenshot%202025-08-22%20085339.png"
                   ]
    },
    {
        "title":  "Outlook Transchit",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/outlook%20transchit/Screenshot%202025-07-24%20194948.png",
                       "/Outlook/outlook%20transchit/Screenshot%202025-07-24%20195003.png"
                   ]
    },
    {
        "title":  "Outlook Crm",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/outlook-crm/screen!Portfollero%20(1).png",
                       "/Outlook/outlook-crm/screen!Portfollero.png",
                       "/Outlook/outlook-crm/screen2.png",
                       "/Outlook/outlook-crm/screen3png.png"
                   ]
    },
    {
        "title":  "Prep Reminder Outlook Calender",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/Prep_reminder_outlook%20calender/outlook%20add-in-calnder.png",
                       "/Outlook/Prep_reminder_outlook%20calender/outlook%20calender%20addin%202.png",
                       "/Outlook/Prep_reminder_outlook%20calender/outlook%20calender%20prep1.png",
                       "/Outlook/Prep_reminder_outlook%20calender/outlook%20calender.png"
                   ]
    },
    {
        "title":  "Sharepoint",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/sharepoint/Screenshot%202026-02-17%20131252.png",
                       "/Outlook/sharepoint/Screenshot%202026-02-17%20131307.png",
                       "/Outlook/sharepoint/Screenshot%202026-02-17%20131318.png",
                       "/Outlook/sharepoint/Screenshot%202026-02-17%20131331.png"
                   ]
    },
    {
        "title":  "Sso",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/SSO/SSO.png",
                       "/Outlook/SSO/SSO1.png",
                       "/Outlook/SSO/SSO2.png"
                   ]
    },
    {
        "title":  "Timetackle",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/timetackle/calander-1.png",
                       "/Outlook/timetackle/calender%204.png",
                       "/Outlook/timetackle/calender13.png",
                       "/Outlook/timetackle/calender2.png"
                   ]
    },
    {
        "title":  "Titanfiel",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/titanfiel/Screenshot%202025-07-23%20140921.png",
                       "/Outlook/titanfiel/Screenshot%202025-07-23%20141009.png",
                       "/Outlook/titanfiel/Screenshot%202025-07-23%20141137.png",
                       "/Outlook/titanfiel/Screenshot%202025-07-23%20141537.png"
                   ]
    },
    {
        "title":  "Tracking",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/tracking/Screenshot%202026-01-26%20141446.png",
                       "/Outlook/tracking/Screenshot%202026-01-26%20141502.png",
                       "/Outlook/tracking/Screenshot%202026-01-26%20141523.png",
                       "/Outlook/tracking/Screenshot%202026-01-26%20141543.png"
                   ]
    },
    {
        "title":  "X! Sync Calender Meeting Outlook Add In",
        "category":  "Outlook Add-in",
        "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
        "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
        "stack":  [
                      "Outlook",
                      "Office.js",
                      "Microsoft Graph",
                      "React"
                  ],
        "images":  [
                       "/Outlook/X!%20sync%20calender%20meeting%20outlook%20add-in/Screenshot%202025-07-13%20170414.png",
                       "/Outlook/X!%20sync%20calender%20meeting%20outlook%20add-in/Screenshot%202025-07-13%20170444.png",
                       "/Outlook/X!%20sync%20calender%20meeting%20outlook%20add-in/Screenshot%202025-07-13%20170456.png",
                       "/Outlook/X!%20sync%20calender%20meeting%20outlook%20add-in/Screenshot%202025-07-13%20170507.png"
                   ]
    },
    // {
    //     "title":  "Zoom Integration",
    //     "category":  "Outlook Add-in",
    //     "summary":  "Outlook add-in project for email, calendar, attachments, CRM, or Microsoft 365 workflow automation.",
    //     "outcome":  "Cleaner Outlook workflow with fewer manual email steps",
    //     "stack":  [
    //                   "Outlook",
    //                   "Office.js",
    //                   "Microsoft Graph",
    //                   "React"
    //               ],
    //     "images":  [
    //                    "/Outlook/Zoom_integration/Outlook%26Zoom.png"
    //                ]
    // },
    {
        "title":  "Chart Visulation",
        "category":  "PowerPoint Add-in",
        "summary":  "PowerPoint add-in project for presentation automation, slide workflows, templates, or content generation.",
        "outcome":  "Faster slide and presentation workflow",
        "stack":  [
                      "PowerPoint",
                      "Office.js",
                      "Templates",
                      "React"
                  ],
        "images":  [
                       "/powepoint/Chart_Visulation/Chart_Js_data%20(10).png",
                       "/powepoint/Chart_Visulation/Chart_Js_data%20(2).png",
                       "/powepoint/Chart_Visulation/Chart_Js_data%20(3).png",
                       "/powepoint/Chart_Visulation/Chart_Js_data%20(4).png"
                   ]
    },
    {
        "title":  "Helperforpowerpoint",
        "category":  "PowerPoint Add-in",
        "summary":  "PowerPoint add-in project for presentation automation, slide workflows, templates, or content generation.",
        "outcome":  "Faster slide and presentation workflow",
        "stack":  [
                      "PowerPoint",
                      "Office.js",
                      "Templates",
                      "React"
                  ],
        "images":  [
                       "/powepoint/HelperForPowerpoint/HelperForPowerpoint%20(2).png",
                       "/powepoint/HelperForPowerpoint/HelperForPowerpoint%20(3).png",
                       "/powepoint/HelperForPowerpoint/HelperForPowerpoint%20(4).png",
                       "/powepoint/HelperForPowerpoint/HelperForPowerpoint.png"
                   ]
    },
    {
        "title":  "Powerpointimager",
        "category":  "PowerPoint Add-in",
        "summary":  "PowerPoint add-in project for presentation automation, slide workflows, templates, or content generation.",
        "outcome":  "Faster slide and presentation workflow",
        "stack":  [
                      "PowerPoint",
                      "Office.js",
                      "Templates",
                      "React"
                  ],
        "images":  [
                       "/powepoint/PowerpointImager/Product_Plugin%20(2).png",
                       "/powepoint/PowerpointImager/Product_Plugin%20(3).png",
                       "/powepoint/PowerpointImager/Product_Plugin%20(4).png",
                       "/powepoint/PowerpointImager/Product_Plugin%20(5).png"
                   ]
    },
    {
        "title":  "Ppt To Sceom",
        "category":  "PowerPoint Add-in",
        "summary":  "PowerPoint add-in project for presentation automation, slide workflows, templates, or content generation.",
        "outcome":  "Faster slide and presentation workflow",
        "stack":  [
                      "PowerPoint",
                      "Office.js",
                      "Templates",
                      "React"
                  ],
        "images":  [
                       "/powepoint/PPT_TO_Sceom/PPT_to_ScromPackages%20(2).png",
                       "/powepoint/PPT_TO_Sceom/PPT_to_ScromPackages%20(3).png",
                       "/powepoint/PPT_TO_Sceom/PPT_to_ScromPackages%20(4).png",
                       "/powepoint/PPT_TO_Sceom/PPT_to_ScromPackages%20(5).png"
                   ]
    },
    {
        "title":  "Ajay Word Addin New",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/ajay-word%20addin%20new/ai%20base%20sugstion.png",
                       "/word/ajay-word%20addin%20new/ai%20base%20word%20addin.png",
                       "/word/ajay-word%20addin%20new/ai%20word%20addin.png",
                       "/word/ajay-word%20addin%20new/Screenshot%202025-07-25%20223916.png"
                   ]
    },
    {
        "title":  "Ajay Word Addin",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/ajay-word-addin/Screenshot%202025-06-27%20225234.png",
                       "/word/ajay-word-addin/Screenshot%202025-06-27%20225336.png",
                       "/word/ajay-word-addin/Screenshot%202025-06-27%20225358.png",
                       "/word/ajay-word-addin/Screenshot%202025-06-27%20225430.png"
                   ]
    },
    {
        "title":  "Caluses",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/Caluses/Screenshot%202025-05-28%20005718.png",
                       "/word/Caluses/Screenshot%202025-05-28%20005740.png",
                       "/word/Caluses/Screenshot%202025-05-28%20005806.png",
                       "/word/Caluses/Screenshot%202025-05-28%20005825.png"
                   ]
    },
    {
        "title":  "Clouderintegration Wordaddin",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/ClouderIntegration-wordaddin/Screenshot%202025-08-22%20122904.png",
                       "/word/ClouderIntegration-wordaddin/Screenshot%202025-08-22%20122955.png",
                       "/word/ClouderIntegration-wordaddin/Screenshot%202025-08-22%20123008.png",
                       "/word/ClouderIntegration-wordaddin/Screenshot%202025-08-22%20123026.png"
                   ]
    },
    {
        "title":  "Fajer Ai",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/fajer-ai/fajer1.png",
                       "/word/fajer-ai/fajer2.png",
                       "/word/fajer-ai/fajer3.png",
                       "/word/fajer-ai/fajer4.png"
                   ]
    },
    {
        "title":  "Geniousai",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/GeniousAI/Screenshot%202025-05-28%20013848.png",
                       "/word/GeniousAI/Screenshot%202025-05-28%20014332.png",
                       "/word/GeniousAI/Screenshot%202025-05-28%20014410.png",
                       "/word/GeniousAI/Screenshot%202025-05-28%20014428.png"
                   ]
    },
    {
        "title":  "Greenconsole",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/GreenConsole/Screenshot%202025-09-27%20132118.png",
                       "/word/GreenConsole/Screenshot%202025-09-27%20132139.png",
                       "/word/GreenConsole/Screenshot%202025-09-27%20132202.png",
                       "/word/GreenConsole/Screenshot%202025-09-27%20132228.png"
                   ]
    },
    {
        "title":  "Intelligent Citation",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/Intelligent%20Citation/Screenshot%202025-05-28%20105424.png",
                       "/word/Intelligent%20Citation/Screenshot%202025-05-28%20105437.png",
                       "/word/Intelligent%20Citation/Screenshot%202025-05-28%20105516.png",
                       "/word/Intelligent%20Citation/Screenshot%202025-05-28%20105641.png"
                   ]
    },
    {
        "title":  "New Folder",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/New%20folder/Ai_DetectorPro%20(2).png",
                       "/word/New%20folder/Ai_DetectorPro%20(3).png",
                       "/word/New%20folder/Ai_DetectorPro%20(4).png",
                       "/word/New%20folder/Ai_DetectorPro%20(5).png"
                   ]
    },
    {
        "title":  "New Folder (2)",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/New%20folder%20(2)/Screenshot%202025-12-18%20155015.png",
                       "/word/New%20folder%20(2)/SiolCloud.png"
                   ]
    },
    {
        "title":  "Portant",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/portant/Screenshot%202026-01-30%20035528.png",
                       "/word/portant/Screenshot%202026-01-30%20035542.png"
                   ]
    },
    {
        "title":  "Rephraz",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/rephraz/Screenshot%202025-06-30%20185007.png",
                       "/word/rephraz/Screenshot%202025-06-30%20185024.png",
                       "/word/rephraz/Screenshot%202025-06-30%20185116.png",
                       "/word/rephraz/Screenshot%202025-06-30%20185304.png"
                   ]
    },
    {
        "title":  "Robrix Word Addin Nopress",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/Robrix_word-addin%20nopress/Screenshot%202025-11-01%20131154.png",
                       "/word/Robrix_word-addin%20nopress/Screenshot%202025-11-01%20131212.png",
                       "/word/Robrix_word-addin%20nopress/Screenshot%202025-11-01%20131234.png",
                       "/word/Robrix_word-addin%20nopress/Screenshot%202025-11-01%20131256.png"
                   ]
    },
    {
        "title":  "Suds",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/Suds/Screenshot%202025-05-27%20162310.png",
                       "/word/Suds/Screenshot%202025-05-27%20162941.png",
                       "/word/Suds/Screenshot%202025-05-27%20163014.png",
                       "/word/Suds/Screenshot%202025-05-27%20163034.png"
                   ]
    },
    {
        "title":  "Tamplate",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/tamplate/Screenshot%202026-01-16%20204150.png",
                       "/word/tamplate/temp.png"
                   ]
    },
    {
        "title":  "Word Document To Pdf",
        "category":  "Word Add-in",
        "summary":  "Word add-in project for document automation, AI writing support, review workflows, templates, or integrations.",
        "outcome":  "More reliable document workflow inside Word",
        "stack":  [
                      "Word APIs",
                      "Office.js",
                      "React",
                      "Automation"
                  ],
        "images":  [
                       "/word/Word_document_to_PDF/Screenshot%202025-06-15%20180223.png",
                       "/word/Word_document_to_PDF/Screenshot%202025-06-15%20180245.png",
                       "/word/Word_document_to_PDF/Screenshot%202025-06-15%20180323.png",
                       "/word/Word_document_to_PDF/Screenshot%202025-06-15%20180339.png"
                   ]
    },
    {
        "title":  "Ai Legal Agent",
        "category":  "Google Docs Add-on",
        "summary":  "Google Docs add-on project for document writing, AI assistance, legal workflows, or content automation.",
        "outcome":  "Workspace document workflow automated",
        "stack":  [
                      "Google Docs",
                      "Apps Script",
                      "AI APIs",
                      "Workspace"
                  ],
        "images":  [
                       "/google-docs-addons/AI_legal_agent/Screenshot%202026-03-29%20113741.png",
                       "/google-docs-addons/AI_legal_agent/Screenshot%202026-03-29%20113752.png",
                       "/google-docs-addons/AI_legal_agent/Screenshot%202026-03-29%20113816.png",
                       "/google-docs-addons/AI_legal_agent/Screenshot%202026-03-29%20113837.png"
                   ]
    },
    {
        "title":  "Brand Voice Ai",
        "category":  "Google Docs Add-on",
        "summary":  "Google Docs add-on project for document writing, AI assistance, legal workflows, or content automation.",
        "outcome":  "Workspace document workflow automated",
        "stack":  [
                      "Google Docs",
                      "Apps Script",
                      "AI APIs",
                      "Workspace"
                  ],
        "images":  [
                       "/google-docs-addons/Brand_voice_ai/Screenshot%202026-03-29%20112749.png",
                       "/google-docs-addons/Brand_voice_ai/Screenshot%202026-03-29%20112821.png",
                       "/google-docs-addons/Brand_voice_ai/Screenshot%202026-03-29%20112852.png",
                       "/google-docs-addons/Brand_voice_ai/Screenshot%202026-03-29%20112904.png"
                   ]
    },
    {
        "title":  "Chaingurdien",
        "category":  "Google Sheets Add-on",
        "summary":  "Google Sheets add-on project for reports, data automation, dashboards, or workflow operations.",
        "outcome":  "Spreadsheet workflow and reporting improved",
        "stack":  [
                      "Google Sheets",
                      "Apps Script",
                      "Automation",
                      "Reports"
                  ],
        "images":  [
                       "/sheet-add-on/chainGurdien/Screenshot%202026-03-29%20114208.png",
                       "/sheet-add-on/chainGurdien/Screenshot%202026-03-29%20114333.png",
                       "/sheet-add-on/chainGurdien/Screenshot%202026-03-29%20114348.png"
                   ]
    },
    {
        "title":  "Report Genrator",
        "category":  "Google Sheets Add-on",
        "summary":  "Google Sheets add-on project for reports, data automation, dashboards, or workflow operations.",
        "outcome":  "Spreadsheet workflow and reporting improved",
        "stack":  [
                      "Google Sheets",
                      "Apps Script",
                      "Automation",
                      "Reports"
                  ],
        "images":  [
                       "/sheet-add-on/Report-genrator/Screenshot%202026-03-29%20111952.png",
                       "/sheet-add-on/Report-genrator/Screenshot%202026-03-29%20112010.png",
                       "/sheet-add-on/Report-genrator/Screenshot%202026-03-29%20112020.png",
                       "/sheet-add-on/Report-genrator/Screenshot%202026-03-29%20112043.png"
                   ]
    },
    {
        "title":  "Talent Macher",
        "category":  "Google Sheets Add-on",
        "summary":  "Google Sheets add-on project for reports, data automation, dashboards, or workflow operations.",
        "outcome":  "Spreadsheet workflow and reporting improved",
        "stack":  [
                      "Google Sheets",
                      "Apps Script",
                      "Automation",
                      "Reports"
                  ],
        "images":  [
                       "/sheet-add-on/talent%20macher/Screenshot%202026-03-29%20111136.png",
                       "/sheet-add-on/talent%20macher/Screenshot%202026-03-29%20111210.png",
                       "/sheet-add-on/talent%20macher/Screenshot%202026-03-29%20111231.png",
                       "/sheet-add-on/talent%20macher/Screenshot%202026-03-29%20111251.png"
                   ]
    }
];
