'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Nitinmalviy', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/github-GscVgrJV8UnlbwouE9VUj0t3F7HnZU.png' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/nitin-malviya-326543204/', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin-3FzBMCXkCaPr0PUrITyFHJeegs8qtA.png' },
    { name: 'X', href: 'https://x.com/nitin_G_', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/x-f4HdkKPIU8wt3XWYnvBdkS3B1PCUIT.png' },
    { name: 'Instagram', href: 'https://www.instagram.com/theni3dev', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/instagram-uXVNGrtBvrUhuDcoUcOjVl8cHaRJWD.png' },
    { name: 'YouTube', href: 'https://www.youtube.com/@ni3dev', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youtube-b9pqhpUwjbYYNHWjHQ6Pegf2b1t8Hp.png' },
    { name: 'Medium', href: 'https://medium.com/@nitinmalviya172', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medium-BUK9YyqeWo93IOSNsEjoUEHFeORJsO.png' },
    { name: 'LeetCode', href: 'https://leetcode.com/u/NiitnbroCode/', image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/leetcode-UW1QVdEcV9ZauTlN2YnxZEPiX3cdj3.png' },
    { name: 'DEV', href: 'https://dev.to/nitinmalviy', image: 'https://media2.dev.to/dynamic/image/quality=100/https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png' },
  ]

  return (
    <footer id="contact" className="relative py-16 md:py-24 border-t border-border/40 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo.png"
                alt="NI3DEV Logo"
                width={80}
                height={80}
                className="w-20 h-20 md:w-24 md:h-24"
                priority
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Full-stack developer crafting high-performance digital solutions. Building products that make a difference.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} viewport={{ once: true }}>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: 'About', href: '#about' },
                { name: 'Work', href: '#work' },
                { name: 'Services', href: '#services' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <p className="text-muted-foreground mb-3 text-sm">Available for freelancing and exciting projects</p>
            <div className="space-y-2 text-sm">
              <a href="mailto:nitin@example.com" className="text-primary hover:underline flex items-center gap-2">
                <Mail className="w-4 h-4" />
                nitin@example.com
              </a>
              <p className="text-muted-foreground">Response time: 24 hours</p>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="mb-12">
          <h4 className="font-semibold mb-6">Connect With Me</h4>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="group relative w-14 h-14 rounded-xl overflow-hidden border border-border/40 hover:border-primary/40 transition-all bg-card hover:bg-primary/10"
                title={link.name}
              >
                <Image src={link.image || '/placeholder.svg'} alt={link.name} fill className="object-cover" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="border-t border-border/40 pt-8 text-center">
          <p className="text-muted-foreground text-sm mb-3">
            © {new Date().getFullYear()} Nitin Malviya. Crafted with passion for excellence.
          </p>
          <div className="flex justify-center gap-4 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link href="#" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
