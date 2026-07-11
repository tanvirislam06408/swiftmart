import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 lg:grid-cols-4">

          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white">
                <FiShoppingBag size={22} />
              </div>

              <span className="text-2xl font-bold">
                Swift<span className="text-emerald-600">Mart</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-600">
              Your one-stop destination for premium fashion. Shop the latest
              collections with fast delivery and secure checkout.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Shop
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/explore" className="hover:text-emerald-600">
                  All Products
                </Link>
              </li>

              <li>
                <Link href="/explore?category=men" className="hover:text-emerald-600">
                  Men
                </Link>
              </li>

              <li>
                <Link href="/explore?category=women" className="hover:text-emerald-600">
                  Women
                </Link>
              </li>

              <li>
                <Link href="/explore?category=shoes" className="hover:text-emerald-600">
                  Shoes
                </Link>
              </li>

              <li>
                <Link href="/explore?category=accessories" className="hover:text-emerald-600">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/about" className="hover:text-emerald-600">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-emerald-600">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="hover:text-emerald-600">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-emerald-600">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link href="/faq" className="hover:text-emerald-600">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Contact
            </h3>

            <p className="text-sm text-gray-600">
              support@swiftmart.com
            </p>

            <p className="mt-2 text-sm text-gray-600">
              +1 (234) 567-890
            </p>

            <p className="mt-2 text-sm text-gray-600">
              New York, United States
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="rounded-full bg-white p-3 shadow transition hover:bg-emerald-600 hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="rounded-full bg-white p-3 shadow transition hover:bg-emerald-600 hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full bg-white p-3 shadow transition hover:bg-emerald-600 hover:text-white"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="rounded-full bg-white p-3 shadow transition hover:bg-emerald-600 hover:text-white"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-300 pt-6 flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} SwiftMart. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-emerald-600">
              Privacy
            </Link>

            <Link href="/terms" className="hover:text-emerald-600">
              Terms
            </Link>

            <Link href="/contact" className="hover:text-emerald-600">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}