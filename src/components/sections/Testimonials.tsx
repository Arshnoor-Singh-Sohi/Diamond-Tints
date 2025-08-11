'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Michael Chen',
    rating: 5,
    comment: 'Excellent service! Professional installation and the tint quality is outstanding. Highly recommend!',
    vehicle: '2023 BMW X5',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Best tinting service in Kingston. Fair prices and amazing results. My car looks fantastic!',
    vehicle: '2022 Honda Accord',
  },
  {
    id: 3,
    name: 'David Williams',
    rating: 5,
    comment: 'Quick, professional, and great attention to detail. The lifetime warranty gives peace of mind.',
    vehicle: '2024 Ford F-150',
  },
  {
    id: 4,
    name: 'Emily Rodriguez',
    rating: 5,
    comment: 'Amazing experience from start to finish! The quality is top-notch and customer service is exceptional.',
    vehicle: '2023 Tesla Model Y',
  },
  {
    id: 5,
    name: 'James Thompson',
    rating: 5,
    comment: 'Professional work at competitive prices. The results exceeded my expectations!',
    vehicle: '2023 Jeep Wrangler',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Customer Reviews
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            See what our customers say about us
          </p>
        </div>

        {/* Main Testimonial Carousel - Mobile optimized */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <div className="relative bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            
            {/* Testimonial Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              {/* Rating Stars */}
              <div className="flex justify-center gap-1 mb-4 md:mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg md:text-xl" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base md:text-lg lg:text-xl text-gray-700 mb-6 md:mb-8 
                                   leading-relaxed italic px-4">
                &quot;{testimonials[currentIndex].comment}&quot;
              </blockquote>

              {/* Customer Info */}
              <div className="space-y-1">
                <h4 className="font-semibold text-lg md:text-xl text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm md:text-base text-gray-600">
                  {testimonials[currentIndex].vehicle}
                </p>
              </div>
            </motion.div>

            {/* Navigation Controls - Mobile optimized */}
            <div className="flex items-center justify-between mt-6 md:mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 md:p-3 bg-gray-100 hover:bg-gray-200 rounded-full 
                         text-gray-600 hover:text-gray-800 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="text-sm md:text-base" />
              </button>

              {/* Dots Indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex 
                        ? 'bg-blue-600' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-2 md:p-3 bg-gray-100 hover:bg-gray-200 rounded-full 
                         text-gray-600 hover:text-gray-800 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="text-sm md:text-base" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid - Mobile responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3 md:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm md:text-base" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed italic">
                &quot;{testimonial.comment}&quot;
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-100 pt-3 md:pt-4">
                <p className="font-semibold text-gray-900 text-sm md:text-base">
                  {testimonial.name}
                </p>
                <p className="text-xs md:text-sm text-gray-600">
                  {testimonial.vehicle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section - Mobile optimized */}
        <div className="text-center mt-8 md:mt-12">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-block w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 
                     bg-blue-600 text-white font-semibold text-base md:text-lg 
                     rounded-lg md:rounded-xl hover:bg-blue-700 
                     transition-colors duration-300 text-center"
          >
            Join Our Happy Customers
          </motion.a>
        </div>
      </div>
    </section>
  )
}