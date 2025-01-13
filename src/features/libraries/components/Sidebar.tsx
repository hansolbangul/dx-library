'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { LIBRARIES } from '@/constants/libraries'
import { useSidebarStore } from '@/store/use-sidebar'

function SidebarContent() {
  const params = useParams()
  const libraryId = params.id as keyof typeof LIBRARIES
  const library = LIBRARIES[libraryId]
  const close = useSidebarStore((state) => state.close)

  if (!library) return null

  return (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">{library.name}</h2>
        <div className="space-y-1">
          {library.sections?.map((item) => (
            <Link
              key={item.title}
              href={`${item.href}`}
              onClick={() => close()}
              className={cn(
                'block rounded-md px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                params.section === (item.href.slice(1) || 'introduction')
                  ? 'bg-accent text-accent-foreground'
                  : 'transparent',
              )}
            >
              <div className="flex items-center gap-2">
                <span>{item.title}</span>
                {library.comingSoon && (
                  <span className="ml-auto text-xs font-medium text-muted-foreground">
                    Coming soon
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Sidebar() {
  const isOpen = useSidebarStore((state) => state.isOpen)
  const close = useSidebarStore((state) => state.close)

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="fixed z-10 top-[var(--header-height)] left-0 hidden h-[calc(100vh-var(--header-height))] w-[240px] border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:block">
        <div className="flex h-full flex-col">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => close()}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed inset-y-0 left-0 z-50 h-full w-[240px] border-r bg-background p-6 shadow-lg md:hidden"
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export function MobileNav() {
  const params = useParams()
  const libraryId = params.id as keyof typeof LIBRARIES
  const library = LIBRARIES[libraryId]
  const toggle = useSidebarStore((state) => state.toggle)

  if (!library) return null

  return (
    <div className="flex h-14 items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="container flex items-center gap-4">
        <button
          onClick={toggle}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border hover:bg-accent"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="h-5 w-5">
            <path
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">{library.name}</h2>
        </div>
      </div>
    </div>
  )
}
