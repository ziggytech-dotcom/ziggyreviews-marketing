import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { CookieBanner } from "@/app/components/CookieBanner"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400","500","600","700"], variable: "--font-space-grotesk" })

export const metadata: Metadata = {
  title: { default: "ZiggyReviews — More 5-star reviews. Less chasing.", template: "%s | ZiggyReviews" },
  description: "More 5-star reviews. Less chasing.. Part of the ZiggyTech Business Suite.",
  openGraph: { title: "ZiggyReviews — More 5-star reviews. Less chasing.", description: "More 5-star reviews. Less chasing..", siteName: "ZiggyReviews", url: "https://ziggyreviews.com" },
  icons: { icon: '/favicon.ico' },
  metadataBase: new URL("https://ziggyreviews.com"),
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-[#0a0a0a] text-white antialiased" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
