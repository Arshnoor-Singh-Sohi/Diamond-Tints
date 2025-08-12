'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaInstagram, FaWhatsapp } from 'react-icons/fa'

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

  // Format the form data into a readable WhatsApp message
  const formatWhatsAppMessage = (data: FormData): string => {
    let message = "*New Service Request - Diamond Tints*\n"
    message += "=============================\n\n"
    
    message += `*Full Name:* ${data.name}\n`
    message += `*Email:* ${data.email}\n`
    message += `*Phone:* ${data.phone}\n`
    
    if (data.vehicle.trim()) {
      message += `*Vehicle:* ${data.vehicle}\n`
    }
    
    message += `*Service Requested:* ${data.service}\n`
    
    if (data.message.trim()) {
      message += `*Additional Details:*\n${data.message}\n`
    }
    
    message += `\n*Date Submitted:* ${new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })} at ${new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })}\n`
    
    message += "\n✅ Please reply with availability for quote/consultation"
    
    return message
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Format the message for WhatsApp
      const whatsappMessage = formatWhatsAppMessage(data)
      
      // WhatsApp number (from your constants)
      const whatsappNumber = '16473550079'
      
      // Create WhatsApp URL with formatted message
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
      
      // Small delay to show loading state
      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Open WhatsApp in a new window/tab for better UX
      const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      
      if (whatsappWindow) {
        setSubmitStatus('success')
        reset() // Clear the form
      } else {
        // Fallback if popup was blocked
        window.location.href = whatsappUrl
      }
      
    } catch (error) {
      console.error('Error sending WhatsApp message:', error)
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
            Ready to transform your vehicle? Contact us for professional window tinting!
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
                Request Service Quote
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
                    Service Needed *
                  </label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg 
                             text-sm md:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                             transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="Full Vehicle Tint">Full Vehicle Tint</option>
                    <option value="Front Windows Only">Front Windows Only</option>
                    <option value="Rear Windows Only">Rear Windows Only</option>
                    <option value="Windshield Strip">Windshield Strip</option>
                    <option value="Ceramic Tint Upgrade">Ceramic Tint Upgrade</option>
                    <option value="Security Film">Security Film</option>
                    <option value="Tint Removal">Tint Removal</option>
                    <option value="Consultation">Free Consultation</option>
                    <option value="Other">Other (Please specify in message)</option>
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
                    placeholder="Tell us about your tinting preferences, timeline, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 md:py-4 bg-blue-600 text-white font-semibold 
                           text-base md:text-lg rounded-lg hover:bg-blue-700 
                           disabled:opacity-50 disabled:cursor-not-allowed 
                           transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Preparing Message...</span>
                    </>
                  ) : (
                    <>
                      <FaWhatsapp className="text-lg" />
                      <span>Send via WhatsApp</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg text-sm md:text-base">
                    <div className="flex items-center gap-2 mb-2">
                      <FaWhatsapp className="text-green-600" />
                      <strong>Message Prepared Successfully!</strong>
                    </div>
                    <p>
                      WhatsApp should have opened with your service request. If it didn&apos;t open automatically, 
                      please check your popup blocker or call us directly at (647) 355-0079.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm md:text-base">
                    <strong>Unable to open WhatsApp.</strong> Please call us directly at (647) 355-0079 
                    or try again with a different browser.
                  </div>
                )}
              </form>

              {/* Info Box */}
              {/* <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start gap-3">
                  <FaWhatsapp className="text-blue-600 text-xl mt-0.5 flex-shrink-0" />
                  <div className="text-sm md:text-base text-blue-800">
                    <p className="font-semibold mb-1">How it works:</p>
                    <p>
                      When you click "Send via WhatsApp", we&apos;ll format your information and open 
                      WhatsApp with a pre-written message. You can review and send it directly to us 
                      for the fastest response!
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}