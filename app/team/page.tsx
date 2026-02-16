import type { Metadata } from "next";
import SectionHeader from "../components/section-header";
import { Github, Linkedin, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Team",
};

const executives = [
  {
    name: "Suraj Chaudhary",
    role: "President",
    bio: "Leads club operations, organizes meetings, and represents the club to the university administration.",
    links: {},
  },
  {
    name: "Swornima Bhandari",
    role: "Vice President",
    bio: "Assists the president in all duties and steps in when needed. Coordinates between teams.",
    links: {},
  },
  {
    name: "Joella Azar",
    role: "Secretary",
    bio: "Handles communications, meeting notes, and keeps the club organized and on schedule.",
    links: {},
  },
  {
    name: "Jawad Zaman",
    role: "Treasurer",
    bio: "Manages the club budget, fundraising efforts, and equipment purchases.",
    links: {},
  },
];

const advisors = [
  {
    name: "Eleni Nicole Zamagias",
    role: "Teaching Instructor",
    bio: "Teaching Instructor in Mathematics and Computer Science at SJNY Brooklyn. Specializes in mathematics and computer science education, statistical data science, and regression analysis.",
    links: {},
  },
  {
    name: "Elizabeth Zollinger, Ph.D.",
    role: "Associate Chair and Associate Professor",
    bio: "Associate Chair and Associate Professor of Mathematics and Computer Science. Teaches calculus, differential equations, and statistics. Research interests include celestial mechanics and dynamical systems.",
    links: {},
  },
];

function MemberCard({
  member,
}: {
  member: {
    name: string;
    role: string;
    bio: string;
    links?: { github?: string; linkedin?: string; website?: string };
  };
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-xl font-bold text-accent-dark dark:text-accent">
        {member.name.charAt(0)}
      </div>
      <h3 className="mt-4 font-semibold text-card-foreground">{member.name}</h3>
      <p className="text-sm font-medium text-sky">{member.role}</p>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
      {member.links && Object.keys(member.links).length > 0 && (
        <div className="mt-4 flex gap-2">
          {member.links.github && (
            <a
              href={member.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {member.links.linkedin && (
            <a
              href={member.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          )}
          {member.links.website && (
            <a
              href={member.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-4 w-4" />
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        title="Our Team"
        description="Meet the people who make the Computer Club run. Interested in joining the exec team? Reach out to us!"
      />

      <section>
        <h2 className="mb-6 text-2xl font-bold text-foreground">Executive Board</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {executives.map((member) => (
            <MemberCard key={member.role} member={member} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-foreground">Club Advisors</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {advisors.map((member) => (
            <MemberCard key={member.role} member={member} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-xl border border-border bg-muted/50 p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground">Want to Join the Team?</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          We&apos;re always looking for motivated students to help lead workshops, organize events, and contribute to club projects. Talk to any exec member or drop us an email!
        </p>
      </section>
    </div>
  );
}
