import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ZiggyReviews — Turn Happy Customers Into 5-Star Reviews",
  description:
    "ZiggyReviews automates Google review requests via email, SMS, and QR code. Monitor every review. Respond faster. $49/mo — 84% less than Birdeye's $299/mo.",
};

const features = [
  {
    icon: "📧",
    title: "Automated Review Requests",
    desc: "Send review requests automatically after every job, purchase, or appointment via email or SMS.",
  },
  {
    icon: "📱",
    title: "QR Code Generator",
    desc: "Generate branded QR codes for your counter, receipt, or truck. One scan → Google review.",
  },
  {
    icon: "💬",
    title: "SMS Review Requests",
    desc: "Texting converts 3× better than email. Bring your own Twilio number (BYOK) — no markup.",
  },
  {
    icon: "🔔",
    title: "Multi-Platform Monitoring",
    desc: "Watch Google, Yelp, and Facebook reviews in one dashboard. Never miss a new review.",
  },
  {
    icon: "⚡",
    title: "Response Templates",
    desc: "Reply to reviews in seconds with smart templates. Faster responses = better rankings.",
  },
  {
    icon: "🖼️",
    title: "Review Embed Widget",
    desc: "Embed your best reviews on your website automatically. Turn social proof into sales.",
  },
];

const comparisons = [
  { feature: "Monthly price", us: "$49", birdeye: "$299", podium: "$399" },
  { feature: "Automated review requests", us: "✅", birdeye: "✅", podium: "✅" },
  { feature: "SMS requests", us: "✅", birdeye: "✅", podium: "✅" },
  { feature: "QR code generator", us: "✅", birdeye: "✅", podium: "❌" },
  { feature: "Google/Yelp/Facebook monitoring", us: "✅", birdeye: "✅", podium: "✅" },
  { feature: "Response templates", us: "✅", birdeye: "✅", podium: "✅" },
  { feature: "Review embed widget", us: "✅", birdeye: "✅", podium: "❌" },
  { feature: "Twilio BYOK (no SMS markup)", us: "✅", birdeye: "❌", podium: "❌" },
  { feature: "No long-term contracts", us: "✅", birdeye: "❌", podium: "❌" },
  { feature: "Setup fee", us: "$0", birdeye: "$299+", podium: "$299+" },
];

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, #f59e0b, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-full px-4 py-1.5 text-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse" />
            <span className="text-[#a1a1aa]">
              Birdeye charges{" "}
              <span className="text-white font-semibold line-through">$299/mo</span>
              . We charge{" "}
              <span className="text-[#f59e0b] font-semibold">$49/mo</span>.
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Turn happy customers
            <br />
            into{" "}
            <span style={{ color: "#f59e0b" }}>5-star reviews</span>
            <br />
            <span className="text-3xl sm:text-4xl lg:text-5xl text-[#a1a1aa] font-medium">
              automatically.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#a1a1aa] max-w-2xl mx-auto mb-10 leading-relaxed">
            Request Google reviews via email, SMS, or QR code. Monitor every
            review across Google, Yelp, and Facebook. Respond faster. For{" "}
            <span className="text-white font-semibold">84% less</span> than
            Birdeye.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/pricing"
              className="bg-[#f59e0b] text-black font-bold text-lg px-8 py-4 rounded-xl hover:bg-amber-400 transition-colors w-full sm:w-auto"
            >
              Start Free Trial — $49/mo
            </Link>
            <Link
              href="/features"
              className="border border-[#27272a] text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-[#18181b] transition-colors w-full sm:w-auto"
            >
              See All Features →
            </Link>
          </div>

          {/* Social proof numbers */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">84%</div>
              <div className="text-xs text-[#a1a1aa] mt-1">cheaper than Birdeye</div>
            </div>
            <div className="text-center border-x border-[#27272a]">
              <div className="text-3xl font-bold text-white">3×</div>
              <div className="text-xs text-[#a1a1aa] mt-1">more reviews via SMS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">$0</div>
              <div className="text-xs text-[#a1a1aa] mt-1">setup fee</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-[#27272a] bg-[#18181b]/50 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm text-[#a1a1aa]">
            <div className="flex items-center gap-2">
              <span className="text-[#f59e0b]">★★★★★</span>
              <span>Google Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>Setup in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💳</span>
              <span>No contracts, cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>Twilio BYOK — no SMS markup</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            You have happy customers.
            <br />
            <span style={{ color: "#ff1744" }}>But barely any reviews.</span>
          </h2>
          <p className="text-lg text-[#a1a1aa] leading-relaxed">
            Your competitor has 200 Google reviews and gets all the calls. You
            have 12 reviews from 3 years ago. New customers see that and choose
            them — not you. Every day without reviews is money left on the table.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8">
            <div className="text-4xl mb-4">😤</div>
            <h3 className="text-xl font-bold mb-3 text-[#ff1744]">Without ZiggyReviews</h3>
            <ul className="space-y-3 text-[#a1a1aa]">
              <li className="flex items-start gap-3">
                <span className="text-[#ff1744] mt-0.5">✗</span>
                Happy customers forget to leave reviews
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff1744] mt-0.5">✗</span>
                You have to awkwardly ask in person
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff1744] mt-0.5">✗</span>
                Competitors outrank you on Google Maps
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff1744] mt-0.5">✗</span>
                Negative reviews go unnoticed and unanswered
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#ff1744] mt-0.5">✗</span>
                You pay $299/mo to Birdeye for the same thing
              </li>
            </ul>
          </div>

          <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3" style={{ color: "#f59e0b" }}>With ZiggyReviews</h3>
            <ul className="space-y-3 text-[#a1a1aa]">
              <li className="flex items-start gap-3">
                <span className="text-[#f59e0b] mt-0.5">✓</span>
                Review requests go out automatically after every job
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f59e0b] mt-0.5">✓</span>
                SMS + email + QR code — every channel covered
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f59e0b] mt-0.5">✓</span>
                You climb Google Maps rankings with more reviews
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f59e0b] mt-0.5">✓</span>
                Instant alerts when a new review drops
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f59e0b] mt-0.5">✓</span>
                All for $49/mo — not $299/mo
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="bg-[#18181b]/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need to dominate{" "}
              <span style={{ color: "#f59e0b" }}>local search</span>
            </h2>
            <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
              ZiggyReviews gives you every tool Birdeye and Podium offer — for a
              fraction of the price.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 hover:border-[#f59e0b]/40 transition-colors"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEEP FEATURE: QR + SMS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-full px-3 py-1 text-xs text-[#f59e0b] font-semibold mb-6">
              Deep Feature
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              QR codes + SMS.
              <br />
              <span style={{ color: "#f59e0b" }}>The two-punch combo</span>
              <br />
              that gets reviews.
            </h2>
            <p className="text-[#a1a1aa] text-lg leading-relaxed mb-8">
              Print a QR code on your invoice, truck door, or front counter. One
              scan goes straight to your Google review page — no friction, no
              typing. Pair it with SMS follow-ups using your own Twilio number
              (BYOK) and watch your review count climb.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#f59e0b] font-bold mt-0.5">→</span>
                <div>
                  <strong className="text-white">QR Code Generator</strong>
                  <p className="text-[#a1a1aa] text-sm">
                    Branded, high-resolution QR codes ready to print in seconds.
                    Link directly to Google, Yelp, or Facebook.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f59e0b] font-bold mt-0.5">→</span>
                <div>
                  <strong className="text-white">Twilio BYOK — Zero Markup</strong>
                  <p className="text-[#a1a1aa] text-sm">
                    Bring your own Twilio number. We don't upcharge SMS — you
                    pay Twilio's rate directly. Most competitors add 10–40%
                    markup.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f59e0b] font-bold mt-0.5">→</span>
                <div>
                  <strong className="text-white">Smart Timing</strong>
                  <p className="text-[#a1a1aa] text-sm">
                    Send SMS 2–4 hours after job completion when satisfaction is
                    highest. Automated sequences with 1 follow-up for
                    non-openers.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Visual mockup */}
          <div className="relative">
            <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#f59e0b] rounded-xl flex items-center justify-center text-black text-lg font-bold">
                  Z
                </div>
                <div>
                  <div className="font-semibold text-sm">ZiggyReviews</div>
                  <div className="text-xs text-[#a1a1aa]">QR Generator</div>
                </div>
              </div>

              {/* QR mockup */}
              <div className="bg-white rounded-xl p-4 mb-6 mx-auto w-40 h-40 flex items-center justify-center">
                <div className="grid grid-cols-5 gap-0.5">
                  {[...Array(25)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-6 h-6 rounded-sm ${
                        [0,1,2,3,5,6,11,13,15,18,20,21,22,23,24,7,8,14,16,17].includes(i)
                          ? "bg-black"
                          : "bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="text-center text-sm text-[#a1a1aa] mb-6">
                ↑ Tap to leave us a Google review
              </div>

              {/* SMS preview */}
              <div className="bg-[#0f0a0a] border border-[#27272a] rounded-xl p-4">
                <div className="text-xs text-[#a1a1aa] mb-3">SMS Preview</div>
                <div className="bg-[#1a1a2e] rounded-xl rounded-tl-none px-4 py-3 text-sm text-white max-w-xs">
                  Hi Sarah! Thanks for choosing us today. Mind leaving a quick
                  Google review? It takes 30 seconds and means the world to us:
                  <span className="text-[#f59e0b]"> g.co/r/abc123</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="bg-[#18181b]/30 py-24" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              One simple price.{" "}
              <span style={{ color: "#f59e0b" }}>No surprises.</span>
            </h2>
            <p className="text-[#a1a1aa] text-lg">
              While Birdeye hides their pricing behind sales calls, ours is right
              here.
            </p>
          </div>

          <div className="max-w-sm mx-auto">
            <div className="bg-[#18181b] border-2 border-[#f59e0b] rounded-2xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#f59e0b] text-black text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-5xl font-bold mb-1">$49</div>
              <div className="text-[#a1a1aa] mb-8">/month · cancel anytime</div>
              <ul className="space-y-3 text-sm text-left mb-8">
                {[
                  "Unlimited review requests",
                  "Email + SMS + QR codes",
                  "Google, Yelp, Facebook monitoring",
                  "Response templates",
                  "Review embed widget",
                  "Twilio BYOK (no SMS markup)",
                  "Analytics dashboard",
                  "Priority support",
                  "$0 setup fee",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-[#f59e0b]">✓</span>
                    <span className="text-[#a1a1aa]">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/pricing"
                className="block w-full bg-[#f59e0b] text-black font-bold py-3.5 rounded-xl hover:bg-amber-400 transition-colors"
              >
                Start Free Trial
              </Link>
              <p className="text-xs text-[#a1a1aa] mt-4">
                14-day free trial · No credit card required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Same features.{" "}
            <span style={{ color: "#f59e0b" }}>84% lower price.</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg">
            Don't pay enterprise prices for small business needs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#27272a]">
                <th className="text-left py-4 pr-6 text-[#a1a1aa] font-medium text-sm">
                  Feature
                </th>
                <th className="text-center py-4 px-4 text-sm">
                  <div className="font-bold text-white">
                    <span style={{ color: "#ff1744" }}>Ziggy</span>
                    <span style={{ color: "#f59e0b" }}>Reviews</span>
                  </div>
                </th>
                <th className="text-center py-4 px-4 text-[#a1a1aa] font-medium text-sm">
                  Birdeye
                </th>
                <th className="text-center py-4 px-4 text-[#a1a1aa] font-medium text-sm">
                  Podium
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-[#27272a] ${
                    i === 0 ? "bg-[#18181b]/50" : ""
                  }`}
                >
                  <td className="py-3.5 pr-6 text-sm text-[#a1a1aa]">
                    {row.feature}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span
                      className={`text-sm font-semibold ${
                        i === 0 ? "text-[#f59e0b] text-xl" : "text-[#f59e0b]"
                      }`}
                    >
                      {row.us}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center text-sm text-[#a1a1aa]">
                    {row.birdeye}
                  </td>
                  <td className="py-3.5 px-4 text-center text-sm text-[#a1a1aa]">
                    {row.podium}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="/vs/birdeye"
            className="text-center border border-[#27272a] text-[#a1a1aa] text-sm px-6 py-3 rounded-lg hover:border-[#f59e0b] hover:text-white transition-colors"
          >
            Full ZiggyReviews vs Birdeye comparison →
          </Link>
          <Link
            href="/vs/podium"
            className="text-center border border-[#27272a] text-[#a1a1aa] text-sm px-6 py-3 rounded-lg hover:border-[#f59e0b] hover:text-white transition-colors"
          >
            Full ZiggyReviews vs Podium comparison →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div
          className="rounded-3xl p-12 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #18181b 0%, #1a1505 50%, #18181b 100%)",
            border: "1px solid #27272a",
          }}
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #f59e0b, transparent)",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Stop losing customers to competitors
              <br />
              with more reviews.
            </h2>
            <p className="text-[#a1a1aa] text-lg mb-8 max-w-xl mx-auto">
              Join businesses that automated their review process with
              ZiggyReviews. Start free, no credit card required.
            </p>
            <Link
              href="/pricing"
              className="inline-block bg-[#f59e0b] text-black font-bold text-lg px-10 py-4 rounded-xl hover:bg-amber-400 transition-colors"
            >
              Start Your Free Trial →
            </Link>
            <p className="text-sm text-[#a1a1aa] mt-4">
              14 days free · Then $49/mo · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
