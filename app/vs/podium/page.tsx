import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ZiggyReviews vs Podium — $49/mo vs $399/mo",
  description:
    "ZiggyReviews vs Podium: same core review management features, 88% lower price. $49/mo vs Podium's $399/mo. No setup fee, no annual contracts, Twilio BYOK included.",
};

const rows = [
  { feature: "Monthly price", us: "$49", them: "$399", win: true },
  { feature: "Setup fee", us: "$0", them: "$299+", win: true },
  { feature: "Contract required", us: "No", them: "Yes (annual)", win: true },
  { feature: "Automated review requests", us: "✅", them: "✅", win: false },
  { feature: "Email review requests", us: "✅", them: "✅", win: false },
  { feature: "SMS review requests", us: "✅ (Twilio BYOK)", them: "✅ (markup)", win: true },
  { feature: "QR code generator", us: "✅", them: "❌", win: true },
  { feature: "Google review monitoring", us: "✅", them: "✅", win: false },
  { feature: "Yelp monitoring", us: "✅", them: "✅", win: false },
  { feature: "Facebook monitoring", us: "✅", them: "✅", win: false },
  { feature: "Response templates", us: "✅", them: "✅", win: false },
  { feature: "Review embed widget", us: "✅", them: "❌", win: true },
  { feature: "Twilio BYOK (no SMS markup)", us: "✅", them: "❌", win: true },
  { feature: "Annual savings vs Podium", us: "$588/yr", them: "$4,788/yr", win: true },
];

export default function VsPodiumPage() {
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
          <span className="text-[#a1a1aa]">Podium</span>
        </h1>
        <p className="text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-8">
          Same core features. 88% lower price. Plus features Podium doesn&apos;t even have.
        </p>

        {/* Price shock */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold" style={{ color: "#f59e0b" }}>$49</div>
            <div className="text-sm text-[#a1a1aa] mt-1">/month — ZiggyReviews</div>
          </div>
          <div className="text-3xl text-[#27272a] font-bold">vs</div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#a1a1aa] line-through">$399</div>
            <div className="text-sm text-[#a1a1aa] mt-1">/month — Podium</div>
          </div>
        </div>

        <div className="bg-[#18181b] border border-[#f59e0b]/30 rounded-2xl p-6 max-w-md mx-auto mb-12">
          <div className="text-3xl font-bold text-[#f59e0b] mb-1">$4,200/year saved</div>
          <div className="text-[#a1a1aa] text-sm">
            Switch from Podium to ZiggyReviews and save over four grand a year.
            Same reviews. Same monitoring. Plus QR codes and a review embed widget
            that Podium doesn&apos;t offer.
          </div>
        </div>
      </section>

      {/* Podium's missing features */}
      <section className="bg-[#18181b]/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-4">
            ZiggyReviews has features Podium doesn&apos;t
          </h2>
          <p className="text-[#a1a1aa] text-center mb-10">
            At $399/mo you&apos;d expect Podium to have everything. They don&apos;t.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "📱",
                title: "QR Code Generator (Podium: ❌)",
                desc: "Generate branded QR codes for your counter, receipts, or truck. One scan → Google review. Podium doesn't offer this — ZiggyReviews does.",
              },
              {
                icon: "🖼️",
                title: "Review Embed Widget (Podium: ❌)",
                desc: "Automatically display your best reviews on your website. Updates in real time. Podium has no embed widget — ZiggyReviews does.",
              },
              {
                icon: "💸",
                title: "Zero SMS Markup",
                desc: "Podium charges for SMS on top of their $399/mo fee. ZiggyReviews uses Twilio BYOK — you pay Twilio directly. No markup.",
              },
              {
                icon: "📅",
                title: "No Annual Contract",
                desc: "Podium locks you into annual contracts. ZiggyReviews is month-to-month. Cancel any time. No penalties.",
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
                <th className="text-center py-4 px-4 text-[#a1a1aa] font-medium text-sm">Podium</th>
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
          Why pay $399 when $49 gets you more?
        </h2>
        <p className="text-[#a1a1aa] text-lg mb-8">
          14-day free trial. No credit card. Set up in 5 minutes.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-[#f59e0b] text-black font-bold text-lg px-10 py-4 rounded-xl hover:bg-amber-400 transition-colors"
        >
          Try ZiggyReviews Free →
        </Link>
        <p className="text-sm text-[#a1a1aa] mt-4">
          $49/mo after trial · Cancel anytime · No contracts
        </p>
      </section>

      <Footer />
    </>
  );
}
