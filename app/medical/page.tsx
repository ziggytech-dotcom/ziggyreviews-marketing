import type { Metadata } from "next";
import IndustryPage from "@/components/IndustryPage";

export const metadata: Metadata = {
  title: "Medical Practice Reviews — Build Patient Trust with Verified Reviews",
  description:
    "ZiggyReviews for medical practices, dentists, and clinics: automate patient review requests. HIPAA-aware. Build 5-star reputation on Google and Healthgrades. $49/mo.",
};

export default function MedicalPage() {
  return (
    <IndustryPage
      badge="Medical Practice Review Software"
      headline="Build patient trust with"
      headlineAccent="verified reviews."
      subheadline="77% of patients use online reviews to choose a doctor or dentist. ZiggyReviews helps medical practices, dental offices, and clinics collect more Google reviews — professionally, automatically, and at $49/mo."
      heroStats={[
        { value: "77%", label: "of patients check reviews before booking" },
        { value: "4.5★", label: "average earns 60% more new patients" },
        { value: "$49", label: "per month" },
      ]}
      problemHeading="Patients trust you. But new patients don't know that yet."
      problemBody="Your existing patients love your practice. But when someone new searches 'dentist near me' or 'primary care doctor in [city],' they see your competitor with 200 reviews and a 4.8 star rating — and they book there. Reviews are now the first impression."
      problemPoints={[
        "Satisfied patients don't think to leave reviews unless asked",
        "Competitors with more reviews consistently outrank you on Google Maps",
        "One frustrated patient's review damages your reputation unfairly",
        "Front desk staff feel uncomfortable asking patients to leave reviews",
        "Review management software costs $299–$399/mo elsewhere",
      ]}
      solutionPoints={[
        {
          icon: "🏥",
          title: "Post-Visit Review Requests",
          desc: "Send automated review requests via email or SMS after every appointment. Timed to go out after the patient is home — when they're most likely to respond.",
        },
        {
          icon: "📱",
          title: "QR Code at Front Desk",
          desc: "A tasteful QR code at checkout or in the waiting room. 'Enjoyed your visit? Share your experience.' One scan → Google review.",
        },
        {
          icon: "🛡️",
          title: "HIPAA-Aware Design",
          desc: "ZiggyReviews never includes health information in review requests. All messages are generic and compliant with HIPAA privacy guidelines.",
        },
        {
          icon: "🎯",
          title: "Review Funnel",
          desc: "Patients with concerns get a private feedback form first — not a public review. Resolve issues internally while protecting your public rating.",
        },
        {
          icon: "🔔",
          title: "Instant Review Alerts",
          desc: "Get notified the moment a review posts on Google or Healthgrades. Respond quickly to show future patients you're engaged and responsive.",
        },
        {
          icon: "🖼️",
          title: "Review Widget for Your Site",
          desc: "Display your best Google reviews on your practice website. Verified social proof that converts website visitors into new patient bookings.",
        },
      ]}
      features={[
        { icon: "📧", title: "Email review requests", desc: "Automated post-appointment follow-ups" },
        { icon: "💬", title: "SMS requests (Twilio BYOK)", desc: "Text reminders — compliant and non-medical" },
        { icon: "📱", title: "QR code generator", desc: "For front desk, waiting room, appointment cards" },
        { icon: "🔔", title: "Google/Facebook monitoring", desc: "Real-time alerts for new patient reviews" },
        { icon: "⚡", title: "Response templates", desc: "Professional, HIPAA-aware response templates" },
        { icon: "🎯", title: "Review funnel", desc: "Resolve concerns privately before they go public" },
        { icon: "🖼️", title: "Review embed widget", desc: "Social proof on your new patient landing pages" },
        { icon: "📊", title: "Rating trend analytics", desc: "Track your average rating and review volume" },
        { icon: "📍", title: "Multi-location support", desc: "Manage multiple clinic locations from one account" },
      ]}
      testimonial={{
        quote: "We're a 3-doctor dental practice. In 4 months our Google reviews went from 58 to 203 and our rating went from 4.2 to 4.8 stars. New patient calls are up 40%. ZiggyReviews is the best $49 we spend each month.",
        name: "Dr. Sarah L.",
        business: "Managing Partner, Bright Smile Dental Group — Austin, TX",
        stars: 5,
      }}
      ctaHeading="Build the patient trust that fills your schedule."
      ctaSub="HIPAA-aware. Automated. $49/mo. 14-day free trial."
    />
  );
}
