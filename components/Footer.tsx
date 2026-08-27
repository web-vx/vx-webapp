import Link from "next/link";
import LogoMark from "@/components/LogoMark";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-primary/30">
      <div className="mx-auto max-w-[1200px] px-6 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <LogoMark color="white" className="w-9 h-9 mb-4" />
          <p className="text-white/50 text-sm leading-relaxed max-w-[220px]">
            Diversified industrial supply for modular infrastructure, power
            systems, aviation, and specialized assets.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
            Contact
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href="mailto:w.azab@vertexshell.com"
                className="text-white/70 hover:text-white transition-colors"
              >
                w.azab@vertexshell.com
              </a>
            </li>
            <li>
              <a
                href="tel:+201222118511"
                className="text-white/70 hover:text-white transition-colors"
              >
                +20 122 211 8511
              </a>
            </li>
            <li className="text-white/50">Cairo, Egypt</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-[0.15em] uppercase text-white/40 mb-4">
            Follow
          </h3>
          <a
            href="https://www.linkedin.com/company/vertexshell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs text-center">
            &copy; {new Date().getFullYear()} VertexShell Solutions. All rights
            reserved.
          </p>
          <p className="text-white/30 text-xs">Cairo, Egypt</p>
        </div>
      </div>
    </footer>
  );
}
