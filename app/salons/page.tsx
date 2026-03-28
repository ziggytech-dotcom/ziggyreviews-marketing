import type { Metadata } from "next";
import IndustryPage from "@/components/IndustryPage";

export const metadata: Metadata = {
  title: "Salon Review Software — Every Happy Client Becomes a 5-Star Review",
  description:
    "ZiggyReviews for salons & spas: automate Google review requests after every appointment. SMS, email, and QR codes. Build your 5-star reputation. $49/mo.",
};

export default function SalonsPage() {
  return (
    <IndustryPage
      badge="Salon & Spa Review Software"
      headline="Every happy client becomes"
      headlineAccent="a 5-star review."
      subheadline="Salons and spas live and die by their online reputation. ZiggyReviews automatically requests Google reviews after every appointment — so your happy clients do the marketing for you."
      heroStats={[
        { value: "84%", label: "cheaper than Birdeye" },
        { value: "3×", label: "review conversion via SMS" },
        { value: "$49", label: "per month" },
      ]}
      problemHeading="Your clients love you. Their friends don't know you exist."
      problemBody="A client leaves your salon glowing. She tells her neighbor you're amazing. But does she leave a Google review? Probably not — unless you make it effortless. ZiggyReviews does exactly that."
      problemPoints={[
        "Clients mean to leave a review but forget by the time they get home",
        "Your rival salon has 150 reviews and dominates 'near me' searches",
        "Negative reviews from difficult clients outweigh your regulars' loyalty",
        "You feel uncomfortable asking clients directly for reviews",
        "New clients choose the salon with more reviews — even if yours is better",
      ]}
      solutionPoints={[
        {
          icon: "💅",
          title: "Post-Appointment SMS",
          desc: "Send a text 2 hours after every appointment: 'Thanks for coming in today! Would you mind leaving us a quick Google review?' Converts while the experience is fresh.",
        },
        {
          icon: "📱",
          title: "QR Codes at Checkout",
          desc: "A QR code at your front desk or on the receipt. Clients scan, review, done — before they even reach their car.",
        },
        {
          icon: "🔔",
          title: "Instant Review Notifications",
          desc: "Know the moment a review goes live. Respond to praise, handle complaints fast — clients notice when you care.",
        },
        {
          icon: "⚡",
          title: "Professional Response Templates",
          desc: "Ready-made replies for every star rating. Thank your regulars by name. Handle negative reviews gracefully without losing your cool.",
        },
        {
          icon: "🖼️",
          title: "Website Testimonial Widget",
          desc: "Automatically display your latest 5-star Google reviews on your booking page. Social proof that turns browsers into bookings.",
        },
        {
          icon: "📊",
          title: "Star Rating Trends",
          desc: "Watch your average rating improve week over week as more happy clients leave reviews. Track which stylists get the best reviews.",
        },
      ]}
      features={[
        { icon: "📧", title: "Email review requests", desc: "Automated after every appointment booking" },
        { icon: "💬", title: "SMS requests (Twilio BYOK)", desc: "Post-appointment texts — zero SMS markup" },
        { icon: "📱", title: "QR code generator", desc: "Print on cards, mirrors, receipts, windows" },
        { icon: "🔔", title: "Google/Yelp/Facebook monitoring", desc: "All platforms in one dashboard" },
        { icon: "⚡", title: "Response templates", desc: "Professional replies in seconds" },
        { icon: "🖼️", title: "Review embed widget", desc: "Auto-display 5-star reviews on your booking site" },
        { icon: "📊", title: "Stylist-level analytics", desc: "See which team members drive the best reviews" },
        { icon: "🎯", title: "Review funnel", desc: "Catch unhappy clients before they go public" },
        { icon: "📅", title: "Appointment-based triggers", desc: "Auto-send based on service type and timing" },
      ]}
      testimonial={{
        quote: "I was embarrassed to ask clients for reviews. ZiggyReviews asks for me via text, and my Google reviews went from 23 to 97 in two months. New clients book specifically because of my reviews now.",
        name: "Priya K.",
        business: "Owner, Glow Salon Studio — Phoenix, AZ",
        stars: 5,
      }}
      ctaHeading="Turn your best clients into your best marketing."
      ctaSub="Automated. Effortless. $49/mo. Start your free trial today."
    />
  );
}
