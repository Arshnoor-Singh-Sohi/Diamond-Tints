
'use client'

import { FaInstagram } from 'react-icons/fa'

const instagramPosts = [
  {
    id: 1,
    imageUrl: '/images/instagram/post1.jpg',
    caption: 'Fresh tint on this beauty! 20% all around',
    link: 'https://www.instagram.com/p/example1',
  },
  {
    id: 2,
    imageUrl: '/images/instagram/post2.jpg',
    caption: 'Ceramic tint installation - heat rejection at its finest',
    link: 'https://www.instagram.com/p/example2',
  },
  {
    id: 3,
    imageUrl: '/images/instagram/post3.jpg',
    caption: 'Before and after transformation',
    link: 'https://www.instagram.com/p/example3',
  },
  {
    id: 4,
    imageUrl: '/images/instagram/post4.jpg',
    caption: 'Privacy and style combined',
    link: 'https://www.instagram.com/p/example4',
  },
  {
    id: 5,
    imageUrl: '/images/instagram/post5.jpg',
    caption: 'Another satisfied customer!',
    link: 'https://www.instagram.com/p/example5',
  },
  {
    id: 6,
    imageUrl: '/images/instagram/post6.jpg',
    caption: 'Weekend warrior ready',
    link: 'https://www.instagram.com/p/example6',
  },
]

export default function InstagramSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Follow Our Work</h2>
          <p className="text-lg text-gray-600 mb-6">
            See our latest projects and transformations on Instagram
          </p>
          
          {/* Instagram Handle */}
          <a
            href="https://www.instagram.com/diamonddetailsandtints"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
          >
            <FaInstagram size={24} />
            @diamonddetailsandtints
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:opacity-90 transition-opacity"
            >
              {/* Placeholder for Instagram image */}
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <FaInstagram className="text-blue-400 text-3xl" />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-white text-sm text-center line-clamp-3">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/diamonddetailsandtints"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            <FaInstagram />
            View More on Instagram
          </a>
        </div>

        {/* Instagram Embed Alternative */}
        <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Stay Connected
            </h3>
            <p className="text-gray-600 mb-6">
              Follow us for daily updates, special offers, and stunning transformations
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold">📸</span>
                Daily Posts
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold">🎬</span>
                Process Videos
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold">💰</span>
                Special Offers
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <span className="font-semibold">⭐</span>
                Customer Reviews
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
