'use client'

import { useState } from 'react'
import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    title: 'Honda Civic - 35% Tint',
    before: '/images/gallery/civic-before.jpg',
    after: '/images/gallery/civic-after.jpg',
    category: 'Sedan',
  },
  {
    id: 2,
    title: 'Toyota RAV4 - 20% Tint',
    before: '/images/gallery/rav4-before.jpg',
    after: '/images/gallery/rav4-after.jpg',
    category: 'SUV',
  },
  {
    id: 3,
    title: 'Ford F-150 - 5% Rear, 35% Front',
    before: '/images/gallery/f150-before.jpg',
    after: '/images/gallery/f150-after.jpg',
    category: 'Truck',
  },
  // Add more items
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Sedan', 'SUV', 'Truck', 'Sports']

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Our Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the transformation - browse our before and after gallery
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl shadow-lg">
                {/* Slider Container */}
                <div className="relative h-64">
                  <Image
                    src={item.after}
                    alt={`${item.title} - After`}
                    width={600}  // Set the desired width in pixels
                    height={400} // Set the desired height in pixels
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 w-1/2 overflow-hidden">
                    <Image
                      src={item.before}
                      alt={`${item.title} - Before`}
                      width={600}  // Match width and height or adjust as needed
                      height={400}
                      className="absolute inset-0 w-[200%] h-full object-cover"
                    />

                  </div>
                  {/* Slider Handle */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                  w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <span className="text-xs font-bold">↔</span>
                    </div>
                  </div>
                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm">
                    After
                  </div>
                </div>
                {/* Title */}
                <div className="p-4 bg-gray-50">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}