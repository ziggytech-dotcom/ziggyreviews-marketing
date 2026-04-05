'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const faqs = [
  { q: `Which review platforms does ZiggyReviews support?`, a: `Currently Google Business, Yelp, and Facebook. TripAdvisor, Trustpilot, and OpenTable monitoring are coming in 2026.` },
  { q: `How do automated review requests work?`, a: `Connect ZiggyReviews to your CRM or POS via Zapier. When a job is marked complete, ZiggyReviews automatically sends a review request. Happy customers are directed to Google; unhappy ones are captured privately.` },
  { q: `Are the AI response suggestions good?`, a: `They're a starting point — you review and edit before publishing. You can train ZiggyReviews on your brand voice by rating suggestions and adding custom instructions.` },
  { q: `How many locations can I manage?`, a: `Starter covers 1 location at $29/mo. Pro covers 3 locations at $49/mo. Add more locations at $15/location/mo on Pro.` },
  { q: `Can I embed my reviews on my website?`, a: `Yes. ZiggyReviews provides embeddable widgets that display your latest reviews from Google and Yelp. Widgets auto-update as new reviews come in.` },
  { q: `What is the happy path / unhappy path review funnel?`, a: `When you send a review request, ZiggyReviews first asks how was your experience. Customers who respond positively are redirected to Google or Yelp. Customers who respond negatively are captured in a private feedback form.` },
]

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="pt-20 pb-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b] mb-4">FAQ</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Frequently asked questions</h1>
          <p className="text-xl text-[#b3b3b3]">Everything you need to know about ZiggyReviews.</p>
        </div>
      </section>
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-3 mb-16">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#f59e0b]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpen(open === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#f59e0b] flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {open === i && <div className="px-6 md:px-8 pb-6 md:pb-8"><p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
          <div className="bg-[#111111] border border-[#f59e0b]/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Still have questions?</h2>
            <p className="text-[#b3b3b3] mb-6">Our team is happy to help.</p>
            <Link href="https://app.ziggyreviews.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f59e0b] text-white rounded-xl font-semibold hover:opacity-90 transition-all">Start Free Trial</Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
