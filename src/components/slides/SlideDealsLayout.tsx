import SlideContent from "./SlideContent";

// Photo: colourful sale shopping bags (Unsplash – free to use)
const BG = "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1920&q=80";

export default function SlideDealsLayout() {
  return (
    <div
      className="relative min-h-[560px] md:min-h-[600px] overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: `url('${BG}')` }}
    >
      {/* Dark overlay – stronger in centre so illustration area is visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a2e]/92 via-[#2d1060]/70 to-[#1a0a2e]/30" />

      {/* Violet glow */}
      <span className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#a78bfa] opacity-20 blur-3xl" />

      <SlideContent
        badge="Flash Deals"
        headline={"Unreal Deals,\nEvery Single Day."}
        sub="Up to 70% off on top brands. Don't miss out — limited-time offers refreshed daily just for you."
        cta={{ label: "Grab Deals", href: "/explore?sort=deals" }}
        ghost={{ label: "See All Offers", href: "/explore" }}
        accent="#a78bfa"
        tagClass="bg-violet-400/20 text-violet-300 border-violet-400/30"
      />
    </div>
  );
}
