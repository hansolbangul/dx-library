import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/features/layout/components/Header'
import { Footer } from '@/features/layout/components/Footer'
import { ThemeProvider } from '@/features/theme/components/theme-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'DX 라이브러리',
    template: '%s - DX 라이브러리',
  },
  description: '개발자 경험을 향상시키기 위한 라이브러리 모음',
  keywords: ['개발자 경험', '라이브러리', 'DX', '오픈소스'],
  authors: [{ name: 'DX 라이브러리 팀' }],
  creator: 'DX 라이브러리 팀',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://dx-library.hansolbangul.com',
    title: 'DX 라이브러리',
    description: '개발자 경험을 향상시키기 위한 라이브러리 모음',
    siteName: 'DX 라이브러리',
    images: [
      {
        url: 'https://dx-library.hansolbangul.com/dx-library.webp',
        width: 1200,
        height: 630,
        alt: 'DX 라이브러리 썸네일',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DX 라이브러리',
    description: '개발자 경험을 향상시키기 위한 라이브러리 모음',
    images: ['https://dx-library.hansolbangul.com/dx-library.webp'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 transition-all duration-200">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
