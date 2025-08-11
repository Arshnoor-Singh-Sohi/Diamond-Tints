'use client'

import { motion } from 'framer-motion'
import { FaInstagram, FaExternalLinkAlt } from 'react-icons/fa'

const instagramPosts = [
  {
    id: 1,
    imageUrl: '/api/placeholder/300/300',
    caption: 'Fresh tint on this beauty! 20% all around',
    link: 'https://www.instagram.com/p/example1',
  },
  {
    id: 2,
    imageUrl: '/api/placeholder/300/300',
    caption: 'Ceramic tint installation - heat rejection at its finest',
    link: 'https://www.instagram.com/p/example2',
  },
  {
    id: 3,
    imageUrl: '/api/placeholder/300/300',
    caption: 'Before and after transformation',
    link: 'https://www.instagram.com/p/example3',
  },
  {
    id: 4,
    imageUrl: '/api/placeholder/300/300',
    caption: 'Privacy and style combined',
    link: 'https://www.instagram.com/p/example4',
  },
  {
    id: 5,
    imageUrl: '/api/placeholder/300/300',
    caption: 'Another satisfied customer!',
    link: 'https://www.instagram.com/p/example5',
  },
  {
    id: 6,
    imageUrl: '/api/placeholder/300/300',
    caption: 'Weekend warrior ready',
    link: 'https://www.instagram.com/p/example6',
  },
]

const features = [
  { icon: '📸', label: 'Daily Posts' },
  { icon: '🎬', label: 'Process Videos' },
  { icon: '💰', label: 'Special Offers' },
  { icon: '⭐', label: 'Customer Reviews' },
]

export default function InstagramSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Follow Our Work
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 px-4">
            See our latest projects and transformations on Instagram
          </p>
          
          {/* Instagram Handle - Mobile optimized */}
          <a
            href="https://www.instagram.com/diamonddetailsandtints"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 
                     bg-gradient-to-r from-pink-500 to-purple-600 text-white 
                     font-semibold text-sm md:text-base rounded-lg md:rounded-xl 
                     hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
          >
            <FaInstagram className="text-lg md:text-xl" />
            <span className="hidden sm:inline">@diamonddetailsandtints</span>
            <span className="sm:hidden">Follow Us</span>
            <FaExternalLinkAlt className="text-xs md:text-sm" />
          </a>
        </div>

        {/* Instagram Grid - Mobile responsive */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 mb-8 md:mb-12">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative aspect-square overflow-hidden rounded-lg md:rounded-xl 
                       bg-gray-100 hover:opacity-90 transition-opacity duration-300"
            >
              {/* Placeholder for Instagram image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 
                            flex items-center justify-center">
                <FaInstagram className="text-blue-400 text-2xl md:text-3xl" />
              </div>
              
              {/* Hover Overlay - Hidden on mobile, visible on desktop */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 
                            transition-opacity duration-300 flex items-center justify-center p-2 md:p-4
                            hidden md:flex">
                <p className="text-white text-xs md:text-sm text-center line-clamp-3">
                  {post.caption}
                </p>
              </div>

              {/* Mobile-friendly caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent 
                            p-2 md:hidden">
                <p className="text-white text-xs line-clamp-2">
                  {post.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Features Section - Mobile responsive */}
        <div className="bg-gray-50 rounded-xl md:rounded-2xl p-6 md:p-8 mb-8 md:mb-12">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-4">
              Stay Connected
            </h3>
            <p className="text-sm md:text-base text-gray-600 px-4">
              Follow us for daily updates, special offers, and stunning transformations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex flex-col items-center gap-2 p-3 md:p-4 bg-white rounded-lg 
                         border border-gray-100 text-center"
              >
                <span className="text-xl md:text-2xl">{feature.icon}</span>
                <span className="text-xs md:text-sm font-medium text-gray-700">
                  {feature.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button - Mobile optimized */}
        <div className="text-center">
          <motion.a
            href="https://www.instagram.com/diamonddetailsandtints"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="inline-flex items-center gap-2 md:gap-3 w-full sm:w-auto 
                     px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-pink-500 to-purple-600 
                     text-white font-semibold text-base md:text-lg rounded-lg md:rounded-xl 
                     hover:from-pink-600 hover:to-purple-700 transition-all duration-300 
                     justify-center"
          >
            <FaInstagram className="text-lg md:text-xl" />
            <span>View More on Instagram</span>
          </motion.a>
        </div>
      </div>
    </section>
  )
}