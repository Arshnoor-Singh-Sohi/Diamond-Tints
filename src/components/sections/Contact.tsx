'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa'

type FormData = {
  name: string
  email: string
  phone: string
  vehicle: string
  service: string
  message: string
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header - Mobile optimized */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Get In Touch
          </h2>
          <p className="text-base md:text-lg text-gray-600 px-4">
            Ready to transform your vehicle? Get a free quote today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information - Mobile optimized */}
          <div className="order-2 lg:order-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
              Contact Information
            </h3>

            <div className="space-y-4 md:space-y-6 mb-8">
              {/* Phone */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg 
                              flex items-center justify-center">
                  <FaPhone className="text-blue-600 text-sm md:text-base" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Phone</h4>
                  <a href="tel:6473550079" 
                     className="text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base">
                    (647) 355-0079
                  </a>
                  <p className="text-xs md:text-sm text-gray-500">Sukhnoor Singh Sohi</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg 
                              flex items-center justify-center">
                  <FaEnvelope className="text-blue-600 text-sm md:text-base" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Email</h4>
                  <a href="mailto:info@diamondtints.ca" 
                     className="text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base break-all">
                    info@diamondtints.ca
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg 
                              flex items-center justify-center">
                  <FaMapMarkerAlt className="text-blue-600 text-sm md:text-base" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Location</h4>
                  <p className="text-gray-600 text-sm md:text-base">Kingston, Ontario</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg 
                              flex items-center justify-center">
                  <FaClock className="text-blue-600 text-sm md:text-base" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Business Hours</h4>
                  <div className="text-gray-600 text-xs md:text-sm space-y-1">
                    <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p>Sat: 9:00 AM - 4:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Link - Mobile optimized */}
            <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm md:text-base">Follow Our Work</h4>
              <a 
                href="https://www.instagram.com/diamonddetailsandtints" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 
                         font-medium text-sm md:text-base"
              >
                <FaInstagram className="text-lg md:text-xl" />
                <span className="break-all">@diamonddetailsandtints</span>
              </a>
            </div>
          </div>

          {/* Contact Form - Mobile optimized */}
          <div className="order-1 lg:order-2">
            <div className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Request Free Quote
              </h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    {...register('name', { required: 'Name is required' })}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg 
                             text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                             transition-all"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    type="email"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg 
                             text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                             transition-all"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    {...register('phone', { required: 'Phone is required' })}
                    type="tel"
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg 
                             text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                             transition-all"
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                {/* Vehicle */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle (Year, Make, Model)
                  </label>
                  <input
                    {...register('vehicle')}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg 
                             text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                             transition-all"
                    placeholder="2024 Honda Civic"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg 
                             text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                             transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="full-tint">Full Vehicle Tint</option>
                    <option value="front-windows">Front Windows Only</option>
                    <option value="rear-windows">Rear Windows Only</option>
                    <option value="windshield">Windshield Strip</option>
                    <option value="removal">Tint Removal</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg 
                             text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                             transition-all resize-none"
                    placeholder="Tell us more about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 md:py-4 bg-blue-600 text-white font-semibold 
                           text-base md:text-lg rounded-lg hover:bg-blue-700 
                           disabled:opacity-50 disabled:cursor-not-allowed 
                           transition-colors duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 text-green-800 rounded-lg text-sm md:text-base">
                    Thank you! We&apos;ll contact you within 1 hour.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 text-red-800 rounded-lg text-sm md:text-base">
                    Something went wrong. Please call us at (647) 355-0079.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}