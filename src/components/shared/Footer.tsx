import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[#0E1F2B] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#14B8A6] text-white">
                <FiShoppingBag size={22} />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Swift<span className="text-[#14B8A6]">Mart</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Your one-stop destination for premium fashion. Shop the latest collections with fast delivery and secure checkout.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-[#14B8A6]">Shop</h3>
            <ul className="space-y-3">
              {[
                { label: "All Products", href: "/explore" },
                { label: "Men", href: "/explore?category=men" },
                { label: "Women", href: "/explore?category=women" },
                { label: "Shoes", href: "/explore?category=shoes" },
                { label: "Accessories", href: "/explore?category=accessories" },
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="text-sm text-white/40 transition-colors duration-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-[#14B8A6]">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Categories", href: "/categories" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/40 transition-colors duration-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-[#14B8A6]">Contact</h3>
            <p className="text-sm text-white/40">support@swiftmart.com</p>
            <p className="mt-2 text-sm text-white/40">+880 1XXXXXXXXX</p>
            <p className="mt-2 text-sm text-white/40">Dhaka, Bangladesh</p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaTwitter, href: "#" },
                { icon: FaYoutube, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-[#14B8A6]/40 hover:bg-[#14B8A6]/10 hover:text-[#14B8A6]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/30 md:flex-row">
          <p>&copy; {new Date().getFullYear()} SwiftMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
