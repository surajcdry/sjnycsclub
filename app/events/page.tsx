"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../components/section-header";
import { Calendar, Clock, MapPin, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { getUpcomingEvents, getPastEvents } from "../data/events";

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents();
  const [showPastEvents, setShowPastEvents] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeader title="Events" description="Workshops, talks, and hackathons throughout the year. Come learn something new!" />

      <section>
        <h2 className="mb-8 text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-gradient-to-b from-sky to-accent" />
          Upcoming Events
        </h2>
        <div className="grid gap-6">
          {upcomingEvents.map((event, i) => (
            <Link key={event.slug} href={`/events/${event.slug}`} className={`group relative rounded-2xl border border-border bg-card overflow-hidden card-hover gradient-border animate-fade-up delay-${(i + 1) * 100} flex flex-col md:flex-row`}>
              {event.coverImage && (
                <div className="bg-muted shrink-0 flex items-center justify-center md:border-r border-border md:w-auto w-full">
                  <Image
                    src={event.coverImage}
                    alt={event.title}
                    width={800}
                    height={450}
                    className="h-[250px] md:h-[300px] w-auto object-contain shadow-sm group-hover:opacity-90 transition-opacity block"
                  />
                </div>
              )}
              <div className="p-7 md:p-8 flex-1 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-sky/10 px-3 py-1 text-xs font-semibold text-sky">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-card-foreground group-hover:text-sky transition-colors">{event.title}</h3>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-sky group-hover:translate-x-1 transition-all flex-shrink-0 ml-4 hidden sm:block" />
                </div>
                <div className="mt-4 flex flex-wrap gap-y-2 gap-x-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-sky/60" />{event.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-sky/60" />{event.time}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-sky/60" />{event.location}</span>
                </div>
                <p className="mt-5 text-muted-foreground leading-relaxed text-base">{event.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20 flex flex-col items-center">
        <button
          onClick={() => setShowPastEvents(!showPastEvents)}
          className="group flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors mb-10"
        >
          {showPastEvents ? (
            <>Hide past events <ChevronUp className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" /></>
          ) : (
            <>View past events <ChevronDown className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" /></>
          )}
        </button>

        {showPastEvents && (
          <div className="w-full animate-fade-in">
            <h2 className="mb-8 text-2xl font-bold text-foreground flex items-center gap-3">
              <span className="h-8 w-1 rounded-full bg-gradient-to-b from-muted-foreground/40 to-muted-foreground/10" />
              Past Events
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {pastEvents.map((event, i) => (
                <Link key={event.slug} href={`/events/${event.slug}`} className={`group rounded-2xl border border-border bg-card overflow-hidden opacity-70 hover:opacity-100 card-hover transition-all animate-fade-up delay-${(i % 5 + 1) * 100}`}>
                  {event.coverImage && (
                    <div className="w-full bg-muted/20 p-4 h-40 flex items-center justify-center">
                      <div className="relative w-full h-full rounded shadow-sm overflow-hidden">
                        <Image
                          src={event.coverImage}
                          alt={event.title}
                          fill
                          className="object-contain object-center group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-xs font-semibold text-muted-foreground">{event.date}</p>
                    <h3 className="mt-2 font-bold text-card-foreground group-hover:text-sky transition-colors">{event.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{event.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
