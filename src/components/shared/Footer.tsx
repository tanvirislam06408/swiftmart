'use client'
import Link from "next/link";

/* ── Social icon SVGs ─────────────────────────────────────── */
const SocialIcons = {
  Twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
    </svg>
  ),
  YouTube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z" />
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
    </svg>
  ),
};

/* ── Footer link columns ──────────────────────────────────── */
const COLUMNS = [
  {
    heading: "Shop",
    links: [
      { label: "All Products", href: "/explore" },
      { label: "New Arrivals", href: "/explore?sort=new" },
      { label: "Flash Deals", href: "/explore?sort=deals" },
      { label: "Categories", href: "/categories" },
      { label: "Best Sellers", href: "/explore?sort=bestsellers" },
    ],
  },
  {
    heading: "Account",
    links: [
      { label: "My Profile", href: "/profile" },
      { label: "Orders", href: "/orders" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "Cart", href: "/cart" },
      { label: "Track Order", href: "/orders/track" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "Help Centre", href: "/help" },
      { label: "Shipping Info", href: "/shipping" },
      { label: "Returns & Refunds", href: "/returns" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

const SOCIALS = [
  { label: "Twitter / X", href: "https://twitter.com", Icon: SocialIcons.Twitter },
  { label: "Instagram",   href: "https://instagram.com", Icon: SocialIcons.Instagram },
  { label: "Facebook",    href: "https://facebook.com",  Icon: SocialIcons.Facebook },
  { label: "YouTube",     href: "https://youtube.com",   Icon: SocialIcons.YouTube },
  { label: "LinkedIn",    href: "https://linkedin.com",  Icon: SocialIcons.LinkedIn },
];

/* ── Component ───────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="bg-[#0E1F2B] text-white mt-auto">

      {/* ── Top banner ───────────────────────────────────────── */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* Delivery truck icon */}
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14B8A6]/15 text-[#14B8A6]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M1 3h13v13H1zM14 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="1.5" /><circle cx="18.5" cy="18.5" r="1.5" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Free delivery on orders $49+</p>
              <p className="text-xs text-white/50">Same-day dispatch in selected cities</p>
            </div>
          </div>

          <div className="h-px w-full sm:h-10 sm:w-px bg-white/10" />

          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14B8A6]/15 text-[#14B8A6]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-white">Secure &amp; encrypted checkout</p>
              <p className="text-xs text-white/50">Your data is always protected</p>
            </div>
          </div>

          <div className="h-px w-full sm:h-10 sm:w-px bg-white/10" />

          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#14B8A6]/15 text-[#14B8A6]">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-white">30-day easy returns</p>
              <p className="text-xs text-white/50">No questions asked policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main grid ────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-6">

          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h3.2l2.4 10.5a1.5 1.5 0 0 0 1.5 1.2h8.8a1.5 1.5 0 0 0 1.5-1.2L21 6H7" stroke="white" strokeWidth="2" />
                  <circle cx="10" cy="19" r="1.5" fill="white" />
                  <circle cx="17" cy="19" r="1.5" fill="white" />
                  <path d="M13 2.5L9 7.5h3.5L11 12.5l5-5h-3.5z" fill="#14B8A6" stroke="#14B8A6" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Swift<span className="text-[#14B8A6]">Mart</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-white/55 max-w-xs">
              Your one-stop destination for lightning-fast shopping. Thousands of products, unbeatable prices, delivered to your door.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:border-[#14B8A6]/50 hover:bg-[#14B8A6]/10 hover:text-[#14B8A6]"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div>
              <p className="mb-2.5 text-sm font-semibold text-white">Stay in the loop</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center overflow-hidden rounded-xl border border-white/10 bg-white/5 focus-within:border-[#14B8A6]/50 transition-colors"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 bg-[#14B8A6] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0f9488] active:scale-95"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-1.5 text-xs text-white/35">No spam. Unsubscribe anytime.</p>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#14B8A6]">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────── */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-white/35 text-center sm:text-left">
            © {new Date().getFullYear()} SwiftMart, Inc. All rights reserved.
          </p>

          {/* Payment method icons */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/35 mr-1">We accept</span>
            {/* Visa */}
            <span className="flex h-6 items-center rounded bg-white px-1.5">
              <svg viewBox="0 0 48 16" className="h-3.5 w-auto" aria-label="Visa">
                <text x="0" y="13" fontSize="14" fontWeight="800" fill="#1A1F71" fontFamily="Arial">VISA</text>
              </svg>
            </span>
            {/* Mastercard */}
            <span className="flex h-6 items-center rounded bg-white px-1.5 gap-0.5">
              <span className="h-4 w-4 rounded-full bg-[#EB001B] opacity-90" />
              <span className="h-4 w-4 rounded-full bg-[#F79E1B] opacity-90 -ml-2" />
            </span>
            {/* Amex */}
            <span className="flex h-6 items-center rounded bg-[#2E77BC] px-2">
              <span className="text-[9px] font-bold text-white tracking-tight">AMEX</span>
            </span>
            {/* PayPal */}
            <span className="flex h-6 items-center rounded bg-white px-1.5">
              <svg viewBox="0 0 52 14" className="h-3 w-auto" aria-label="PayPal">
                <text x="0" y="11" fontSize="11" fontWeight="700" fill="#003087" fontFamily="Arial">Pay</text>
                <text x="22" y="11" fontSize="11" fontWeight="700" fill="#009cde" fontFamily="Arial">Pal</text>
              </svg>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-white/35 hover:text-white/60 transition-colors">Privacy</Link>
            <Link href="/terms"   className="text-xs text-white/35 hover:text-white/60 transition-colors">Terms</Link>
            <Link href="/sitemap" className="text-xs text-white/35 hover:text-white/60 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
