-- Run this in Supabase SQL Editor.
-- Then create an Auth user for your admin email in Authentication > Users.

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  description text not null,
  category text not null default 'Office Add-ins',
  author text not null default 'NexaAI Solutions',
  published_date date not null default current_date,
  read_time text not null default '5 min read',
  image_url text not null default '/Logo.png',
  keywords text[] not null default '{}',
  sections jsonb not null default '[]'::jsonb,
  status text not null default 'published' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.blog_posts enable row level security;

drop policy if exists "Published blog posts are public" on public.blog_posts;
create policy "Published blog posts are public"
on public.blog_posts
for select
using (status = 'published');

drop policy if exists "Authenticated users can manage blog posts" on public.blog_posts;
create policy "Authenticated users can manage blog posts"
on public.blog_posts
for all
to authenticated
using (true)
with check (true);

-- Create a public storage bucket named blog-images in Storage.
-- If you prefer SQL and your project allows it, uncomment the insert below.
-- insert into storage.buckets (id, name, public)
-- values ('blog-images', 'blog-images', true)
-- on conflict (id) do update set public = true;

drop policy if exists "Blog images are public" on storage.objects;
create policy "Blog images are public"
on storage.objects
for select
using (bucket_id = 'blog-images');

drop policy if exists "Authenticated users can upload blog images" on storage.objects;
create policy "Authenticated users can upload blog images"
on storage.objects
for insert
to authenticated
with check (bucket_id = 'blog-images');

drop policy if exists "Authenticated users can update blog images" on storage.objects;
create policy "Authenticated users can update blog images"
on storage.objects
for update
to authenticated
using (bucket_id = 'blog-images')
with check (bucket_id = 'blog-images');
