interface MediaPanelProps {
  label: string;
  className?: string;
  fill?: boolean;
}

/**
 * Placeholder for a real photo. Swap by rendering a next/image inside
 * (or in place of) this component once the shot in `label` is available.
 */
export default function MediaPanel({ label, className = "", fill = false }: MediaPanelProps) {
  return (
    <div
      className={`relative overflow-hidden bg-navy ${
        fill ? "absolute inset-0" : "rounded-lg"
      } ${className}`}
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #1B4F7E 0%, #0F2D4A 55%, #0A1F35 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-8 h-8 text-white/25"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M8 5l1.5-2h5L16 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/35">
          Photo needed
        </p>
        <p className="text-sm text-white/55 max-w-[220px]">{label}</p>
      </div>
    </div>
  );
}
