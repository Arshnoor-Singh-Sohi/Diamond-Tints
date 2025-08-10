
'use client'

import { FaCar, FaShieldAlt, FaSun, FaEye } from 'react-icons/fa'
import Link from 'next/link';

const services = [
  {
    icon: <FaCar />,
    title: 'Automotive Tinting',
    description: 'Professional installation for all vehicle types with premium films.',
    features: ['Sedans', 'SUVs', 'Trucks', 'Sports Cars'],
  },
  {
    icon: <FaShieldAlt />,
    title: 'Security Film',
    description: 'Protect against break-ins and accidents with security-grade films.',
    features: ['Anti-shatter', 'Theft deterrent', 'Accident protection'],
  },
  {
    icon: <FaSun />,
    title: 'UV Protection',
    description: 'Block 99% of harmful UV rays and reduce interior fading.',
    features: ['99% UV blocking', 'Interior protection', 'Skin protection'],
  },
  {
    icon: <FaEye />,
    title: 'Privacy Tinting',
    description: 'Enhanced privacy without compromising visibility.',
    features: ['Multiple shades', 'Legal compliance', 'Custom options'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-2 text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional window tinting solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl border border-gray-200 
                         hover:border-blue-500 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl text-blue-600 mb-4">{service.icon}</div>
              <h3 className="heading-3 text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <span className="text-blue-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="#contact" className="btn-primary">
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
