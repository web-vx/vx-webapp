import Image from "next/image";
import MediaPanel from "@/components/MediaPanel";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  photoLabel?: string;
  photoSrc?: string;
  logoSrc?: string;
  logoAlt?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
  photoLabel,
  photoSrc,
  logoSrc,
  logoAlt = "",
}: PageHeroProps) {
  return (
    <section className="relative bg-navy overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
      {photoLabel && (
        <MediaPanel src={photoSrc} label={photoLabel} fill className="opacity-60" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/70 to-navy" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        {logoSrc && (
          <Image
            src={logoSrc}
            alt={logoAlt}
            width={1617}
            height={406}
            className="h-12 md:h-16 w-auto mb-8 animate-fade-in-up"
          />
        )}
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
