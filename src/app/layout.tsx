import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/features/WhatsAppButton'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Diamond Tints - Professional Window Tinting Kingston, ON',
  description: 'Premium automotive window tinting services in Kingston, Ontario. Professional installation, lifetime warranty, competitive prices.',
  keywords: 'window tinting, car tinting, Kingston, Ontario, automotive, UV protection',
  openGraph: {
    title: 'Diamond Tints Kingston',
    description: 'Professional Window Tinting Services',
    url: 'https://diamondtints.ca',
    siteName: 'Diamond Tints',
    locale: 'en_CA',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}