import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ZiggyReviews vs Birdeye — $49/mo vs $299/mo",
  description:
    "ZiggyReviews vs Birdeye: same core features, 84% lower price. $49/mo vs Birdeye's $299/mo. No setup fee, no contracts, Twilio BYOK included.",
};

const rows = [
  { feature: "Monthly price", us: "$49", them: "$299", win: true },
  { feature: "Setup fee", us: "$0", them: "$299+", win: true },
  { feature: "Contract required", us: "No", them: "Yes (annual)", win: true },
  { feature: "Automated review requests", us: "✅", them: "✅", win: false },
  { feature: "Email requests", us: "✅", them: "✅", win: false },
  { feature: "SMS requests", us: "✅ (Twilio BYOK)", them: "✅ (markup)", win: true },
  { feature: "QR code generator", us: "✅", them: "✅", win: false },
  { feature: "Google review monitoring", us: "✅", them: "✅", win: false },
  { feature: "Yelp monitoring", us: "✅", them: "✅", win: false },
  { feature: "Facebook monitoring", us: "✅", them: "✅", win: false },
  { feature: "Response templates", us: "✅", them: "✅", win: false },
  { feature: "Review embed widget", us: "✅", them: "✅", win: false },
  { feature: "Analytics dashboard", us: "✅", them: "✅", win: false },
  { feature: "Twilio BYOK (no SMS markup)", us: "✅", them: "❌", win: true },
  { feature: "Annual savings vs Birdeye", us: "$588/yr", them: "$3,588/yr", win: true },
];

export default function VsBirdeyePage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-full px-4 py-1.5 text-sm mb-6">
          <span className="text-[#a1a1aa]">Comparison</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          <span style={{ color: "#ff1744" }}>Ziggy</span>
          <span style={{ color: "#f59e0b" }}>Reviews</span>
          {" "}vs{" "}
          <span className="text-[#a1a1aa]">Birdeye</span>
        </h1>
        <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-8">
          Same core features. 84% lower price.
        </p>

        {/* Price shock */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold" style={{ color: "#f59e0b" }}>$49</div>
            <div className="text-sm text-[#a1a1aa] mt-1">/month — ZiggyReviews</div>
          </div>
          <div className="text-3xl text-[#27272a] font-bold">vs</div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#a1a1aa] line-through">$299</div>
            <div className="text-sm text-[#a1a1aa] mt-1">/month — Birdeye</div>
          </div>
        </div>

        <div className="bg-[#18181b] border border-[#f59e0b]/30 rounded-2xl p-6 max-w-md mx-auto mb-12">
          <div className="text-3xl font-bold text-[#f59e0b] mb-1">$3,000/year saved</div>
          <div className="text-[#a1a1aa] text-sm">
            That&apos;s what you save by switching from Birdeye to ZiggyReviews.
            Same core features. No contracts. No setup fee.
          </div>
        </div>
      </section>

      {/* Why Birdeye users switch */}
      <section className="bg-[#18181b]/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-10">
            Why businesses switch from Birdeye to ZiggyReviews
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "💸",
                title: "Birdeye costs $299/mo+",
                desc: "Most small businesses don't need enterprise features. Birdeye charges $299/mo and up — often requiring annual contracts. ZiggyReviews is $49/mo, month-to-month.",
              },
              {
                icon: "📱",
                title: "SMS markup",
                desc: "Birdeye charges per-SMS on top of their monthly fee. ZiggyReviews uses Twilio BYOK — you pay Twilio's rate directly (~$0.0075/SMS). No markup, ever.",
              },
              {
                icon: "😤",
                title: "Locked in contracts",
                desc: "Birdeye requires annual contracts with steep cancellation fees. ZiggyReviews is month-to-month. Cancel anytime from your dashboard.",
              },
              {
                icon: "🎯",
                title: "Overbuilt for small business",
                desc: "Birdeye targets enterprise and mid-market. If you're a local business with 1–5 locations, you're paying for features you'll never use.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Feature-by-feature comparison
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#27272a]">
                <th className="text-left py-4 pr-6 text-[#a1a1aa] font-medium text-sm">Feature</th>
                <th className="text-center py-4 px-4 text-sm font-bold">
                  <span style={{ color: "#ff1744" }}>Ziggy</span>
                  <span style={{ color: "#f59e0b" }}>Reviews</span>
                </th>
                <th className="text-center py-4 px-4 text-[#a1a1aa] font-medium text-sm">Birdeye</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-[#27272a]">
                  <td className="py-3.5 pr-6 text-sm text-[#a1a1aa]">{row.feature}</td>
                  <td className={`py-3.5 px-4 text-center text-sm font-semibold ${row.win ? "text-[#f59e0b]" : "text-white"}`}>
                    {row.us}
                  </td>
                  <td className={`py-3.5 px-4 text-center text-sm ${row.win ? "text-[#a1a1aa] line-through" : "text-[#a1a1aa]"}`}>
                    {row.them}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Make the switch today
        </h2>
        <p className="text-[#a1a1aa] text-lg mb-8">
          Set up in 5 minutes. No contracts. 14-day free trial.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-[#f59e0b] text-black font-bold text-lg px-10 py-4 rounded-xl hover:bg-amber-400 transition-colors"
        >
          Try ZiggyReviews Free →
        </Link>
        <p className="text-sm text-[#a1a1aa] mt-4">
          $49/mo after trial · Cancel anytime · No credit card required
        </p>
      </section>

      <Footer />
    </>
  );
}
