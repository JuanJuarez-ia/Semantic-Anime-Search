import { BackgroundDecoration } from '@/components/ui/background-decoration'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk, Noto_Sans_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: '--font-noto-sans-jp'
});

export const metadata: Metadata = {
  title: 'AniSearch | Semantic Anime Discovery',
  description: 'Discover anime through intelligent semantic search. Find your next favorite series with AI-powered recommendations.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#090B10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${notoSansJP.variable} font-sans antialiased bg-background text-foreground no-scrollbar`}>
        <BackgroundDecoration />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
