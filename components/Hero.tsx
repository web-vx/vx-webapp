import LogoMark from "@/components/LogoMark";

const pillars = [
  {
    label: "Aviation & Assets",
    position: "top-2 right-0",
    enterDelay: "0.3s",
    floatDuration: "6.5s",
    floatDelay: "0s",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
        <path
          d="M24 4c2 0 3 2 3 5v9l17 9v4l-17-4v9l5 4v4l-8-3-8 3v-4l5-4v-9L4 31v-4l17-9V9c0-3 1-5 3-5z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Modular Infrastructure",
    position: "top-[35%] -left-6",
    enterDelay: "0.45s",
    floatDuration: "7.5s",
    floatDelay: "-2s",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
        <rect x="6" y="18" width="36" height="24" rx="2" />
        <path d="M6 18L24 6l18 12" />
        <rect x="18" y="28" width="12" height="14" />
      </svg>
    ),
  },
  {
    label: "Power Systems",
    position: "bottom-[22%] -right-4",
    enterDelay: "0.6s",
    floatDuration: "7s",
    floatDelay: "-4s",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
        <path d="M26 4L10 28h10l-2 16 16-24H24l2-16z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Industrial Supply",
    position: "bottom-2 left-10",
    enterDelay: "0.75s",
    floatDuration: "8s",
    floatDelay: "-1s",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
        <circle cx="24" cy="24" r="18" />
        <circle cx="24" cy="24" r="6" />
        <line x1="24" y1="6" x2="24" y2="18" />
        <line x1="24" y1="30" x2="24" y2="42" />
        <line x1="6" y1="24" x2="18" y2="24" />
        <line x1="30" y1="24" x2="42" y2="24" />
      </svg>
    ),
  },
];

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
        <div className="flex items-center gap-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Diversified Industrial Supply for Demanding Operations
            </h1>

            <p className="mt-4 text-sm md:text-base font-semibold text-accent tracking-[0.15em] uppercase">
              Excellence in Modular Infrastructure, Power, Aviation &amp;
              Specialized Supply
            </p>

            <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              Engineered infrastructure, power systems, aviation and specialized
              assets, and broader industrial supply — delivered across Egypt,
              the MENA region, and international markets.
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

          <div
            className="hidden lg:block relative shrink-0 lg:w-[360px] xl:w-[440px] aspect-square"
            aria-hidden="true"
          >
            <div className="absolute inset-10 rounded-full bg-accent/15 blur-3xl" />

            <svg
              viewBox="0 0 440 440"
              className="absolute inset-0 w-full h-full animate-spin-slow"
              fill="none"
            >
              <circle
                cx="220"
                cy="220"
                r="208"
                stroke="white"
                strokeOpacity="0.12"
                strokeWidth="1"
                strokeDasharray="3 14"
              />
            </svg>

            <LogoMark
              color="white"
              className="absolute inset-0 m-auto w-[82%] h-[82%] opacity-[0.16]"
            />

            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className={`absolute ${pillar.position} animate-fade-in-up`}
                style={{ animationDelay: pillar.enterDelay }}
              >
                <div
                  className="animate-float"
                  style={{
                    animationDuration: pillar.floatDuration,
                    animationDelay: pillar.floatDelay,
                  }}
                >
                  <div className="flex items-center gap-3 bg-white/[0.06] border border-white/10 backdrop-blur-md rounded-lg px-4 py-3 shadow-lg shadow-black/20">
                    <span className="text-accent">{pillar.icon}</span>
                    <span className="text-white/85 text-xs font-semibold tracking-[0.12em] uppercase whitespace-nowrap">
                      {pillar.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy/50 to-transparent" />
    </section>
  );
}
