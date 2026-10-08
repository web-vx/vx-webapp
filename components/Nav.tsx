"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companies } from "@/lib/companies";

const linksBefore = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
];

const linksAfter = [
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const shortName = (name: string) => name.replace("VertexShell ", "");

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [companiesOpen, setCompaniesOpen] = useState(false);

  const companyActive = companies.some((c) => pathname === c.href);

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

  const desktopLink = (link: { label: string; href: string }) => {
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
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between h-14 lg:h-16">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/brand/group.png"
            alt="VertexShell Group"
            width={1887}
            height={132}
            className="w-56 sm:w-60 lg:w-64 h-auto"
            priority
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {linksBefore.map(desktopLink)}

          <li
            className="relative"
            onMouseEnter={() => setCompaniesOpen(true)}
            onMouseLeave={() => setCompaniesOpen(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setCompaniesOpen(false);
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Escape") setCompaniesOpen(false);
            }}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={companiesOpen}
              onClick={() => setCompaniesOpen(true)}
              className={`inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                companyActive || companiesOpen
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Companies
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className={`w-3 h-3 transition-transform ${
                  companiesOpen ? "rotate-180" : ""
                }`}
              >
                <path d="M5 8l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-opacity duration-150 ${
                companiesOpen ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <ul className="w-64 bg-white shadow-lg border border-foreground/10 py-2">
                {companies.map((company) => (
                  <li key={company.slug}>
                    <Link
                      href={company.href}
                      onClick={() => setCompaniesOpen(false)}
                      tabIndex={companiesOpen ? 0 : -1}
                      className={`block px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:bg-light hover:text-primary ${
                        pathname === company.href
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {shortName(company.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          {linksAfter.map(desktopLink)}
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
          {[
            ...linksBefore.map((l) => ({ ...l, group: false })),
            { label: "Companies", href: "", group: true },
            ...linksAfter.map((l) => ({ ...l, group: false })),
          ].map((link) =>
            link.group ? (
              <li key="companies">
                <span
                  className={`font-mono text-sm uppercase tracking-[0.15em] ${
                    companyActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  Companies
                </span>
                <ul className="mt-4 ml-1 pl-4 border-l border-foreground/15 flex flex-col gap-4">
                  {companies.map((company) => (
                    <li key={company.slug}>
                      <Link
                        href={company.href}
                        onClick={() => setMobileOpen(false)}
                        className={`font-mono text-sm uppercase tracking-[0.15em] transition-colors ${
                          pathname === company.href
                            ? "text-primary"
                            : "text-foreground/70 hover:text-primary"
                        }`}
                      >
                        {shortName(company.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
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
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
