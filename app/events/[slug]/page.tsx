import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, MapPin } from "lucide-react";
import { events, getEventBySlug } from "../../data/events";
import Markdown from "../../components/markdown";
import PhotoGallery from "../../components/photo-gallery";

interface Props { params: Promise<{ slug: string }>; }

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };
  return { title: event.title };
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/events" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-sky transition-colors mb-10 group">
        <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to Events
      </Link>

      <div className="animate-fade-up">
        <div className="flex flex-wrap gap-2 mb-5">
          {event.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-sky/10 px-3 py-1 text-xs font-semibold text-sky">{tag}</span>
          ))}
          {event.past && (
            <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">Past Event</span>
          )}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">{event.title}</h1>

        <div className="mt-5 flex flex-wrap gap-5 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-sky/60" />{event.date}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-sky/60" />{event.time}</span>
          <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-sky/60" />{event.location}</span>
        </div>

        <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{event.description}</p>

        {event.coverImage && (
          <div className="mt-8 overflow-hidden rounded-xl">
            <Image
              src={event.coverImage}
              alt={event.title}
              width={800}
              height={450}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}
      </div>

      <div className="my-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="animate-fade-up delay-200">
        <Markdown content={event.details} />
      </div>

      {event.photos && event.photos.length > 0 && (
        <>
          <div className="my-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="animate-fade-up delay-300">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-6">
              <span className="h-8 w-1 rounded-full bg-gradient-to-b from-sky to-accent" />
              Photos
            </h2>
            <PhotoGallery photos={event.photos} eventTitle={event.title} />
          </div>
        </>
      )}
    </div>
  );
}
