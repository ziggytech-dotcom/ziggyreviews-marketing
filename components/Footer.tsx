import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#27272a] bg-[#0f0a0a] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-xl font-bold" style={{ color: "#ff1744" }}>Ziggy</span>
              <span className="text-xl font-bold" style={{ color: "#f59e0b" }}>Reviews</span>
            </Link>
            <p className="text-sm text-[#a1a1aa] leading-relaxed">
              Turn happy customers into 5-star reviews. Automated. Simple. $49/mo.
            </p>
            <div className="mt-6">
              <span className="inline-flex items-center gap-1.5 bg-[#18181b] border border-[#27272a] rounded-full px-3 py-1 text-xs text-[#f59e0b] font-semibold">
                ⚡ $49/mo — No contracts
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/vs/birdeye" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">vs Birdeye</Link></li>
              <li><Link href="/vs/podium" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">vs Podium</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Industries</h3>
            <ul className="space-y-3">
              <li><Link href="/restaurants" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Restaurants</Link></li>
              <li><Link href="/salons" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Salons & Spas</Link></li>
              <li><Link href="/home-services" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Home Services</Link></li>
              <li><Link href="/medical" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Medical Practices</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/pricing" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Get Started</Link></li>
              <li><a href="mailto:hello@ziggyreviews.com" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Contact</a></li>
              <li><Link href="#" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-[#a1a1aa] hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#a1a1aa]">
            © {new Date().getFullYear()} ZiggyReviews. All rights reserved.
          </p>
          <p className="text-xs text-[#a1a1aa]">
            Built by{" "}
            <span className="text-[#f59e0b]">ZiggyTech Ventures</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
