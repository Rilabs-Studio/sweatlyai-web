/* SweatlyAI logo — the "volt" lightning bolt from Scripts/makeicon.swift,
   recreated as crisp inline SVG: chunky bolt, volt-green fill, ~-8° tilt,
   on a rounded "electric night" tile with a soft glow. */

export function Logo({
  size = 36,
  withGlow = true,
  className = "",
}: {
  size?: number;
  withGlow?: boolean;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="SweatlyAI"
    >
      <defs>
        <linearGradient id="tile" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1D1D26" />
          <stop offset="1" stopColor="#0A0A0F" />
        </linearGradient>
        <radialGradient id="glow" cx="50" cy="48" r="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4FF3F" stopOpacity="0.32" />
          <stop offset="1" stopColor="#D4FF3F" stopOpacity="0" />
        </radialGradient>
        <filter id="boltShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#000000" floodOpacity="0.55" />
        </filter>
      </defs>

      <rect x="0" y="0" width="100" height="100" rx="23" fill="url(#tile)" />
      {withGlow && <circle cx="50" cy="48" r="42" fill="url(#glow)" />}

      <g transform="rotate(-8 50 50)" filter="url(#boltShadow)">
        <path
          d="M56 16 L30 54 L47 54 L42 84 L72 42 L53 42 Z"
          fill="#D4FF3F"
          stroke="#0A0A0F"
          strokeOpacity="0.25"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-extrabold tracking-tight ${className}`}>
      Sweatly<span className="text-volt">AI</span>
    </span>
  );
}
