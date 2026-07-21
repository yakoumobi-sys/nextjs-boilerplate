import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moka Yakoubi | Entrepreneur & Content Creator',
  description: 'I help entrepreneurs build $1M+ businesses using AI automation & atomic habits',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
