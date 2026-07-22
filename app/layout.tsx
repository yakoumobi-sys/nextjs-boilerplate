import './globals.css'

export const metadata = {
  title: 'Moka Yakoubi - Build. Teach. Scale.',
  description: 'Personal brand site de Moka Yakoubi. 480K+ followers, 43 employés, 2 entreprises.',
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
