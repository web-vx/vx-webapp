"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoMark from "@/components/LogoMark";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0 relative">
          <Image
            src="/logo-lockup.png"
            alt="VertexShell Solutions"
            width={438}
            height={122}
            className={`h-9 md:h-11 w-auto transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
          <div
            className={`absolute transition-opacity duration-300 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
          >
            <LogoMark color="white" className="h-9 w-9" />
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                    scrolled
                      ? active
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                      : active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
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
          className="md:hidden relative w-11 h-11 -mr-1.5 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen
                ? "rotate-45 translate-y-1 bg-foreground"
                : scrolled
                ? "bg-foreground"
                : "bg-white"
            }`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              mobileOpen
                ? "-rotate-45 -translate-y-1 bg-foreground"
                : scrolled
                ? "bg-foreground"
                : "bg-white"
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-16 bg-white transition-transform duration-300 ${
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
