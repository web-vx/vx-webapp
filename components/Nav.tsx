"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Advanced Solutions", href: "/advanced-solutions" },
  { label: "Trading Solutions", href: "/trading-solutions" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-14 lg:h-16">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/brand/group.png"
            alt="VertexShell Group"
            width={1789}
            height={132}
            className="w-44 sm:w-48 lg:w-52 h-auto"
            priority
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                    active ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative w-11 h-11 -mr-1.5 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-14 bg-white transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-8 gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`font-mono text-sm uppercase tracking-[0.15em] transition-colors ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
