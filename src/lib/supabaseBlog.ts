import type { BlogPost } from "@/data/blogPosts";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const blogTable = "blog_posts";
const imageBucket = "blog-images";

type SupabaseBlogRow = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  category: string;
  author: string;
  published_date: string;
  read_time: string;
  image_url: string;
  keywords: string[];
  sections: BlogPost["sections"];
  status?: string;
};

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

const headers = (token?: string) => ({
  apikey: supabaseAnonKey,
  Authorization: `Bearer ${token || supabaseAnonKey}`,
  "Content-Type": "application/json",
});

const toBlogPost = (row: SupabaseBlogRow): BlogPost => ({
  slug: row.slug,
  title: row.title,
  excerpt: row.excerpt,
  description: row.description,
  category: row.category,
  author: row.author,
  date: row.published_date,
  readTime: row.read_time,
  image: row.image_url,
  keywords: row.keywords || [],
  sections: row.sections || [],
});

const toSupabaseRow = (post: BlogPost): SupabaseBlogRow => ({
  slug: post.slug,
  title: post.title,
  excerpt: post.excerpt,
  description: post.description,
  category: post.category,
  author: post.author,
  published_date: post.date,
  read_time: post.readTime,
  image_url: post.image,
  keywords: post.keywords,
  sections: post.sections,
  status: "published",
});

export const signInSupabaseAdmin = async (email: string, password: string) => {
  if (!isSupabaseConfigured) throw new Error("Supabase env keys missing.");

  const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Supabase login failed. Email/password check karein.");
  }

  return response.json() as Promise<{ access_token: string; refresh_token: string; user: { email?: string } }>;
};

export const fetchPublishedBlogPosts = async () => {
  if (!isSupabaseConfigured) return [];

  const query = new URLSearchParams({
    select: "*",
    status: "eq.published",
    order: "published_date.desc",
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/${blogTable}?${query.toString()}`, {
    headers: headers(),
  });

  if (!response.ok) return [];
  const rows = (await response.json()) as SupabaseBlogRow[];
  return rows.map(toBlogPost);
};

export const fetchPublishedBlogPostBySlug = async (slug: string) => {
  if (!isSupabaseConfigured) return null;

  const query = new URLSearchParams({
    select: "*",
    slug: `eq.${slug}`,
    status: "eq.published",
    limit: "1",
  });

  const response = await fetch(`${supabaseUrl}/rest/v1/${blogTable}?${query.toString()}`, {
    headers: headers(),
  });

  if (!response.ok) return null;
  const rows = (await response.json()) as SupabaseBlogRow[];
  return rows[0] ? toBlogPost(rows[0]) : null;
};

export const publishBlogPost = async (post: BlogPost, token: string) => {
  if (!isSupabaseConfigured) throw new Error("Supabase env keys missing.");

  const response = await fetch(`${supabaseUrl}/rest/v1/${blogTable}?on_conflict=slug`, {
    method: "POST",
    headers: {
      ...headers(token),
      Prefer: "resolution=merge-duplicates,return=representation",
    },
    body: JSON.stringify(toSupabaseRow(post)),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Blog publish failed.");
  }

  const rows = (await response.json()) as SupabaseBlogRow[];
  return toBlogPost(rows[0]);
};

export const uploadBlogImage = async (file: File, token: string) => {
  if (!isSupabaseConfigured) throw new Error("Supabase env keys missing.");

  const safeName = file.name.toLowerCase().replace(/[^a-z0-9.]+/g, "-");
  const path = `${Date.now()}-${safeName}`;
  const response = await fetch(`${supabaseUrl}/storage/v1/object/${imageBucket}/${path}`, {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${token}`,
      "x-upsert": "true",
      "Content-Type": file.type || "application/octet-stream",
    },
    body: file,
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Image upload failed.");
  }

  return `${supabaseUrl}/storage/v1/object/public/${imageBucket}/${path}`;
};
