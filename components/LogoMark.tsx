interface LogoMarkProps {
  className?: string;
  color?: string;
}

export default function LogoMark({ className = "w-12 h-12", color = "currentColor" }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill={color} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="48" rx="7" ry="6.5" />
      <ellipse cx="63" cy="42" rx="8" ry="7" />
      <ellipse cx="76" cy="38" rx="6" ry="5.5" />
      <ellipse cx="38" cy="54" rx="5.5" ry="5" />
      <ellipse cx="56" cy="58" rx="5" ry="4.5" />
      <ellipse cx="26" cy="62" rx="4" ry="3.5" />
      <ellipse cx="42" cy="68" rx="4.5" ry="4" />
      <ellipse cx="70" cy="52" rx="6.5" ry="6" />
      <ellipse cx="82" cy="48" rx="4.5" ry="4" />
      <ellipse cx="44" cy="38" rx="5" ry="4.5" />
      <ellipse cx="56" cy="32" rx="6" ry="5.5" />
      <ellipse cx="68" cy="28" rx="5" ry="4.5" />
      <ellipse cx="34" cy="44" rx="4" ry="3.5" />
      <ellipse cx="80" cy="32" rx="3.5" ry="3" />
      <ellipse cx="86" cy="42" rx="3" ry="2.5" />
      <ellipse cx="30" cy="74" rx="5.5" ry="5" />
      <ellipse cx="50" cy="76" rx="4" ry="3.5" />
      <ellipse cx="22" cy="52" rx="3" ry="2.5" />
      <ellipse cx="36" cy="30" rx="3" ry="2.5" />
      <ellipse cx="48" cy="24" rx="3.5" ry="3" />
    </svg>
  );
}
