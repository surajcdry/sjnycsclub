"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky to-accent opacity-0 blur-sm group-hover:opacity-50 transition-opacity" />
            <Image src="/logo2.png" alt="SJNY Computer Club" width={40} height={40} className="relative h-10 w-10" />
          </div>
          <span className="hidden font-bold text-foreground sm:block tracking-tight">
            SJNY <span className="gradient-text">Computer Club</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {active && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-sky/10 to-accent/10 border border-sky/20" />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          className="rounded-full p-2.5 text-foreground md:hidden hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border/50 px-6 pb-4 md:hidden animate-fade-in">
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all ${active
                        ? "bg-gradient-to-r from-sky/10 to-accent/10 text-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
