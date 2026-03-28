import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface IndustryPageProps {
  badge: string;
  headline: string;
  headlineAccent: string;
  headlineEnd?: string;
  subheadline: string;
  heroStats: { value: string; label: string }[];
  problemHeading: string;
  problemBody: string;
  problemPoints: string[];
  solutionPoints: { icon: string; title: string; desc: string }[];
  features: { icon: string; title: string; desc: string }[];
  testimonial: { quote: string; name: string; business: string; stars?: number };
  ctaHeading: string;
  ctaSub: string;
}

export default function IndustryPage({
  badge,
  headline,
  headlineAccent,
  headlineEnd,
  subheadline,
  heroStats,
  problemHeading,
  problemBody,
  problemPoints,
  solutionPoints,
  features,
  testimonial,
  ctaHeading,
  ctaSub,
}: IndustryPageProps) {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, #f59e0b, transparent)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#18181b] border border-[#27272a] rounded-full px-4 py-1.5 text-sm mb-6">
            <span className="text-[#f59e0b]">⭐</span>
            <span className="text-[#a1a1aa]">{badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {headline}{" "}
            <span style={{ color: "#f59e0b" }}>{headlineAccent}</span>
            {headlineEnd && (
              <>
                <br />
                {headlineEnd}
              </>
            )}
          </h1>
          <p className="text-lg text-[#a1a1aa] max-w-2xl mx-auto mb-10">
            {subheadline}
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

          {/* Stats */}
          <div
            className="grid gap-8 max-w-lg mx-auto"
            style={{ gridTemplateColumns: `repeat(${heroStats.length}, 1fr)` }}
          >
            {heroStats.map((s, i) => (
              <div
                key={s.label}
                className={`text-center ${i > 0 ? "border-l border-[#27272a]" : ""}`}
              >
                <div className="text-3xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-[#a1a1aa] mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            {problemHeading}
          </h2>
          <p className="text-[#a1a1aa] text-lg leading-relaxed text-center mb-12">
            {problemBody}
          </p>
          <div className="bg-[#18181b] border border-[#27272a] rounded-2xl p-8">
            <h3 className="font-semibold mb-4" style={{ color: "#ff1744" }}>
              The problem:
            </h3>
            <ul className="space-y-3">
              {problemPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[#a1a1aa]">
                  <span style={{ color: "#ff1744" }} className="mt-0.5">✗</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-[#18181b]/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              ZiggyReviews fixes it{" "}
              <span style={{ color: "#f59e0b" }}>automatically</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionPoints.map((s) => (
              <div
                key={s.title}
                className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6 hover:border-[#f59e0b]/40 transition-colors"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything included at{" "}
          <span style={{ color: "#f59e0b" }}>$49/mo</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#18181b] border border-[#27272a] rounded-2xl p-6"
            >
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="font-semibold mb-2 text-sm">{f.title}</h3>
              <p className="text-[#a1a1aa] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-[#18181b]/30 py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-[#f59e0b] text-2xl mb-4">
            {"★".repeat(testimonial.stars ?? 5)}
          </div>
          <blockquote className="text-xl font-medium text-white mb-6 leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <div className="text-[#a1a1aa] text-sm">
            <span className="text-white font-semibold">{testimonial.name}</span>
            {" · "}{testimonial.business}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">{ctaHeading}</h2>
        <p className="text-[#a1a1aa] text-lg mb-8">{ctaSub}</p>
        <Link
          href="/pricing"
          className="inline-block bg-[#f59e0b] text-black font-bold text-lg px-10 py-4 rounded-xl hover:bg-amber-400 transition-colors"
        >
          Start Free Trial →
        </Link>
        <p className="text-sm text-[#a1a1aa] mt-4">
          $49/mo · 14-day free trial · No credit card · Cancel anytime
        </p>
      </section>

      <Footer />
    </>
  );
}
