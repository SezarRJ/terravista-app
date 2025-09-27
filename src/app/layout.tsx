import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TerraVista - AI-Powered Real Estate Platform',
  description: 'Find, buy, sell, and invest in properties with AI-powered insights, real-time messaging, and expert guidance.',
  keywords: 'real estate, Turkey, property, buy, sell, invest, AI, marketplace',
  openGraph: {
    title: 'TerraVista - AI-Powered Real Estate Platform',
    description: 'Transform your real estate experience with AI-powered search, analytics, and investment insights.',
    url: 'https://terravista.com',
    siteName: 'TerraVista',
    images: [
      {
        url: 'https://terravista.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
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
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
