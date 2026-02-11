import type { Metadata } from "next";
import SectionHeader from "../components/section-header";
import { ExternalLink, BookOpen, Video, Wrench, GraduationCap, Code, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
};

const categories = [
  {
    title: "Learn to Code",
    icon: Code,
    description: "Interactive platforms and courses to start coding or sharpen your skills.",
    links: [
      { name: "freeCodeCamp", url: "https://www.freecodecamp.org/", description: "Free, project-based coding curriculum" },
      { name: "The Odin Project", url: "https://www.theodinproject.com/", description: "Full-stack web dev curriculum" },
      { name: "Codecademy", url: "https://www.codecademy.com/", description: "Interactive coding lessons" },
      { name: "CS50 (Harvard)", url: "https://cs50.harvard.edu/x/", description: "Harvard's intro to CS — free on edX" },
      { name: "Khan Academy Computing", url: "https://www.khanacademy.org/computing", description: "Free computing courses and exercises" },
    ],
  },
  {
    title: "YouTube Channels",
    icon: Video,
    description: "Great channels for learning programming and computer science concepts.",
    links: [
      { name: "Fireship", url: "https://www.youtube.com/@Fireship", description: "Fast-paced, modern web dev content" },
      { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia", description: "Web dev tutorials and crash courses" },
      { name: "The Coding Train", url: "https://www.youtube.com/@TheCodingTrain", description: "Creative coding and visual projects" },
      { name: "CS Dojo", url: "https://www.youtube.com/@CSDojo", description: "Data structures, algorithms, and career tips" },
      { name: "NetworkChuck", url: "https://www.youtube.com/@NetworkChuck", description: "Networking, Linux, and cybersecurity" },
    ],
  },
  {
    title: "Practice & Challenges",
    icon: GraduationCap,
    description: "Platforms to practice coding problems and prepare for competitions.",
    links: [
      { name: "LeetCode", url: "https://leetcode.com/", description: "Coding interview prep and challenges" },
      { name: "HackerRank", url: "https://www.hackerrank.com/", description: "Practice coding in many languages" },
      { name: "Codewars", url: "https://www.codewars.com/", description: "Code challenges (kata) with community solutions" },
      { name: "Advent of Code", url: "https://adventofcode.com/", description: "Annual December coding challenge" },
      { name: "Project Euler", url: "https://projecteuler.net/", description: "Math + programming challenges" },
    ],
  },
  {
    title: "Free Tools & Software",
    icon: Wrench,
    description: "Essential tools every student developer should know about.",
    links: [
      { name: "GitHub Student Pack", url: "https://education.github.com/pack", description: "Free dev tools for students" },
      { name: "Visual Studio Code", url: "https://code.visualstudio.com/", description: "Free, powerful code editor" },
      { name: "Figma", url: "https://www.figma.com/", description: "Free design tool for UI/UX" },
      { name: "Replit", url: "https://replit.com/", description: "Online IDE — code from your browser" },
      { name: "Vercel", url: "https://vercel.com/", description: "Free hosting for web projects" },
    ],
  },
  {
    title: "Documentation & References",
    icon: BookOpen,
    description: "Official docs and references to keep handy.",
    links: [
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/", description: "The gold standard for web docs" },
      { name: "Python Docs", url: "https://docs.python.org/3/", description: "Official Python documentation" },
      { name: "DevDocs", url: "https://devdocs.io/", description: "Unified docs for many languages/frameworks" },
      { name: "W3Schools", url: "https://www.w3schools.com/", description: "Beginner-friendly web references" },
      { name: "Stack Overflow", url: "https://stackoverflow.com/", description: "Community Q&A for developers" },
    ],
  },
  {
    title: "Career & Internships",
    icon: Globe,
    description: "Resources for exploring career paths and landing internships.",
    links: [
      { name: "Roadmap.sh", url: "https://roadmap.sh/", description: "Developer roadmaps for different paths" },
      { name: "GitHub", url: "https://github.com/", description: "Build your portfolio with public repos" },
      { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning/", description: "Professional development courses" },
      { name: "Handshake", url: "https://joinhandshake.com/", description: "Job and internship board for students" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <SectionHeader
        title="Resources"
        description="A curated collection of free tools, courses, videos, and guides to help you on your CS journey."
      />

      <div className="grid gap-8">
        {categories.map((category) => (
          <section
            key={category.title}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/15">
                <category.icon className="h-4 w-4 text-accent-dark dark:text-accent" />
              </div>
              <h2 className="text-xl font-bold text-card-foreground">{category.title}</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-5">{category.description}</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-lg border border-border p-3.5 transition-all hover:border-sky/30 hover:shadow-md"
                >
                  <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground group-hover:text-sky transition-colors" />
                  <div>
                    <p className="text-sm font-medium text-card-foreground group-hover:text-sky transition-colors">
                      {link.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">{link.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-muted/50 p-8 text-center">
        <h2 className="text-xl font-bold text-foreground">Know a Great Resource?</h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
          If you&apos;ve found a helpful tool, course, or video that should be on this list, let us know! We&apos;re always updating our collection.
        </p>
      </div>
    </div>
  );
}
