'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const galleryItems = [
  {
    id: 1,
    title: 'Honda Civic - 35% Ceramic Tint',
    before: '/api/placeholder/600/400',
    after: '/api/placeholder/600/400',
    category: 'Sedan',
    description: 'Professional ceramic tinting enhances privacy while maintaining visibility',
    specs: ['35% VLT', 'Ceramic Film', '99% UV Block', 'Heat Rejection'],
  },
  {
    id: 2,
    title: 'Toyota RAV4 - 20% Premium Tint',
    before: '/api/placeholder/600/400',
    after: '/api/placeholder/600/400',
    category: 'SUV',
    description: 'Premium tinting solution for enhanced comfort and style',
    specs: ['20% VLT', 'Premium Film', 'Privacy Enhancement', 'Glare Reduction'],
  },
  {
    id: 3,
    title: 'Ford F-150 - Multi-Shade Installation',
    before: '/api/placeholder/600/400',
    after: '/api/placeholder/600/400',
    category: 'Truck',
    description: 'Custom multi-shade installation for optimal visibility and privacy',
    specs: ['5% Rear', '35% Front', 'Legal Compliance', 'Professional Install'],
  },
  {
    id: 4,
    title: 'BMW M3 - Performance Tinting',
    before: '/api/placeholder/600/400',
    after: '/api/placeholder/600/400',
    category: 'Sports',
    description: 'High-performance tinting for luxury sports vehicles',
    specs: ['Ceramic Pro', 'Color Stable', 'Lifetime Warranty', 'Precision Cut'],
  },
  {
    id: 5,
    title: 'Audi Q7 - Luxury Package',
    before: '/api/placeholder/600/400',
    after: '/api/placeholder/600/400',
    category: 'SUV',
    description: 'Complete luxury tinting package with premium materials',
    specs: ['Multi-Layer', 'IR Rejection', 'Scratch Resistant', 'Fade Proof'],
  },
  {
    id: 6,
    title: 'Jeep Wrangler - Adventure Ready',
    before: '/api/placeholder/600/400',
    after: '/api/placeholder/600/400',
    category: 'SUV',
    description: 'Durable tinting solution for off-road adventures',
    specs: ['Impact Resistant', 'Weather Proof', 'UV Protection', 'Easy Clean'],
  },
]

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  title: string
}

function BeforeAfterSlider({ beforeImage, afterImage, title }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }

  return (
    <div
      ref={containerRef}
      className="relative h-80 rounded-2xl overflow-hidden cursor-grab select-none group"
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* After Image (Base) */}
      <Image
        src={afterImage}
        alt={`${title} - After`}
        width={600}
        height={400}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before Image (Clipped) */}
      <div
        className="absolute inset-0 overflow-hidden transition-all duration-100 ease-out"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={`${title} - Before`}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider Line and Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-100 ease-out"
        style={{ left: `${sliderPosition}%` }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center 
                     cursor-grab active:cursor-grabbing border-4 border-blue-500"
        >
          <div className="flex gap-1">
            <div className="w-1 h-4 bg-blue-500 rounded"></div>
            <div className="w-1 h-4 bg-blue-500 rounded"></div>
          </div>
        </motion.div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 px-3 py-2 bg-black/70 text-white text-sm 
                    rounded-lg backdrop-blur-sm">
        Before
      </div>
      <div className="absolute top-4 right-4 px-3 py-2 bg-black/70 text-white text-sm 
                    rounded-lg backdrop-blur-sm">
        After
      </div>

      {/* Instructions */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isDragging ? 0 : 1 }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 
                   px-4 py-2 bg-white/90 backdrop-blur-sm text-slate-700 text-sm 
                   rounded-lg shadow-lg border border-white/50"
      >
        <div className="flex items-center gap-2">
          <span>↔</span>
          <span>Drag to compare</span>
        </div>
      </motion.div>
    </div>
  )
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  
  const categories = ['All', 'Sedan', 'SUV', 'Truck', 'Sports']

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="gallery" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent"></div>
      
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-blue-100 
                       rounded-full text-sm font-medium text-blue-700 mb-6"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Before & After Gallery
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              See The Transformation
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Witness the dramatic difference professional window tinting makes. 
            Drag the slider to see stunning before and after comparisons.
          </p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'text-white shadow-lg'
                  : 'text-slate-700 bg-white border-2 border-slate-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              {selectedCategory === category && (
                <motion.div
                  layoutId="categoryBackground"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Gallery Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl 
                         transition-all duration-500 overflow-hidden border border-slate-100"
              >
                {/* Before/After Slider */}
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  title={item.title}
                />

                {/* Enhanced Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 
                                   transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 
                                     text-sm font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Specifications */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {item.specs.map((spec, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                        {spec}
                      </motion.div>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 
                             bg-gradient-to-r from-blue-50 to-purple-50 text-slate-700 
                             font-semibold rounded-xl border border-blue-100 
                             hover:from-blue-100 hover:to-purple-100 hover:border-blue-200 
                             transition-all duration-300"
                  >
                    <span>View Details</span>
                    <motion.div
                      animate={{ rotate: selectedItem === item.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ↓
                    </motion.div>
                  </motion.button>

                  {/* Expandable Details */}
                  <AnimatePresence>
                    {selectedItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-slate-100"
                      >
                        <div className="space-y-3 text-sm text-slate-600">
                          <div><strong>Installation Time:</strong> 2-3 hours</div>
                          <div><strong>Warranty:</strong> Lifetime coverage</div>
                          <div><strong>Maintenance:</strong> Easy care instructions included</div>
                          <div><strong>Compliance:</strong> Meets all local regulations</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent 
                           pointer-events-none"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 
                             text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl 
                             transition-all duration-500 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                Start Your Transformation Today
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </span>
              
              <motion.div
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                           skew-x-12 translate-x-[-100%]"
              />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}