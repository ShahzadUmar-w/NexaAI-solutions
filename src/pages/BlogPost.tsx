import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, CheckCircle2, Tag } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import { blogPosts, findBlogPostBySlug, type BlogPost as BlogPostType } from "@/data/blogPosts";
import { fetchPublishedBlogPostBySlug } from "@/lib/supabaseBlog";

const siteUrl = "https://officeaddindevelopment.com";
const localDraftsKey = "nexa_blog_drafts";

const getAbsoluteImageUrl = (image: string) => {
  if (image.startsWith("data:")) return `${siteUrl}/Logo.png`;
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return `${siteUrl}${image}`;
};

const getLocalDrafts = (): BlogPostType[] => {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(window.localStorage.getItem(localDraftsKey) || "[]");
  } catch {
    return [];
  }
};

const getRelatedLinks = (post: BlogPostType) => {
  const text = `${post.title} ${post.category} ${post.keywords.join(" ")}`.toLowerCase();

  if (text.includes("outlook") || text.includes("salesforce")) {
    return [
      { label: "Outlook Add-in Development", href: "/outlook-add-in-development" },
      { label: "Outlook CRM Case Study", href: "/case-studies/outlook-crm-add-in" },
      { label: "Outlook Portfolio Screens", href: "/portfolio/outlook-add-in-outlook-crm" },
    ];
  }

  if (text.includes("excel") || text.includes("quickbooks")) {
    return [
      { label: "Excel Add-in Development", href: "/excel-add-in-development" },
      { label: "Excel Reporting Case Study", href: "/case-studies/excel-reporting-automation" },
      { label: "Excel Portfolio Screens", href: "/portfolio" },
    ];
  }

  if (text.includes("word") || text.includes("sharepoint")) {
    return [
      { label: "Word Add-in Development", href: "/word-add-in-development" },
      { label: "Microsoft Graph Integration", href: "/microsoft-graph-integration" },
      { label: "Word Portfolio Screens", href: "/portfolio" },
    ];
  }

  if (text.includes("powerpoint")) {
    return [
      { label: "PowerPoint Add-in Development", href: "/powerpoint-add-in-development" },
      { label: "Portfolio Examples", href: "/portfolio" },
      { label: "Contact for Proposal Automation", href: "/contact" },
    ];
  }

  return [
    { label: "Office Add-in Services", href: "/services" },
    { label: "Microsoft Graph Integration", href: "/microsoft-graph-integration" },
    { label: "Portfolio Examples", href: "/portfolio" },
  ];
};

const BlogPost = () => {
  const { slug = "" } = useParams();
  const localDrafts = useMemo(() => getLocalDrafts(), []);
  const fallbackPost = findBlogPostBySlug(slug) || localDrafts.find((item) => item.slug === slug) || blogPosts[0];
  const [post, setPost] = useState<BlogPostType>(fallbackPost);
  const canonicalUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = getAbsoluteImageUrl(post.image);
  const relatedLinks = getRelatedLinks(post);

  useEffect(() => {
    let mounted = true;
    setPost(fallbackPost);

    fetchPublishedBlogPostBySlug(slug).then((supabasePost) => {
      if (mounted && supabasePost) setPost(supabasePost);
    });

    return () => {
      mounted = false;
    };
  }, [fallbackPost, slug]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: imageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "NexaAI Solutions",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/Logo.png`,
      },
    },
    mainEntityOfPage: canonicalUrl,
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | NexaAI Solutions Blog</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <PageShell>
        <article className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(255,209,61,0.13),transparent_28rem),radial-gradient(circle_at_84%_10%,rgba(225,29,143,0.1),transparent_28rem)]" />
          <div className="section-container relative z-10">
            <Button variant="heroOutline" asChild className="mb-8">
              <a href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </a>
            </Button>

            <div className="grid gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:items-center">
              <div className="text-left">
                <span className="section-kicker">
                  <Tag className="h-4 w-4" />
                  {post.category}
                </span>
                <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-6xl">{post.title}</h1>
                <p className="mb-6 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">{post.author}</span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">{post.date}</span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">{post.readTime}</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-soft-lg">
                <img src={post.image} alt={post.title} decoding="async" fetchPriority="high" className="aspect-[16/10] w-full rounded-[1.5rem] object-cover object-top" />
              </div>
            </div>

            <div className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-left md:p-10">
              {post.sections.map((section) => (
                <section key={section.heading} className="mb-10 last:mb-0">
                  <h2 className="mb-4 text-2xl font-bold text-foreground">{section.heading}</h2>
                  <div className="space-y-4 text-base leading-8 text-muted-foreground">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.bullets && (
                    <div className="mt-5 grid gap-3">
                      {section.bullets.map((bullet) => (
                        <p key={bullet} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-300" />
                          {bullet}
                        </p>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-left">
              <h2 className="mb-4 text-xl font-bold text-foreground">Related services and examples</h2>
              <div className="grid gap-3 md:grid-cols-3">
                {relatedLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-foreground transition-colors hover:border-orange-300/25 hover:bg-white/[0.065]"
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 text-orange-300 transition-transform group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-orange-300/15 bg-orange-300/10 p-8 text-left">
              <div className="grid gap-6 md:grid-cols-[1fr,auto] md:items-center">
                <div>
                  <h2 className="mb-2 text-2xl font-bold text-foreground">Need this built for your Microsoft 365 team?</h2>
                  <p className="text-sm leading-6 text-muted-foreground">Share your workflow and we can plan an Outlook, Excel, Word, PowerPoint, or Graph add-in around it.</p>
                </div>
                <Button variant="hero" size="lg" asChild>
                  <a href="/contact">
                    Discuss Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </PageShell>
    </>
  );
};

export default BlogPost;
