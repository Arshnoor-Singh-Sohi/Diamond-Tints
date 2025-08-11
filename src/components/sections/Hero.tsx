'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Floating Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-48 h-48 bg-indigo-200/20 rounded-full blur-2xl"
          animate={{
            x: mousePosition.x * -0.03,
            y: mousePosition.y * -0.03,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-24 h-24 bg-blue-300/40 rounded-full blur-lg"
          animate={{
            x: mousePosition.x * 0.015,
            y: mousePosition.y * 0.015,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        />
      </div>

      <div className="container relative z-10 pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Enhanced Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm 
                         rounded-full text-sm font-medium text-blue-700 border border-blue-200/50 mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Kingston's #1 Window Tinting Experts
            </motion.div>

            {/* Enhanced Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className="text-slate-900">Transform Your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 
                             bg-clip-text text-transparent">
                Vehicle Today
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl"
            >
              Experience premium window tinting that combines 
              <span className="font-semibold text-blue-600"> cutting-edge technology</span> with 
              <span className="font-semibold text-blue-600"> unmatched craftsmanship</span>
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 
                           text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl 
                           transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Get Free Estimate</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="tel:6473550079"
                  className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-blue-600 
                           font-semibold rounded-2xl border-2 border-blue-200 hover:border-blue-400 
                           hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    Call Now
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-8 justify-center lg:justify-start items-center"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
                      className="text-yellow-400 text-xl"
                    >
                      ★
                    </motion.span>
                  ))}
                </div>
                <span className="text-slate-600 font-medium">5.0 Rating</span>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-slate-600 font-medium"
              >
                <span className="text-2xl font-bold text-blue-600">500+</span> Happy Customers
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-slate-600 font-medium"
              >
                <span className="text-2xl font-bold text-blue-600">Lifetime</span> Warranty
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Hero Image with 3D Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative perspective-1000"
          >
            <motion.div
              animate={{
                rotateY: mousePosition.x * 0.05 - 2.5,
                rotateX: -(mousePosition.y * 0.05 - 2.5),
              }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="relative h-[400px] md:h-[600px] transform-gpu"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 
                            rounded-3xl blur-2xl opacity-20 scale-110"></div>
              
              {/* Main Image Container */}
              <div className="relative h-full bg-gradient-to-br from-white to-gray-50 
                            rounded-3xl shadow-2xl overflow-hidden border border-white/50">
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 
                                rounded-3xl opacity-60 animate-pulse"></div>
                  <div className="absolute inset-[2px] bg-white rounded-3xl"></div>
                </div>

                {/* Image */}
                <div className="relative z-10 h-full p-4">
                  <Image
                    src="/api/placeholder/600/500"
                    alt="Professional window tinting transformation"
                    width={600}
                    height={500}
                    className="w-full h-full object-cover rounded-2xl shadow-xl"
                    priority
                  />
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm 
                             px-4 py-3 rounded-xl shadow-lg border border-white/50"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">99%</div>
                      <div className="text-sm text-slate-600">UV Block</div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm 
                             px-4 py-3 rounded-xl shadow-lg border border-white/50"
                  >
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">2-3h</div>
                      <div className="text-sm text-slate-600">Installation</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}