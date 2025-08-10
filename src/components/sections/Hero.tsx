
'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-24 pb-16 md:pb-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center md:text-left">
            <h1 className="heading-1 text-gray-900 mb-6">
              Professional Window Tinting in{' '}
              <span className="text-blue-600">Kingston</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Transform your vehicle with premium window tinting. 
              Enhance privacy, reduce heat, and protect your interior.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#contact" className="btn-primary">
                Get Free Quote
              </Link>
              <Link href="tel:6473550079" className="btn-secondary">
                Call (647) 355-0079
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-6 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-600">5.0 Rating</span>
              </div>
              <div className="text-gray-600">
                <span className="font-semibold">500+</span> Vehicles Serviced
              </div>
              <div className="text-gray-600">
                <span className="font-semibold">Lifetime</span> Warranty
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[300px] md:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-10"></div>
            <img
              src="/api/placeholder/600/500"
              alt="Professional window tinting"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
