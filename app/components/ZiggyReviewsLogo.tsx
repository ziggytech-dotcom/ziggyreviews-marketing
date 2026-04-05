import Image from 'next/image'

export function ZiggyReviewsLogo({ className = '' }: { className?: string }) {
  return (
    <Image
      src="/press-assets/ziggyreviews-wordmark-dark.png"
      alt="ZiggyReviews"
      width={140}
      height={40}
      className={className}
      style={{ objectFit: 'contain' }}
      priority
    />
  )
}
