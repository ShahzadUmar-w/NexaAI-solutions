import { Helmet } from "react-helmet-async";
import { Download, ImagePlus, Lock, LogOut, Plus, Save } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import PageShell from "@/components/PageShell";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/data/blogPosts";
import {
  fetchPublishedBlogPosts,
  isSupabaseConfigured,
  publishBlogPost,
  signInSupabaseAdmin,
  uploadBlogImage,
} from "@/lib/supabaseBlog";

const localDraftsKey = "nexa_blog_drafts";
const localSessionKey = "nexa_admin_session";
const supabaseTokenKey = "nexa_supabase_token";

const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || "shahzad890.it@gmail.com";
const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || "nexa-admin-2026";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const emptyPost = (): BlogPost => ({
  slug: "",
  title: "",
  excerpt: "",
  description: "",
  category: "Office Add-ins",
  author: "NexaAI Solutions",
  date: new Date().toISOString().slice(0, 10),
  readTime: "5 min read",
  image: "/Logo.png",
  keywords: [],
  sections: [
    {
      heading: "Introduction",
      body: [""],
      bullets: [],
    },
  ],
});

const readDrafts = (): BlogPost[] => {
  try {
    return JSON.parse(window.localStorage.getItem(localDraftsKey) || "[]");
  } catch {
    return [];
  }
};

