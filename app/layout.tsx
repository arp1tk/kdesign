import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "K Design - Timeless Interiors, Tailored for You",
  description:
    "Premium interior solutions from leading brands like Vista, Home Shanti, Kaara, Argil, Adwin & Deck",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    title: "K Design - Timeless Interiors, Tailored for You",
    description:
      "Premium interior solutions from leading brands like Vista, Home Shanti, Kaara, Argil, Adwin & Deck",
    url: "https://Kdesign-interiors.com", 
    siteName: "K Design",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "K Design Hero Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Design - Timeless Interiors, Tailored for You",
    description:
      "Premium interior solutions from leading brands like Vista, Home Shanti, Kaara, Argil, Adwin & Deck",
    images: ["/icon.png"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
