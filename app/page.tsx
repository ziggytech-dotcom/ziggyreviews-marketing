import Script from "next/script"

const ACCENT = "#f59e0b"
const SIGNUP = "https://app.ziggyreviews.com/signup"
const LOGIN  = "https://app.ziggyreviews.com/login"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "ZiggyReviews",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": "https://ziggyreviews.com",
      "description": "Review management and online reputation platform for local businesses. Automate review requests, respond with AI, monitor every platform.",
      "offers": [
        { "@type": "Offer", "name": "Starter", "price": "29.00", "priceCurrency": "USD" },
        { "@type": "Offer", "name": "Pro",     "price": "49.00", "priceCurrency": "USD" },
        { "@type": "Offer", "name": "Agency",  "price": "99.00", "priceCurrency": "USD" },
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does ZiggyReviews cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ZiggyReviews starts at $29/mo for one location. Pro is $49/mo (3 locations, AI responses, NPS surveys). Agency is $99/mo (unlimited locations, white-label, API). All plans start with a 14-day free trial — no credit card required."
          }
        },
        {
          "@type": "Question",
          "name": "How is ZiggyReviews different from Birdeye?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Birdeye charges $299/mo for features most small businesses never use. ZiggyReviews Pro covers 3 locations with AI-generated responses for $49/mo — that's 84% less. Our Agency plan at $99/mo competes directly with Birdeye's full feature set."
          }
        },
        {
          "@type": "Question",
          "name": "Which review platforms does ZiggyReviews support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Google, Yelp, Facebook, and TripAdvisor — all monitored from one dashboard. Review request campaigns can direct customers to whichever platform matters most for your business."
          }
        },
        {
          "@type": "Question",
          "name": "How does the 14-day free trial work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sign up and get 14 days free with full access — no credit card required. If it's not for you, just walk away. Nothing to cancel."
          }
        },
        {
          "@type": "Question",
          "name": "Is ZiggyReviews HIPAA-safe for healthcare businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our Healthcare & Dental review collection flows are designed to be HIPAA-safe. We collect satisfaction data without referencing specific treatments or diagnoses."
          }
        },
        {
          "@type": "Question",
          "name": "Can I white-label ZiggyReviews for my agency clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes — on the Agency plan ($99/mo). You get full white-label reporting, bulk campaigns across unlimited locations, competitor monitoring, and API access to build your own integrations."
          }
        }
      ]
    }
  ]
}

