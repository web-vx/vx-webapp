"use client";

import { useRef, useState } from "react";
import { useInView } from "@/hooks/useInView";

const responsibilities = [
  "Manage and grow a portfolio of client accounts across VertexShell's core sectors",
  "Serve as the primary point of contact for client inquiries, quotations, and order follow-up",
  "Coordinate with international manufacturing partners and internal teams to scope requirements and prepare proposals",
  "Track tenders and RFQs relevant to assigned accounts, and prepare competitive bids",
  "Maintain accurate account records and pipeline forecasts",
  "Build long-term relationships with key decision-makers to identify repeat and expansion opportunities",
  "Coordinate handover to project and delivery teams, and stay engaged through installation and commissioning",
  "Represent VertexShell at client meetings, site visits, and industry events across the MENA region",
];

const requirements = [
  "Bachelor's degree in Business, Engineering, or a related field",
  "2-5 years of experience in account management, business development, or technical sales, ideally in industrial, energy, or infrastructure sectors",
  "Strong communication and negotiation skills in English and Arabic",
  "Comfortable working with technical product specifications and cross-functional teams",
  "Organized and able to manage multiple accounts and deadlines simultaneously",
  "Willingness to travel within the MENA region as needed",
];

export default function OpenPositions() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-light">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          Open Positions
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight max-w-2xl">
          Current opportunities.
        </h2>

        <div className="mt-10 bg-white border border-gray-100 rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="w-full flex flex-wrap items-center justify-between gap-4 text-left p-8 md:p-10 hover:bg-light/60 transition-colors"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground">
                Account Manager
              </h3>
              <p className="mt-1 text-sm text-secondary">
                Cairo, Egypt &middot; Full-time
              </p>
            </div>
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            >
              <path d="M5 7.5l5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
              expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-8 md:px-10 pb-8 md:pb-10">
                <p className="text-secondary leading-relaxed">
                  VertexShell Solutions is looking for an Account Manager to
                  own client relationships across our modular infrastructure,
                  power systems, aviation, and industrial supply lines. You
                  will be the primary point of contact for clients across the
                  public sector, energy, telecom, and industrial construction
                  sectors, managing accounts from initial inquiry through
                  delivery and after-sales support.
                </p>

                <div className="mt-8 grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Responsibilities
                    </h4>
                    <ul className="space-y-2.5">
                      {responsibilities.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-secondary">
                          <span className="text-primary shrink-0">&bull;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Requirements
                    </h4>
                    <ul className="space-y-2.5">
                      {requirements.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-secondary">
                          <span className="text-primary shrink-0">&bull;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href="mailto:w.azab@vertexshell.com?subject=Application%3A%20Account%20Manager"
                  className="mt-8 inline-flex items-center px-6 py-3 bg-primary text-white text-sm font-semibold tracking-wide rounded hover:bg-accent transition-colors"
                >
                  Apply now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
