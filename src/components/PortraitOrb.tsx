// Stand-in for the hero portrait until a real photo is added (see PROFILE.photo in data.ts).
// A glossy 3D-style orb with an n8n-like node ring, drawn in SVG so it needs no image file.
export default function PortraitOrb() {
  return (
    <svg viewBox="0 0 520 600" className="block h-auto w-full" role="img" aria-label="Maharoof Ali">
      <defs>
        <radialGradient id="orb-body" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#F3D6FF" />
          <stop offset="22%" stopColor="#B600A8" />
          <stop offset="58%" stopColor="#7621B0" />
          <stop offset="88%" stopColor="#18011F" />
        </radialGradient>
        <radialGradient id="orb-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B600A8" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#B600A8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="orb-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#BBCCD7" />
          <stop offset="100%" stopColor="#646973" />
        </linearGradient>
        <linearGradient id="orb-text" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D7E2EA" stopOpacity="0.75" />
        </linearGradient>
      </defs>

      <circle cx="260" cy="330" r="250" fill="url(#orb-glow)" />

      {/* Tilted node ring behind the orb */}
      <ellipse cx="260" cy="330" rx="235" ry="70" fill="none" stroke="url(#orb-ring)" strokeWidth="2" opacity="0.55" transform="rotate(-18 260 330)" />

      <circle cx="260" cy="330" r="170" fill="url(#orb-body)" />
      {/* Specular highlight */}
      <ellipse cx="205" cy="255" rx="70" ry="42" fill="#FFFFFF" opacity="0.28" transform="rotate(-30 205 255)" />

      <text x="260" y="365" textAnchor="middle" fontFamily="Kanit, sans-serif" fontWeight="900" fontSize="120" fill="url(#orb-text)" letterSpacing="-4">
        MA
      </text>

      {/* Front half of the ring, with workflow nodes on it */}
      <path d="M 37 400 A 235 70 -18 0 0 483 260" fill="none" stroke="url(#orb-ring)" strokeWidth="2.5" opacity="0.9" />
      {[
        { x: 70, y: 392, c: '#FF7A59' },
        { x: 190, y: 372, c: '#B18CFF' },
        { x: 320, y: 330, c: '#F5C451' },
        { x: 440, y: 282, c: '#3EE08F' },
      ].map((n) => (
        <g key={n.x}>
          <rect x={n.x - 16} y={n.y - 16} width="32" height="32" rx="9" fill="#0C0C0C" stroke={n.c} strokeWidth="2.5" />
          <circle cx={n.x} cy={n.y} r="5" fill={n.c} />
        </g>
      ))}
    </svg>
  );
}
