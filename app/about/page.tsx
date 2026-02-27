import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "../components/section-header";
import { Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Stop building ships. Start yearning for the sea. Learn about the SJNY Computer Club — who we are and why we exist.",
};

const stats = [
  { label: "Active Members", value: "110+" },
  { label: "Events per Year", value: "8+" },
  { label: "Workshops Held", value: "10+" },
  { label: "Years Active", value: "5+" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <SectionHeader
        title="About Us"
        description="Stop Building Ships. Start Yearning for the Sea."
      />

      {/* Opening hook */}
      <section className="mt-10 space-y-5 animate-fade-up">
        <p className="text-lg leading-relaxed text-muted-foreground">
          If you&apos;ve spent your time at St. Joseph&apos;s feeling like
          campus is just a place you commute to between classes — you&apos;re
          not alone. Most campus life feels like a checklist: show up, get the
          credits, go home.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          The Computer Club isn&apos;t another box to check. We aren&apos;t
          here to give you more homework. We&apos;re here because we believe
          that the ability to build things is the closest thing we have to a{" "}
          <span className="font-semibold text-foreground">superpower.</span>
        </p>
      </section>

      {/* Sea quote */}
      <section className="mt-14 animate-fade-up delay-100">
        <blockquote className="border-l-2 border-accent pl-6 space-y-3">
          <p className="text-2xl font-bold leading-snug text-foreground">
            If you want to build a ship, don&apos;t start by gathering wood and
            assigning tasks.
          </p>
          <p className="text-2xl font-bold leading-snug gradient-text">
            Teach people to yearn for the vast and endless sea.
          </p>
        </blockquote>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          At SJNY, we&apos;ve spent enough time looking at the wood — the
          syntax, the logic, the theory. It&apos;s time we look at the horizon.
        </p>
      </section>

      {/* Stats */}
      <section className="mt-14 animate-fade-up delay-200">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-card p-5 text-center"
            >
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy of the sea */}
      <section className="mt-16 animate-fade-up delay-300">
        <h2 className="text-xl font-bold text-foreground mb-6">
          The Philosophy of the Sea
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-foreground mb-1">
              Agency Over Permission
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We don&apos;t wait for a syllabus to tell us what&apos;s worth
              learning. We &ldquo;seek forgiveness, not permission.&rdquo; If we
              see a problem on campus or an idea in our heads, we build the
              solution ourselves.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">
              The Beauty of the Messy Build
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We value the &ldquo;scrappy&rdquo; over the
              &ldquo;perfect.&rdquo; This is a lab for the restless — a place
              to share your half-finished projects, your broken code, and your
              &ldquo;what if&rdquo; moments.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-1">
              Small Crew, Big Ocean
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Being a small community in Brooklyn is our edge. We aren&apos;t
              just faces in a massive lecture hall. We are a tight-knit crew of
              builders, designers, and thinkers who actually know each
              other&apos;s names.
            </p>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="mt-16 animate-fade-up delay-400">
        <h2 className="text-xl font-bold text-foreground mb-2">
          Who This Is For
        </h2>
        <p className="text-muted-foreground mb-6">
          You don&apos;t need to be a &ldquo;computer person&rdquo; to belong
          here. You just need to be curious.
        </p>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>
              If you&apos;ve ever looked at an app and thought,{" "}
              <em>&ldquo;I could make this better.&rdquo;</em>
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>
              If you&apos;ve ever wanted to turn a side-hustle into a digital
              reality.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
            <span>
              If you&apos;re tired of &ldquo;seeming&rdquo; active and actually
              want to <strong className="text-foreground">be</strong> active.
            </span>
          </li>
        </ul>
        <p className="mt-8 text-muted-foreground leading-relaxed">
          We provide the tools and the community. You bring the hunger.
        </p>
      </section>

      {/* CTA */}
      <section className="mt-16 rounded-2xl overflow-hidden relative animate-fade-up delay-500">
        <div
          className="absolute inset-0 animate-gradient"
          style={{
            background:
              "linear-gradient(135deg, var(--primary-dark), var(--primary), var(--primary-light), #1a3a5c)",
            backgroundSize: "300% 300%",
          }}
        />
        <div className="relative p-10 text-center">
          <Waves className="h-7 w-7 text-white/50 mx-auto mb-5 animate-float" />
          <p className="text-2xl font-bold text-white">
            Don&apos;t just learn to code.
          </p>
          <p className="mt-2 text-lg text-white/80">
            Join us, and let&apos;s learn to love the sea.
          </p>
        </div>
      </section>
    </div>
  );
}
