'use client'

import { useTheme } from 'next-themes'
import { FiMoon, FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background shadow-sm hover:bg-accent"
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.15 }}
        className="text-xl"
      >
        <span className="sr-only">Toggle theme</span>
        {theme === 'light' ? <FiMoon /> : <FiSun />}
      </motion.span>
    </motion.button>
  )
}
