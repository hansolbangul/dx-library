'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { LibraryDropdown } from './LibraryDropdown'
import { fadeIn } from '../animations/variants'
import { SOCIAL_LINKS } from '@/constants/snsLinks'
import ThemeToggle from './ThemeToggle'

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
  >
    {children}
    <svg
      className="ml-1 h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  </Link>
)

export const Header = () => {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      style={{ '--header-height': '4rem' } as React.CSSProperties}
    >
      <div className="container flex h-[var(--header-height)] items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="font-bold text-xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              DX Library
            </motion.div>
          </Link>
          <nav className="flex items-center space-x-2">
            <LibraryDropdown />
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden sm:flex items-center space-x-1">
            <NavLink href={SOCIAL_LINKS.github}>GitHub</NavLink>
            <NavLink href={SOCIAL_LINKS.blog}>Blog</NavLink>
            <NavLink href={SOCIAL_LINKS.portfolio}>Profile</NavLink>
          </nav>
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  )
}
