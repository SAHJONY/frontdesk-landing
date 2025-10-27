import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FrontDesk Agents - AI Receptionist Platform",
  description: "Enterprise-grade AI receptionist that speaks like a human. 24/7 bilingual support in English and Spanish. Never miss a call again.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

