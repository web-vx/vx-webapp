import Image from "next/image";

interface MediaPanelProps {
  label: string;
  src?: string;
  className?: string;
  imgClassName?: string;
  fill?: boolean;
}

/**
 * Renders the photo at `src` when supplied; otherwise shows a "photo needed"
 * placeholder captioned with `label` so missing shots stay visible during dev.
 */
export default function MediaPanel({
  label,
  src,
  className = "",
  imgClassName = "",
  fill = false,
}: MediaPanelProps) {
  const wrapperClassName = `overflow-hidden bg-navy ${
    fill ? "absolute inset-0" : "relative"
  } ${className}`;

  if (src) {
    return (
      <div className={wrapperClassName}>
        <Image src={src} alt={label} fill className={`object-cover ${imgClassName}`} />
      </div>
    );
  }

  return (
    <div className={wrapperClassName}>
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute inset-4 border border-white/15" />
      <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/40" />
      <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/40" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/40" />
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/40" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30">
          Photo pending
        </p>
        <p className="text-sm text-white/55 max-w-[220px]">{label}</p>
      </div>
    </div>
  );
}
