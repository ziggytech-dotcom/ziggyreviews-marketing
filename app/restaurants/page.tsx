import type { Metadata } from "next";
import IndustryPage from "@/components/IndustryPage";

export const metadata: Metadata = {
  title: "Restaurant Review Management — More Google Reviews, More Reservations",
  description:
    "ZiggyReviews for restaurants: automatically request Google reviews after every meal. Monitor Yelp, Google, and TripAdvisor. More reviews = more foot traffic. $49/mo.",
};

export default function RestaurantsPage() {
  return (
    <IndustryPage
      badge="Restaurant Review Software"
      headline="More Google reviews."
      headlineAccent="More reservations."
      subheadline="Restaurants with 4.5+ stars and 100+ reviews get 70% more clicks on Google Maps. ZiggyReviews automates review requests after every table visit — so you climb search results without lifting a finger."
      heroStats={[
        { value: "70%", label: "more clicks at 4.5+ stars" },
        { value: "3×", label: "more reviews via SMS" },
        { value: "$49", label: "per month" },
      ]}
      problemHeading="Happy diners forget to leave reviews."
      problemBody="You serve great food. Customers rave to their friends. But only 1 in 10 actually leaves a Google review — and your competitor with 300 reviews gets picked every time someone searches for restaurants nearby."
      problemPoints={[
        "Customers enjoy their meal and forget to review by the time they get home",
        "Your Google Maps ranking stays low while competitors with more reviews dominate",
        "Negative reviews from one bad night outweigh 50 positive experiences",
        "Staff feel awkward asking for reviews at the end of a meal",
        "You're spending $0 on reputation management and losing bookings to it",
      ]}
      solutionPoints={[
        {
          icon: "📱",
          title: "Post-Visit SMS Requests",
          desc: "Send a text 2 hours after a visit: 'Thanks for dining with us! Got 30 seconds to leave a quick Google review?' It converts 3× better than email.",
        },
        {
          icon: "📋",
          title: "Receipt QR Codes",
          desc: "Print a QR code on every receipt and table tent. One scan goes straight to your Google review page — no searching, no friction.",
        },
        {
          icon: "🔔",
          title: "Instant Review Alerts",
          desc: "Get notified the moment a review lands on Google or Yelp. Respond in minutes instead of days — Google rewards fast responses.",
        },
        {
          icon: "⚡",
          title: "One-Click Responses",
          desc: "Pre-written response templates for 5-star and negative reviews. Thank regulars, handle complaints professionally, in 10 seconds.",
        },
        {
          icon: "🌐",
          title: "Google + Yelp + Facebook",
          desc: "Monitor all three platforms from one dashboard. See your star ratings, recent reviews, and response rate at a glance.",
        },
        {
          icon: "🖼️",
          title: "Website Review Widget",
          desc: "Auto-display your best Google reviews on your website. New reviews appear automatically. Turns website visitors into reservations.",
        },
      ]}
      features={[
        { icon: "📧", title: "Email review requests", desc: "Automated follow-up emails after reservations or orders" },
        { icon: "💬", title: "SMS requests (Twilio BYOK)", desc: "Text customers directly — no SMS markup" },
        { icon: "📱", title: "QR code generator", desc: "Print-ready codes for receipts, menus, table tents" },
        { icon: "🔔", title: "Multi-platform monitoring", desc: "Google, Yelp, Facebook in one dashboard" },
        { icon: "⚡", title: "Response templates", desc: "Professional replies in 10 seconds" },
        { icon: "🖼️", title: "Review embed widget", desc: "Show your best reviews on your website" },
        { icon: "📊", title: "Analytics & trends", desc: "Track your star rating and review volume over time" },
        { icon: "🎯", title: "Review funnel", desc: "Filter unhappy customers before they go public" },
        { icon: "📍", title: "Multi-location support", desc: "Manage multiple restaurant locations from one account" },
      ]}
      testimonial={{
        quote: "We went from 47 Google reviews to 180 in 3 months. Our Google Maps ranking jumped and we started getting calls from new customers every day. ZiggyReviews paid for itself in the first week.",
        name: "Carlos M.",
        business: "Owner, Fuego Cantina — Las Vegas",
        stars: 5,
      }}
      ctaHeading="More reviews. More reservations. $49/mo."
      ctaSub="Set up in 5 minutes. Start collecting reviews automatically tonight."
    />
  );
}
