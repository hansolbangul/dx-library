'use client'

import { MobileNav } from '@/features/libraries/components/Sidebar'
import { Sidebar } from '@/features/libraries/components/Sidebar'

interface Props {
  children: React.ReactNode
}

export default function ClientLayout({ children }: Props) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <MobileNav />
      <div className="flex-1">
        <div className="container flex-1 md:gap-6 lg:gap-10">
          <Sidebar />
          <main className="relative py-6 md:gap-10 md:pl-[240px]">
            <div className="mx-auto w-full">{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
