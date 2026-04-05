'use client'
import { useState } from 'react'
import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const features = [
  { title: `Automated Review Requests`, desc: `Send review requests automatically after a job is completed. Email and SMS touchpoints timed for maximum response rates.` },
  { title: `AI Response Suggestions`, desc: `ZiggyReviews drafts responses to every new review using AI. You review and publish in one click.` },
  { title: `Multi-Platform Monitoring`, desc: `Monitor reviews across Google, Yelp, and Facebook from one dashboard. Get instant alerts on new reviews.` },
  { title: `NPS Surveys`, desc: `Send Net Promoter Score surveys to your customer base. Track NPS over time and convert promoters into public reviewers.` },
  { title: `Competitor Tracking`, desc: `Monitor your top competitors' review ratings and volume across Google and Yelp.` },
  { title: `Review Widgets`, desc: `Embed your best reviews on your website automatically. Widgets update in real time as new reviews come in.` },
]
const heroFacts = [
  '$29/mo — NiceJob charges $75',
  'Automated review requests',
  '10-app suite available',
  'Support from the team that built it',
]
const stats = [
  { value: '$29/mo', label: '1 location', color: '#f59e0b' },
  { value: 'AI', label: 'Response drafts', color: '#0ea5e9' },
  { value: 'Auto', label: 'Review requests', color: '#10b981' },
  { value: '14 days', label: 'Free to try', color: '#8b5cf6' },
]
const faqs = [
  { q: `Which review platforms does ZiggyReviews support?`, a: `Currently Google Business, Yelp, and Facebook. TripAdvisor, Trustpilot, and OpenTable monitoring are coming in 2026.` },
  { q: `How do automated review requests work?`, a: `Connect ZiggyReviews to your CRM or POS via Zapier. When a job is marked complete, ZiggyReviews automatically sends a review request. Happy customers are directed to Google; unhappy ones are captured privately.` },
  { q: `Are the AI response suggestions good?`, a: `They're a starting point — you review and edit before publishing. You can train ZiggyReviews on your brand voice by rating suggestions and adding custom instructions.` },
  { q: `How many locations can I manage?`, a: `Starter covers 1 location at $29/mo. Pro covers 3 locations at $49/mo. Add more locations at $15/location/mo on Pro.` },
  { q: `Can I embed my reviews on my website?`, a: `Yes. ZiggyReviews provides embeddable widgets that display your latest reviews from Google and Yelp. Widgets auto-update as new reviews come in.` },
]

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />

      <section className="relative overflow-hidden pt-32 pb-24 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#f59e0b]/12 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
        </div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-xs font-semibold uppercase tracking-widest mb-8">
            ZiggyReviews — Review Management for local business
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            More 5-star reviews.{' '}
            {tagline.split('. ').length > 1 && <span className="text-[#f59e0b]">Less chasing.</span>}
          </h1>
          <p className="text-xl md:text-2xl text-[#b3b3b3] max-w-3xl mx-auto leading-relaxed mb-10">
            NiceJob charges $75/month. Birdeye wants $299. We built automated review requests, AI responses, and competitor monitoring for $29/mo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <Link href="https://app.ziggyreviews.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f59e0b] text-white rounded-xl font-semibold text-lg hover:opacity-90 hover:scale-105 transition-all">
              Start Free Trial
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/features" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] rounded-xl font-semibold text-lg hover:bg-[#f59e0b]/20 transition-all">
              See Features
            </Link>
          </div>
          <p className="text-sm text-[#b3b3b3]/60">14-day free trial · No credit card required · Cancel anytime</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-[#1f1f1f]">
            {heroFacts.map((f) => (
              <div key={f} className="flex items-center gap-2 text-sm text-[#b3b3b3]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />{f}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0a0a0a] via-[#0c0f14] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b] mb-3">Features</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Everything you need</h2>
            <p className="text-lg text-[#b3b3b3] max-w-2xl mx-auto">The tools that actually move your business forward.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((f) => (
              <div key={f.title} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-6 md:p-8 hover:border-[#f59e0b]/30 transition-all">
                <h3 className="text-xl font-semibold text-white mb-3">{f.title}</h3>
                <p className="text-[#b3b3b3] leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/features" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] rounded-xl font-semibold hover:bg-[#f59e0b]/20 transition-all">
              View all features
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0d1828] to-[#080c10]">
        <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-[#f59e0b]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b] mb-4">Our story</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">We&apos;ve been in your shoes</h2>
          <div className="space-y-6 text-lg text-[#b3b3b3] leading-relaxed">
            <p>NiceJob charges $75/month. Birdeye wants $299. We built automated review requests, AI responses, and competitor monitoring for $29/mo.</p>
            <p className="text-white font-medium">That&apos;s ZiggyReviews. Built by people who get it, for people who need it.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((s, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center hover:border-[#f59e0b]/30 transition-colors">
                <p className="text-2xl font-bold mb-1" style={{ color: s.color }}>{s.value}</p>
                <p className="text-sm text-[#b3b3b3]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 bg-gradient-to-b from-[#0d0d0d] via-[#0a0e14] to-[#0d0d0d]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b] mb-4">Pricing</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple, honest pricing</h2>
          <p className="text-lg text-[#b3b3b3] mb-12 max-w-2xl mx-auto">No seat traps. No hidden fees. No contact sales.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 text-left">
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Starter</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-bold text-white">$29</span>
                <span className="text-[#b3b3b3] mb-2">/mo</span>
              </div>
              <p className="text-sm text-[#b3b3b3] mb-6">1 location</p>
              <Link href="https://app.ziggyreviews.com/signup" className="block w-full text-center px-6 py-3 bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] rounded-xl font-semibold hover:bg-[#f59e0b]/20 transition-all">Start free trial</Link>
            </div>
            <div className="bg-[#111111] border-2 border-[#f59e0b]/40 rounded-2xl p-8 text-left relative">
              <div className="absolute -top-3 left-6"><span className="px-3 py-1 bg-[#f59e0b] text-white text-xs font-bold rounded-full uppercase">Most Popular</span></div>
              <p className="text-sm font-semibold text-[#b3b3b3] uppercase tracking-wider mb-2">Pro</p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-5xl font-bold text-white">$49</span>
                <span className="text-[#b3b3b3] mb-2">/mo</span>
              </div>
              <p className="text-sm text-[#b3b3b3] mb-6">3 locations</p>
              <Link href="https://app.ziggyreviews.com/signup" className="block w-full text-center px-6 py-3 bg-[#f59e0b] text-white rounded-xl font-semibold hover:opacity-90 transition-all">Start free trial</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-4">
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center">
              <p className="text-[#b3b3b3] text-sm mb-1">NiceJob</p>
              <p className="text-3xl font-bold text-white">$75<span className="text-lg text-[#b3b3b3]">/mo</span></p>
              <p className="text-[#e11d48] text-sm mt-1">$46 more per month</p>
            </div>
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-5 text-center">
              <p className="text-[#b3b3b3] text-sm mb-1">Birdeye</p>
              <p className="text-3xl font-bold text-white">$299<span className="text-lg text-[#b3b3b3]">/mo</span></p>
              <p className="text-[#e11d48] text-sm mt-1">costs more per month</p>
            </div>
          </div>
          <div className="p-4 bg-[#22c55e]/10 border border-[#22c55e]/20 rounded-xl max-w-2xl mx-auto mb-8">
            <p className="text-[#22c55e] font-bold text-lg">Save up to $552/year with ZiggyReviews</p>
          </div>
          <Link href="/pricing" className="inline-flex items-center gap-2 text-[#f59e0b] hover:underline font-medium">
            View full pricing
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>

      <section className="py-24 md:py-32 px-4 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b] mb-4">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Common questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden hover:border-[#f59e0b]/20 transition-colors">
                <button className="w-full flex items-center justify-between p-6 md:p-8 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="text-white font-semibold text-lg pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#f59e0b] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && <div className="px-6 md:px-8 pb-6 md:pb-8"><p className="text-[#b3b3b3] text-lg leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
          <p className="text-center text-[#b3b3b3] mt-8">More questions? <Link href="/faq" className="text-[#f59e0b] hover:underline">View full FAQ</Link></p>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32 px-4 bg-gradient-to-br from-[#080c10] via-[#0c1520] to-[#080c10]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to run your business<br />
            <span className="text-[#f59e0b]">the smarter way?</span>
          </h2>
          <p className="text-xl text-[#b3b3b3] mb-10">14 days free. No credit card. Cancel anytime.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="https://app.ziggyreviews.com/signup" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#f59e0b] text-white rounded-xl font-bold text-xl hover:opacity-90 hover:scale-105 transition-all">
              Start Free Trial
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <Link href="/pricing" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#f59e0b]/10 border border-[#f59e0b]/30 text-[#f59e0b] rounded-xl font-bold text-xl hover:bg-[#f59e0b]/20 transition-all">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  )
}
