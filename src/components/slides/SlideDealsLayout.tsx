import SlideContent from "./SlideContent";

function DealsIllustration() {
  return (
    <svg viewBox="0 0 320 300" className="w-72 md:w-96 drop-shadow-2xl" fill="none">
      <defs>
        <linearGradient id="bolt-grad" x1="160" y1="30" x2="160" y2="275" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a78bfa" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      {/* Lightning bolt – outline */}
      <path
        d="M175 30 L120 155 h55 L125 275 L215 140 h-58z"
        fill="#a78bfa" fillOpacity="0.25"
        stroke="#a78bfa" strokeWidth="2" strokeLinejoin="round"
      />
      {/* Lightning bolt – gradient fill */}
      <path
        d="M175 30 L120 155 h55 L125 275 L215 140 h-58z"
        fill="url(#bolt-grad)" fillOpacity="0.6"
      />
      {/* Glow rings */}
      <circle cx="160" cy="155" r="90" stroke="#a78bfa" strokeWidth="1" strokeOpacity="0.15" />
      <circle cx="160" cy="155" r="115" stroke="#a78bfa" strokeWidth="0.5" strokeOpacity="0.08" />
      {/* "FLASH SALE" floating tag */}
      <rect x="200" y="60" width="90" height="44" rx="12" fill="#a78bfa" fillOpacity="0.15" stroke="#a78bfa" strokeWidth="1.5" />
      <text x="245" y="79" textAnchor="middle" fill="#a78bfa" fontSize="11" fontWeight="700">FLASH</text>
      <text x="245" y="95" textAnchor="middle" fill="white" fontSize="10">SALE</text>
      {/* Price badge */}
      <rect x="28" y="180" width="78" height="44" rx="12" fill="#a78bfa" fillOpacity="0.15" stroke="#a78bfa" strokeWidth="1.5" />
      <text x="67" y="198" textAnchor="middle" fill="white" fontSize="9" fillOpacity="0.6">WAS $199</text>
      <text x="67" y="215" textAnchor="middle" fill="#a78bfa" fontSize="13" fontWeight="800">$59</text>
      {/* Sparkle dots */}
      {([[60, 80], [270, 210], [155, 260]] as [number, number][]).map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={2.5} fill="white" fillOpacity="0.35" />
      ))}
    </svg>
  );
}

export default function SlideDealsLayout() {
  return (
    <div className="relative min-h-[560px] md:min-h-[600px] bg-gradient-to-br from-[#1a0a2e] via-[#2d1060] to-[#3b1a7a] overflow-hidden">
      {/* Glow orbs */}
      <span className="pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#a78bfa] opacity-10 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#a78bfa] opacity-10 blur-3xl" />
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
        badge="Flash Deals"
        headline={"Unreal Deals,\nEvery Single Day."}
        sub="Up to 70% off on top brands. Don't miss out — limited-time offers refreshed daily just for you."
        cta={{ label: "Grab Deals", href: "/explore?sort=deals" }}
        ghost={{ label: "See All Offers", href: "/explore" }}
        accent="#a78bfa"
        tagClass="bg-violet-400/20 text-violet-300 border-violet-400/30"
        floatClass="animate-float-2"
        illustration={<DealsIllustration />}
      />
    </div>
  );
}
