import type { Metadata } from "next";
import SectionHeader from "../components/section-header";
import { Github, Linkedin, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Team",
};

const executives = [
  {
    name: "President",
    role: "President",
    bio: "Leads club operations, organizes meetings, and represents the club to the university administration.",
    links: {},
  },
  {
    name: "Vice President",
    role: "Vice President",
    bio: "Assists the president in all duties and steps in when needed. Coordinates between teams.",
    links: {},
  },
  {
    name: "Secretary",
    role: "Secretary",
    bio: "Handles communications, meeting notes, and keeps the club organized and on schedule.",
    links: {},
  },
  {
    name: "Treasurer",
    role: "Treasurer",
    bio: "Manages the club budget, fundraising efforts, and equipment purchases.",
    links: {},
  },
];

const leads = [
  {
    name: "Workshop Lead",
    role: "Workshop Lead",
    bio: "Plans and runs technical workshops on topics like web dev, Python, and cybersecurity.",
  },
  {
    name: "Event Coordinator",
    role: "Event Coordinator",
    bio: "Organizes hackathons, guest speakers, and social events throughout the year.",
  },
  {
    name: "Social Media Manager",
    role: "Social Media Manager",
    bio: "Runs the club's Instagram and online presence. Creates flyers and promotional content.",
  },
  {
    name: "Web Developer",
    role: "Web Developer",
    bio: "Builds and maintains the club website. Helps members learn web development.",
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
        <h2 className="mb-6 text-2xl font-bold text-foreground">Team Leads</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leads.map((member) => (
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
