import SlideContent from "./SlideContent";

// Photo: woman shopping with bags (Unsplash – free to use)
const BG = "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80";

export default function SlideShoppingLayout() {
  return (
    <div
      className="relative min-h-[560px] md:min-h-[600px] overflow-hidden bg-center bg-cover"
      style={{ backgroundImage: `url('${BG}')` }}
    >
      {/* Dark gradient overlay – left-heavy so text pops */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E1F2B]/90 via-[#0E1F2B]/65 to-[#0E1F2B]/20" />

      {/* Subtle teal glow bottom-left */}
      <span className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#14B8A6] opacity-20 blur-3xl" />

      <SlideContent
        badge="New Arrivals 2025"
        headline={"Shop the Future,\nDelivered Today."}
        sub="Discover thousands of products across every category — lightning-fast shipping, unbeatable prices."
        cta={{ label: "Shop Now", href: "/explore" }}
        ghost={{ label: "View Categories", href: "/categories" }}
        accent="#14B8A6"
        tagClass="bg-teal-400/20 text-teal-300 border-teal-400/30"
      />
    </div>
  );
}
