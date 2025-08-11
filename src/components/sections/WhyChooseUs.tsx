'use client'

import { motion } from 'framer-motion'
import { FaAward, FaClock, FaShieldAlt, FaTools, FaUserTie, FaThumbsUp } from 'react-icons/fa'

const reasons = [
  {
    icon: <FaAward />,
    title: 'Certified Professionals',
    description: 'Factory-trained technicians with years of experience in premium window tinting.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Lifetime Warranty',
    description: 'We stand behind our work with comprehensive lifetime warranty on all installations.',
  },
  {
    icon: <FaClock />,
    title: 'Same Day Service',
    description: 'Most vehicles completed within 2-3 hours. Quick, efficient, without compromising quality.',
  },
  {
    icon: <FaTools />,
    title: 'Premium Materials',
    description: 'We use only the highest quality films from trusted manufacturers.',
  },
  {
    icon: <FaUserTie />,
    title: 'Professional Service',
    description: 'Clean facility, professional staff, and exceptional customer experience.',
  },
  {
    icon: <FaThumbsUp />,
    title: '100% Satisfaction',
    description: 'Not happy? We\'ll make it right. Your satisfaction is our guarantee.',
  },
]

const stats = [
  { number: '500+', label: 'Happy Customers' },
  { number: '5.0', label: 'Star Rating' },
  { number: '100%', label: 'Satisfaction Rate' },
  { number: '3+', label: 'Years Experience' },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Why Choose Diamond Tints
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Kingston&apos;s trusted window tinting experts with over 500+ satisfied customers
          </p>
        </div>

        {/* Reasons Grid - Mobile-first responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-gray-100 
                         hover:shadow-md transition-shadow duration-300"
            >
              {/* Icon and Title Row - Optimized for mobile */}
              <div className="flex items-start gap-3 md:gap-4 mb-3">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg 
                              flex items-center justify-center text-blue-600">
                  <span className="text-lg md:text-xl">{reason.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base md:text-lg text-gray-900 mb-2 leading-tight">
                    {reason.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section - Mobile optimized grid */}
        <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Proven Track Record
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              Numbers that speak for our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section - Mobile optimized */}
        <div className="text-center mt-8 md:mt-12">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="inline-block w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 
                     bg-blue-600 text-white font-semibold text-base md:text-lg 
                     rounded-lg md:rounded-xl hover:bg-blue-700 
                     transition-colors duration-300 text-center"
          >
            Experience The Diamond Difference
          </motion.a>
        </div>
      </div>
    </section>
  )
}