import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-muted/60 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo2.png" alt="SJNY Computer Club" width={36} height={36} className="h-9 w-9" />
              <span className="font-bold text-foreground tracking-tight">SJNY Computer Club</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              St. Joseph&apos;s University Computer Club — Brooklyn, NY. Exploring technology, building projects, and growing together.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {[{ href: "/events", label: "Events" }, { href: "/team", label: "Team" }, { href: "/about", label: "About" }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/70 hover:text-sky transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {[{ href: "/blog", label: "Blog" }, { href: "/resources", label: "Resources" }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/70 hover:text-sky transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Connect</h3>
            <div className="mt-4 flex gap-2">
              {[
                { href: "mailto:computerclub@sjny.edu", icon: Mail, label: "Email" },
                { href: "https://github.com", icon: Github, label: "GitHub" },
                { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
              ].map((s) => (
                <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"} className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground hover:text-sky hover:bg-sky/10 transition-all" aria-label={s.label}>
                  <s.icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-border/50 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} St. Joseph&apos;s University Computer Club</p>
          <p className="text-xs text-muted-foreground/60">Built with Next.js &middot; Brooklyn, NY</p>
        </div>
      </div>
    </footer>
  );
}
