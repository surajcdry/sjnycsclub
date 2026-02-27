import type { Metadata } from "next";
import Image from "next/image";
import { Anchor, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "The Crew",
  description:
    "Meet the crew behind the SJNY Computer Club — the builders, organisers, and thinkers who keep the ship moving.",
};

interface Member {
  name: string;
  role: string;
  year?: string;
  photo: string;
}

const executives: Member[] = [
  {
    name: "Suraj Chaudhary",
    role: "President",
    year: "Sophomore",
    photo: "/team/suraj.jpg",
  },
  {
    name: "Joella Azar",
    role: "Vice President",
    year: "Senior",
    photo: "/team/joella.jpg",
  },
  {
    name: "Swornima Bhandari",
    role: "Secretary",
    year: "Junior",
    photo: "/team/swornima.jpg",
  },
  {
    name: "Jawad Zaman",
    role: "Treasurer",
    year: "Junior",
    photo: "/team/jawad.jpg",
  },
];

const faculty: Member[] = [
  {
    name: "Prof. Eleni Zamagias",
    role: "Club Adviser & Assistant Teaching Professor",
    photo: "/team/profZamagias.jpg",
  },
  {
    name: "Dr. Elizabeth Zollinger",
    role: "Chair, Dept. of Mathematics & Computer Science",
    photo: "/team/drZollinger.jpg",
  },
];

// Reusable card for the Execs — large, prominent, glass overlay
function ExecCard({ member, index }: { member: Member; index: number }) {
  // Stagger animations based on index
  const delayClasses = [
    "",
    "delay-100",
    "delay-200",
    "delay-300",
    "delay-400",
  ];
  const delayClass = delayClasses[index % delayClasses.length] || "";

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-border bg-card animate-fade-up card-hover ${delayClass}`}
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Deep gradient from bottom up so text is highly legible */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--glow)_0%,transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Glassmorphism info banner overlaid on the bottom of the photo */}
      <div className="absolute bottom-0 inset-x-0 p-5 md:p-6">
        <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
          <p className="mb-2 inline-block rounded-full border border-sky/30 bg-sky/10 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-sky backdrop-blur-md uppercase">
            {member.role}
          </p>
          <h3 className="text-xl font-bold text-white mb-0.5">
            {member.name}
          </h3>
          {member.year && (
            <p className="text-xs font-medium text-white/70">
              {member.year}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Reusable horizontal card for Faculty
function FacultyCard({ member, index }: { member: Member; index: number }) {
  const delayClass = index === 0 ? "delay-200" : "delay-300";
  return (
    <div
      className={`glass group flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-border p-6 card-hover animate-fade-up ${delayClass}`}
    >
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-2 border-border group-hover:border-sky/40 transition-colors">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="text-center sm:text-left">
        <h3 className="text-lg font-bold text-card-foreground">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-muted-foreground leading-relaxed">
          {member.role}
        </p>
      </div>
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen pb-20">
      {/* 
        Hero Section 
        A strong, dedicated hero gives the page weight instead of just a section header. 
      */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background effects */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120'%3E%3Cpath fill='%23000000' d='M0,64 C360,0 720,128 1080,64 C1260,32 1350,80 1440,64 L1440,120 L0,120 Z'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        <div className="mx-auto max-w-4xl text-center relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 text-muted-foreground text-sm font-medium mb-6 backdrop-blur-sm">
            <Navigation className="w-4 h-4 text-sky" />
            <span>The Navigators</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Meet the Crew.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A ship doesn&apos;t sail on autopilot. Getting a tech club off the
            ground takes builders, organizers, and people willing to do the
            messy work. These are the people charting the course.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        {/* 
          Executive Board Grid
          Using a CSS grid with spans so it looks more like a masonry/bento layout 
          rather than a rigid spreadsheet. With 4 execs, a 2x2 grid works beautifully.
        */}
        <section className="mb-32">
          <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {executives.map((member, i) => (
              <ExecCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </section>

        {/* 
          The "Empty Seat" Invitation Banner 
          Instead of an empty card, we give it a full-width cinematic banner. 
        */}
        <section className="mb-32 animate-fade-up delay-300">
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16 text-center card-hover dot-pattern">
            {/* Subtle animated ocean gradient behind the text */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 animate-gradient"
              style={{ background: "linear-gradient(135deg, var(--sky), var(--primary), var(--accent))", backgroundSize: "200% 200%" }} />

            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted border border-border group-hover:border-sky/50 transition-colors">
                <Anchor className="h-8 w-8 text-muted-foreground group-hover:text-sky transition-colors animate-float-slow" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                The Missing Crewmate
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                We&apos;re always looking for restless builders, designers, and organizers.
                Whether you want to lead workshops or run the ship&apos;s logistics — there&apos;s a seat here for you.
              </p>
              <div className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-foreground text-background transition-transform group-hover:scale-105">
                Positions open next semester
              </div>
            </div>
          </div>
        </section>

        {/* Faculty Advisers */}
        <section className="animate-fade-up delay-400">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground">Faculty Advisers</h2>
            <p className="text-muted-foreground mt-2">The seasoned captains who guide our club.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {faculty.map((member, i) => (
              <FacultyCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
