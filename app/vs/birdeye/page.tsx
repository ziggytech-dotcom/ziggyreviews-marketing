import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ZiggyReviews vs Birdeye — $49/mo vs $299/mo",
  description: "ZiggyReviews vs Birdeye: same core review management features, 84% lower price. $49/mo vs $299/mo. No setup fee, no annual contract, AI responses included.",
}

const ACCENT = "#f59e0b"
const SIGNUP = "https://app.ziggyreviews.com/signup"

export default function VsBirdeye() {
  return (
    <>
      <style>{`@media(max-width:768px){.nav-links{display:none!important}}`}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1f1f1f", padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ fontSize: 22, fontWeight: 700, color: "#fff", textDecoration: "none" }}>
            Ziggy<span style={{ color: ACCENT }}>Reviews</span>
          </a>
          <div className="nav-links" style={{ display: "flex", gap: 28 }}>
            {[["Features", "/#features"], ["Compare", "/vs/birdeye"], ["Pricing", "/#pricing"], ["Blog", "/blog"], ["Sign In", "https://app.ziggyreviews.com/login"]].map(([l, h]) => (
              <a key={l} href={h} style={{ color: "#888", fontSize: 15, textDecoration: "none", fontWeight: 500 }}>{l}</a>
            ))}
          </div>
          <a href={SIGNUP} style={{ background: ACCENT, color: "#000", textDecoration: "none", padding: "9px 20px", borderRadius: 8, fontSize: 14, fontWeight: 700 }}>
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: "80px 24px 60px", textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
        <div style={{
          display: "inline-block", background: `rgba(245,158,11,0.1)`, border: `1px solid rgba(245,158,11,0.25)`,
          borderRadius: 99, padding: "6px 16px", fontSize: 13, color: ACCENT, fontWeight: 600, marginBottom: 24,
        }}>
          Direct Comparison · Updated 2026
        </div>
        <h1 style={{ fontSize: "clamp(36px,5vw,58px)", fontWeight: 700, letterSpacing: "-1.5px", lineHeight: 1.1, marginBottom: 20 }}>
          ZiggyReviews vs Birdeye
        </h1>
        <p style={{ fontSize: 18, color: "#888", lineHeight: 1.6, marginBottom: 12, maxWidth: 580, margin: "0 auto 12px" }}>
          Same review management features. 84% lower price. No setup fee. No annual contract.
        </p>
        <p style={{ fontSize: 15, color: "#555", marginBottom: 36 }}>
          Birdeye: <strong style={{ color: "#fff" }}>$299/mo</strong> · ZiggyReviews Pro: <strong style={{ color: ACCENT }}>$49/mo</strong>
        </p>
        <a href={SIGNUP} style={{
          display: "inline-block", background: ACCENT, color: "#000", textDecoration: "none",
          padding: "14px 28px", borderRadius: 10, fontSize: 16, fontWeight: 700,
        }}>
          Start Free Trial — No credit card required
        </a>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ padding: "48px 24px 80px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "16px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>Feature</th>
                <th style={{ textAlign: "center", padding: "16px 20px", color: ACCENT, fontWeight: 700, fontSize: 15, borderBottom: "1px solid #1f1f1f", background: `rgba(245,158,11,0.05)` }}>
                  ZiggyReviews Pro<br /><span style={{ fontSize: 12, fontWeight: 400, color: "#888" }}>$49/mo</span>
                </th>
                <th style={{ textAlign: "center", padding: "16px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>
                  Birdeye<br /><span style={{ fontSize: 12, fontWeight: 400, color: "#555" }}>$299/mo</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Monthly price", "$49/mo", "$299/mo"],
                ["Annual contract required", "No — month-to-month", "Yes — annual commitment"],
                ["Setup fee", "$0", "$299+"],
                ["Locations included", "3 locations", "1 location (base)"],
                ["Review request campaigns", "✅ Email (SMS coming)", "✅ Email + SMS"],
                ["AI-generated review responses", "✅ Yes", "✅ Yes"],
                ["Google monitoring", "✅ Yes", "✅ Yes"],
                ["Yelp monitoring", "✅ Yes", "✅ Yes"],
                ["Facebook monitoring", "✅ Yes", "✅ Yes"],
                ["TripAdvisor monitoring", "✅ Yes", "✅ Yes"],
                ["NPS surveys", "✅ Yes", "✅ Yes"],
                ["Sentiment analysis", "✅ Yes", "✅ Yes"],
                ["Review embed widget", "✅ Yes", "✅ Yes"],
                ["Negative review alerts", "✅ Yes", "✅ Yes"],
                ["Competitor monitoring", "✅ Agency ($99/mo)", "✅ Enterprise tier"],
                ["White-label reporting", "✅ Agency ($99/mo)", "✅ Enterprise tier"],
                ["API access", "✅ Agency ($99/mo)", "✅ Paid add-on"],
                ["14-day free trial", "✅ Yes, no card needed", "❌ Demo call required"],
              ].map(([feature, ziggy, birdeye], i) => (
                <tr key={feature} style={{ background: i % 2 === 0 ? "transparent" : "#0d0d0d" }}>
                  <td style={{ padding: "13px 20px", color: "#888", borderBottom: "1px solid #161616", fontSize: 14 }}>{feature}</td>
                  <td style={{ padding: "13px 20px", color: "#fff", textAlign: "center", borderBottom: "1px solid #161616", background: `rgba(245,158,11,0.03)`, fontWeight: 500, fontSize: 14 }}>{ziggy}</td>
                  <td style={{ padding: "13px 20px", color: "#555", textAlign: "center", borderBottom: "1px solid #161616", fontSize: 14 }}>{birdeye}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          marginTop: 32, background: `rgba(245,158,11,0.06)`, border: `1px solid rgba(245,158,11,0.2)`,
          borderRadius: 14, padding: "28px 32px",
        }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 12 }}>The bottom line</h3>
          <p style={{ fontSize: 16, color: "#aaa", lineHeight: 1.8, margin: 0 }}>
            Birdeye charges $299/mo for features most businesses never use. ZiggyReviews Pro covers 3 locations with AI responses for $49/mo. That's <strong style={{ color: ACCENT }}>84% less</strong>. Our Agency plan at $99/mo competes directly with Birdeye's full feature set — without the annual contract or the $299 setup fee.
          </p>
        </div>
      </section>

      {/* ── FEATURE CALLOUT ── */}
      <section style={{ padding: "40px 24px 80px", maxWidth: 900, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
          {[
            { icon: "💰", title: "Save $3,000/year", desc: "ZiggyReviews Pro at $49/mo vs Birdeye at $299/mo. That's $2,400 back in your pocket every year — without losing any core functionality." },
            { icon: "🚫", title: "No setup fee", desc: "Birdeye charges $299+ just to get started. ZiggyReviews is $0 to set up. Sign up, connect your Google account, and send your first campaign in minutes." },
            { icon: "🔓", title: "No annual contract", desc: "Birdeye locks you into annual commitments. ZiggyReviews is month-to-month. Cancel anytime, no questions asked." },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 14, padding: "28px 24px" }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: "80px 24px", textAlign: "center",
        background: "linear-gradient(180deg,#0a0a0a 0%,#0d0800 100%)",
        borderTop: "1px solid #1f1f1f",
      }}>
        <h2 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, letterSpacing: "-1px", marginBottom: 16, lineHeight: 1.15 }}>
          Stop paying $299/mo for review management.
        </h2>
        <p style={{ fontSize: 17, color: "#555", marginBottom: 32 }}>14 days free. No credit card. No contract.</p>
        <a href={SIGNUP} style={{
          display: "inline-block", background: ACCENT, color: "#000", textDecoration: "none",
          padding: "16px 36px", borderRadius: 12, fontSize: 17, fontWeight: 700,
        }}>
          Try ZiggyReviews Free →
        </a>
        <p style={{ marginTop: 16, fontSize: 13, color: "#444" }}>Pricing data sourced from Birdeye.com · Updated March 2026</p>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#050505", borderTop: "1px solid #111", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
            {[["Home", "/"], ["Features", "/#features"], ["Pricing", "/#pricing"], ["Blog", "/blog"], ["Sign In", "https://app.ziggyreviews.com/login"]].map(([label, href]) => (
              <a key={label} href={href} style={{ color: "#555", fontSize: 14, textDecoration: "none", fontWeight: 500 }}>{label}</a>
            ))}
          </div>
          <p style={{ fontSize: 13, color: "#333" }}>
            Part of{" "}
            <a href="https://ziggybusiness.com" style={{ color: "#555", textDecoration: "none" }}>ZiggyTech Business Suite</a>
            {" · "}
            <a href="https://ziggybusiness.com" style={{ color: "#555", textDecoration: "none" }}>ziggybusiness.com</a>
          </p>
          <p style={{ fontSize: 13, color: "#2a2a2a" }}>© 2026 ZiggyReviews. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
