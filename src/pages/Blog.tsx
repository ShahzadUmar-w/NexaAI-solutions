import { Helmet } from "react-helmet-async";
import { ArrowRight, BookOpen, Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import PageShell from "@/components/PageShell";
import { blogPosts, type BlogPost } from "@/data/blogPosts";
import { fetchPublishedBlogPosts } from "@/lib/supabaseBlog";

const siteUrl = "https://officeaddindevelopment.com";
const defaultOgImage = `${siteUrl}/og-office-addin-development.png`;

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);

  useEffect(() => {
    let mounted = true;

    fetchPublishedBlogPosts().then((supabasePosts) => {
      if (!mounted || supabasePosts.length === 0) return;

      setPosts([
        ...supabasePosts,
        ...blogPosts.filter((staticPost) => !supabasePosts.some((post) => post.slug === staticPost.slug)),
      ]);
    });

    return () => {
      mounted = false;
    };
  }, []);

  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "NexaAI Solutions Blog",
    url: `${siteUrl}/blog`,
    description: "Office add-in development guides for Outlook, Excel, Word, PowerPoint, Office.js, and Microsoft Graph.",
    publisher: {
      "@type": "Organization",
      name: "NexaAI Solutions",
      url: siteUrl,
      logo: `${siteUrl}/Logo.png`,
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteUrl}/blog/${post.slug}`,
      datePublished: post.date,
      author: { "@type": "Organization", name: post.author },
    })),
  }), [posts]);

  return (
    <>
      <Helmet>
        <title>Office Add-in Development Blog | Outlook, Excel, Graph Guides</title>
        <meta
          name="description"
          content="SEO-friendly Office add-in development blog with guides for Outlook add-ins, Excel add-ins, Office.js, Microsoft Graph, and Microsoft 365 deployment."
        />
        <link rel="canonical" href={`${siteUrl}/blog`} />
        <meta property="og:title" content="Office Add-in Development Blog | NexaAI Solutions" />
        <meta property="og:description" content="Guides and insights for Microsoft Office add-ins, Office.js, Outlook, Excel, Word, PowerPoint, and Graph integrations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteUrl}/blog`} />
        <meta property="og:image" content={defaultOgImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={defaultOgImage} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <PageShell>
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgba(255,209,61,0.13),transparent_28rem),radial-gradient(circle_at_82%_8%,rgba(225,29,143,0.1),transparent_26rem)]" />
          <div className="section-container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-kicker">
                <BookOpen className="h-4 w-4" />
                Office Add-in Blog
              </span>
              <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-6xl">
                Practical guides for Microsoft 365 add-in projects.
              </h1>
              <p className="text-lg leading-8 text-muted-foreground">
                 Outlook add-in development, Excel automation, Office.js, Microsoft Graph, and secure Microsoft 365 deployment.
              </p>
            </div>

            <div className="mt-10 rounded-3xl border border-slate-200/80 bg-white/[0.78] p-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.035]">
              <div className="flex items-center gap-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-soft dark:border-orange-300/15 dark:bg-orange-300/10 dark:text-orange-200">
                    <Search className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Built for topical authority</p>
                    <p className="text-sm text-muted-foreground">Every article targets real search intent, not keyword stuffing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {posts.map((post) => (
                <article key={post.slug} className="group overflow-hidden rounded-3xl border border-slate-200/80 bg-white/[0.78] text-left shadow-soft backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-slate-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-orange-300/25 dark:hover:bg-white/[0.055]">
                  <a href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-52 overflow-hidden bg-[#0f172a]">
                      <img src={post.image} alt={post.title} loading="lazy" decoding="async" className="h-full w-full object-cover object-top opacity-85 transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
                      <span className="absolute left-4 top-4 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold text-orange-700 dark:border-orange-300/20 dark:bg-orange-300/10 dark:text-orange-100">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap gap-2 text-xs font-semibold text-muted-foreground">
                        <span>{post.date}</span>
                        <span>-</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="mb-3 text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-slate-950 dark:group-hover:text-orange-100">{post.title}</h2>
                      <p className="mb-5 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                      <span className="inline-flex items-center text-sm font-bold text-slate-700 transition-colors group-hover:text-slate-950 dark:text-orange-100 dark:group-hover:text-orange-200">
                        Read guide
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default Blog;
