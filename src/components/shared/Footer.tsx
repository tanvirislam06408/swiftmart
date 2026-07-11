import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { IoSend } from "react-icons/io5";

const shopLinks = [
  { name: "All Products", href: "/explore" },
  { name: "Men", href: "/explore?category=men" },
  { name: "Women", href: "/explore?category=women" },
  { name: "Shoes", href: "/explore?category=shoes" },
  { name: "Accessories", href: "/explore?category=accessories" },
];

const supportLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "FAQ", href: "/faq" },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-950 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="text-3xl font-bold text-white">
              Swift<span className="text-emerald-500">Mart</span>
            </Link>

            <p className="mt-5 leading-7 text-gray-400">
              Your trusted destination for premium fashion, quality products,
              and a seamless online shopping experience.
            </p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 transition duration-300 hover:bg-emerald-600"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Shop
            </h3>

            <ul className="space-y-3">
              {shopLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-emerald-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Support
            </h3>

            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition hover:text-emerald-500"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-xl font-semibold text-white">
              Newsletter
            </h3>

            <p className="mb-5 text-gray-400">
              Subscribe to receive exclusive deals, new arrivals, and special
              discounts directly in your inbox.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Subscribe
                <IoSend size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-gray-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} SwiftMart. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
              <span>🔒 Secure Payments</span>
              <span>🚚 Fast Delivery</span>
              <span>↩️ Easy Returns</span>
              <span>⭐ Trusted by Thousands</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;