import { Metadata } from 'next'
import { LIBRARIES } from '@/constants/libraries'
import Link from 'next/link'

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
        url: 'https://dx-library.hansolbangul.com/dx-library.png',
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

export default function HomePage() {
  return (
    <div className="flex-1">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            High-quality libraries for
            <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
              {' '}
              better DX
            </span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A collection of libraries to improve your development experience. Built with modern
            tools and best practices.
          </p>
        </div>
      </section>
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem]">
          {Object.values(LIBRARIES).map((lib) => (
            <Link
              key={lib.id}
              href={lib.href}
              className="relative overflow-hidden rounded-lg border bg-background p-2 hover:border-foreground transition-colors"
            >
              <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
                <div className="space-y-2">
                  <h3 className="font-bold text-2xl">{lib.name}</h3>
                  <p className="text-muted-foreground">{lib.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Learn more →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
