import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User } from "lucide-react";
import { posts, getPostBySlug } from "../../data/posts";
import Markdown from "../../components/markdown";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-sky transition-colors mb-10 group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to Blog
      </Link>

      <div className="animate-fade-up">
        <div className="flex flex-wrap gap-2 mb-5">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-dark dark:text-accent">{tag}</span>
          ))}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">{post.title}</h1>

        <div className="mt-5 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><User className="h-4 w-4" />{post.author}</span>
          <span>{post.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime}</span>
        </div>
      </div>

      <div className="my-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="animate-fade-up delay-200">
        <Markdown content={post.content} />
      </div>
    </div>
  );
}
