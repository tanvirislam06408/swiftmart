import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-[#0A1628]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-20">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#14B8A6]/20 via-[#14B8A6]/5 to-[#0A1628] px-8 py-16 text-center sm:px-16 lg:px-24">
          <div className="pointer-events-none absolute -inset-px rounded-2xl border border-white/[0.06]" />

          <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#14B8A6]/30 to-transparent" />

          <div className="relative">
            <span className="inline-block rounded-full border border-[#14B8A6]/20 bg-[#14B8A6]/5 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[#14B8A6]">
              Limited Time
            </span>

            <h2 className="mt-6 text-balance text-3xl font-light tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready for a
              <span className="font-semibold text-[#14B8A6]"> premium</span> experience?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base text-white/40 sm:text-lg">
              Curated products, exclusive deals, and delivery you can count on.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/explore"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-[#0A1628] transition-all duration-300 hover:shadow-[0_0_30px_-8px_rgba(20,184,166,0.5)] active:scale-[0.97]"
              >
                Start Shopping
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-8 py-3.5 text-sm font-semibold text-white/60 transition-all duration-300 hover:border-white/20 hover:text-white active:scale-[0.97]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
