"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#27272a] bg-[#0f0a0a]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-bold" style={{ color: "#ff1744" }}>
              Ziggy
            </span>
            <span className="text-xl font-bold" style={{ color: "#f59e0b" }}>
              Reviews
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/features"
              className="text-sm text-[#a1a1aa] hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-[#a1a1aa] hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <div className="relative group">
              <button className="text-sm text-[#a1a1aa] hover:text-white transition-colors flex items-center gap-1">
                Compare
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#18181b] border border-[#27272a] rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/vs/birdeye"
                  className="block px-4 py-2.5 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#27272a] transition-colors"
                >
                  vs Birdeye
                </Link>
                <Link
                  href="/vs/podium"
                  className="block px-4 py-2.5 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#27272a] transition-colors"
                >
                  vs Podium
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-sm text-[#a1a1aa] hover:text-white transition-colors flex items-center gap-1">
                Industries
                <svg
                  className="w-3 h-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-52 bg-[#18181b] border border-[#27272a] rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/restaurants"
                  className="block px-4 py-2.5 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#27272a] transition-colors"
                >
                  Restaurants
                </Link>
                <Link
                  href="/salons"
                  className="block px-4 py-2.5 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#27272a] transition-colors"
                >
                  Salons & Spas
                </Link>
                <Link
                  href="/home-services"
                  className="block px-4 py-2.5 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#27272a] transition-colors"
                >
                  Home Services
                </Link>
                <Link
                  href="/medical"
                  className="block px-4 py-2.5 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#27272a] transition-colors"
                >
                  Medical Practices
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/pricing"
              className="text-sm text-[#a1a1aa] hover:text-white transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/pricing"
              className="bg-[#f59e0b] text-black text-sm font-semibold px-4 py-2 rounded-lg hover:bg-amber-400 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[#a1a1aa] hover:text-white"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-[#27272a] py-4 space-y-2">
            <Link href="/features" className="block px-2 py-2 text-sm text-[#a1a1aa] hover:text-white">Features</Link>
            <Link href="/pricing" className="block px-2 py-2 text-sm text-[#a1a1aa] hover:text-white">Pricing</Link>
            <Link href="/vs/birdeye" className="block px-2 py-2 text-sm text-[#a1a1aa] hover:text-white">vs Birdeye</Link>
            <Link href="/vs/podium" className="block px-2 py-2 text-sm text-[#a1a1aa] hover:text-white">vs Podium</Link>
            <Link href="/restaurants" className="block px-2 py-2 text-sm text-[#a1a1aa] hover:text-white">Restaurants</Link>
            <Link href="/salons" className="block px-2 py-2 text-sm text-[#a1a1aa] hover:text-white">Salons</Link>
            <Link href="/home-services" className="block px-2 py-2 text-sm text-[#a1a1aa] hover:text-white">Home Services</Link>
            <Link href="/medical" className="block px-2 py-2 text-sm text-[#a1a1aa] hover:text-white">Medical</Link>
            <div className="pt-2 px-2">
              <Link href="/pricing" className="block w-full text-center bg-[#f59e0b] text-black text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-amber-400 transition-colors">
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
