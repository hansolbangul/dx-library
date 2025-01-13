'use client'

import { useParams } from 'next/navigation'
import { Sidebar, MobileNav } from '@/features/libraries/components/Sidebar'
import { LIBRARIES } from '@/constants/libraries'

export default function LibraryLayout({ children }: { children: React.ReactNode }) {
  const params = useParams()
  const id = params.id as string
  const library = LIBRARIES[id as keyof typeof LIBRARIES]

  if (!library) return null

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
