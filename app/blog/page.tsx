import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "../components/section-header";
import { Clock, User, ArrowRight } from "lucide-react";
import { posts } from "../data/posts";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader title="Blog" description="Articles, tutorials, and stories from club members. Want to write a post? Talk to an exec member!" />

      <div className="grid gap-5">
        {posts.map((post, i) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className={`group block animate-fade-up delay-${(i + 1) * 100}`}>
            <article className="relative rounded-2xl border border-border bg-card p-7 card-hover gradient-border">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-dark dark:text-accent">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-card-foreground group-hover:text-sky transition-colors">{post.title}</h2>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-sky group-hover:translate-x-1 transition-all hidden sm:block" />
              </div>
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><User className="h-3.5 w-3.5" />{post.author}</span>
                <span>{post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{post.readTime}</span>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-gradient-to-br from-sky/5 to-accent/5 p-10 text-center animate-fade-up">
        <h2 className="text-2xl font-bold text-foreground">Want to Write for the Blog?</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          We welcome articles from all members — tutorials, project write-ups, opinion pieces, or anything tech-related. Reach out to an exec to get started.
        </p>
      </div>
    </div>
  );
}
