import type { Metadata } from "next";
import IndustryPage from "@/components/IndustryPage";

export const metadata: Metadata = {
  title: "Home Services Review Management — More Reviews = Top of Google Search",
  description:
    "ZiggyReviews for home services: HVAC, plumbers, electricians, landscapers. Automate Google review requests after every job. More reviews = more calls. $49/mo.",
};

export default function HomeServicesPage() {
  return (
    <IndustryPage
      badge="Home Services Review Software"
      headline="More reviews."
      headlineAccent="Top of Google."
      headlineEnd="More calls."
      subheadline="For HVAC, plumbing, electrical, landscaping, cleaning, and every home service business: reviews win jobs. ZiggyReviews automates review requests after every completed job — so your happy customers do the selling."
      heroStats={[
        { value: "88%", label: "of consumers use reviews to find local services" },
        { value: "3×", label: "more reviews with SMS automation" },
        { value: "$49", label: "per month" },
      ]}
      problemHeading="You do great work. Your Google reviews don't show it."
      problemBody="You finished the job, the customer was thrilled, they said 'I'll leave you a review!' — and then life happened. Three months later, you still have 14 reviews. Your competitor has 180. Who gets the call?"
      problemPoints={[
        "Customers promise reviews but forget within 24 hours",
        "Competitors with 100+ reviews dominate Google Maps local pack",
        "One bad review from a difficult client tanks your average",
        "You depend on word-of-mouth while competitors collect reviews automatically",
        "Birdeye charges $299/mo for the same thing ZiggyReviews does for $49",
      ]}
      solutionPoints={[
        {
          icon: "🔧",
          title: "Post-Job SMS Requests",
          desc: "Send a text 2 hours after job completion: 'Thanks for having us out today! Could you leave us a quick Google review? It takes 30 seconds.' Converts while the job is fresh.",
        },
        {
          icon: "🚛",
          title: "QR Codes on Your Truck",
          desc: "Magnetic QR code on your service truck or van. Every job site visit is a review opportunity. One scan → Google review page.",
        },
        {
          icon: "📋",
          title: "Invoice QR Codes",
          desc: "Print a QR code on every invoice. 'Loved our service? Scan to leave a review.' Turns paperwork into reputation building.",
        },
        {
          icon: "🔔",
          title: "Real-Time Review Alerts",
          desc: "Know instantly when a review posts. Respond to 5-stars with a thank you, and handle the rare 1-star before it spreads.",
        },
        {
          icon: "📊",
          title: "Google Maps Ranking Tracker",
          desc: "More recent reviews = higher Google Maps ranking = more calls. Track your review velocity and watch your ranking climb.",
        },
        {
          icon: "🎯",
          title: "Review Funnel",
          desc: "Unhappy customers get a private feedback form first — not a public Google review. Protect your rating while still collecting feedback.",
        },
      ]}
      features={[
        { icon: "📧", title: "Email review requests", desc: "Post-job automated follow-up emails" },
        { icon: "💬", title: "SMS requests (Twilio BYOK)", desc: "Text after every completed job — no markup" },
        { icon: "📱", title: "QR code generator", desc: "For trucks, invoices, yard signs, business cards" },
        { icon: "🔔", title: "Google/Yelp/Facebook monitoring", desc: "Never miss a review on any platform" },
        { icon: "⚡", title: "Response templates", desc: "Professional replies that show you care" },
        { icon: "🎯", title: "Review funnel", desc: "Filter complaints before they go public" },
        { icon: "🖼️", title: "Review embed widget", desc: "Show reviews on your service area pages" },
        { icon: "📊", title: "Review velocity dashboard", desc: "Track progress toward your review goals" },
        { icon: "📍", title: "Multi-location / multi-tech", desc: "Manage multiple service areas or franchises" },
      ]}
      testimonial={{
        quote: "I run a 3-truck plumbing company. Before ZiggyReviews we had 31 Google reviews. Now we have 214. We show up in the top 3 on Google Maps for every neighborhood we service. The ROI is insane for $49/mo.",
        name: "Marcus T.",
        business: "Owner, FastFlow Plumbing — Dallas, TX",
        stars: 5,
      }}
      ctaHeading="Dominate Google Maps in your service area."
      ctaSub="Automated review requests after every job. $49/mo. No contracts."
    />
  );
}
