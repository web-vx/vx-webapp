import LogoMark from "@/components/LogoMark";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 py-32 md:py-0 w-full">
        <div className="max-w-2xl">
          <LogoMark
            color="white"
            className="w-16 h-16 md:w-20 md:h-20 mb-8"
          />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
            Diversified Industrial Supply for Demanding Operations
          </h1>

          <p className="mt-4 text-sm md:text-base font-semibold text-accent tracking-[0.15em] uppercase">
            Excellence in Modular Infrastructure, Power, Aviation &amp;
            Specialized Supply
          </p>

          <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
            Engineered infrastructure, power systems, aviation and specialized
            assets, and broader industrial supply — delivered across Egypt, the
            MENA region, and international markets.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 bg-primary text-white text-sm font-semibold tracking-wide rounded hover:bg-accent transition-colors"
            >
              Get in touch
            </a>
            <a
              href="#capabilities"
              className="inline-flex items-center px-7 py-3.5 border border-white/30 text-white text-sm font-semibold tracking-wide rounded hover:bg-white/10 transition-colors"
            >
              What we offer
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy/50 to-transparent" />
    </section>
  );
}
