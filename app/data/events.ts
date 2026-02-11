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
  {
    slug: "python-workshop",
    title: "Python Workshop",
    date: "Mar 6, 2026",
    time: "3:30 PM - 5:00 PM",
    location: "Computer Lab, O'Connor Hall",
    description:
      "Hands-on workshop covering Python fundamentals — variables, loops, functions, and writing simple automation scripts.",
    details: `## What You'll Learn

- **Variables and data types** — strings, numbers, lists, and dictionaries
- **Control flow** — if statements, for loops, and while loops
- **Functions** — writing reusable code
- **Automation** — scripting tasks like file renaming and web scraping

## What to Bring

- Your laptop with Python 3 installed (download from [python.org](https://www.python.org/downloads/))
- Alternatively, you can use [Replit](https://replit.com/) from your browser — no install needed

## About This Workshop

Python is one of the most popular and beginner-friendly programming languages in the world. It's used everywhere from web development to data science to artificial intelligence.

In this workshop, we'll start from zero and build up to writing useful automation scripts. You'll leave with the knowledge to continue learning on your own and a few scripts you can actually use in your daily life.

No programming experience required — just bring your curiosity!`,
    tags: ["Beginner", "Python"],
  },
  {
    slug: "hackathon-prep-session",
    title: "Hackathon Prep Session",
    date: "Mar 20, 2026",
    time: "3:30 PM - 5:30 PM",
    location: "Tuohy Hall, Room 204",
    description:
      "Get ready for upcoming hackathons. Form teams, brainstorm ideas, and learn the tools and workflows you'll need.",
    details: `## What We'll Cover

- **What is a hackathon?** — demystifying the format and setting expectations
- **Team formation** — find teammates with complementary skills
- **Idea brainstorming** — techniques for coming up with winning project ideas
- **Essential tools** — Git/GitHub, deployment platforms, APIs, and project scaffolding
- **Past hackathon experiences** — hear from members who've competed before

## What to Bring

- Your laptop
- Ideas! (or come ready to brainstorm)

## About This Session

Hackathons are one of the best ways to level up your skills, meet people, and build something cool in a short amount of time. But they can also feel intimidating if you've never done one before.

This prep session is designed to help you walk into your first (or next) hackathon feeling confident and prepared. We'll cover everything from team dynamics to technical setup, and you'll leave with a team and a rough project idea ready to go.

Whether you're a seasoned hacker or a complete beginner, this session has something for you.`,
    tags: ["All Levels", "Hackathon"],
  },
  {
    slug: "cybersecurity-101",
    title: "Cybersecurity 101",
    date: "Apr 3, 2026",
    time: "3:30 PM - 5:00 PM",
    location: "Computer Lab, O'Connor Hall",
    description:
      "An introduction to cybersecurity concepts — password security, phishing, encryption basics, and staying safe online.",
    details: `## What You'll Learn

- **Password security** — why "password123" is a terrible idea and what to do instead
- **Phishing attacks** — how to spot fake emails, links, and websites
- **Encryption basics** — how your data is protected (and when it isn't)
- **Two-factor authentication** — why you should enable it everywhere
- **Safe browsing habits** — VPNs, HTTPS, and public Wi-Fi dangers

## What to Bring

- Your laptop
- Your phone (for 2FA setup demo)

## About This Workshop

Cybersecurity isn't just for security professionals — it's something everyone who uses the internet should understand. In this beginner-friendly workshop, we'll cover the essential concepts that will help you protect yourself and your data online.

We'll look at real-world examples of phishing attacks, demonstrate how easy it is to crack weak passwords, and walk through setting up proper security practices that you can use right away.

This is a great workshop for anyone interested in cybersecurity as a career path, or just for students who want to be smarter about their digital lives.`,
    tags: ["Beginner", "Security"],
  },
  {
    slug: "club-kickoff-meeting",
    title: "Club Kickoff Meeting",
    date: "Sep 15, 2025",
    time: "3:30 PM - 4:30 PM",
    location: "Tuohy Hall, Room 301",
    description: "Our first meeting of the year! Introductions, goals for the year, and free pizza.",
    details: `## What Happened

We kicked off the 2025-2026 year with a great turnout! Over 30 students came to learn about the club, meet the exec team, and enjoy some pizza.

## Highlights

- Introduced the executive board and team leads
- Outlined our plans for the year — workshops, hackathons, and collaborative projects
- Discussed what members want to learn and do
- Formed interest groups for different topics (web dev, cybersecurity, AI/ML, game dev)
- Pizza was consumed in record time

Thanks to everyone who came out! Looking forward to a great year.`,
    tags: ["Social"],
    past: true,
  },
  {
    slug: "git-github-workshop",
    title: "Git & GitHub Workshop",
    date: "Oct 10, 2025",
    time: "3:30 PM - 5:00 PM",
    location: "Computer Lab, O'Connor Hall",
    description: "Version control basics — cloning repos, making commits, branches, and pull requests.",
    details: `## What We Covered

- Setting up Git and creating a GitHub account
- Basic Git commands: init, add, commit, push, pull
- Branching and merging
- Creating and reviewing Pull Requests
- Collaborative workflows and best practices

## Resources from the Workshop

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub Student Developer Pack](https://education.github.com/pack)
- [Learn Git Branching](https://learngitbranching.js.org/) — interactive tutorial

This was one of our most popular workshops. Version control is a skill that every developer needs, and GitHub is the platform that ties it all together.`,
    tags: ["Beginner", "Git"],
    past: true,
  },
  {
    slug: "holiday-code-jam",
    title: "Holiday Code Jam",
    date: "Dec 18, 2025",
    time: "3:00 PM - 6:00 PM",
    location: "Tuohy Hall, Room 204",
    description: "A fun end-of-year coding challenge with prizes and holiday snacks.",
    details: `## What Happened

Our first-ever Holiday Code Jam was a blast! Teams of 2-3 students competed in a series of coding challenges over 3 hours, with holiday treats to fuel the fun.

## Challenge Categories

- **Algorithmic puzzles** — classic problem-solving challenges
- **Web design sprint** — build the best holiday-themed webpage in 30 minutes
- **Bug hunt** — find and fix bugs in intentionally broken code
- **Creative coding** — build something festive with code

## Results

Congratulations to all the participants! Special shoutout to the winning teams who demonstrated incredible problem-solving skills and creativity.

We'll definitely be doing this again next year — maybe even bigger and better.`,
    tags: ["Competition", "Social"],
    past: true,
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
