import SlideContent from "./SlideContent";

function DeliveryIllustration() {
  return (
    <svg viewBox="0 0 320 300" className="w-72 md:w-96 drop-shadow-2xl" fill="none">
      {/* Road */}
      <rect x="0" y="230" width="320" height="40" rx="8" fill="white" fillOpacity="0.05" />
      <rect x="40" y="247" width="30" height="6" rx="3" fill="white" fillOpacity="0.15" />
      <rect x="130" y="247" width="30" height="6" rx="3" fill="white" fillOpacity="0.15" />
      <rect x="220" y="247" width="30" height="6" rx="3" fill="white" fillOpacity="0.15" />
      {/* Van body */}
      <rect x="40" y="165" width="175" height="75" rx="14" fill="#4ade80" fillOpacity="0.2" stroke="#4ade80" strokeWidth="2" />
      {/* Van cab */}
      <path
        d="M215 200 L215 165 Q215 155 225 155 L265 165 Q278 168 280 180 L280 230 L215 230z"
        fill="#4ade80" fillOpacity="0.2" stroke="#4ade80" strokeWidth="2"
      />
      {/* Windshield */}
      <path d="M222 163 L222 185 L268 185 L265 168z" fill="#4ade80" fillOpacity="0.4" />
      {/* Wheels */}
      <circle cx="100" cy="240" r="20" fill="#0a1f0a" stroke="#4ade80" strokeWidth="2.5" />
      <circle cx="100" cy="240" r="10" fill="#4ade80" fillOpacity="0.3" />
      <circle cx="245" cy="240" r="20" fill="#0a1f0a" stroke="#4ade80" strokeWidth="2.5" />
      <circle cx="245" cy="240" r="10" fill="#4ade80" fillOpacity="0.3" />
      {/* Package on van roof */}
      <rect x="110" y="130" width="60" height="55" rx="8" fill="#4ade80" fillOpacity="0.18" stroke="#4ade80" strokeWidth="1.5" />
      <path d="M110 153 L170 153" stroke="#4ade80" strokeWidth="1.5" />
      <path d="M140 130 L140 185" stroke="#4ade80" strokeWidth="1.5" />
      {/* Speed lines */}
      <path d="M18 190 L38 190" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
      <path d="M10 205 L32 205" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.35" />
      <path d="M20 220 L36 220" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.25" />
      {/* Checkmark badge */}
      <circle cx="272" cy="130" r="28" fill="#4ade80" fillOpacity="0.85" />
      <path d="M260 130 L268 139 L285 121" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Sparkle dots */}
      {([[55, 120], [300, 165], [170, 260]] as [number, number][]).map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={2.5} fill="white" fillOpacity="0.35" />
      ))}
    </svg>
  );
}

export default function SlideDeliveryLayout() {
  return (
    <div className="relative min-h-[560px] md:min-h-[600px] bg-gradient-to-br from-[#0a1f0a] via-[#0d2e1a] to-[#0e3820] overflow-hidden">
      {/* Glow orbs */}
      <span className="pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#4ade80] opacity-10 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#4ade80] opacity-10 blur-3xl" />
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <SlideContent
        badge="Free Delivery"
        headline={"Fast Shipping,\nZero Hassle."}
        sub="Free delivery on orders over $49. Same-day dispatch available in selected cities."
        cta={{ label: "Start Shopping", href: "/explore" }}
        ghost={{ label: "Track My Order", href: "/orders" }}
        accent="#4ade80"
        tagClass="bg-green-400/20 text-green-300 border-green-400/30"
        floatClass="animate-float-3"
        illustration={<DeliveryIllustration />}
      />
    </div>
  );
}
