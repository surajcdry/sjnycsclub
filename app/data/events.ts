export interface Event {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  details: string;
  tags: string[];
  past?: boolean;
}

export const events: Event[] = [
  {
    slug: "intro-to-web-development",
    title: "Intro to Web Development",
    date: "Feb 20, 2026",
    time: "3:30 PM - 5:00 PM",
    location: "Tuohy Hall, Room 204",
    description:
      "Learn the basics of HTML, CSS, and JavaScript. We'll build a personal portfolio page from scratch.",
    details: `## What You'll Learn

- **HTML fundamentals** — structuring content with semantic elements
- **CSS styling** — layouts, colors, typography, and responsive design
- **JavaScript basics** — adding interactivity to your page

## What to Bring

- Your laptop with a code editor installed (we recommend [VS Code](https://code.visualstudio.com/))
- A curious mindset — no prior experience needed!

## About This Workshop

This beginner-friendly workshop will walk you through building a personal portfolio page from scratch. By the end of the session, you'll have a live website you can share with friends, family, or add to your resume.

We'll cover the core building blocks of the web: HTML for structure, CSS for style, and a touch of JavaScript for interactivity. Our workshop leads will be available to help you every step of the way.

Whether you're a Computer Science major or just curious about how websites work, this is the perfect starting point.`,
    tags: ["Beginner", "Web Dev"],
  },
];

export function getEventBySlug(slug: string): Event | undefined {
  return events.find((e) => e.slug === slug);
}

export function getUpcomingEvents(): Event[] {
  return events.filter((e) => !e.past);
}

export function getPastEvents(): Event[] {
  return events.filter((e) => e.past);
}
