'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { AnimatedThemeToggler } from './ui/animated-theme-toggler'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/90 border-b border-border/40">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="NI3DEV" 
              width={48} 
              height={48}
              className="hover:scale-110 transition-transform duration-300 rounded-full"
            />
          </Link>
        </motion.div>

        <nav className="hidden md:flex gap-8">
          {[
            { href: '#about', label: 'About' },
            { href: '#work', label: 'Work' },
            { href: '#services', label: 'Services' },
            { href: '#contact', label: 'Contact' },
          ].map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }}>
              <Link href={item.href} className="relative text-sm font-medium text-foreground hover:text-primary transition-colors group">
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            </motion.div>
          ))}
          <AnimatedThemeToggler />
        </nav>

        <motion.button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>

      {isOpen && (
        <motion.nav className="md:hidden border-t border-border bg-background" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <div className="container mx-auto px-4 py-4 space-y-3">
            {[
              { href: '#about', label: 'About' },
              { href: '#work', label: 'Work' },
              { href: '#services', label: 'Services' },
              { href: '#contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium hover:text-primary transition-colors py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  )
}
