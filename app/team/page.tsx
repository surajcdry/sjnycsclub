import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "../components/section-header";

export const metadata: Metadata = {
  title: "Team",
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

function MemberCard({ member }: { member: Member }) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 text-center card-hover">
      <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-2 border-border group-hover:border-sky/40 transition-colors">
        <Image
          src={member.photo}
          alt={member.name}
          width={224}
          height={224}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-card-foreground">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-sky">{member.role}</p>
      {member.year && (
        <p className="mt-1 text-xs text-muted-foreground">{member.year}</p>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        title="Our Team"
        description="Meet the people who make the Computer Club possible."
      />

      {/* Executive Board */}
      <section>
        <h2 className="mb-8 text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-gradient-to-b from-sky to-accent" />
          Executive Board
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {executives.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* Faculty */}
      <section className="mt-20">
        <h2 className="mb-8 text-2xl font-bold text-foreground flex items-center gap-3">
          <span className="h-8 w-1 rounded-full bg-gradient-to-b from-muted-foreground/40 to-muted-foreground/10" />
          Faculty Advisers
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-2xl">
          {faculty.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 rounded-2xl border border-border bg-muted/50 p-10 text-center">
        <h2 className="text-2xl font-bold text-foreground">Want to Join the Team?</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          We&apos;re always looking for motivated students to help lead workshops, organize events, and contribute to club projects. Talk to any exec member or drop us an email!
        </p>
      </section>
    </div>
  );
}
