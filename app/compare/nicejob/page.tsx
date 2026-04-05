import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const rows = [
  { feature: `Locations included`, ziggy: `3 locations` },
  { feature: `Automated review requests`, ziggy: true },
  { feature: `Google monitoring`, ziggy: true },
  { feature: `Yelp monitoring`, ziggy: true },
  { feature: `Facebook monitoring`, ziggy: true },
  { feature: `AI response suggestions`, ziggy: true },
  { feature: `Review widgets`, ziggy: true },
  { feature: `NPS surveys`, ziggy: true },
  { feature: `Competitor tracking`, ziggy: true },
  { feature: `Advanced analytics`, ziggy: true },
  { feature: `Custom branding`, ziggy: true },
  { feature: `API access`, ziggy: true },
  { feature: `Priority support`, ziggy: true },
]
const reasons = [
  `Save money every month — NiceJob charges $75/mo. ZiggyReviews starts at $29/mo.`,
  `ZiggyReviews is built for how small businesses actually operate — not enterprise workflows.`,
  `Get up and running in under an hour. No lengthy onboarding required.`,
  `ZiggyReviews integrates natively with all 9 other ZiggyTech apps. No API setup needed.`,
]

export default function ComparePage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="relative overflow-hidden pt-20 pb-20 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f59e0b]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#2d2d2d] rounded-full px-4 py-1.5 text-sm text-[#b3b3b3] mb-8">ZiggyReviews vs NiceJob</div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="text-[#f59e0b]">ZiggyReviews</span> vs <span className="text-[#b3b3b3]">NiceJob</span>
          </h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-10">The honest comparison. Same core features. Better pricing for small teams.</p>
          <Link href="https://app.ziggyreviews.com/signup" className="bg-[#f59e0b] text-white rounded-xl px-8 py-4 font-semibold text-lg hover:opacity-90 inline-block">Try ZiggyReviews Free</Link>
        </div>
      </section>
      <section className="py-16 px-4 bg-[#111111] border-y border-[#2d2d2d]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">The verdict</h2>
          <div className="bg-[#1a1a1a] border border-[#2d2d2d] rounded-xl p-6">
            <p className="text-[#b3b3b3] leading-relaxed">NiceJob is a solid review management tool — but at $75/mo it's nearly 3x the cost of ZiggyReviews Starter. ZiggyReviews includes automated requests, AI response suggestions, multi-platform monitoring, and review widgets at $29/mo.</p>
          </div>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-[#111111] border-2 border-[#f59e0b]/40 rounded-2xl p-8 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="px-3 py-1 bg-[#f59e0b] text-white text-xs font-bold rounded-full uppercase">Recommended</span></div>
              <p className="text-xl font-bold text-white mb-2">ZiggyReviews</p>
              <p className="text-5xl font-bold text-[#f59e0b] mb-1">$29<span className="text-xl text-[#b3b3b3]">/mo</span></p>
              <p className="text-sm text-[#f59e0b] mt-2">Full ZiggyTech Suite integration</p>
            </div>
            <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl p-8 text-center">
              <p className="text-xl font-bold text-white mb-2">NiceJob</p>
              <p className="text-5xl font-bold text-white mb-1">$75<span className="text-xl text-[#b3b3b3]">/mo</span></p>
              <p className="text-sm text-[#b3b3b3] mt-2">No suite integration</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-6">Why teams switch to ZiggyReviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {reasons.map((r, i) => <div key={i} className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 hover:border-[#f59e0b]/30 transition-colors"><p className="text-[#b3b3b3] text-sm leading-relaxed">{r}</p></div>)}
          </div>
          <div className="bg-[#111111] border border-[#1f1f1f] rounded-2xl overflow-hidden mb-16">
            <div className="grid grid-cols-3 bg-[#1a1a1a] border-b border-[#1f1f1f]">
              <div className="p-4 text-sm font-semibold text-[#b3b3b3]">Feature</div>
              <div className="p-4 text-sm font-semibold text-[#f59e0b] text-center">ZiggyReviews</div>
              <div className="p-4 text-sm font-semibold text-[#b3b3b3] text-center">NiceJob</div>
            </div>
            {rows.map((r) => (
              <div key={r.feature} className="grid grid-cols-3 border-b border-[#1f1f1f] last:border-0">
                <div className="p-4 text-sm text-[#b3b3b3]">{r.feature}</div>
                <div className="p-4 text-center">
                  {typeof r.ziggy === 'boolean' ? <svg className="w-5 h-5 text-[#f59e0b] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> : <span className="text-sm text-[#f59e0b] font-medium">{r.ziggy}</span>}
                </div>
                <div className="p-4 text-center">
                  <svg className="w-5 h-5 text-[#555] mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center py-12 bg-[#111111] rounded-2xl border border-[#1f1f1f]">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to make the switch?</h2>
            <p className="text-[#b3b3b3] mb-8">14-day free trial. No credit card. Cancel anytime.</p>
            <Link href="https://app.ziggyreviews.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f59e0b] text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all">Try ZiggyReviews Free</Link>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
