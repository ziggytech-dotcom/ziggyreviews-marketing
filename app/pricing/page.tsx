import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing — $49/mo Review Management Software",
  description:
    "ZiggyReviews is $49/mo — everything included. No setup fee, no contracts, no SMS markup. Start a 14-day free trial. 84% less than Birdeye.",
};

const faqs = [
  {
    q: "Is there really no setup fee?",
    a: "Zero. No setup fee, no onboarding fee, no hidden charges. You pay $49/mo and that's it.",
  },
  {
    q: "How does the SMS work? Do I need a Twilio account?",
    a: "Yes — we use a Bring Your Own Key (BYOK) model for Twilio. You connect your own Twilio account and number. This means you pay Twilio's rate directly (typically $0.0075/SMS) with zero markup from us. Birdeye and Podium mark up SMS significantly.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no commitments. Cancel any time from your dashboard. We don't make it hard.",
  },
  {
    q: "How many locations are included?",
    a: "The $49/mo plan includes 1 business location. Additional locations are $29/mo each. Running 5+ locations? Contact us for a bundle discount.",
  },
  {
    q: "What platforms do you monitor?",
    a: "Google, Yelp, and Facebook out of the box. More platforms coming soon.",
  },
  {
    q: "Is there a limit on review requests?",
    a: "No. Send unlimited review requests via email. SMS is limited only by your Twilio account balance.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes — 14 days free, no credit card required. Full access to all features.",
  },
  {
    q: "What's the difference between ZiggyReviews and Birdeye?",
    a: "The main difference is price: $49/mo vs $299/mo. Both offer automated review requests, monitoring, and response tools. We also include Twilio BYOK so you pay no SMS markup — Birdeye charges for SMS separately.",
  },
  {
    q: "Can I use ZiggyReviews for multiple businesses?",
    a: "Yes. You can manage multiple businesses or locations from one account. Each additional location is $29/mo.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. If you're not happy in your first 30 days, we'll refund your first month. No questions asked.",
  },
];

export default function PricingPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Simple pricing.{" "}
          <span style={{ color: "#f59e0b" }}>No surprises.</span>
        </h1>
        <p className="text-lg text-[#a1a1aa] max-w-xl mx-auto">
          While Birdeye hides their $299/mo price behind a sales demo, ours is
          right here.
        </p>
      </section>

      {/* Pricing cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Starter */}
          <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-1">Starter</h3>
            <p className="text-[#a1a1aa] text-sm mb-6">For small businesses getting started</p>
            <div className="text-4xl font-bold mb-1">$49</div>
            <div className="text-[#a1a1aa] text-sm mb-8">/month · 1 location</div>
            <ul className="space-y-3 text-sm mb-8">
              {[
                "1 business location",
                "Unlimited email requests",
                "QR code generator",
                "Google/Yelp/Facebook monitoring",
                "Response templates",
                "Review embed widget",
                "Twilio BYOK",
                "Analytics dashboard",
                "Email support",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-[#f59e0b]">✓</span>
                  <span className="text-[#a1a1aa]">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="block w-full text-center border border-[#f59e0b] text-[#f59e0b] font-semibold py-3 rounded-xl hover:bg-[#f59e0b] hover:text-black transition-colors"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Pro — highlighted */}
          <div className="bg-[#18181b] border-2 border-[#f59e0b] rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-[#f59e0b] text-black text-xs font-bold px-3 py-1 rounded-full">
                BEST VALUE
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-1">Growth</h3>
            <p className="text-[#a1a1aa] text-sm mb-6">For businesses scaling fast</p>
            <div className="text-4xl font-bold mb-1">$99</div>
            <div className="text-[#a1a1aa] text-sm mb-8">/month · up to 3 locations</div>
            <ul className="space-y-3 text-sm mb-8">
              {[
                "Up to 3 locations",
                "Everything in Starter",
                "SMS requests (Twilio BYOK)",
                "Review funnel (filter unhappy)",
                "Competitor monitoring",
                "Weekly email reports",
                "Multi-location dashboard",
                "Priority email + chat support",
                "30-day money-back guarantee",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-[#f59e0b]">✓</span>
                  <span className="text-[#a1a1aa]">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="block w-full text-center bg-[#f59e0b] text-black font-bold py-3 rounded-xl hover:bg-amber-400 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Agency */}
          <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-1">Agency</h3>
            <p className="text-[#a1a1aa] text-sm mb-6">For agencies & multi-location brands</p>
            <div className="text-4xl font-bold mb-1">Custom</div>
            <div className="text-[#a1a1aa] text-sm mb-8">Volume pricing · white label</div>
            <ul className="space-y-3 text-sm mb-8">
              {[
                "Unlimited locations",
                "Everything in Growth",
                "White label branding",
                "Agency dashboard",
                "Client reporting",
                "API access",
                "Dedicated account manager",
                "SLA guarantee",
                "Custom onboarding",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-[#f59e0b]">✓</span>
                  <span className="text-[#a1a1aa]">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="mailto:hello@ziggyreviews.com"
              className="block w-full text-center border border-[#27272a] text-white font-semibold py-3 rounded-xl hover:bg-[#27272a] transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>

        {/* vs competitors callout */}
        <div className="mt-12 bg-[#18181b] border border-[#27272a] rounded-2xl p-6 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold" style={{ color: "#f59e0b" }}>$49/mo</div>
              <div className="text-xs text-[#a1a1aa] mt-1">ZiggyReviews Starter</div>
            </div>
            <div className="border-x border-[#27272a]">
              <div className="text-2xl font-bold text-[#a1a1aa] line-through">$299/mo</div>
              <div className="text-xs text-[#a1a1aa] mt-1">Birdeye</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[#a1a1aa] line-through">$399/mo</div>
              <div className="text-xs text-[#a1a1aa] mt-1">Podium</div>
            </div>
          </div>
          <div className="text-center mt-4 text-sm text-[#a1a1aa]">
            You save <span className="text-white font-semibold">$250–$350/mo</span> vs the competition. That&apos;s{" "}
            <span className="text-[#f59e0b] font-semibold">$3,000–$4,200/year</span>.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#18181b]/30 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6"
              >
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Start your free trial today
        </h2>
        <p className="text-[#a1a1aa] text-lg mb-8">
          14 days free. No credit card required. Full access to all features.
        </p>
        <Link
          href="#"
          className="inline-block bg-[#f59e0b] text-black font-bold text-lg px-10 py-4 rounded-xl hover:bg-amber-400 transition-colors"
        >
          Get Started Free →
        </Link>
      </section>

      <Footer />
    </>
  );
}
