import Link from "next/link";
import MediaPanel from "@/components/MediaPanel";

const pillars = [
  "Aviation & Assets",
  "Modular Infrastructure",
  "Power Systems",
  "Industrial Supply",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-navy overflow-hidden">
      <MediaPanel
        src="/images/hero-background.png"
        label="C-130 propeller and wing on the tarmac with an aerobatic display team passing behind"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/65 to-navy/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-transparent" />

      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-white/25 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-white/25 hidden md:block" />

      <div className="relative mx-auto max-w-[1200px] px-6 pt-44 pb-14 w-full">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-6">
          Cairo, Egypt &middot; MENA &amp; International
        </p>

        <h1 className="font-display font-extrabold uppercase text-white leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] max-w-4xl">
          Diversified Industrial Supply for Demanding Operations
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
          Engineered infrastructure, power systems, aviation and specialized
          assets, and broader industrial supply, delivered across Egypt, the
          MENA region, and international markets.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-accent transition-colors"
          >
            Get in touch
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 border border-white/40 text-white text-sm font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-colors"
          >
            What we offer
          </Link>
        </div>

        <div className="mt-14 pt-6 border-t border-white/15 flex flex-wrap gap-x-8 gap-y-3">
          {pillars.map((pillar, i) => (
            <span
              key={pillar}
              className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/50"
            >
              <span className="text-accent">0{i + 1}</span> &middot; {pillar}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
