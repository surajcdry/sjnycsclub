import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "../components/section-header";
import { Target, Heart, Rocket, Users, Code, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  {
    icon: Heart,
    title: "Inclusivity",
    description: "Everyone is welcome, regardless of experience level or major. We meet you where you are.",
  },
  {
    icon: Rocket,
    title: "Learning by Doing",
    description: "We believe the best way to learn is by building real things and tackling real challenges.",
  },
  {
    icon: Users,
    title: "Community",
    description: "More than a club — we're a group of friends who support each other's growth.",
  },
];

const stats = [
  { label: "Active Members", value: "110+" },
  { label: "Events per Year", value: "8+" },
  { label: "Workshops Held", value: "10+" },
  { label: "Years Active", value: "5+" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        title="About Us"
        description="Learn more about the SJNY University Computer Club — who we are, what we do, and why we do it."
      />

      {/* Mission */}
      <section className="rounded-xl border border-border bg-card p-8">
        <div className="flex items-center gap-4 mb-4">
          <Image src="/logo2.png" alt="SJ Computer Club" width={48} height={48} className="h-12 w-12" />
          <h2 className="text-2xl font-bold text-card-foreground">Our Mission</h2>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-3xl">
          The SJNY Computer Club exists to inspire and equip students with the skills,
          knowledge, and confidence to thrive in the world of technology. We provide a welcoming
          space for students of all majors to explore programming, computer science concepts, and modern tech
          through hands-on workshops, collaborative projects, and community events.
        </p>
      </section>

      {/* Values */}
      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-bold text-foreground">Our Values</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/15">
                <value.icon className="h-5 w-5 text-accent-dark dark:text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">{value.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-16">
        <div className="grid gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-6 text-center"
            >
              <p className="text-3xl font-bold text-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section className="mt-16">
        <h2 className="mb-8 text-2xl font-bold text-foreground">What We Offer</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <Code className="h-5 w-5 text-sky" />
              <h3 className="font-semibold text-card-foreground">Technical Workshops</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Regular workshops on topics like web development, Python, data structures,
              cybersecurity, and more. All skill levels are welcome.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <Trophy className="h-5 w-5 text-sky" />
              <h3 className="font-semibold text-card-foreground">Competitions & Hackathons</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We participate in hackathons and coding competitions as a team. It&apos;s a great way to
              challenge yourself and learn under pressure.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <Users className="h-5 w-5 text-sky" />
              <h3 className="font-semibold text-card-foreground">Collaborative Projects</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Work with other members on projects that matter — from building tools for the university
              to contributing to open source.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <Rocket className="h-5 w-5 text-sky" />
              <h3 className="font-semibold text-card-foreground">Career Prep</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Resume reviews, mock interviews, and guidance on internships and career paths.
              We help you prepare for what&apos;s next.
            </p>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="mt-16 rounded-xl bg-gradient-to-br from-primary-dark via-primary to-primary-light p-8 text-center text-white dark:from-[#0b101c] dark:via-[#1a2744] dark:to-[#2a3f66]">
        <h2 className="text-2xl font-bold">Ready to Join?</h2>
        <p className="mt-3 text-white/80 max-w-xl mx-auto">
          No experience required. Just show up to our next meeting with curiosity and a willingness to learn.
          We&apos;ll handle the rest.
        </p>
      </section>
    </div>
  );
}
