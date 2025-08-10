'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: Array<{ label: string; href: string }>
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-xl">
        <div className="p-6">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo */}
          <div className="mb-8 mt-2">
            <span className="text-2xl font-bold text-blue-600">Diamond Tints</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="block py-3 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="mt-8 space-y-4">
            <Link 
              href="tel:6473550079" 
              className="block w-full btn-primary text-center"
              onClick={onClose}
            >
              Call Now
            </Link>
            <Link 
              href="#contact" 
              className="block w-full btn-secondary text-center"
              onClick={onClose}
            >
              Get Quote
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-gray-600 mb-4">Follow Us</p>
            <a 
              href="https://www.instagram.com/diamonddetailsandtints" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07..."/>
              </svg>
              @diamonddetailsandtints
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}