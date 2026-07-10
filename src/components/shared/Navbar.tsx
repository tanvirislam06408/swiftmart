"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

const PUBLIC_ROUTES = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Categories", href: "/categories" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto flex h-16 container items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E1F2B]">
            <svg
              viewBox="0 0 24 24"
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Shopping Cart Outline */}
              <path
                d="M2 3h3.2l2.4 10.5a1.5 1.5 0 0 0 1.5 1.2h8.8a1.5 1.5 0 0 0 1.5-1.2L21 6H7"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="10" cy="19" r="1.5" fill="white" />
              <circle cx="17" cy="19" r="1.5" fill="white" />
              {/* Lightning Bolt */}
              <path
                d="M13 2.5L9 7.5h3.5L11 12.5l5-5h-3.5z"
                fill="#14B8A6"
                stroke="#14B8A6"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          <span className="text-xl font-bold tracking-tight text-[#0E1F2B]">
            Swift<span className="text-[#14B8A6]">Mart</span>
          </span>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {PUBLIC_ROUTES.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="text-sm font-medium text-gray-700 transition hover:text-[#14B8A6]"
            >
              {route.label}
            </Link>
          ))}
        </div>


        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">

          <Link
            href="/cart"
            className="relative rounded-full p-2 text-[#0E1F2B] hover:bg-gray-100"
          >
            <FiShoppingCart size={22} />
          </Link>

          <Link
            href="/login"
            className="rounded-full px-5 py-2 text-sm font-medium text-[#0E1F2B] hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-full bg-[#14B8A6] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0f9488]"
          >
            Sign Up
          </Link>

        </div>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-[#0E1F2B] md:hidden"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

      </nav>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t bg-white px-4 py-5 md:hidden">

          <div className="flex flex-col gap-3">

            {PUBLIC_ROUTES.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                {route.label}
              </Link>
            ))}


            <div className="mt-3 border-t pt-4 flex flex-col gap-3">

              <Link
                href="/cart"
                className="flex items-center justify-center gap-2 rounded-full border py-2"
              >
                <FiShoppingCart />
                Cart
              </Link>

              <Link
                href="/login"
                className="rounded-full py-2 text-center hover:bg-gray-100"
              >
                Login
              </Link>


              <Link
                href="/register"
                className="rounded-full bg-[#14B8A6] py-2 text-center text-white"
              >
                Sign Up
              </Link>

            </div>

          </div>

        </div>
      )}

    </header>
  );
}