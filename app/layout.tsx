import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moka Yakoubi — Entrepreneur & Formateur',
  description: 'Formations, podcast et contenu gratuit pour lancer ta marque et scaler avec l\'IA.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}
