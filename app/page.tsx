import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Users, BookOpen, Code, Cpu, Lightbulb, Sparkles } from "lucide-react";
import { getUpcomingEvents } from "./data/events";

const features = [
  {
    icon: Code,
    title: "Workshops",
    description: "Hands-on sessions on programming, web dev, cybersecurity, and more.",
    gradient: "from-sky/20 to-sky/5",
    iconColor: "text-sky",
  },
  {
    icon: Cpu,
    title: "Projects",
    description: "Collaborate on real projects that solve problems and build your portfolio.",
    gradient: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    icon: Lightbulb,
    title: "Mentorship",
    description: "Experienced members and alumni guide you through your CS journey.",
    gradient: "from-sky/20 to-accent/10",
    iconColor: "text-sky",
  },
];

export default function Home() {
  const upcomingEvents = getUpcomingEvents().slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light dark:from-[#050a14] dark:via-[#0c1425] dark:to-[#1a2744]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        {/* Floating blobs */}
        <div className="absolute top-20 right-[15%] w-72 h-72 bg-sky/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-blob delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky/10 rounded-full blur-3xl animate-blob delay-1000" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 w-full">
          <div className="flex flex-col-reverse items-start gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="animate-fade-up">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm mb-6">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  St. Joseph&apos;s University &middot; Brooklyn, NY
                </div>
              </div>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white animate-fade-up delay-100">
                SJNY<br />
                <span className="bg-gradient-to-r from-sky via-sky-light to-accent bg-clip-text text-transparent">
                  Computer Club
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-lg animate-fade-up delay-200">
                A community of students passionate about technology, programming, and innovation.
                Whether you&apos;re a beginner or experienced — there&apos;s a place for you here.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 animate-fade-up delay-300">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-primary-dark shadow-lg shadow-accent/25 transition-all hover:shadow-accent/40 hover:scale-105"
                >
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30"
                >
                  See Events
                </Link>
              </div>
            </div>
            <div className="animate-float-slow flex justify-center lg:block">
              <div className="relative">
                <div className="absolute -inset-20 rounded-full bg-sky/25 blur-[80px]" />
                <div className="absolute -inset-14 rounded-full bg-sky/20 blur-[50px]" />
                <div className="absolute -inset-8 rounded-full bg-accent/15 blur-3xl" />
                <div className="absolute -inset-4 rounded-3xl bg-white/10 blur-2xl" />
                <Image
                  src="/logo.png"
                  alt="SJNY Computer Club Logo"
                  width={320}
                  height={160}
                  className="relative w-64 sm:w-80 lg:w-[28rem] drop-shadow-[0_0_40px_rgba(56,189,248,0.5)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* What We Do */}
      <section className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="text-center animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky mb-3">What We Do</p>
          <h2 className="text-4xl font-bold tracking-tight text-foreground">Empowering Students<br />Through Technology</h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative rounded-2xl border border-border bg-card p-8 card-hover animate-fade-up delay-${(i + 1) * 100}`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient}`}>
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-muted/30 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-12 animate-fade-up">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">Coming Up</p>
              <h2 className="text-4xl font-bold tracking-tight text-foreground">Upcoming Events</h2>
            </div>
            <Link href="/events" className="hidden items-center gap-1.5 text-sm font-medium text-sky hover:text-sky-light transition-colors sm:flex">
              View all <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {upcomingEvents.map((event, i) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className={`group relative rounded-2xl border border-border bg-card overflow-hidden card-hover gradient-border animate-fade-up delay-${(i + 1) * 100}`}
              >
                {event.coverImage && (
                  <div className="w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={event.coverImage}
                      alt={event.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky mb-4">
                    <Calendar className="h-3.5 w-3.5" />
                    {event.date}
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground group-hover:text-sky transition-colors">{event.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-sky opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/events" className="text-sm font-medium text-sky hover:underline">View all events</Link>
          </div>
        </div>
      </section>

      {/* Quick Links - Bento Grid */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { href: "/blog", icon: BookOpen, title: "Blog", desc: "Read articles from members", color: "sky" },
            { href: "/resources", icon: Lightbulb, title: "Resources", desc: "Free tools, guides & videos", color: "accent" },
            { href: "/team", icon: Users, title: "Meet the Team", desc: "The people behind the club", color: "sky" },
          ].map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative flex items-center gap-5 rounded-2xl border border-border bg-card p-6 card-hover gradient-border animate-fade-up delay-${(i + 1) * 100}`}
            >
              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-${item.color}/10`}>
                <item.icon className={`h-5 w-5 text-${item.color}`} />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground group-hover:text-sky transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
