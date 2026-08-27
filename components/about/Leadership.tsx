"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";

const team = [
  {
    name: "Waleed",
    role: "Managing Director",
    email: "w.azab@vertexshell.com",
  },
  {
    name: "Youssef",
    role: "Chief Business Development Officer",
    email: "youssef.azab@vertexshell.com",
  },
];

function initials(name: string) {
  return name.slice(0, 1).toUpperCase();
}

export default function Leadership() {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div
        ref={ref}
        className={`mx-auto max-w-[1200px] px-6 ${
          visible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          Leadership
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight max-w-2xl">
          The team behind the delivery.
        </h2>

        <div className="mt-12 grid sm:grid-cols-2 max-w-xl gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-light border border-gray-100 rounded-lg p-6"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center text-lg">
                {initials(member.name)}
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-secondary">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="mt-2 inline-block text-sm text-primary hover:text-accent transition-colors"
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
