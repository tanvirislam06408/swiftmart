import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — SwiftMart",
  description:
    "SwiftMart is a marketplace built around one promise: what you order shows up fast, exactly as described.",
};

const principles = [
  {
    label: "01",
    title: "Speed is a feature, not a slogan",
    body: "Every listing on SwiftMart carries a real delivery window, calculated from actual carrier data — not a hopeful estimate.",
  },
  {
    label: "02",
    title: "Sellers earn their shelf space",
    body: "We audit fulfilment times and return rates continuously. Sellers who can't keep pace lose visibility, automatically.",
  },
  {
    label: "03",
    title: "Prices stay honest",
    body: "No inflate-then-discount pricing. The number you see a week before a sale is the number you see during it.",
  },
];

const timeline = [
  { time: "T+0m", step: "Order placed", detail: "Payment confirmed, seller notified instantly." },
  { time: "T+45m", step: "Packed", detail: "Warehouse or seller prepares the shipment." },
  { time: "T+3h", step: "Dispatched", detail: "Handed to the fastest available carrier." },
  { time: "T+1–2d", step: "Delivered", detail: "Tracked door to door, no silent gaps." },
];

const stats = [
  { value: "1.2M+", label: "Orders delivered on time" },
  { value: "48hrs", label: "Average delivery window" },
  { value: "6,400", label: "Verified sellers" },
  { value: "4.8/5", label: "Average buyer rating" },
];

const AboutPage = () => {
  return (
    <main className="bg-[#FAF9F5]">
      {/* Hero */}
      <section className="border-b border-[#E7E3D8]">
        <div className="container mx-auto px-4 py-20 sm:px-6 lg:py-28">
          <span className="text-[11px] uppercase tracking-[0.22em] text-[#9C7A3C]">
            About SwiftMart
          </span>

          <h1 className="mt-4 max-w-3xl font-serif text-[2.75rem] leading-[1.08] tracking-tight text-[#1E1C16] sm:text-6xl">
            We built a marketplace around the one thing shoppers actually
            wait for.
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#5D594C]">
            SwiftMart started from a simple complaint: &ldquo;in stock&rdquo;
            rarely meant in stock, and &ldquo;2-day shipping&rdquo; rarely
            meant two days. So we rebuilt the promise from the ground up —
            every seller, every listing, every delivery window, held to
            what it actually says.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[#E7E3D8]">
        <div className="container mx-auto grid grid-cols-2 divide-x divide-y divide-[#E7E3D8] px-4 sm:px-6 lg:grid-cols-4 lg:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-10 first:pl-0">
              <div className="font-serif text-3xl text-[#1E1C16] sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-[#8A8578]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-[#E7E3D8] py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr]">
            <h2 className="font-serif text-2xl text-[#1E1C16]">
              What we hold sellers to
            </h2>

            <div className="max-w-2xl divide-y divide-[#E7E3D8] border-y border-[#E7E3D8]">
              {principles.map((p) => (
                <div key={p.label} className="flex gap-6 py-7">
                  <span className="font-serif text-lg text-[#9C7A3C]">
                    {p.label}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-medium text-[#1E1C16]">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-6 text-[#5D594C]">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order timeline — the "Swift" signature moment */}
      <section className="border-b border-[#E7E3D8] py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="font-serif text-2xl text-[#1E1C16]">
            From order to doorstep
          </h2>
          <p className="mt-2 max-w-md text-[14px] leading-6 text-[#8A8578]">
            A typical SwiftMart order, timestamped the way our tracking
            actually shows it to you.
          </p>

          <div className="relative mt-12">
            <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-[#E7E3D8] sm:block" />
            <div className="grid gap-10 sm:grid-cols-4 sm:gap-6">
              {timeline.map((stop) => (
                <div key={stop.step} className="relative">
                  <span className="relative z-10 block h-3.5 w-3.5 rounded-full border-2 border-[#9C7A3C] bg-[#FAF9F5]" />
                  <div className="mt-4 text-[11px] uppercase tracking-[0.14em] text-[#9C7A3C]">
                    {stop.time}
                  </div>
                  <div className="mt-1 text-[15px] font-medium text-[#1E1C16]">
                    {stop.step}
                  </div>
                  <p className="mt-1 text-[13px] leading-5 text-[#5D594C]">
                    {stop.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     
    </main>
  );
};

export default AboutPage;