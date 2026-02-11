export interface Post {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
  content: string;
}

export const posts: Post[] = [
  {
    slug: "getting-started-with-git-and-github",
    title: "Getting Started with Git and GitHub",
    author: "Computer Club",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    excerpt:
      "A beginner-friendly guide to version control. Learn how to set up Git, create repositories, make commits, and collaborate with others using GitHub.",
    tags: ["Git", "Tutorial"],
    content: `## Why Version Control Matters

If you've ever worked on a project and ended up with files named \`final.docx\`, \`final_v2.docx\`, \`final_REAL_final.docx\`, you already understand the problem that version control solves.

Git is a version control system that tracks every change you make to your code. GitHub is a platform that hosts your Git repositories online, making it easy to collaborate with others.

## Setting Up Git

First, install Git from [git-scm.com](https://git-scm.com/). Then configure it with your name and email:

\`\`\`bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
\`\`\`

## Your First Repository

Create a new folder for your project and initialize Git:

\`\`\`bash
mkdir my-project
cd my-project
git init
\`\`\`

Now create a file, add it, and make your first commit:

\`\`\`bash
echo "# My Project" > README.md
git add README.md
git commit -m "Initial commit"
\`\`\`

## Connecting to GitHub

1. Create a new repository on [github.com](https://github.com)
2. Copy the repository URL
3. Connect your local repo:

\`\`\`bash
git remote add origin https://github.com/username/my-project.git
git push -u origin main
\`\`\`

## Key Commands to Remember

| Command | What It Does |
|---------|-------------|
| \`git status\` | See what's changed |
| \`git add .\` | Stage all changes |
| \`git commit -m "message"\` | Save a snapshot |
| \`git push\` | Upload to GitHub |
| \`git pull\` | Download latest changes |
| \`git branch feature\` | Create a new branch |
| \`git checkout feature\` | Switch to a branch |

## Next Steps

Once you're comfortable with the basics, explore branching, pull requests, and collaborative workflows. Check out [Learn Git Branching](https://learngitbranching.js.org/) for an interactive tutorial.

Happy coding!`,
  },
  {
    slug: "why-every-student-should-learn-to-code",
    title: "Why Every Student Should Learn to Code",
    author: "Computer Club",
    date: "Dec 10, 2025",
    readTime: "4 min read",
    excerpt:
      "Coding isn't just for future software engineers. From problem-solving to creative thinking, here's why programming is a valuable skill for every student.",
    tags: ["Opinion", "Beginner"],
    content: `## It's Not Just About Becoming a Developer

When people hear "learn to code," they often picture someone sitting in a dark room writing software all day. But coding is so much more than that — it's a way of thinking.

## Problem-Solving Skills

At its core, programming is about breaking big problems into smaller, manageable pieces. This skill translates to every field:

- **Business** — analyzing data and automating workflows
- **Science** — processing research data and running simulations
- **Art & Design** — creating interactive installations and generative art
- **Healthcare** — understanding medical software and data systems

## Computational Thinking

Coding teaches you to think logically and systematically. You learn to:

- Define problems clearly
- Identify patterns
- Design step-by-step solutions
- Test and refine your approach

These are skills that help in every class and every career.

## It Opens Doors

Even if you don't become a professional developer, knowing how to code gives you an edge:

- **Automate boring tasks** — write scripts to organize files, send emails, or process data
- **Build your own tools** — create a personal website, a budget tracker, or a study app
- **Communicate with developers** — if you work in any field that touches technology (which is all of them), understanding code helps you collaborate

## Getting Started Is Easier Than You Think

You don't need a computer science degree to start coding. There are incredible free resources:

- [freeCodeCamp](https://www.freecodecamp.org/)
- [The Odin Project](https://www.theodinproject.com/)
- [CS50 from Harvard](https://cs50.harvard.edu/x/)
- Or just come to our workshops!

## The Bottom Line

Coding is a superpower. It amplifies whatever you're already good at and opens up possibilities you never knew existed. You don't have to love it — but you should try it.

And hey, the Computer Club is the perfect place to start.`,
  },
  {
    slug: "top-5-free-resources-to-learn-python",
    title: "Top 5 Free Resources to Learn Python",
    author: "Computer Club",
    date: "Oct 28, 2025",
    readTime: "3 min read",
    excerpt:
      "A curated list of the best free Python resources — from interactive tutorials to YouTube channels — to help you get started or level up.",
    tags: ["Python", "Resources"],
    content: `## Why Python?

Python is consistently one of the most popular programming languages in the world. It's beginner-friendly, incredibly versatile, and used in everything from web development to data science to AI.

Here are our top picks for learning Python without spending a dime.

## 1. CS50's Introduction to Programming with Python

Harvard's CS50P is a fantastic course that teaches Python from the ground up. It's project-based, well-paced, and taught by the legendary David Malan.

**Best for:** Complete beginners who want a structured course

## 2. Automate the Boring Stuff with Python

This free online book by Al Sweigart teaches Python through practical automation projects — moving files, scraping websites, working with spreadsheets, and more.

**Best for:** People who want to build useful things right away

## 3. Python.org Official Tutorial

The official Python tutorial is thorough and well-written. It's a great reference when you want to understand how something works at a deeper level.

**Best for:** People who like reading documentation

## 4. Corey Schafer's YouTube Channel

Corey Schafer has some of the best Python tutorials on YouTube. His videos are clear, well-organized, and cover everything from basics to advanced topics like decorators and generators.

**Best for:** Visual learners who prefer video content

## 5. LeetCode (Easy Problems)

Once you have the basics down, solving LeetCode Easy problems in Python is a great way to practice. It builds problem-solving skills and prepares you for technical interviews.

**Best for:** People who already know the basics and want to practice

## Honorable Mentions

- **Codecademy** — interactive Python course (free tier)
- **freeCodeCamp** — Scientific Computing with Python certification
- **Real Python** — in-depth tutorials and articles

The most important thing is to pick one resource and stick with it. Consistency beats perfection every time.`,
  },
  {
    slug: "building-your-first-website-with-html-css",
    title: "Building Your First Website with HTML & CSS",
    author: "Computer Club",
    date: "Oct 5, 2025",
    readTime: "7 min read",
    excerpt:
      "A step-by-step walkthrough of creating a personal website from scratch using just HTML and CSS. No frameworks needed.",
    tags: ["Web Dev", "Tutorial"],
    content: `## What We're Building

In this tutorial, we'll build a simple personal portfolio website using just HTML and CSS — no frameworks, no libraries, no build tools. Just you and a text editor.

## Step 1: Set Up Your Files

Create a folder called \`my-website\` and add two files:

\`\`\`
my-website/
├── index.html
└── style.css
\`\`\`

## Step 2: Write the HTML

Open \`index.html\` and add the basic structure:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Your Name</h1>
        <p>Student at St. Joseph's University</p>
    </header>

    <main>
        <section id="about">
            <h2>About Me</h2>
            <p>Write a short bio about yourself here.</p>
        </section>

        <section id="projects">
            <h2>Projects</h2>
            <div class="project-grid">
                <div class="project-card">
                    <h3>Project 1</h3>
                    <p>Description of your project.</p>
                </div>
                <div class="project-card">
                    <h3>Project 2</h3>
                    <p>Description of your project.</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <p>Built with HTML & CSS</p>
    </footer>
</body>
</html>
\`\`\`

## Step 3: Add CSS Styling

Open \`style.css\` and add some styles to make it look good. Start with resets and typography, then style each section.

The key CSS concepts you'll use:
- **Flexbox** for layouts
- **Grid** for the project cards
- **Media queries** for responsive design
- **Custom properties** for consistent colors

## Step 4: Make It Responsive

Add a media query to adjust the layout for mobile screens. The project grid should switch from two columns to one on smaller screens.

## Step 5: Deploy It

The easiest way to get your site online for free:

1. Push your code to a GitHub repository
2. Go to Settings → Pages
3. Set the source to your main branch
4. Your site will be live at \`username.github.io/my-website\`

## What's Next?

Once you have the basics down, try:
- Adding a navigation bar
- Including real projects with screenshots
- Adding a contact form
- Learning JavaScript to add interactivity

Building a personal website is one of the most rewarding beginner projects. It's yours, it's live on the internet, and you can keep improving it over time.

Happy building!`,
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
