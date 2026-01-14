// import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Danholt Suites - Luxury Hotel Website',
  description: 'Experience luxury and comfort at Danholt Suites. Book your stay at our world-class hotel with premium amenities.',
  keywords: 'luxury hotel, suites, accommodation, booking, premium hotel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
