import Link from "next/link";
import MediaPanel from "@/components/MediaPanel";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end bg-navy overflow-hidden">
      <MediaPanel
        src="/images/hero-background.png"
        label="C-130 propeller and wing on the tarmac with an aerobatic display team passing behind"
        imgClassName="object-[center_35%]"
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />

      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-2 border-l-2 border-white/25 hidden md:block" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-white/25 hidden md:block" />

      <div className="relative mx-auto max-w-[1200px] px-6 pt-44 pb-14 w-full">
        <h1 className="font-display font-extrabold uppercase text-white leading-[0.95] tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] max-w-4xl">
          Engineered Supply and International Trade
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
          VertexShell is a group of two companies. Advanced Solutions
          supplies infrastructure, power systems, aircraft, and industrial
          products. Trading &amp; Distribution imports, exports, and distributes
          food and beverage products, raw materials, and equipment.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-accent transition-colors"
          >
            Contact us
          </Link>
          <Link
            href="/#companies"
            className="inline-flex items-center px-8 py-4 border border-white/40 text-white text-sm font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-colors"
          >
            Our companies
          </Link>
        </div>
      </div>
    </section>
  );
}
