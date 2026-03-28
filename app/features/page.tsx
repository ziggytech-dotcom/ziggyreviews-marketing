import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Features — Review Collection, Monitoring & Analytics",
  description:
    "ZiggyReviews features: automated review requests, QR codes, SMS (Twilio BYOK), Google/Yelp/Facebook monitoring, response templates, and analytics. $49/mo.",
};

const featureSections = [
  {
    id: "collection",
    badge: "Review Collection",
    heading: "Get more reviews without lifting a finger",
    sub: "Automated, multi-channel review requests that go out after every job — so you never have to ask awkwardly in person again.",
    features: [
      {
        icon: "📧",
        title: "Email Review Requests",
        desc: "Send branded, personalized review request emails automatically after a job, purchase, or appointment. Customize timing — send 2 hours or 2 days after service.",
      },
      {
        icon: "💬",
        title: "SMS Review Requests (Twilio BYOK)",
        desc: "Text converts 3× better than email. Connect your own Twilio number — no SMS markup, ever. Pay Twilio's rate directly. Smart sequences with one follow-up for non-openers.",
      },
      {
        icon: "📱",
        title: "QR Code Generator",
        desc: "Generate branded, print-ready QR codes that link directly to your Google, Yelp, or Facebook review page. Print on receipts, truck doors, business cards, or counter cards.",
      },
      {
        icon: "🤖",
        title: "Smart Automation Rules",
        desc: "Set rules to trigger requests based on job type, location, or customer segment. Never send a request to a customer with an open complaint.",
      },
      {
        icon: "🎯",
        title: "Review Funnel",
        desc: "Internal satisfaction check before directing customers to public review pages. Happy customers go to Google — unhappy ones go to you first.",
      },
      {
        icon: "🔗",
        title: "Direct Review Links",
        desc: "Generate one-click review links for any platform. Share via email, SMS, WhatsApp, or paste on your website.",
      },
    ],
  },
  {
    id: "monitoring",
    badge: "Monitoring & Response",
    heading: "Never miss a review — respond in seconds",
    sub: "Watch every review platform in one dashboard. Get instant alerts. Reply with templates. Build your reputation on autopilot.",
    features: [
      {
        icon: "🔔",
        title: "Real-Time Review Alerts",
        desc: "Instant notifications via email or SMS the moment a new review lands on any platform. Never find out about a negative review days later.",
      },
      {
        icon: "🌐",
        title: "Multi-Platform Monitoring",
        desc: "Monitor Google, Yelp, and Facebook from a single dashboard. See your star rating, review count, and recent reviews all in one place.",
      },
      {
        icon: "⚡",
        title: "Response Templates",
        desc: "Pre-written, customizable response templates for 5-star, 4-star, and negative reviews. Respond in 10 seconds, not 10 minutes. Faster responses improve SEO.",
      },
      {
        icon: "🖼️",
        title: "Review Embed Widget",
        desc: "Automatically embed your best reviews on your website. Set a minimum star threshold. The widget updates automatically as new reviews come in — no code changes needed.",
      },
      {
        icon: "📊",
        title: "Competitor Monitoring",
        desc: "Track your competitor's review counts and ratings over time. Know when they're gaining on you and get ahead of it.",
      },
      {
        icon: "🏷️",
        title: "Review Tagging & Notes",
        desc: "Tag reviews by type (positive, negative, service complaint) and add internal notes. Keep your team aligned on how to handle repeat issues.",
      },
    ],
  },
  {
    id: "analytics",
    badge: "Analytics & Reporting",
    heading: "Know exactly what's driving your reputation",
    sub: "Clear, actionable dashboards showing your review velocity, platform breakdown, and trends over time.",
    features: [
      {
        icon: "📈",
        title: "Review Velocity Dashboard",
        desc: "See how many reviews you're getting per week and month, and how that compares to your goal. Track your progress toward owning your market.",
      },
      {
        icon: "⭐",
        title: "Star Rating Trends",
        desc: "Watch your average star rating improve over time as ZiggyReviews brings in more positive reviews. Drill down by platform, location, or time period.",
      },
      {
        icon: "📉",
        title: "Conversion Analytics",
        desc: "See your review request open rates, click rates, and conversion rates. Optimize your timing and messaging based on real data.",
      },
      {
        icon: "📍",
        title: "Multi-Location Support",
        desc: "Manage multiple business locations from one account. Compare performance across locations and see which ones need the most attention.",
      },
      {
        icon: "📋",
        title: "Weekly Email Reports",
        desc: "Get a concise weekly summary of your review performance delivered to your inbox. Forward it to your team or clients.",
      },
      {
        icon: "🏆",
        title: "Reputation Score",
        desc: "Your ZiggyReviews reputation score combines star rating, review volume, response rate, and recency into one number. Track it over time.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-full px-4 py-1.5 text-sm mb-6">
          <span className="text-[#f59e0b]">⚡</span>
          <span className="text-[#a1a1aa]">All features included at $49/mo</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Every tool to{" "}
          <span style={{ color: "#f59e0b" }}>dominate local reviews</span>
        </h1>
        <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto mb-8">
          ZiggyReviews gives you review collection, monitoring, response, and
          analytics in one platform. No add-ons. No per-feature pricing.
          Everything included at $49/mo.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap text-sm">
          <a href="#collection" className="text-[#f59e0b] hover:underline">Review Collection</a>
          <span className="text-[#27272a]">·</span>
          <a href="#monitoring" className="text-[#f59e0b] hover:underline">Monitoring & Response</a>
          <span className="text-[#27272a]">·</span>
          <a href="#analytics" className="text-[#f59e0b] hover:underline">Analytics & Reporting</a>
        </div>
      </section>

      {/* Feature Sections */}
      {featureSections.map((section, si) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-24 ${si % 2 === 1 ? "bg-[#18181b]/30" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-full px-3 py-1 text-xs text-[#f59e0b] font-semibold mb-4">
                {section.badge}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                {section.heading}
              </h2>
              <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto">
                {section.sub}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.features.map((f) => (
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
      ))}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to get more reviews?
        </h2>
        <p className="text-[#a1a1aa] text-lg mb-8">
          All features included. $49/mo. No contracts. Cancel anytime.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-[#f59e0b] text-black font-bold text-lg px-10 py-4 rounded-xl hover:bg-amber-400 transition-colors"
        >
          Start Free Trial →
        </Link>
      </section>

      <Footer />
    </>
  );
}
