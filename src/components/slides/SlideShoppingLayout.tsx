import SlideContent from "./SlideContent";

function ShoppingIllustration() {
  return (
    <svg viewBox="0 0 320 300" className="w-72 md:w-96 drop-shadow-2xl" fill="none">
      {/* Bag body */}
      <rect x="50" y="110" width="220" height="160" rx="24" fill="#14B8A6" fillOpacity="0.15" stroke="#14B8A6" strokeWidth="2" />
      <rect x="70" y="130" width="180" height="120" rx="16" fill="#14B8A6" fillOpacity="0.1" />
      {/* Bag handles */}
      <path d="M110 110 Q110 60 160 60 Q210 60 210 110" stroke="#14B8A6" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Swift bolt on bag */}
      <path d="M165 160 L148 185 h14 L147 215 L178 182 h-14z" fill="#14B8A6" />
      {/* Floating product card – left */}
      <rect x="10" y="60" width="80" height="56" rx="12" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="1" strokeOpacity="0.15" />
      <rect x="18" y="70" width="28" height="28" rx="6" fill="#14B8A6" fillOpacity="0.3" />
      <rect x="52" y="73" width="30" height="5" rx="2" fill="white" fillOpacity="0.4" />
      <rect x="52" y="82" width="20" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="52" y="97" width="24" height="4" rx="2" fill="#14B8A6" fillOpacity="0.6" />
      {/* Floating product card – right */}
      <rect x="230" y="40" width="80" height="56" rx="12" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="1" strokeOpacity="0.15" />
      <rect x="238" y="50" width="28" height="28" rx="6" fill="#14B8A6" fillOpacity="0.3" />
      <rect x="272" y="53" width="30" height="5" rx="2" fill="white" fillOpacity="0.4" />
      <rect x="272" y="62" width="20" height="4" rx="2" fill="white" fillOpacity="0.25" />
      <rect x="272" y="77" width="24" height="4" rx="2" fill="#14B8A6" fillOpacity="0.6" />
      {/* Sparkle dots */}
      {([[280, 170], [30, 150], [155, 30]] as [number, number][]).map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={2.5} fill="white" fillOpacity="0.4" />
      ))}
      {/* Discount badge */}
      <circle cx="256" cy="170" r="28" fill="#14B8A6" fillOpacity="0.9" />
      <text x="256" y="166" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">70%</text>
      <text x="256" y="180" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">OFF</text>
    </svg>
  );
}

export default function SlideShoppingLayout() {
  return (
    <div className="relative min-h-[560px] md:min-h-[600px] bg-gradient-to-br from-[#0E1F2B] via-[#0E2D3F] to-[#0f3347] overflow-hidden">
      {/* Glow orbs */}
      <span className="pointer-events-none absolute -top-32 -right-32 h-[400px] w-[400px] rounded-full bg-[#14B8A6] opacity-10 blur-3xl" />
      <span className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-[#14B8A6] opacity-10 blur-3xl" />
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
        badge="New Arrivals 2025"
        headline={"Shop the Future,\nDelivered Today."}
        sub="Discover thousands of products across every category — lightning-fast shipping, unbeatable prices."
        cta={{ label: "Shop Now", href: "/explore" }}
        ghost={{ label: "View Categories", href: "/categories" }}
        accent="#14B8A6"
        tagClass="bg-teal-400/20 text-teal-300 border-teal-400/30"
        floatClass="animate-float-1"
        illustration={<ShoppingIllustration />}
      />
    </div>
  );
}
