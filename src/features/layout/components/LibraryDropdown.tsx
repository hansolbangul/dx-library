'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { LIBRARIES } from '@/constants/libraries'
import { dropdownVariants, staggerContainer, staggerItem } from '../animations/variants'
import { useClickOutside } from '@/hooks/useClickOutside'

export function LibraryDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useClickOutside(dropdownRef, () => setIsOpen(false))

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
      >
        <span>Libraries</span>
        <motion.svg
          className="ml-2 h-4 w-4"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={dropdownVariants}
            className="absolute left-0 right-0 sm:left-0 sm:right-auto top-[calc(100%+0.5rem)] w-auto sm:min-w-[280px] rounded-md border bg-background/95 p-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg z-50"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid gap-1"
            >
              {Object.values(LIBRARIES).map((lib) => (
                <motion.div key={lib.id} variants={staggerItem}>
                  <Link
                    href={lib.href}
                    className="relative flex select-none items-center rounded-sm px-3 py-2.5 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{lib.name}</span>
                      <span className="text-xs text-muted-foreground line-clamp-1">
                        {lib.description}
                      </span>
                    </div>
                    {lib.comingSoon && (
                      <span className="ml-auto text-xs font-medium text-muted-foreground">
                        Coming soon
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
