import MediaPanel from "@/components/MediaPanel";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  photoLabel?: string;
}

export default function PageHero({ eyebrow, title, description, photoLabel }: PageHeroProps) {
  return (
    <section className="relative bg-navy overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      {photoLabel && <MediaPanel label={photoLabel} fill className="opacity-60" />}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/70 to-navy" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-accent mb-3 animate-fade-in-up">
          {eyebrow}
        </p>
        <h1
          className="font-display font-extrabold uppercase text-4xl md:text-5xl text-white tracking-tight max-w-3xl animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="mt-5 text-lg text-white/70 leading-relaxed max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