const Admin = () => {
  const [isAuthed, setIsAuthed] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [drafts, setDrafts] = useState<BlogPost[]>([]);
  const [post, setPost] = useState<BlogPost>(emptyPost);
  const [keywordInput, setKeywordInput] = useState("");
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [accessToken, setAccessToken] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    setIsAuthed(window.localStorage.getItem(localSessionKey) === "true");
    setAccessToken(window.localStorage.getItem(supabaseTokenKey) || "");
    setDrafts(readDrafts());

    fetchPublishedBlogPosts().then((posts) => {
      if (posts.length > 0) setDrafts(posts);
    });
  }, []);

  const exportJson = useMemo(() => JSON.stringify(drafts, null, 2), [drafts]);

  const login = async (event: FormEvent) => {
    event.preventDefault();

    if (isSupabaseConfigured) {
      try {
        const session = await signInSupabaseAdmin(loginEmail.trim(), loginPassword);
        window.localStorage.setItem(localSessionKey, "true");
        window.localStorage.setItem(supabaseTokenKey, session.access_token);
        setAccessToken(session.access_token);
        setIsAuthed(true);
        setLoginError("");

        const posts = await fetchPublishedBlogPosts();
        if (posts.length > 0) setDrafts(posts);
        return;
      } catch (error) {
        setLoginError(error instanceof Error ? error.message : "Supabase login failed.");
        return;
      }
    }

    if (loginEmail.trim() === adminEmail && loginPassword === adminPassword) {
      window.localStorage.setItem(localSessionKey, "true");
      setIsAuthed(true);
      setLoginError("");
      return;
    }

    setLoginError("Email ya password match nahi ho raha.");
  };

  const logout = () => {
    window.localStorage.removeItem(localSessionKey);
    window.localStorage.removeItem(supabaseTokenKey);
    setIsAuthed(false);
    setAccessToken("");
  };

  const updatePost = <K extends keyof BlogPost>(key: K, value: BlogPost[K]) => {
    setPost((current) => ({
      ...current,
      [key]: value,
      slug: key === "title" && !current.slug ? slugify(String(value)) : current.slug,
    }));
  };

  const updateSection = (index: number, key: "heading" | "bodyText" | "bulletsText", value: string) => {
    setPost((current) => {
      const sections = [...current.sections];
      const section = sections[index];
      if (key === "heading") section.heading = value;
      if (key === "bodyText") section.body = value.split("\n").filter(Boolean);
      if (key === "bulletsText") section.bullets = value.split("\n").filter(Boolean);
      return { ...current, sections };
    });
  };

  const addSection = () => {
    setPost((current) => ({
      ...current,
      sections: [...current.sections, { heading: "New section", body: [""], bullets: [] }],
    }));
  };

  const handleImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      updatePost("image", String(reader.result));
    };
    setSelectedImageFile(file);
    reader.readAsDataURL(file);
  };

  const saveDraft = async () => {
    if (!post.title.trim()) {
      setStatus("Title required hai.");
      return;
    }

    setStatus("Publishing...");

    let image = post.image;
    try {
      if (isSupabaseConfigured && accessToken && selectedImageFile) {
        image = await uploadBlogImage(selectedImageFile, accessToken);
      }
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Image upload failed.");
      return;
    }

    const finalPost: BlogPost = {
      ...post,
      slug: post.slug || slugify(post.title),
      image,
      keywords: keywordInput
        .split(",")
        .map((keyword) => keyword.trim())
        .filter(Boolean),
      description: post.description || post.excerpt,
    };

    if (isSupabaseConfigured && accessToken) {
      try {
        const publishedPost = await publishBlogPost(finalPost, accessToken);
        const nextDrafts = [publishedPost, ...drafts.filter((item) => item.slug !== publishedPost.slug)];
        setDrafts(nextDrafts);
        setPost(publishedPost);
        setSelectedImageFile(null);
        setStatus("Published to Supabase. Blog page par live show ho jayega.");
        return;
      } catch (error) {
        setStatus(error instanceof Error ? error.message : "Supabase publish failed.");
        return;
      }
    }

    const nextDrafts = [finalPost, ...drafts.filter((item) => item.slug !== finalPost.slug)];
    window.localStorage.setItem(localDraftsKey, JSON.stringify(nextDrafts));
    setDrafts(nextDrafts);
    setStatus("Local draft saved. Supabase env keys add karne ke baad publish database me hoga.");
  };

  const downloadDrafts = () => {
    const blob = new Blob([exportJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "blog-drafts.json";
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Helmet>
        <title>Admin Blog Editor | NexaAI Solutions</title>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="canonical" href="https://officeaddindevelopment.com/admin" />
      </Helmet>

      <PageShell>
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,209,61,0.12),transparent_28rem),radial-gradient(circle_at_84%_12%,rgba(225,29,143,0.1),transparent_28rem)]" />
          <div className="section-container relative z-10">
            {!isAuthed ? (
              <div className="mx-auto max-w-xl rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 text-left shadow-soft-lg">
                <span className="section-kicker">
                  <Lock className="h-4 w-4" />
                  Admin Login
                </span>
                <h1 className="mb-4 text-3xl font-bold text-foreground">Blog admin area</h1>
                <p className="mb-6 text-sm leading-6 text-muted-foreground">
                  {isSupabaseConfigured
                    ? "Login with your Supabase Auth user to publish blog posts and upload images."
                    : "Supabase env keys missing hain, is liye local draft mode active hai."}
                </p>
                <form onSubmit={login} className="space-y-4">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-foreground">Email</span>
                    <input
                      value={loginEmail}
                      onChange={(event) => setLoginEmail(event.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none focus:border-orange-300/45"
                      placeholder={adminEmail}
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-foreground">Password</span>
                    <input
                      type="password"
                      value={loginPassword}
                      onChange={(event) => setLoginPassword(event.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none focus:border-orange-300/45"
                      placeholder="Password"
                    />
                  </label>
                  {loginError && <p className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-100">{loginError}</p>}
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Login
                  </Button>
                </form>
                <p className="mt-5 rounded-xl border border-orange-300/15 bg-orange-300/10 p-4 text-xs leading-5 text-orange-100">
                  {isSupabaseConfigured
                    ? "Supabase me Authentication > Users se admin user create karein. Us email/password se login hoga."
                    : `Fallback credentials: ${adminEmail} / nexa-admin-2026. Supabase add karne ke baad ye fallback use nahi hoga.`}
                </p>
              </div>
            ) : (
              <div className="grid gap-8 lg:grid-cols-[1fr,0.72fr]">
                <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-left shadow-soft-lg">
                  <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-center">
                    <div>
                      <span className="section-kicker">Blog Editor</span>
                      <h1 className="text-3xl font-bold text-foreground">{isSupabaseConfigured ? "Publish SEO blog post" : "Create SEO blog draft"}</h1>
                    </div>
                    <Button variant="heroOutline" onClick={logout}>
                      <LogOut className="h-4 w-4" />
                      Logout
                    </Button>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <label className="block md:col-span-2">
                      <span className="mb-2 block text-sm font-semibold text-foreground">SEO Title</span>
                      <input value={post.title} onChange={(event) => updatePost("title", event.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none focus:border-orange-300/45" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-foreground">Slug</span>
                      <input value={post.slug} onChange={(event) => updatePost("slug", slugify(event.target.value))} className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none focus:border-orange-300/45" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-foreground">Category</span>
                      <input value={post.category} onChange={(event) => updatePost("category", event.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none focus:border-orange-300/45" />
                    </label>
                    <label className="block md:col-span-2">
                      <span className="mb-2 block text-sm font-semibold text-foreground">Meta Description</span>
                      <textarea value={post.description} onChange={(event) => updatePost("description", event.target.value)} rows={3} className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none focus:border-orange-300/45" />
                    </label>
                    <label className="block md:col-span-2">
                      <span className="mb-2 block text-sm font-semibold text-foreground">Excerpt</span>
                      <textarea value={post.excerpt} onChange={(event) => updatePost("excerpt", event.target.value)} rows={3} className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none focus:border-orange-300/45" />
                    </label>
                    <label className="block md:col-span-2">
                      <span className="mb-2 block text-sm font-semibold text-foreground">Keywords, comma separated</span>
                      <input value={keywordInput} onChange={(event) => setKeywordInput(event.target.value)} placeholder="Outlook add-in, Office.js, Microsoft Graph" className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none focus:border-orange-300/45" />
                    </label>
                    <label className="block md:col-span-2">
                      <span className="mb-2 block text-sm font-semibold text-foreground">Feature Image</span>
                      <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.025] p-4">
                        <input type="file" accept="image/*" onChange={handleImage} className="text-sm text-muted-foreground" />
                        <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                          <ImagePlus className="h-4 w-4" />
                          {isSupabaseConfigured ? "Image Supabase Storage bucket blog-images me upload hogi." : "Supabase env keys missing hain, abhi image local preview me rahegi."}
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="mt-6 space-y-5">
                    {post.sections.map((section, index) => (
                      <div key={index} className="rounded-2xl border border-white/10 bg-white/[0.025] p-4">
                        <label className="block">
                          <span className="mb-2 block text-sm font-semibold text-foreground">Section Heading</span>
                          <input value={section.heading} onChange={(event) => updateSection(index, "heading", event.target.value)} className="w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none focus:border-orange-300/45" />
                        </label>
                        <label className="mt-4 block">
                          <span className="mb-2 block text-sm font-semibold text-foreground">Paragraphs, one per line</span>
                          <textarea value={section.body.join("\n")} onChange={(event) => updateSection(index, "bodyText", event.target.value)} rows={5} className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none focus:border-orange-300/45" />
                        </label>
                        <label className="mt-4 block">
                          <span className="mb-2 block text-sm font-semibold text-foreground">Bullets, one per line</span>
                          <textarea value={(section.bullets || []).join("\n")} onChange={(event) => updateSection(index, "bulletsText", event.target.value)} rows={4} className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-foreground outline-none focus:border-orange-300/45" />
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button variant="heroOutline" onClick={addSection}>
                      <Plus className="h-4 w-4" />
                      Add Section
                    </Button>
                    <Button variant="hero" onClick={saveDraft}>
                      <Save className="h-4 w-4" />
                      {isSupabaseConfigured ? "Publish Post" : "Save Draft"}
                    </Button>
                  </div>
                  {status && <p className="mt-4 rounded-xl border border-orange-300/15 bg-orange-300/10 p-4 text-sm text-orange-100">{status}</p>}
                </div>

                <aside className="space-y-5 text-left">
                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-soft">
                    <h2 className="mb-4 text-xl font-bold text-foreground">Preview</h2>
                    <img src={post.image} alt="Blog preview" className="mb-4 aspect-video w-full rounded-2xl object-cover object-top" />
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-200">{post.category}</p>
                    <h3 className="mb-3 text-2xl font-bold text-foreground">{post.title || "Blog title preview"}</h3>
                    <p className="text-sm leading-6 text-muted-foreground">{post.excerpt || "Short excerpt preview will appear here."}</p>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-soft">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <h2 className="text-xl font-bold text-foreground">Saved Drafts</h2>
                      <Button variant="heroOutline" size="sm" onClick={downloadDrafts}>
                        <Download className="h-4 w-4" />
                        Export
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {drafts.length === 0 && <p className="text-sm text-muted-foreground">No drafts yet.</p>}
                      {drafts.map((draft) => (
                        <a key={draft.slug} href={`/blog/${draft.slug}`} className="block rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-colors hover:border-orange-300/25">
                          <p className="font-bold text-foreground">{draft.title}</p>
                          <p className="mt-1 text-xs text-muted-foreground">/blog/{draft.slug}</p>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-orange-300/15 bg-orange-300/10 p-5 text-sm leading-6 text-orange-100">
                    SEO note: Supabase posts public blog page par show honge. Best SEO ke liye important evergreen posts ko sitemap me bhi add karein ya static data me mirror karein.
                  </div>
                </aside>
              </div>
            )}
          </div>
        </section>
      </PageShell>
    </>
  );
};

export default Admin;