export default function Home() {
  return (
    <>
      <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <style>{`@media(max-width:768px){.nav-links{display:none!important}}`}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #1f1f1f",
        padding: "0 24px",
      }}>
        <div style={{ maxWidth: 1120, margin: "0 auto", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href="/" style={{ fontSize: 22, fontWeight: 700, color: "#fff", textDecoration: "none", letterSpacing: "-0.5px" }}>
            Ziggy<span style={{ color: ACCENT }}>Reviews</span>
          </a>

          <div className="nav-links" style={{ display: "flex", gap: 28 }}>
            {[["Features", "#features"], ["Compare", "/vs/birdeye"], ["Pricing", "#pricing"], ["Blog", "/blog"], ["Sign In", LOGIN]].map(([label, href]) => (
              <a key={label} href={href} style={{ color: "#888", fontSize: 15, textDecoration: "none", fontWeight: 500 }}>{label}</a>
            ))}
          </div>

          <a href={SIGNUP} style={{
            background: ACCENT, color: "#000", textDecoration: "none",
            padding: "9px 20px", borderRadius: 8, fontSize: 14, fontWeight: 700, whiteSpace: "nowrap",
          }}>
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ padding: "100px 24px 80px", textAlign: "center", maxWidth: 820, margin: "0 auto" }}>
        <div style={{
          display: "inline-block",
          background: `rgba(245,158,11,0.1)`, border: `1px solid rgba(245,158,11,0.25)`,
          borderRadius: 99, padding: "6px 16px", fontSize: 13, color: ACCENT, fontWeight: 600,
          marginBottom: 28, letterSpacing: "0.02em",
        }}>
          Birdeye Alternative · 84% less at $49/mo
        </div>

        <h1 style={{
          fontSize: "clamp(42px,6vw,68px)", fontWeight: 700, lineHeight: 1.08,
          letterSpacing: "-1.5px", marginBottom: 24, color: "#fff",
        }}>
          More 5-star reviews.<br />
          <span style={{
            background: `linear-gradient(135deg,#fff 0%,${ACCENT} 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>Less effort.</span>
        </h1>

        <p style={{ fontSize: 19, color: "#888", lineHeight: 1.6, marginBottom: 40, maxWidth: 600, margin: "0 auto 40px" }}>
          Automated review request campaigns, AI-generated responses, and multi-platform monitoring — all from one dashboard.{" "}
          <strong style={{ color: "#fff" }}>Starting at $29/mo.</strong>
        </p>

        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 24 }}>
          <a href={SIGNUP} style={{
            background: ACCENT, color: "#000", textDecoration: "none",
            padding: "15px 30px", borderRadius: 10, fontSize: 16, fontWeight: 700,
          }}>
            Start Free Trial — 14 days free
          </a>
          <a href="#pricing" style={{
            background: "transparent", color: "#fff", textDecoration: "none",
            padding: "15px 30px", borderRadius: 10, fontSize: 16, fontWeight: 600, border: "1px solid #333",
          }}>
            See Pricing
          </a>
        </div>

        <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
          {["14-day free trial", "No credit card", "Cancel anytime"].map(badge => (
            <span key={badge} style={{ fontSize: 13, color: "#555", display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ color: ACCENT, fontWeight: 700 }}>✓</span> {badge}
            </span>
          ))}
        </div>
      </section>

      {/* ── PROBLEM STRIP ── */}
      <section style={{
        background: "#0f0f0f", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f", padding: "56px 24px",
      }}>
        <div style={{
          maxWidth: 1000, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 32, textAlign: "center",
        }}>
          {[
            { emoji: "😤", headline: "Happy customers forget.", body: "You delivered great work. They meant to leave a review. Life got busy. That 5-star review never happened — and your competitor got it instead." },
            { emoji: "📉", headline: "Fewer reviews = fewer customers.", body: "Customers Google you before they call. If your last review is from 2 years ago and your competitor has 150+ this year, they win the click every time." },
            { emoji: "💸", headline: "Birdeye charges $299/mo.", body: "For features most local businesses never use. You're paying for an enterprise platform when all you need is reviews, responses, and a dashboard that works." },
          ].map(({ emoji, headline, body }) => (
            <div key={headline}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{emoji}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{headline}</h3>
              <p style={{ fontSize: 15, color: "#666", lineHeight: 1.6 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "96px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2 style={{ fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, letterSpacing: "-1px", marginBottom: 16 }}>
            Everything your reputation needs.
          </h2>
          <p style={{ fontSize: 17, color: "#666", maxWidth: 500, margin: "0 auto" }}>
            From automated requests to AI responses — every tool you need to build and protect your online reputation.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 20 }}>
          {[
            { icon: "📧", title: "Automated Review Campaigns", desc: "Send review request emails and SMS automatically after every job, purchase, or appointment. Set it once and watch reviews roll in." },
            { icon: "🤖", title: "AI-Generated Responses", desc: "Respond to every review in seconds with AI-crafted replies that sound human. Save hours — especially on Pro and Agency plans." },
            { icon: "🌐", title: "Multi-Platform Monitoring", desc: "Google, Yelp, Facebook, and TripAdvisor — all in one dashboard. Never miss a new review or let a negative one slip by unnoticed." },
            { icon: "📊", title: "NPS Surveys", desc: "Measure customer satisfaction internally before it goes public. Catch unhappy customers early and fix it before they write a review." },
            { icon: "🧠", title: "Sentiment Analysis", desc: "Understand what customers love — and what they don't. AI scans every review and surfaces patterns so you can act on them." },
            { icon: "⭐", title: "Review Widgets", desc: "Embed your best reviews directly on your website. Automatically pull fresh stars from Google and Yelp to turn visitors into buyers." },
            { icon: "🔔", title: "Negative Review Alerts", desc: "Get notified instantly when a 1 or 2-star review drops. Respond fast, make it right, and show future customers you care." },
            { icon: "📈", title: "Competitor Monitoring", desc: "Agency plan: watch what customers are saying about your competitors. Find their weaknesses and make them your selling points." },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: "#111", border: "1px solid #1f1f1f", borderRadius: 16, padding: "28px 24px",
            }}>
              <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{title}</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 32, background: "#111", border: "1px solid #1f1f1f", borderRadius: 16,
          padding: "28px 32px", display: "flex", flexWrap: "wrap", gap: "12px 40px",
        }}>
          <p style={{ color: "#555", fontSize: 13, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", width: "100%", marginBottom: 4 }}>Also included</p>
          {["White-label client reporting (Agency)", "Bulk campaigns (Agency)", "API access (Agency)", "Review request templates", "Email + SMS delivery", "Analytics dashboard", "Google + Yelp + Facebook + TripAdvisor", "14-day free trial"].map(f => (
            <span key={f} style={{ fontSize: 14, color: "#888", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: ACCENT, fontWeight: 700 }}>✓</span> {f}
            </span>
          ))}
        </div>
      </section>

      {/* ── COMING SOON STRIP ── */}
      <section style={{
        background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f", padding: "64px 24px",
      }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>What's coming next</h2>
            <p style={{ color: "#555", fontSize: 15 }}>We ship fast. Here's what's already in development.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 16 }}>
            {[
              { icon: "💬", title: "SMS Review Requests", sub: "via Twilio BYOK", badge: "In Development", badgeColor: "#ff9500", desc: "Bring your own Twilio number and send SMS review requests with zero markup. Text converts 3× better than email." },
              { icon: "📱", title: "TikTok & Instagram Embeds", sub: "Review widgets for social", badge: "In Development", badgeColor: "#ff9500", desc: "Embed your best reviews in Instagram and TikTok-optimized formats. Turn your reputation into social content." },
              { icon: "📷", title: "QR Code Campaigns", sub: "Print-ready review codes", badge: "Coming Soon", badgeColor: "#0066ff", desc: "Generate branded QR codes for your counter, invoice, or truck wrap. One scan → Google review page. Zero friction." },
            ].map(({ icon, title, sub, badge, badgeColor, desc }) => (
              <div key={title} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 14, padding: "24px 22px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontSize: 28 }}>{icon}</span>
                  <span style={{
                    background: `${badgeColor}20`, color: badgeColor, border: `1px solid ${badgeColor}40`,
                    borderRadius: 99, padding: "3px 10px", fontSize: 11, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase",
                  }}>{badge}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{title}</h3>
                <p style={{ fontSize: 12, color: "#555", marginBottom: 8 }}>{sub}</p>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6, marginTop: 6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ padding: "96px 24px", background: "#080808", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(30px,4vw,46px)", fontWeight: 700, letterSpacing: "-1px", marginBottom: 14, color: "#fff" }}>
              Built for your industry
            </h2>
            <p style={{ fontSize: 17, color: "#666", maxWidth: 500, margin: "0 auto" }}>
              ZiggyReviews works for any local business — with review flows tuned for how your industry operates.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 16, marginBottom: 40 }}>
            {[
              { icon: "🍽️", name: "Restaurants & Food", desc: "Manage Google, Yelp, and TripAdvisor from one dashboard. Automate post-visit review requests via email." },
              { icon: "💆", name: "Salons & Spas", desc: "Post-appointment review automation with a rebooking nudge. Grow your stars and your repeat bookings at the same time." },
              { icon: "🏠", name: "Real Estate", desc: "Agent reviews, office reputation, and neighborhood-level pages. Build the trust that wins listings before the first call." },
              { icon: "🔨", name: "Contractors & Home Services", desc: "Send a review request the moment a job is complete. Close more bids by showing up first on Google Maps." },
              { icon: "🏥", name: "Healthcare & Dental", desc: "HIPAA-safe review collection and patient satisfaction tracking. Build trust online without compromising compliance." },
              { icon: "🚗", name: "Auto Services", desc: "Post-service review requests plus recall reminder campaigns. Keep customers coming back and bring new ones in." },
              { icon: "🐾", name: "Pet Services", desc: "Review automation for vets, groomers, and boarding facilities. Pet owners research online before trusting you with their family." },
              { icon: "🏋️", name: "Fitness & Wellness", desc: "Member feedback and Google profile management. Showcase your community and attract new members through social proof." },
            ].map(({ icon, name, desc }) => (
              <div key={name} style={{
                background: "#111", border: "1px solid #1f1f1f", borderRadius: 14,
                padding: "24px 22px", display: "flex", alignItems: "flex-start", gap: 16,
              }}>
                <span style={{ fontSize: 32, flexShrink: 0, lineHeight: 1 }}>{icon}</span>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 5 }}>{name}</h3>
                  <p style={{ fontSize: 13, color: "#666", lineHeight: 1.55, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: `rgba(245,158,11,0.06)`, border: `1px solid rgba(245,158,11,0.2)`,
            borderRadius: 14, padding: "32px 36px",
            display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20,
          }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Need a custom review flow?</h3>
              <p style={{ fontSize: 15, color: "#888", maxWidth: 480, lineHeight: 1.6, margin: 0 }}>
                We set up custom review request sequences for any business type. Every plan includes onboarding support.
              </p>
            </div>
            <a href="mailto:hello@ziggyreviews.com" style={{
              background: ACCENT, color: "#000", textDecoration: "none",
              padding: "13px 26px", borderRadius: 9, fontSize: 15, fontWeight: 700, whiteSpace: "nowrap", flexShrink: 0,
            }}>
              Contact Us →
            </a>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section style={{ padding: "96px 24px", maxWidth: 960, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: 12 }}>
            ZiggyReviews vs Birdeye
          </h2>
          <p style={{ color: "#666", fontSize: 16 }}>
            Same core features. 84% lower price. No setup fee. No annual contract.
          </p>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr>
                <th style={{ textAlign: "left", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>Feature</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: ACCENT, fontWeight: 700, fontSize: 15, borderBottom: "1px solid #1f1f1f", background: `rgba(245,158,11,0.05)` }}>ZiggyReviews</th>
                <th style={{ textAlign: "center", padding: "14px 20px", color: "#555", fontWeight: 600, fontSize: 13, borderBottom: "1px solid #1f1f1f" }}>Birdeye</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Starting price", "$29/mo", "$299/mo"],
                ["Setup fee", "$0", "$299+"],
                ["Annual contract required", "No", "Yes"],
                ["Review request campaigns (email)", "✅ Yes", "✅ Yes"],
                ["AI-generated review responses", "✅ Yes (Pro+)", "✅ Yes"],
                ["Multi-platform monitoring", "✅ Google, Yelp, FB, TripAdvisor", "✅ Yes"],
                ["NPS surveys", "✅ Yes (Pro+)", "✅ Yes"],
                ["Sentiment analysis", "✅ Yes (Pro+)", "✅ Yes"],
                ["Review embed widget", "✅ Yes", "✅ Yes"],
                ["Negative review alerts", "✅ Yes", "✅ Yes"],
                ["Competitor monitoring", "✅ Agency plan", "✅ Yes"],
                ["White-label reporting", "✅ Agency ($99/mo)", "✅ Enterprise only"],
              ].map(([feature, ziggy, them], i) => (
                <tr key={feature} style={{ background: i % 2 === 0 ? "transparent" : "#0d0d0d" }}>
                  <td style={{ padding: "14px 20px", color: "#888", borderBottom: "1px solid #161616" }}>{feature}</td>
                  <td style={{ padding: "14px 20px", color: "#fff", textAlign: "center", borderBottom: "1px solid #161616", background: `rgba(245,158,11,0.03)`, fontWeight: 500 }}>{ziggy}</td>
                  <td style={{ padding: "14px 20px", color: "#555", textAlign: "center", borderBottom: "1px solid #161616" }}>{them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{
          marginTop: 24, background: `rgba(245,158,11,0.06)`, border: `1px solid rgba(245,158,11,0.2)`,
          borderRadius: 12, padding: "20px 24px",
        }}>
          <p style={{ fontSize: 15, color: "#ccc", lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: ACCENT }}>Bottom line:</strong> Birdeye charges $299/mo for features most businesses never use. ZiggyReviews Pro covers 3 locations with AI responses for $49/mo. That's 84% less. Our Agency plan at $99/mo competes directly with Birdeye's full feature set.
          </p>
        </div>

        <div style={{ marginTop: 16, textAlign: "center" }}>
          <a href="/vs/birdeye" style={{ color: ACCENT, fontSize: 14, textDecoration: "underline" }}>
            See the full ZiggyReviews vs Birdeye comparison →
          </a>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "96px 24px", background: "#080808", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, letterSpacing: "-0.8px", marginBottom: 12 }}>
              Simple pricing. No surprises.
            </h2>
            <p style={{ color: "#666", fontSize: 16 }}>
              Start free. Upgrade when you grow. Cancel anytime.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, maxWidth: 960, margin: "0 auto" }}>
            {[
              {
                name: "Starter", price: "$29", sub: "/mo", highlight: false,
                desc: "Perfect for single-location businesses just getting started with review automation.",
                features: ["1 location", "150 review requests/mo", "Basic email templates", "Google + Yelp monitoring", "Review embed widget", "Email support"],
                cta: "Start Free Trial",
              },
              {
                name: "Pro", price: "$49", sub: "/mo", highlight: true,
                desc: "The sweet spot for growing businesses with multiple locations.",
                features: ["3 locations", "Unlimited review requests", "AI-generated responses", "NPS surveys", "Sentiment analysis", "Google + Yelp + Facebook + TripAdvisor", "Priority support"],
                cta: "Start Free Trial",
              },
              {
                name: "Agency", price: "$99", sub: "/mo", highlight: false,
                desc: "For agencies and multi-location brands managing reputation at scale.",
                features: ["Unlimited locations", "Everything in Pro", "White-label client reporting", "Bulk campaigns", "Competitor monitoring", "API access", "Dedicated onboarding"],
                cta: "Start Free Trial",
              },
            ].map(({ name, price, sub, highlight, desc, features, cta }) => (
              <div key={name} style={{
                background: "#111",
                border: highlight ? `2px solid ${ACCENT}` : "1px solid #1f1f1f",
                borderRadius: 20, padding: "36px 28px",
                position: "relative",
              }}>
                {highlight && (
                  <div style={{
                    position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                    background: ACCENT, color: "#000", fontSize: 11, fontWeight: 700,
                    padding: "4px 14px", borderRadius: 99, letterSpacing: "0.08em", textTransform: "uppercase", whiteSpace: "nowrap",
                  }}>Most Popular</div>
                )}
                <div style={{ fontSize: 13, fontWeight: 700, color: highlight ? ACCENT : "#555", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>{name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 8 }}>
                  <span style={{ fontSize: 52, fontWeight: 700, color: "#fff", letterSpacing: "-2px" }}>{price}</span>
                  <span style={{ fontSize: 16, color: "#555" }}>{sub}</span>
                </div>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6, marginBottom: 28 }}>{desc}</p>
                <ul style={{ listStyle: "none", padding: 0, marginBottom: 28 }}>
                  {features.map(item => (
                    <li key={item} style={{ padding: "7px 0", fontSize: 14, color: "#ccc", display: "flex", alignItems: "center", gap: 10, borderBottom: "1px solid #1a1a1a" }}>
                      <span style={{ color: ACCENT, fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a href={SIGNUP} style={{
                  display: "block", textDecoration: "none", textAlign: "center",
                  background: highlight ? ACCENT : "transparent",
                  color: highlight ? "#000" : "#fff",
                  border: highlight ? "none" : "1px solid #333",
                  padding: "14px", borderRadius: 10, fontSize: 15, fontWeight: 700,
                }}>
                  {cta}
                </a>
              </div>
            ))}
          </div>

          <p style={{ textAlign: "center", marginTop: 24, fontSize: 13, color: "#444" }}>
            All plans include a 14-day free trial · No credit card required · Cancel anytime
          </p>

          <div style={{
            marginTop: 32, background: "#111", border: "1px solid #1f1f1f", borderRadius: 14,
            padding: "22px 24px", textAlign: "center", maxWidth: 600, margin: "32px auto 0",
          }}>
            <p style={{ color: "#888", fontSize: 14, lineHeight: 1.6 }}>
              🏢 <strong style={{ color: "#fff" }}>Running a full business?</strong> Get all 10 ZiggyTech apps — including ZiggyReviews — for{" "}
              <strong style={{ color: ACCENT }}>$179/mo flat</strong> with the ZiggyTech Business Suite.{" "}
              <a href="https://ziggybusiness.com" style={{ color: ACCENT, textDecoration: "underline" }}>Learn more →</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "96px 24px", maxWidth: 740, margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(28px,4vw,38px)", fontWeight: 700, letterSpacing: "-0.6px", marginBottom: 48, textAlign: "center" }}>
          Questions? We've got answers.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {[
            { q: "How much does ZiggyReviews cost?", a: "Plans start at $29/mo for one location (Starter). Pro is $49/mo and covers 3 locations with AI-generated responses, NPS surveys, and sentiment analysis. Agency is $99/mo — unlimited locations, white-label reporting, bulk campaigns, and API access. All plans start with a 14-day free trial, no credit card required." },
            { q: "How is ZiggyReviews different from Birdeye?", a: "Birdeye charges $299/mo for features most local businesses never use. ZiggyReviews Pro covers 3 locations with AI responses for $49/mo — that's 84% less. Our Agency plan at $99/mo competes directly with Birdeye's full feature set. No setup fee, no annual contract." },
            { q: "Which review platforms does ZiggyReviews support?", a: "Google, Yelp, Facebook, and TripAdvisor — all monitored from one dashboard. Review request campaigns direct customers to whichever platform matters most for your business. Starter covers Google + Yelp; Pro and Agency add Facebook and TripAdvisor." },
            { q: "How does the 14-day free trial work?", a: "Sign up and get 14 days free with full access — no credit card required. You get all the features of your chosen plan from day one. If it's not for you, just walk away. Nothing to cancel, nothing to explain." },
            { q: "Is ZiggyReviews HIPAA-safe for healthcare businesses?", a: "Yes. Our healthcare review collection flows are designed to be HIPAA-safe. We collect satisfaction data without referencing specific treatments or diagnoses, so you can build your online reputation without worrying about compliance." },
            { q: "Can I white-label ZiggyReviews for my agency?", a: "Yes — on the Agency plan ($99/mo). You get full white-label reporting so clients see your brand, not ours. Plus bulk campaigns across unlimited locations, competitor monitoring, and API access to build custom integrations." },
          ].map(({ q, a }) => (
            <details key={q} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 10, overflow: "hidden" }}>
              <summary style={{
                padding: "20px 24px", fontSize: 16, fontWeight: 600, color: "#fff",
                cursor: "pointer", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                {q}
                <span style={{ color: ACCENT, fontSize: 20, fontWeight: 400, flexShrink: 0 }}>+</span>
              </summary>
              <div style={{ padding: "0 24px 20px", fontSize: 15, color: "#777", lineHeight: 1.7, borderTop: "1px solid #1a1a1a" }}>
                <p style={{ marginTop: 16 }}>{a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        padding: "100px 24px", textAlign: "center",
        background: "linear-gradient(180deg,#0a0a0a 0%,#0d0800 100%)",
        borderTop: "1px solid #1f1f1f",
      }}>
        <h2 style={{ fontSize: "clamp(36px,5vw,58px)", fontWeight: 700, letterSpacing: "-1.5px", marginBottom: 20, lineHeight: 1.1 }}>
          Your competitors are getting reviews<br />
          <span style={{
            background: `linear-gradient(135deg,#fff 0%,${ACCENT} 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>right now.</span>
        </h2>
        <p style={{ fontSize: 18, color: "#555", marginBottom: 40 }}>
          14 days free. No credit card. Cancel anytime.
        </p>
        <a href={SIGNUP} style={{
          display: "inline-block", background: ACCENT, color: "#000", textDecoration: "none",
          padding: "18px 40px", borderRadius: 12, fontSize: 18, fontWeight: 700, letterSpacing: "-0.2px",
        }}>
          Start Free Trial →
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#050505", borderTop: "1px solid #111", padding: "40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 20, textAlign: "center" }}>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap", justifyContent: "center" }}>
            {[["Home", "/"], ["Features", "#features"], ["Compare", "/vs/birdeye"], ["Pricing", "#pricing"], ["Blog", "/blog"], ["Privacy", "/privacy"], ["Terms", "/terms"], ["Sign In", LOGIN]].map(([label, href]) => (
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
