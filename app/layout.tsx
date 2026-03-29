import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ZiggyReviews — Turn Happy Customers Into 5-Star Reviews",
    template: "%s | ZiggyReviews",
  },
  description:
    "ZiggyReviews automates Google review requests via email, SMS, and QR codes. Monitor every review, respond faster. $49/mo — 84% less than Birdeye.",
  keywords: [
    "review management software",
    "google reviews automation",
    "review request software",
    "birdeye alternative",
    "podium alternative",
    "sms review requests",
    "qr code reviews",
    "reputation management",
  ],
  authors: [{ name: "ZiggyReviews" }],
  creator: "ZiggyReviews",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ziggyreviews.com",
    siteName: "ZiggyReviews",
    title: "ZiggyReviews — Turn Happy Customers Into 5-Star Reviews",
    description:
      "Automate Google review requests via email, SMS, and QR code. Monitor every review, respond faster. $49/mo.",
    images: [
      {
        url: "https://ziggyreviews.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZiggyReviews — Review Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZiggyReviews — Turn Happy Customers Into 5-Star Reviews",
    description:
      "Automate Google review requests. $49/mo vs Birdeye's $299/mo.",
    images: ["https://ziggyreviews.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://ziggyreviews.com"),

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-white font-sans antialiased">{children}</body>
    </html>
  );
}
