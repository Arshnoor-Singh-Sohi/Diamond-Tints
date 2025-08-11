'use client'

import { motion } from 'framer-motion'
import { FaCar, FaShieldAlt, FaSun, FaEye, FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'

const services = [
  {
    icon: <FaCar />,
    title: 'Automotive Tinting',
    description: 'Professional installation for all vehicle types with premium films that enhance your driving experience.',
    features: ['All Vehicle Types', 'Premium Films', 'Expert Installation', 'Color Matching'],
    price: 'Starting at $199',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Security Film',
    description: 'Advanced protection against break-ins and accidents with military-grade security films.',
    features: ['Anti-Shatter', 'Break-in Protection', 'Accident Safety', 'Invisible Coverage'],
    price: 'Starting at $299',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
  },
  {
    icon: <FaSun />,
    title: 'UV Protection',
    description: 'Block 99% of harmful UV rays while keeping your interior cool and protected from fading.',
    features: ['99% UV Block', 'Heat Reduction', 'Interior Protection', 'Skin Safety'],
    price: 'Starting at $249',
    gradient: 'from-orange-500 to-yellow-500',
    bgGradient: 'from-orange-50 to-yellow-50',
  },
  {
    icon: <FaEye />,
    title: 'Privacy Tinting',
    description: 'Enhanced privacy solutions that maintain perfect visibility while ensuring your peace of mind.',
    features: ['Multiple Shades', 'Legal Compliance', 'Optimal Visibility', 'Custom Options'],
    price: 'Starting at $179',
    gradient: 'from-purple-500 to-indigo-500',
    bgGradient: 'from-purple-50 to-indigo-50',
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="services" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100/50 to-purple-100/50"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(148 163 184)" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10">
        {/* Enhanced Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm 
                       rounded-full text-sm font-medium text-blue-700 border border-blue-200/50 mb-6"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Premium Services
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              Transform Your Drive
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of professional window tinting solutions, 
            each designed to enhance your vehicle's performance, protection, and style.
          </p>
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative perspective-1000"
            >
              <motion.div
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  rotateX: 5,
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
                className={`relative h-full p-8 bg-gradient-to-br ${service.bgGradient} 
                          rounded-3xl border border-white/50 shadow-lg hover:shadow-2xl 
                          transition-all duration-500 transform-gpu overflow-hidden`}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 
                             group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Floating Particles Effect */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0], 
                          scale: [0, 1, 0],
                          x: Math.random() * 200 - 100,
                          y: Math.random() * 200 - 100,
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.2,
                          repeat: Infinity,
                          repeatDelay: 1,
                        }}
                        className={`absolute top-1/2 left-1/2 w-2 h-2 bg-gradient-to-r ${service.gradient} 
                                   rounded-full blur-sm`}
                      />
                    ))}
                  </div>
                )}

                {/* Icon with Enhanced Animation */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className={`inline-flex items-center justify-center w-16 h-16 
                             bg-gradient-to-r ${service.gradient} text-white rounded-2xl 
                             shadow-lg mb-6 relative`}
                >
                  <span className="text-2xl relative z-10">{service.icon}</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} 
                               rounded-2xl opacity-50 blur-md`}
                  />
                </motion.div>

                {/* Enhanced Content */}
                <motion.h3
                  className="text-2xl font-bold text-slate-900 mb-4"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {service.title}
                </motion.h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features with Staggered Animation */}
                <motion.ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="flex items-center text-sm text-slate-600"
                    >
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-2 h-2 bg-gradient-to-r ${service.gradient} 
                                   rounded-full mr-3 flex-shrink-0`}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Price Badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${service.gradient} 
                             text-white rounded-full text-sm font-semibold shadow-lg mb-6`}
                >
                  {service.price}
                </motion.div>

                {/* Hover Call-to-Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-6 left-8 right-8"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 
                             bg-white/90 backdrop-blur-sm text-slate-900 font-semibold 
                             rounded-xl border border-white/50 shadow-lg 
                             hover:bg-white transition-colors duration-300"
                  >
                    Learn More
                    <FaArrowRight className="text-sm" />
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white 
                    font-semibold text-lg rounded-xl hover:bg-blue-700 
                    transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Your Free Professional Quote
            <span className="text-xl">→</span>
          </Link>
        </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 text-slate-600"
          >
            <span className="font-semibold">✓ Free consultation</span> • 
            <span className="font-semibold"> ✓ Same-day service</span> • 
            <span className="font-semibold"> ✓ Lifetime warranty</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}