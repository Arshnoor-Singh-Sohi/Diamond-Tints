'use client'

import { useState, useEffect } from 'react'

export function useScrollHeader(threshold = 10) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > threshold)
    }

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Call handler right away so state gets updated with initial window position
    handleScroll()

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return isScrolled
}