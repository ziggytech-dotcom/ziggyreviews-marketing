import Link from 'next/link'
import { MarketingNav } from '@/app/components/Nav'
import { MarketingFooter } from '@/app/components/Footer'

const features = [
  { title: `Automated Review Requests`, desc: `Send review requests automatically after a job is completed. Email and SMS touchpoints timed for maximum response rates.`, bullets: [`Automated email + SMS`, `Timing optimization`, `Custom message templates`, `Review funnel (happy path)`, `Unhappy path — private feedback`, `Follow-up sequences`] },
  { title: `AI Response Suggestions`, desc: `ZiggyReviews drafts responses to every new review using AI. You review and publish in one click.`, bullets: [`AI response for Google`, `AI response for Yelp`, `Brand voice customization`, `One-click publish`, `Response library`, `Response analytics`] },
  { title: `Multi-Platform Monitoring`, desc: `Monitor reviews across Google, Yelp, and Facebook from one dashboard. Get instant alerts on new reviews.`, bullets: [`Google Business monitoring`, `Yelp monitoring`, `Facebook monitoring`, `Instant alerts`, `Sentiment trend tracking`, `Rating history graphs`] },
  { title: `NPS Surveys`, desc: `Send Net Promoter Score surveys to your customer base. Track NPS over time and convert promoters into public reviewers.`, bullets: [`NPS survey campaigns`, `Automated send sequences`, `Promoter identification`, `Detractor follow-up`, `NPS trend reporting`, `Survey export`] },
  { title: `Competitor Tracking`, desc: `Monitor your top competitors' review ratings and volume across Google and Yelp.`, bullets: [`Competitor profile setup`, `Rating comparison dashboard`, `Volume trend charts`, `Review highlight tracking`, `Weekly reports`, `Alert on rating change`] },
  { title: `Review Widgets`, desc: `Embed your best reviews on your website automatically. Widgets update in real time as new reviews come in.`, bullets: [`Website embed widgets`, `Carousel and grid layouts`, `Filter by star rating`, `Auto-update from Google/Yelp`, `Custom styling`, `Schema markup for SEO`] },
]

export default function FeaturesPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      <MarketingNav />
      <section className="relative overflow-hidden pt-20 pb-16 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#f59e0b]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b] mb-4">Features</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Everything ZiggyReviews can do</h1>
          <p className="text-xl text-[#b3b3b3] max-w-2xl mx-auto mb-8">Every feature explained. No fluff.</p>
          <Link href="https://app.ziggyreviews.com/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#f59e0b] text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all">
            Start Free Trial — 14 days free
          </Link>
        </div>
      </section>
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto space-y-16">
          {features.map((f, i) => (
            <div key={f.title} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-start`}>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4">{f.title}</h2>
                <p className="text-lg text-[#b3b3b3] leading-relaxed mb-6">{f.desc}</p>
                <ul className="space-y-2">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-[#b3b3b3]">
                      <div className="w-5 h-5 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-[#111111] border border-[#1f1f1f] rounded-2xl aspect-video flex items-center justify-center">
                <p className="text-[#555] text-sm">Screenshot coming soon</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to see it in action?</h2>
          <p className="text-xl text-[#b3b3b3] mb-8">14-day free trial. No credit card required.</p>
          <Link href="https://app.ziggyreviews.com/signup" className="inline-flex items-center gap-2 px-10 py-5 bg-[#f59e0b] text-white rounded-xl font-bold text-xl hover:opacity-90 transition-all">Start Free Trial</Link>
        </div>
      </section>
      <MarketingFooter />
    </div>
  )
}
