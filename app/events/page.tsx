import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "../components/section-header";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { getUpcomingEvents, getPastEvents } from "../data/events";

export const metadata: Metadata = { title: "Events" };

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader title="Events" description="Workshops, talks, and hackathons throughout the year. Come learn something new!" />

      <section>
        <h2 className="mb-8 text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-gradient-to-b from-sky to-accent" />
          Upcoming Events
        </h2>
        <div className="grid gap-5">
          {upcomingEvents.map((event, i) => (
            <Link key={event.slug} href={`/events/${event.slug}`} className={`group relative rounded-2xl border border-border bg-card p-7 card-hover gradient-border animate-fade-up delay-${(i + 1) * 100}`}>
              <div className="flex flex-wrap gap-2 mb-4">
                {event.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-sky/10 px-3 py-1 text-xs font-semibold text-sky">{tag}</span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-card-foreground group-hover:text-sky transition-colors">{event.title}</h3>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-sky group-hover:translate-x-1 transition-all hidden sm:block" />
              </div>
              <div className="mt-3 flex flex-wrap gap-5 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-sky/60" />{event.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-sky/60" />{event.time}</span>
                <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-sky/60" />{event.location}</span>
              </div>
              <p className="mt-3 text-muted-foreground leading-relaxed">{event.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="mb-8 text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-gradient-to-b from-muted-foreground/40 to-muted-foreground/10" />
          Past Events
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {pastEvents.map((event, i) => (
            <Link key={event.slug} href={`/events/${event.slug}`} className={`group rounded-2xl border border-border bg-card p-6 opacity-70 hover:opacity-100 card-hover transition-all animate-fade-up delay-${(i + 1) * 100}`}>
              <p className="text-xs font-semibold text-muted-foreground">{event.date}</p>
              <h3 className="mt-2 font-bold text-card-foreground group-hover:text-sky transition-colors">{event.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{event.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
