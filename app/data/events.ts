export interface Event {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  details: string;
  tags: string[];
  coverImage?: string;
  photos?: string[];
  past?: boolean;
}

export const events: Event[] = [
  {
    slug: "3d-modeling-workshop",
    title: "3D Modeling Workshop",
    date: "March 3, 2026",
    time: "12:40 PM - 1:40 PM",
    location: "MCE 405",
    description:
      "Learn the basics of 3D modeling in a hands-on session led by guest instructor Elvis Soto. Pizza and drinks provided",
    details: `Learn the basics of 3D modeling in a hands-on session led by guest instructor and alumnus **Elvis Soto**. This is the Computer Club's second event of the semester, designed to give you a foundational understanding of 3D space and design.

## Event Details
**Date:** March 3, 2026
**Instructor:** Elvis Soto (Former Club President & Alumnus)
**Perks:** Pizza and drinks provided!

## What You'll Learn
1.  Navigating 3D software interfaces.
2.  Basic geometry and shape manipulation.
3.  Practical modeling techniques for beginners.`,
    tags: ["Beginner", "3D Modeling"],
    coverImage: "/events/3d-modeling-workshop/3dModelingWorkshop.jpg",
  },
  {
    slug: "meet-and-greet-26",
    title: "Meet & Greet 2026",
    date: "February 2, 2026",
    time: "12:40 PM - 1:40 PM",
    location: "MCE 405",
    description:
      "The Computer Club kicked off the spring semester by hosting a casual meet and greet with the Computer Science and Mathematics faculty.",
    details: `The Computer Club kicked off the spring 2026 semester with a casual **Meet & Greet**, bringing together students and faculty from the Computer Science and Mathematics departments for an afternoon of conversation and community.

## Event Highlights
Students and faculty connected over pizza, mac & cheese, and drinks in a relaxed, informal setting. It was a great opportunity for students to get to know their professors beyond the classroom and for faculty to learn more about what students are working on.

## Event Details
**Date:** February 2, 2026
**Perks:** Pizza, mac & cheese, and drinks provided!`,
    tags: ["Networking", "Community"],
    coverImage: "/events/meet-and-greet-26/meetngreetCover.png",
    photos: [
      "/events/meet-and-greet-26/1.jpg",
      "/events/meet-and-greet-26/2.jpg",
      "/events/meet-and-greet-26/3.jpg",
      "/events/meet-and-greet-26/4.jpg",
    ],
    past: true,
  },
  {
    slug: "career-craft",
    title: "Career Craft 2025",
    date: "November 4, 2025",
    time: "12:40 PM - 1:40 PM",
    location: "MCE 405",
    description:
      "A career-building workshop organized in collaboration with the Office of Career Preparation and Professional Development.",
    details: `The Computer Club partnered with the **Office of Career Preparation and Professional Development** to host **Career Craft 2025**, a hands-on workshop focused on helping students sharpen their professional skills and prepare for the job market.

## Event Details
**Date:** November 4, 2025
**Guest Speaker:** Kristen Murphy, Office of Career Preparation and Professional Development

## What Was Covered
1. Crafting a standout résumé tailored to tech roles.
2. Building a professional online presence on LinkedIn.
3. Preparing for interviews and networking events.
4. Leveraging campus career resources effectively.`,
    tags: ["Career", "Professional Development"],
    coverImage: "/events/career-craft/careerCraftCover.jpeg",
    photos: [
      "/events/career-craft/1.jpeg",
      "/events/career-craft/2.jpeg",
      "/events/career-craft/3.jpeg",
      "/events/career-craft/4.jpeg",
    ],
    past: true,
  },
  {
    slug: "github-workshop",
    title: "Unlocking Git & GitHub",
    date: "October 6, 2025",
    time: "12:40 PM - 1:40 PM",
    location: "MCE 405",
    description:
      "A practical workshop on Git and GitHub led by Sulabh Katila, an Automation Engineer and STEM Peer Tutor.",
    details: `The Computer Club hosted **"Unlocking Git & GitHub: A Practical Workshop"**, a beginner-friendly session designed to introduce students to version control and collaborative development using Git and GitHub.

## Event Details
**Date:** October 6, 2025
**Instructor:** Sulabh Katila (Automation Engineer & STEM Peer Tutor)

## What Was Covered
1. Understanding version control and why it matters.
2. Setting up Git and creating your first repository.
3. Core Git commands: commit, push, pull, and branching.
4. Collaborating on projects using GitHub pull requests.`,
    tags: ["Beginner", "Git", "Workshop"],
    coverImage: "/events/github-workshop/unlockingGitnGitHubCover.png",
    photos: [
      "/events/github-workshop/1.jpeg",
      "/events/github-workshop/2.jpeg",
      "/events/github-workshop/3.jpeg",
    ],
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
