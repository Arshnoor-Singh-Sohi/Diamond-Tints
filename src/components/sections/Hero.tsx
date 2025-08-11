'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-slate-50 to-white">
      {/* Simple background elements - mobile friendly */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-40 left-10 w-40 h-40 bg-blue-50 rounded-full blur-2xl opacity-30"></div>
      </div>

      <div className="container relative z-10 pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Content Section - Mobile optimized */}
          <div className="text-center lg:text-left order-1 lg:order-1">
            {/* Trust Badge - Mobile friendly */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-white/80 
                         rounded-full text-xs md:text-sm font-medium text-blue-700 
                         border border-blue-200 mb-4 md:mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Kingston's #1 Window Tinting Experts
            </motion.div>

            {/* Main Heading - Responsive typography */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 md:mb-6"
            >
              <span className="text-slate-900">Transform Your</span>
              <br />
              <span className="text-blue-600">Vehicle Today</span>
            </motion.h1>

            {/* Description - Mobile optimized */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-slate-600 mb-6 md:mb-8 
                         leading-relaxed max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0"
            >
              Experience premium window tinting that combines cutting-edge technology 
              with unmatched craftsmanship. Professional installation with lifetime warranty.
            </motion.p>

            {/* CTA Buttons - Mobile-first design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-8 md:mb-12"
            >
              {/* Primary CTA */}
              <Link
                href="#contact"
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white 
                         font-semibold text-base md:text-lg rounded-lg md:rounded-xl 
                         hover:bg-blue-700 transition-colors duration-300 text-center
                         shadow-lg hover:shadow-xl"
              >
                Get Free Estimate
              </Link>

              {/* Secondary CTA */}
              <Link
                href="tel:6473550079"
                className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-blue-600 
                         font-semibold text-base md:text-lg rounded-lg md:rounded-xl border-2 border-blue-200 
                         hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 text-center
                         shadow-sm hover:shadow-md"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call Now
                </span>
              </Link>
            </motion.div>

            {/* Trust Indicators - Mobile responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 md:gap-8 justify-center lg:justify-start items-center text-sm md:text-base"
            >
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-base md:text-lg">★</span>
                  ))}
                </div>
                <span className="text-slate-600 font-medium">5.0 Rating</span>
              </div>

              {/* Customers */}
              <div className="text-slate-600 font-medium">
                <span className="text-lg md:text-xl font-bold text-blue-600">500+</span> Happy Customers
              </div>

              {/* Warranty */}
              <div className="text-slate-600 font-medium">
                <span className="text-lg md:text-xl font-bold text-blue-600">Lifetime</span> Warranty
              </div>
            </motion.div>
          </div>

          {/* Image Section - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="order-2 lg:order-2"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative h-64 md:h-80 lg:h-96 xl:h-[500px] bg-gradient-to-br from-white to-gray-50 
                            rounded-2xl md:rounded-3xl shadow-xl overflow-hidden border border-gray-200">
                
                {/* Hero Image */}
                <Image
                  src="/images/hero.jpg"
                  alt="Professional window tinting transformation"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />

                {/* Simple overlay badges - Mobile friendly */}
                <div className="absolute inset-0 p-3 md:p-6">
                  {/* UV Protection Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute top-3 md:top-6 right-3 md:right-6 bg-white/90 backdrop-blur-sm 
                             px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl shadow-lg border border-white/50"
                  >
                    <div className="text-center">
                      <div className="text-lg md:text-2xl font-bold text-blue-600">99%</div>
                      <div className="text-xs md:text-sm text-slate-600">UV Block</div>
                    </div>
                  </motion.div>

                  {/* Installation Time Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="absolute bottom-3 md:bottom-6 left-3 md:left-6 bg-white/90 backdrop-blur-sm 
                             px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl shadow-lg border border-white/50"
                  >
                    <div className="text-center">
                      <div className="text-lg md:text-2xl font-bold text-green-600">2-3h</div>
                      <div className="text-xs md:text-sm text-slate-600">Install Time</div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Decorative Elements - Subtle and mobile-safe */}
              <div className="absolute -top-4 -left-4 w-8 h-8 md:w-12 md:h-12 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 md:w-10 md:h-10 bg-blue-300 rounded-full opacity-40"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Simple scroll indicator - Hidden on mobile for clean look */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-slate-400 rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}